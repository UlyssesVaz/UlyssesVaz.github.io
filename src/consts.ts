import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Ulysses Vazquez-Perez",
  DESCRIPTION: "Builder at the intersection of business, technology, and community. BA Accounting & Information Systems, University of Washington. Entrepreneurially inclined.",
  AUTHOR: "Ulysses Vazquez-Perez",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Experience across consulting, startups, and community.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Writing",
  DESCRIPTION: "Thoughts on business, technology, AI, and community.",
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Things I have built — from AI tools to App Store apps.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
  {
    TEXT: "Writing",
    HREF: "/blog",
  },
  {
    TEXT: "Connect",
    HREF: "/connect",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "ulyssesvaz.com",
    HREF: "mailto:ulyssesvazquez@outlook.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "ulyssesvaz",
    HREF: "https://github.com/ulyssesvaz"
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "ulysses-vazquez",
    HREF: "https://www.linkedin.com/in/ulysses-vazquez/",
  },
  {
    NAME: "Instagram",
    ICON: "instagram",
    TEXT: "ulysses.curate",
    HREF: "https://www.instagram.com/ulysses.curate/",
  },
]

