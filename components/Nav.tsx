"use client";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/data";

export default function Nav() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const show = () => setOn(true), hide = () => setOn(false);
    const scroll = () => { if (window.scrollY > 60) setOn(true); };
    window.addEventListener("intro-done", show); window.addEventListener("intro-reset", hide); window.addEventListener("scroll", scroll, { passive: true });
    scroll();
    return () => { window.removeEventListener("intro-done", show); window.removeEventListener("intro-reset", hide); window.removeEventListener("scroll", scroll); };
  }, []);
  return (
    <nav className={on ? "on" : ""} aria-label="Primary">
      <div>{NAV.map(([l, h]) => <a key={h} href={h}>{l}</a>)}</div>
    </nav>
  );
}
