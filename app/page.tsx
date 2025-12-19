"use strict"

import Link from "next/link"
import { ArrowRight, Code, Image as ImageIcon, Text as TextIcon, Zap } from "lucide-react"

import { siteConfig } from "@/lib/config"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow updates on Twitter
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            {siteConfig.name}: Fast, Reliable Placeholders.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Generate custom placeholder images and text for your next project in seconds. Built for developers by developers.
          </p>
          <div className="space-x-4">
            <Link href="/docs" className={cn(buttonVariants({ size: "lg" }))}>
              Get Started
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
      
      <section id="features" className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Everything you need to mock your content quickly.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <ImageIcon className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Images</h3>
                <p className="text-sm text-muted-foreground">
                  Custom sizes, colors, and formats.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <TextIcon className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Text</h3>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum generator with multiple formats.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Zap className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Speed</h3>
                <p className="text-sm text-muted-foreground">
                  Running on the edge for ultra-fast response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Open Source
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {siteConfig.name} is open source and powered by open source software. <br />
            The source code is available on GitHub.
          </p>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-sm font-medium underline underline-offset-4"
          >
            View on GitHub <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}