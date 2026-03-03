import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <article key={project.name} className="card p-4">
          <h2 className="text-sm font-semibold">{project.name}</h2>
          <div className="mt-3 h-2 w-full rounded bg-black/40">
            <div className="h-2 rounded bg-emerald-500" style={{ width: `${project.progress}%` }} />
          </div>
          <p className="mt-2 text-xs text-muted">Progress: {project.progress}%</p>
          <div className="mt-3 flex justify-between text-xs text-muted">
            <span>Linked tasks: {project.tasks}</span>
            <span>Recent docs: {project.docs}</span>
          </div>
        </article>
      ))}
    </section>
  );
}
