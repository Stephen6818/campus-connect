"use client";

import Link from "next/link";

export default function EventCard({ event }: any) {
  return (
    <div style={{ border: "1px solid #e8d3d3", padding: "10px", margin: "10px 0" }}>
      <h3>{event.title}</h3>
      <p>{event.date}</p>

      <Link href={`/events/${event.id}`}>View Details</Link>
    </div>
  );
}