"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Boxes, CalendarDays, ClipboardList, FileText, FolderKanban, Network, Building2 } from "lucide-react";

const icons = [ClipboardList, CalendarDays, FolderKanban, Boxes, FileText, Network, Building2];
const labels = ["Task Board", "Calendar", "Projects", "Memory", "Docs", "Team", "Office"];
const hrefs = ["/tasks", "/calendar", "/projects", "/memory", "/docs", "/team", "/office"];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-60 flex-col border-r border-line bg-black/20 p-3">
      <h1 className="mb-4 px-2 text-sm font-semibold tracking-wide text-zinc-200">Mission Control</h1>
      <nav className="space-y-1">
        {labels.map((label, idx) => {
          const Icon = icons[idx];
          const href = hrefs[idx];
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2 rounded-md px-2 py-2 text-sm ${
                active ? "bg-panel text-white" : "text-muted hover:bg-panel/70 hover:text-zinc-100"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
