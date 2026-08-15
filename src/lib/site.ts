/**
 * Single source of truth for the personal details that appear across the page.
 * Swap these values and the header, footer and metadata all follow.
 */
export const site = {
  name: "Joshua Rodli",
  /** Used in the browser tab and search results. */
  tagline: "CS Student & Web Developer",
  /** Highlighted lead-in of the header sentence. */
  role: "Computer Science student",
  /** Continues straight on from `role`. */
  blurb:
    "building full-stack web applications, CLI tools, and backend services.",
  summary:
    "Junior Computer Science student at Oregon State University building full-stack web applications, CLI tools, and backend services.",
  status: "Open to internships",
  school: {
    name: "Oregon State University",
    href: "https://oregonstate.edu",
    standing: "Junior",
    major: "Computer Science",
  },
  city: "Salem, Oregon",
  email: "jcr-byte@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/jcr-byte" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/joshua-rodli/",
    },
    { label: "Resume ↓", href: "#" },
  ],
} as const;
