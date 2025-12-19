import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Placehold - Documentation",
  description: "A simple, fast, and reliable placeholder image and text generator.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="dark">
      <body className={GeistSans.variable}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
