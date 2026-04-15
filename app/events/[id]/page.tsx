export default function EventDetails({ params }: { params: { id: string } }) {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Event Details</h1>
      <p>Event ID: {params.id}</p>
    </main>
  );
}