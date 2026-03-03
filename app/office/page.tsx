const desks = [
  { name: "Scout", icon: "🟢", active: true },
  { name: "Quill", icon: "🟣", active: false },
  { name: "Pixel", icon: "🟠", active: false },
  { name: "Echo", icon: "🔵", active: true },
  { name: "Codex", icon: "🟡", active: false },
];

export default function OfficePage() {
  return (
    <section className="card p-4">
      <h2 className="mb-4 text-sm font-semibold">Office Visualizer</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
        {desks.map((desk) => (
          <div key={desk.name} className="rounded-md border border-line bg-black/30 p-3 text-center">
            <div className="text-3xl">{desk.icon}</div>
            <p className="mt-2 text-sm">{desk.name}</p>
            <div className="mt-2 flex items-center justify-center gap-2 text-xs text-muted">
              <span className={`h-2 w-2 rounded-full ${desk.active ? "animate-pulseSoft bg-emerald-400" : "bg-zinc-600"}`} />
              {desk.active ? "Processing task" : "Idle"}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
