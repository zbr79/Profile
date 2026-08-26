"use client";

import { useEffect, useState } from "react";

type Health = {
  status: string;
  service: string;
  time: string;
};

export default function Home() {
  const [health, setHealth] = useState<Health | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/health")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(setHealth)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <main>
      <h1>Profile</h1>
      <p>Frontend served by Next.js behind nginx</p>
      {health && (
        <div className="status ok">
          {health.service} — {health.status} ({new Date(health.time).toLocaleTimeString()})
        </div>
      )}
      {error && <div className="status err">Backend unreachable: {error}</div>}
    </main>
  );
}
