"use strict"

import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { docsConfig } from "@/lib/config"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface DocsPagerProps {
  slug: string
}

export function DocsPager({ slug }: DocsPagerProps) {
  const pager = getPagerForDoc(slug)

  if (!pager) {
    return null
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev && (
        <Link
          href={pager.prev.href}
          className={cn(buttonVariants({ variant: "outline" }), "mr-auto")}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next && (
        <Link
          href={pager.next.href}
          className={cn(buttonVariants({ variant: "outline" }), "ml-auto")}
        >
          {pager.next.title}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      )}
    </div>
  )
}

export function getPagerForDoc(slug: string) {
  const flattenedLinks = [null, ...flatten(docsConfig.sidebarNav), null]
  // Adjust slug matching logic as needed, assuming slug might be full path or segment
  // For now, let's assume slug is the relative path from /docs/
  // But wait, the hrefs in config are absolute paths like /docs/api/images
  // So we should match against the full href.
  
  // If slug comes in as "docs/api/images", we might need to match "/docs/api/images"
  const activeIndex = flattenedLinks.findIndex(
    (link) => link && link.href === slug || link?.href === `/${slug}` || link?.href === `/docs/${slug}`
  )
  
  // If exact match fails, try strictly matching href
  const strictIndex = flattenedLinks.findIndex((link) => link && link.href === slug)
  
  const index = strictIndex !== -1 ? strictIndex : activeIndex

  const prev = activeIndex !== -1 ? flattenedLinks[activeIndex - 1] : null
  const next = activeIndex !== -1 ? flattenedLinks[activeIndex + 1] : null
  return {
    prev,
    next,
  }
}

export function flatten(links: any[]) {
  return links
    .reduce((flat, link) => {
      return flat.concat(link.items ? flatten(link.items) : link)
    }, [])
    .filter((link) => !link?.disabled)
}
