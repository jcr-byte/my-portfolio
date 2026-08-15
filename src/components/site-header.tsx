import { externalLinkProps } from "@/lib/links";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="pt-11 pb-7 md:pt-16 md:pb-10">
      <p className="mb-9 inline-flex items-center gap-2 rounded-full border border-edge px-3.5 py-1.5 text-xs tracking-[0.06em] text-muted uppercase">
        <span className="size-1.5 rounded-full bg-accent animate-pulse-ring motion-reduce:animate-none" />
        {site.status}
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-15">
        <div>
          <h1 className="mb-1 text-[26px] font-bold tracking-[-0.01em]">
            {site.name}
            <span className="ml-1 inline-block h-[22px] w-[11px] translate-y-1 bg-accent animate-blink motion-reduce:animate-none" />
          </h1>
          <p className="max-w-[46ch] text-muted">
            <span className="text-text">{site.role}</span> {site.blurb}
          </p>
        </div>

        <div>
          <p className="max-w-[46ch] text-muted">
            {site.school.standing} studying {site.school.major} at{" "}
            <a
              href={site.school.href}
              className="border-b border-dotted border-accent text-accent hover:border-solid"
              {...externalLinkProps(site.school.href)}
            >
              {site.school.name}
            </a>
            .
            <br />
            <br />
            Based in {site.city} · Looking for internships and new-grad roles.
          </p>
        </div>
      </div>

      <hr className="mt-10 border-t border-edge" />
    </header>
  );
}
