import EventCard from "../../components/EventCard";

const events = [
  { id: 1, title: "Hackathon", date: "April 20" },
  { id: 2, title: "Workshop", date: "April 25" },
];

export default function Events() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Events</h1>

      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </main>
  );
}