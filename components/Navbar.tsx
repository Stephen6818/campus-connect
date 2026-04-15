import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#968b8b" }}>
      <Link href="/">Home</Link> |{" "}
      <Link href="/events">Events</Link>
    </nav>
  );
}