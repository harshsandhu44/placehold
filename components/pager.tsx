"use strict"

import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { docsConfig, NavItem, SidebarNavItem } from "@/lib/config"
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
  
  const activeIndex = flattenedLinks.findIndex(
    (link) => link && (link.href === slug || link.href === `/${slug}` || link.href === `/docs/${slug}`)
  )
  
  const prev = activeIndex !== -1 ? flattenedLinks[activeIndex - 1] : null
  const next = activeIndex !== -1 ? flattenedLinks[activeIndex + 1] : null
  return {
    prev,
    next,
  }
}

export function flatten(links: SidebarNavItem[]): NavItem[] {
  return links
    .reduce<NavItem[]>((flat, link) => {
      return flat.concat(link.items ? flatten(link.items as SidebarNavItem[]) : (link as NavItem))
    }, [])
    .filter((link) => !link?.disabled)
}
