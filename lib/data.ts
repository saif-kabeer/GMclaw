export const navItems = [
  { href: "/tasks", label: "Task Board" },
  { href: "/calendar", label: "Calendar" },
  { href: "/projects", label: "Projects" },
  { href: "/memory", label: "Memory" },
  { href: "/docs", label: "Docs" },
  { href: "/team", label: "Team" },
  { href: "/office", label: "Office" },
];

export const kanban = {
  columns: {
    Backlog: [
      { title: "Draft Q2 launch plan", assignee: "Me", tag: "Planning" },
      { title: "Source references for AI onboarding", assignee: "AI Agent", tag: "Research" },
    ],
    "In Progress": [
      { title: "Build newsletter automation flow", assignee: "AI Agent", tag: "Automation" },
      { title: "Design dashboard KPI widgets", assignee: "Me", tag: "UI" },
    ],
    "In Review": [
      { title: "Prosper Academy funnel copy", assignee: "AI Agent", tag: "Copy" },
    ],
    Done: [{ title: "Create mission control IA map", assignee: "Me", tag: "Architecture" }],
  },
  activity: [
    "Agent compiled research document",
    "Agent moved task to Review",
    "Agent generated schema migration notes",
    "Me approved calendar cron policy",
  ],
};

export const calendarEvents = [
  { day: "Mon", time: "12:00 AM", name: "Nightly Server Backup" },
  { day: "Tue", time: "08:00 AM", name: "Daily Market Data Scraping" },
  { day: "Wed", time: "09:30 AM", name: "Weekly Newsletter Draft Generation" },
  { day: "Thu", time: "07:00 PM", name: "SEO Report Summarization" },
  { day: "Fri", time: "10:00 AM", name: "Product Metrics Sync" },
];

export const projects = [
  { name: "GM Studios Motion Graphics Pipeline", progress: 74, tasks: 18, docs: 6 },
  { name: "Prosper Academy Launch Prep", progress: 48, tasks: 11, docs: 9 },
  { name: "YouTube Finance Channel Setup", progress: 62, tasks: 15, docs: 7 },
];
