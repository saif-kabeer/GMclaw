export function TopBar() {
  return (
    <header className="mb-4 flex h-12 items-center justify-between rounded-lg border border-line bg-black/30 px-4">
      <div className="text-xs text-muted">Linear-inspired mission dashboard</div>
      <div className="rounded-md border border-line bg-panel px-2 py-1 text-xs text-muted">Search ⌘K</div>
    </header>
  );
}
