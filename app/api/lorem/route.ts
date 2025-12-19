import { NextRequest } from "next/server";
import { loremIpsum } from "lorem-ipsum";

export const runtime = "edge";

function clampInt(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  // units=words|sentences|paragraphs
  const units = (searchParams.get("units") ?? "sentences") as
    | "words"
    | "sentences"
    | "paragraphs";

  const count = clampInt(Number(searchParams.get("count") ?? "1"), 1, 2000);
  const format = (searchParams.get("format") ?? "plain") as "plain" | "html";

  const text = loremIpsum({
    count,
    units,
    format,
    // You can expose these as query params too if you want.
    paragraphLowerBound: 3,
    paragraphUpperBound: 7,
    sentenceLowerBound: 5,
    sentenceUpperBound: 15,
  });

  return new Response(text, {
    headers: {
      "Content-Type":
        format === "html"
          ? "text/html; charset=utf-8"
          : "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=60",
    },
  });
}
