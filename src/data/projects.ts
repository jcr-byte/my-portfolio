export type Project = {
  title: string;
  /** One line on the problem the project solves. */
  tagline: string;
  /** Optional short paragraph expanding on the tagline. */
  description?: string;
  date: string;
  /** Omitted for projects with nothing to deploy, e.g. CLI tools. */
  liveHref?: string;
  sourceHref?: string;
  tags: string[];
  /** Wordmark shown in the media panel, in place of the placeholder text. */
  logo?: { src: string; width: number; height: number; alt: string };
  /** Tailwind gradient utilities for the media panel backdrop. */
  gradient: string;
};

export const projects: Project[] = [
  {
    title: "RUDP Lab",
    tagline: "A TCP-like reliable transport protocol built from scratch on UDP",
    description:
      "A sender and receiver built around a custom packet format — sequence numbers, checksums, ACKs, a FIN flag, and timeout-based retransmission — starting at stop-and-wait and working toward a sliding window. A simulation layer injects loss, corruption, delay, and reordering so the reliability machinery can be measured under real failure conditions.",
    date: "2026 · In progress",
    sourceHref: "https://github.com/jcr-byte/rudp-lab",
    tags: ["Go", "UDP", "Network Protocols"],
    logo: {
      src: "/rudp-lab-logo.png",
      width: 2172,
      height: 724,
      alt: "rudp-lab",
    },
    gradient: "bg-linear-135 from-[#12181c] to-bg to-60%",
  },
  {
    title: "PROJECT TWO",
    tagline: "One line describing the real problem it solves",
    date: "Month 2025",
    liveHref: "#",
    sourceHref: "#",
    tags: ["TypeScript", "Next.js", "Redis"],
    gradient: "bg-linear-135 from-[#141810] to-bg to-60%",
  },
  {
    title: "PROJECT THREE",
    tagline: "One line describing the real problem it solves",
    date: "Month 2025",
    liveHref: "#",
    sourceHref: "#",
    tags: ["Vue", "Express", "WebSockets"],
    gradient: "bg-linear-135 from-[#171512] to-bg to-60%",
  },
];
