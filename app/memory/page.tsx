const entries = [
  "Tue — AI discussed prospecting sequence optimization",
  "Mon — AI summarized market sentiment changes",
  "Sun — AI proposed revised onboarding script",
];

export default function MemoryPage() {
  return (
    <section className="grid gap-4 lg:grid-cols-2">
      <div className="card p-3">
        <h2 className="mb-2 text-sm font-semibold">Conversation Timeline</h2>
        <ul className="space-y-2 text-sm text-muted">
          {entries.map((entry) => (
            <li key={entry} className="rounded-md border border-line bg-black/20 p-2">
              {entry}
            </li>
          ))}
        </ul>
      </div>
      <div className="card p-3">
        <h2 className="mb-2 text-sm font-semibold">Long-Term Memory</h2>
        <textarea
          defaultValue={`- Brand voice: concise + confident\n- Priority: launch Prosper Academy in Q2\n- Rule: always attach source docs to strategic recommendations`}
          className="h-[380px] w-full rounded-md border border-line bg-black/30 p-3 text-sm text-zinc-200 outline-none"
        />
      </div>
    </section>
  );
}
