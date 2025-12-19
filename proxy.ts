import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const redis = Redis.fromEnv(); // reads env vars created by the Vercel<->Upstash integration [web:198]

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(20, "10 s"),
});

export const config = {
  matcher: ["/api/:path*"],
};

export default async function proxy(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  const { success, limit, remaining, reset } = await ratelimit.limit(ip);

  if (!success) {
    return new NextResponse("Too Many Requests", {
      status: 429,
      headers: {
        "X-RateLimit-Limit": String(limit),
        "X-RateLimit-Remaining": String(remaining),
        "X-RateLimit-Reset": String(reset),
      },
    });
  }

  return NextResponse.next();
}
