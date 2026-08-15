/**
 * Anchor props for a link that may point off-site. Absolute URLs open in a new
 * tab; `mailto:`, in-page anchors and `#` placeholders are left alone.
 */
export function externalLinkProps(href: string) {
  if (!href.startsWith("http")) return {};
  return { target: "_blank", rel: "noopener noreferrer" } as const;
}
