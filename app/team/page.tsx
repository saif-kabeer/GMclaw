const agents = [
  { name: "Main AI Agent", role: "Chief Coordinator", device: "Cloud LLM Cluster" },
  { name: "Motion Graphics Render Assistant", role: "Render automation", device: "Mac Studio M2 Ultra" },
  { name: "Content Script Researcher", role: "Research & outlining", device: "GPT-4.1 API" },
  { name: "Financial Data Scraper", role: "Market ingestion", device: "Python Worker Node" },
];

export default function TeamPage() {
  return (
    <section className="space-y-3">
      <p className="card p-3 text-sm font-bold">
        Mission: Build an autonomous digital ecosystem to scale creative operations, educational ventures, and financial growth.
      </p>
      <div className="grid gap-3 md:grid-cols-2">
        {agents.map((agent) => (
          <article key={agent.name} className="card p-3">
            <h2 className="text-sm font-semibold">{agent.name}</h2>
            <p className="text-sm text-muted">{agent.role}</p>
            <p className="mt-2 text-xs text-zinc-400">Runs on: {agent.device}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
