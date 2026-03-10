import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Ulysses Vazquez-Perez",
  DESCRIPTION: "Ulysses Vazquez-Perez — Seattle. Accounting & Information Systems, UW Foster. Deloitte. Building AI tools and working at the intersection of business operations and technology.",
  AUTHOR: "Ulysses Vazquez-Perez",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work & Experience | Ulysses Vazquez-Perez",
  DESCRIPTION: "Professional experience in consulting, business operations, and technology.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Writing | Ulysses Vazquez-Perez",
  DESCRIPTION: "Thoughts on business, technology, AI, and building a high-agency career.",
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects | Ulysses Vazquez-Perez",
  DESCRIPTION: "Things I have built: from AI tools to App Store apps.",
}

// Community Page
export const COMMUNITY: Page = {
  TITLE: "Seattle Community Guide | Ulysses Vazquez-Perez",
  DESCRIPTION: "A guide to Seattle communities worth showing up to: SURF Incubator, AI House, Red Team Association, Out and About Walks, and more.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search | Ulysses Vazquez-Perez",
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
    TEXT: "Community",
    HREF: "/community",
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
