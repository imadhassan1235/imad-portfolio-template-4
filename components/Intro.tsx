"use client";
import { useEffect, useRef, type CSSProperties } from "react";

const CARDS = [
  { tag: "Ongoing development", title: "School ERP", text: "Multi-school management platform with role-based access.", stack: "Next.js · NestJS · PostgreSQL · Prisma" },
  { tag: "Live", title: "Taskora", text: "Business workspace with an AI-powered direction.", stack: "Next.js · TypeScript · Vercel" },
  { tag: "Concept", title: "Timber ERP", text: "Costs, inventory, sales and profit for a timber business.", stack: "Business management software" },
];
const ROLE = ["Modern web apps", "AI & Data Science", "AI agents & automation", "ERP & SaaS software"];
const SEARCH_TEXT = "Showcasing my work...";

export default function Intro() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const st = root.current!;
    const q = <E extends Element>(s: string) => st.querySelector<E>(s)!;
    const se = q<HTMLElement>("#search"), typed = q<HTMLElement>("#typed"), cur = q<SVGSVGElement>("#cur");
    const fin = q<HTMLElement>("#final"), big = q<HTMLElement>("#big"), mag = q<SVGSVGElement>("#mag"), iris = q<HTMLElement>(".iris");
    const cards = Array.from(st.querySelectorAll<HTMLElement>(".c"));
    let T: number[] = [];
    const at = (f: () => void, ms: number) => { T.push(window.setTimeout(f, ms)); };
    const fire = (n: string) => window.dispatchEvent(new Event(n));

    const fit = () => {
      big.style.fontSize = "100px";
      const f = (100 * st.clientWidth * 0.96) / big.scrollWidth;
      big.style.fontSize = Math.min(f, st.clientHeight * 0.48) + "px";
    };
    const reset = () => {
      T.forEach(clearTimeout); T = [];
      st.className = "stage"; se.className = "search"; typed.textContent = "";
      cur.setAttribute("class", "cursor"); cur.style.transition = "none"; cur.style.setProperty("translate", "0 0");
      iris.style.cssText = "";
      cards.forEach((c) => { c.classList.remove("show"); c.style.transition = ""; c.querySelector("h3")!.textContent = ""; });
      fin.classList.remove("on"); fire("intro-reset"); void st.offsetWidth;
    };
    const run = () => {
      reset(); st.classList.add("go");
      at(() => st.classList.add("p2"), 5600);
      at(() => se.classList.add("dot"), 6900);
      at(() => se.classList.add("pill"), 7500);
      at(() => { se.classList.add("typing"); [...SEARCH_TEXT].forEach((c, i) => at(() => { typed.textContent += c; }, i * 75)); }, 8400);
      at(() => {
        const r = mag.getBoundingClientRect(), s = st.getBoundingClientRect();
        const X = r.left - s.left + 8, Y = r.top - s.top + 10;
        cur.style.transition = "none"; cur.style.setProperty("translate", `${X + 90}px ${Y + 110}px`);
        void cur.getBoundingClientRect(); cur.style.transition = "";
        cur.classList.add("on"); cur.style.setProperty("translate", `${X}px ${Y}px`);
      }, 9800);
      at(() => cur.classList.add("click"), 10900);
      at(() => cur.classList.remove("click"), 11100);
      at(() => { se.classList.remove("typing"); se.classList.add("up"); cur.classList.remove("on"); }, 11300);
      cards.forEach((c, i) => {
        at(() => c.classList.add("show"), 11900);
        at(() => { const h = c.querySelector("h3")!; [...CARDS[i].title].forEach((ch, k) => at(() => { h.textContent += ch; }, k * 70)); }, 12500 + i * 250);
      });
      at(() => st.classList.add("home"), 15200);
      at(() => { fin.classList.add("on"); fire("intro-done"); }, 16000);
    };
    const skip = () => {
      reset(); st.className = "stage go p2 home";
      iris.style.cssText = "animation:none;clip-path:circle(150% at 100% 100%)";
      se.className = "search dot pill up"; typed.textContent = SEARCH_TEXT;
      cards.forEach((c, i) => { c.classList.add("show"); c.style.transition = "none"; c.querySelector("h3")!.textContent = CARDS[i].title; });
      fin.classList.add("on"); fire("intro-done");
    };

    const drags: Array<() => void> = [];
    cards.forEach((c) => {
      let sx = 0, sy = 0;
      const down = (e: PointerEvent) => { if (!c.classList.contains("show")) return; sx = e.clientX; sy = e.clientY; c.setPointerCapture(e.pointerId); c.classList.add("drag"); };
      const move = (e: PointerEvent) => { if (!c.classList.contains("drag")) return; c.style.setProperty("translate", `${e.clientX - sx}px ${e.clientY - sy}px`); c.style.setProperty("rotate", (e.clientX - sx) / 40 + "deg"); };
      const end = () => { c.classList.remove("drag"); c.style.setProperty("translate", "0 0"); c.style.setProperty("rotate", "0deg"); };
      c.addEventListener("pointerdown", down); c.addEventListener("pointermove", move); c.addEventListener("pointerup", end); c.addEventListener("pointercancel", end);
      drags.push(() => { c.removeEventListener("pointerdown", down); c.removeEventListener("pointermove", move); c.removeEventListener("pointerup", end); c.removeEventListener("pointercancel", end); });
    });

    const skipBtn = q<HTMLElement>("#skip");
    skipBtn.addEventListener("click", skip);
    window.addEventListener("replay-intro", run);
    window.addEventListener("resize", fit);
    fit(); document.fonts?.ready.then(fit);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) skip(); else run();

    return () => {
      T.forEach(clearTimeout); drags.forEach((d) => d());
      skipBtn.removeEventListener("click", skip);
      window.removeEventListener("replay-intro", run); window.removeEventListener("resize", fit);
    };
  }, []);

  return (
    <header className="stage" id="top" ref={root}>
      <button className="skip" id="skip">Skip intro</button>
      <div className="hero">
        <div className="big" id="big" aria-label="Portfolio">
          {"PORTFOLIO".split("").map((c, i) => <span key={i} style={{ "--i": i } as CSSProperties}>{c}</span>)}
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="me" src="/imad.webp" alt="Imad Hassan" />
        <div className="hello"><small>Hello i’m</small><b>IMAD<br />HASSAN</b></div>
        <div className="role"><h2>Full-Stack Developer</h2><ul>{ROLE.map((r) => <li key={r}>{r}</li>)}</ul></div>
      </div>
      <div className="iris" />
      <div className="search" id="search">
        <svg width="26" height="26" viewBox="0 0 48 48" aria-hidden="true">
          <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.5l6.7-6.7C35.6 2.4 30.2 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.8 6.1C12.3 13.6 17.7 9.5 24 9.5z" />
          <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17.5z" />
          <path fill="#FBBC05" d="M10.4 28.7A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.2.8-4.7l-7.8-6.1A24 24 0 0 0 0 24c0 3.9.9 7.5 2.6 10.8l7.8-6.1z" />
          <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.8 2.3-8.4 2.3-6.3 0-11.7-4.1-13.6-9.8l-7.8 6.1C6.5 42.6 14.6 48 24 48z" />
        </svg>
        <span id="typed" />
        <svg id="mag" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><circle cx="10" cy="10" r="7" /><path d="M15 15l6 6" /></svg>
      </div>
      <svg className="cursor" id="cur" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 2l15 9-6.5 1.5L16 20l-3 1-3.2-7.3L5 18z" fill="#fff" stroke="#111" strokeWidth="1.5" strokeLinejoin="round" /></svg>
      <div className="cards" id="cards">
        {CARDS.map((c) => (
          <div className="c" key={c.title}>
            <i>{c.tag}</i>
            <div><h3 /><p>{c.text}</p><u>{c.stack}</u></div>
          </div>
        ))}
      </div>
      <div className="final" id="final">
        <small>Building modern web apps &amp; exploring the future of AI.</small>
        <div><a className="btn" href="#projects">View Projects</a><a className="btn o" href="#contact">Contact Me</a></div>
        <div className="soc"><a href="https://github.com/imadhassan1235" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://linkedin.com/in/imad-hassan-1235" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
      </div>
    </header>
  );
}
