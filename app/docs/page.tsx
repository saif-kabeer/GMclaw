const docs = [
  { title: "Weekly Newsletter Draft", tag: "Newsletters", date: "2026-03-01", excerpt: "Subject lines and CTAs for the week." },
  { title: "Motion Pipeline SOP", tag: "Architecture Docs", date: "2026-02-27", excerpt: "Render and QC flow for studio assets." },
  { title: "Finance Script Batch 04", tag: "Scripts", date: "2026-02-24", excerpt: "Three long-form script outlines." },
];

const filters = ["Newsletters", "Scripts", "Architecture Docs"];

export default function DocsPage() {
  return (
    <section className="card p-3">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <input className="rounded-md border border-line bg-black/20 px-3 py-1.5 text-sm" placeholder="Search documents..." />
        {filters.map((filter) => (
          <button key={filter} className="badge">
            {filter}
          </button>
        ))}
      </div>
      <table className="w-full text-left text-sm">
        <thead className="text-xs uppercase tracking-wide text-muted">
          <tr>
            <th className="py-2">Document Title</th>
            <th>Category</th>
            <th>Date Created</th>
            <th>Excerpt</th>
          </tr>
        </thead>
        <tbody>
          {docs.map((doc) => (
            <tr key={doc.title} className="border-t border-line text-zinc-200">
              <td className="py-3">{doc.title}</td>
              <td>{doc.tag}</td>
              <td>{doc.date}</td>
              <td className="text-muted">{doc.excerpt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
