"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ padding: "20px" }}>
      <h1>Welcome to Campus Connect</h1>

      <p>Click counter (state example): {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </main>
  );
}