export const siteConfig = {
  name: "Placehold",
  url: "https://placehold.harshsandhu.com",
  description: "A simple, fast, and reliable placeholder image and text generator.",
  links: {
    twitter: "https://twitter.com/harshsandhu",
    github: "https://github.com/harshsandhu/placehold",
  },
}

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: string
  label?: string
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavItem[]
    }
)

export type DocsConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Guides",
      href: "/docs/guides",
    },
    {
      title: "API",
      href: "/docs/api",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
        {
          title: "Installation",
          href: "/docs/installation",
        },
        {
          title: "About",
          href: "/about",
        },
      ],
    },
    {
      title: "API Reference",
      items: [
        {
          title: "Introduction",
          href: "/docs/api",
        },
        {
          title: "Images",
          href: "/docs/api/images",
        },
        {
          title: "Text",
          href: "/docs/api/text",
        },
      ],
    },
    {
      title: "Guides",
      items: [
        {
          title: "Usage with React",
          href: "/docs/guides/react",
        },
        {
          title: "Usage with HTML",
          href: "/docs/guides/html",
        },
      ],
    },
    {
      title: "Tutorials",
      items: [
        {
          title: "Build a Blog Prototype",
          href: "/docs/tutorials/blog-prototype",
        },
      ],
    },
    {
      title: "Changelog",
      href: "/docs/changelog",
    },
  ],
}
