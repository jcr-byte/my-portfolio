"use client";

import Image from "next/image";
import type { Project } from "@/data/projects";
import { externalLinkProps } from "@/lib/links";
import { useReveal } from "@/lib/use-reveal";

export function ProjectCard({ project }: { project: Project }) {
  const { ref, revealed } = useReveal<HTMLElement>();
  const titleHref = project.liveHref ?? project.sourceHref;

  return (
    <article
      ref={ref}
      className={`group grid grid-cols-1 gap-6 border-b border-edge py-10 transition-[opacity,transform] duration-500 ease-out last:border-b-0 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none md:grid-cols-2 md:gap-14 md:py-14 ${
        revealed ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div
        className={`relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-md border border-edge-hover p-8 transition-colors duration-250 group-hover:border-accent ${
          // dashed reads as "nothing here yet" — right for an empty panel,
          // wrong once the panel holds real artwork
          project.logo ? "border-solid" : "border-dashed"
        } ${project.gradient}`}
      >
        {project.logo ? (
          <Image
            src={project.logo.src}
            alt={project.logo.alt}
            width={project.logo.width}
            height={project.logo.height}
            // `screen` drops the logo's black backing so it sits on the
            // gradient instead of showing as a solid rectangle.
            className="h-auto w-full max-w-[80%] object-contain mix-blend-screen"
            priority
          />
        ) : (
          <p className="p-5 text-center text-xs tracking-[0.06em] text-dim uppercase">
            [ live demo screenshot
            <br />
            or embed here ]
          </p>
        )}
      </div>

      <div>
        <h3 className="mb-2.5 text-[19px] font-bold tracking-[-0.005em]">
          {titleHref ? (
            <a
              href={titleHref}
              className="inline-block underline decoration-edge-hover underline-offset-[5px] transition-colors duration-200 hover:decoration-accent"
              {...externalLinkProps(titleHref)}
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>

        <p className="mb-2.5 text-sm text-muted">{project.tagline}</p>

        {project.description && (
          <p className="mb-4 max-w-[60ch] text-sm text-muted">
            {project.description}
          </p>
        )}

        <p className="mb-5 text-[11px] tracking-[0.08em] text-dim uppercase">
          {project.date}
        </p>

        <div className="mb-[22px] flex gap-4 text-[13px]">
          {project.liveHref && (
            <a
              href={project.liveHref}
              className="border-b border-dotted border-muted pb-px hover:border-accent hover:text-accent"
              {...externalLinkProps(project.liveHref)}
            >
              Live site ↗
            </a>
          )}
          {project.sourceHref && (
            <a
              href={project.sourceHref}
              className="border-b border-dotted border-muted pb-px hover:border-accent hover:text-accent"
              {...externalLinkProps(project.sourceHref)}
            >
              Source ↗
            </a>
          )}
        </div>

        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-dotted border-edge-hover px-3 py-[5px] text-[11px] tracking-[0.04em] text-muted uppercase"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
