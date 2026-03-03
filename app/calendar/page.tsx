import { calendarEvents } from "@/lib/data";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function CalendarPage() {
  return (
    <section className="card p-3">
      <h2 className="mb-3 text-sm font-semibold">Automated Schedule (Weekly)</h2>
      <div className="grid grid-cols-7 gap-2 text-xs">
        {days.map((day) => (
          <div key={day} className="rounded-md border border-line bg-black/20 p-2">
            <div className="mb-2 font-semibold text-zinc-300">{day}</div>
            <div className="space-y-1">
              {calendarEvents
                .filter((event) => event.day === day)
                .map((event) => (
                  <div key={event.name} className="rounded border border-line bg-panel p-1 text-muted">
                    <p className="text-zinc-100">{event.name}</p>
                    <p>{event.time}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
