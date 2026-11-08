import type { ReactNode } from "react";
import Intro from "@/components/Intro";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import ReplayButton from "@/components/ReplayButton";
import { AI, EDUCATION, EXPERIENCE, LEARNING, LINKS, PROJECTS, SKILLS } from "@/lib/data";

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="sec">
      <div className="wrap">
        <h2>{title}</h2>
        <Reveal className="body">{children}</Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <Intro />
      <main>
        <Section id="about" title="About">
          <p className="lead">I’m a Full-Stack Developer and aspiring AI &amp; Data Science developer who enjoys building modern web applications, intelligent software and AI-powered business systems.</p>
          <p className="lead">I started with web development at Saylani Mass IT Training (SMIT), learning frontend and backend technologies, then spent four months as a web development intern at TechLoSet Solutions. Today I’m expanding into Python, Machine Learning, Data Science, AI agents and automation through SMIT’s AI &amp; Data Science program.</p>
          <p className="lead">I learn by building real projects that solve real problems. My goal is to combine software engineering with AI to create scalable applications and practical automation for businesses.</p>
        </Section>

        <Section id="skills" title="Skills">
          <div className="rows">
            {SKILLS.map((s) => (
              <div className="row" key={s.group}><h3>{s.group}</h3><div className="chips">{s.items.map((i) => <span key={i}>{i}</span>)}</div></div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="tl">
            {EXPERIENCE.map((e) => (
              <div className="item" key={e.org}>
                <span className="pill">{e.kind}</span>
                <h3>{e.title}, {e.org}</h3>
                <small>{e.when}</small>
                <p>{e.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid">
            {PROJECTS.map((p) => (
              <article className="card" key={p.name}>
                <div className="meta"><span className="pill">{p.status}</span><small>{p.cat}</small></div>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <div className="chips">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
                {p.href && <a className="link" href={p.href} target="_blank" rel="noopener noreferrer">{p.cta}</a>}
              </article>
            ))}
            <article className="card">
              <div className="meta"><span className="pill">Learning work</span></div>
              <h3>Additional learning projects</h3>
              <ul>{LEARNING.map((l) => <li key={l}>{l}</li>)}</ul>
            </article>
          </div>
        </Section>

        <Section id="ai" title="AI & Automation">
          <p className="lead">I want to go beyond conventional web development and help businesses save time and reduce manual work with intelligent software.</p>
          <div className="grid">{AI.map(([t, d]) => <article className="card" key={t}><h3>{t}</h3><p>{d}</p></article>)}</div>
        </Section>

        <Section id="education" title="Education">
          <div className="tl">
            {EDUCATION.map((e) => (
              <div className="item" key={e.title}>
                <span className="pill">{e.status}</span>
                <h3>{e.title}</h3>
                <small>{e.when}</small>
                {e.text && <p>{e.text}</p>}
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="lead">Have a project, an opportunity or an idea involving web development, AI or automation? Let’s talk.</p>
          <div className="contact">
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><b>imad-hassan-1235</b></a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer"><span>GitHub</span><b>imadhassan1235</b></a>
            <a href={LINKS.x} target="_blank" rel="noopener noreferrer"><span>X</span><b>@Imadhassan_1235</b></a>
          </div>
        </Section>
      </main>
      <footer>
        <span>Imad Hassan · Faisalabad, Pakistan</span>
        <ReplayButton />
      </footer>
    </>
  );
}
