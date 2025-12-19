"use strict"

import Link from "next/link"

import { siteConfig } from "@/lib/config"
import { cn } from "@/lib/utils"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { buttonVariants } from "@/components/ui/button"
import { docsConfig } from "@/lib/config"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <MainNav items={docsConfig.mainNav} />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative w-full text-muted-foreground md:w-64 lg:w-80">
                <span className="text-sm px-2 hidden lg:inline-block">Search documentation...</span>
            </div>
          </div>
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <span className="sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github h-4 w-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 1.5-3 1.5-3-1.5-3.7-1.5-3.7-1.5-.75-.68-1.6-1.04-2.5-1.04-1.03 0-2.02.4-2.7 1.15l.1-.06c-1.2-1.2-2.8-1.7-4-1.15 0 0-.5 1.5-3 1.5-1.72 1.7-2.42 2.9-1.5 3.5-.28 1.15-.28 2.35 0 3.5-.72 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.46-.58 1.09-.5 1.75V22"/></svg>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}