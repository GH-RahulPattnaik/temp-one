import { events } from "@/lib/data";

export default function Events() {
  return (
    <section className="container-x mt-20">
      <h2 className="section-heading mb-8">Upcoming Events</h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="rounded-2xl border border-neutral-200 bg-white p-6 text-center"
          >
            <h3 className="font-display text-xl text-neutral-900">{event.title}</h3>
            <p className="mt-2 text-sm text-neutral-500">
              {event.location}, {event.schedule}
            </p>
            <button type="button" className="btn-outline mt-4">
              Register
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
