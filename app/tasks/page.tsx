import { kanban } from "@/lib/data";

export default function TasksPage() {
  return (
    <section className="grid gap-4 lg:grid-cols-[1fr_280px]">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {Object.entries(kanban.columns).map(([column, tasks]) => (
          <div key={column} className="card p-3">
            <h2 className="mb-3 text-sm font-semibold">{column}</h2>
            <div className="space-y-2">
              {tasks.map((task) => (
                <div key={task.title} className="rounded-md border border-line bg-black/20 p-2">
                  <p className="text-sm text-zinc-100">{task.title}</p>
                  <div className="mt-2 flex items-center justify-between text-xs text-muted">
                    <span>{task.assignee === "Me" ? "🧑 Me" : "🤖 AI Agent"}</span>
                    <span className="badge">{task.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <aside className="card p-3">
        <h2 className="mb-3 text-sm font-semibold">Live Activity Feed</h2>
        <ul className="space-y-2 text-sm text-muted">
          {kanban.activity.map((event) => (
            <li key={event} className="rounded-md border border-line bg-black/20 p-2">
              {event}
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
