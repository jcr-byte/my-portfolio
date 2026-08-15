import { ProjectCard } from "@/components/project-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1120px] px-[22px] md:px-10">
      <SiteHeader />

      <main id="projects" className="pt-5 pb-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </main>

      <SiteFooter />
    </div>
  );
}
