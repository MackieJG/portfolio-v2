import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Astro Sphere",
  DESCRIPTION: "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
  AUTHOR: "Mark Horn",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
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
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "joshuamackie10@googlemail.com",
    HREF: "mailto:joshuamackie10@googlemail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "mackiejg",
    HREF: "https://github.com/mackiejg"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "mackiejg",
    HREF: "https://www.linkedin.com/in/mackiejg/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "mackieDev30",
    HREF: "https://twitter.com/mackieDev30",
  },
]

