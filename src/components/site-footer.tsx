import { externalLinkProps } from "@/lib/links";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-5 border-t border-edge pt-15 pb-10">
      <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-2">
        <p className="text-xl font-bold">
          See something
          <br />
          you like? →
        </p>
        <a
          href={`mailto:${site.email}`}
          className="justify-self-start border-b border-dotted border-accent text-xl text-accent md:justify-self-end"
        >
          {site.email}
        </a>
      </div>

      <nav className="mt-[18px] flex gap-5 text-[13px] text-muted">
        {site.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="hover:text-accent"
            {...externalLinkProps(link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="mt-10 flex flex-wrap justify-between gap-2 border-t border-edge pt-5 text-[11px] tracking-[0.04em] text-dim uppercase">
        <span>Set in JetBrains Mono</span>
        <span>© {site.name} 2026</span>
      </div>
    </footer>
  );
}
