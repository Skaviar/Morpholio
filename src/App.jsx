import React, { useEffect, useState } from "react";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Motion from "./components/Motion";
import scrollToContact from "./scrollToContact";
import resume from "./data/resume.json";
import blogs from "./data/blogs.json";
import certifications from "./data/certifications.json";

import projects from "./data/featured-projects.json";
import hobbies from "./data/hobbies.json";

function ProjectCard({ project, featured = false }) {
  return (
    <article
      className={`project-card project-${project.id}${featured ? " featured" : ""}`}
    >
      <img
        className="project-image"
        src={project.image}
        alt={project.imageAlt}
        width="600"
        height="300"
        loading="lazy"
      />
      <div className="project-copy">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <p className="project-detail">{project.detail}</p>
        <p className="technologies">{project.tags.join(" · ")}</p>
        <div className="project-links">
          {project.live && (
            <a
              className="button button-primary"
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              Try Sudotrail
            </a>
          )}
          <a
            className="button button-secondary"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export function Work({ hero = true }) {
  const SectionTitle = hero ? "h2" : "h1";
  return (
    <>
      {hero && (
        <section className="hero container">
          <div>
            <h1>Swanand Kavitkar</h1>
            <p className="hero-role">Backend engineer at Fetch</p>
            <p>
              I build backend systems and mobile apps. Previously at TikTok,
              Privoro, and HSBC.
            </p>
            <div className="hero-actions">
              <button
                type="button"
                className="button button-primary"
                onClick={scrollToContact}
              >
                Contact me
              </button>
              <a
                className="button button-secondary"
                href="/Swanand_Kavitkar.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View resume
              </a>
            </div>
          </div>
          <img
            className="profile-photo"
            src="/imgs/landing/pfp.jpg"
            alt="Swanand Kavitkar"
            width="144"
            height="144"
          />
        </section>
      )}
      <section
        className="container work-section"
        aria-labelledby="projects-title"
      >
        <SectionTitle id="projects-title">Projects</SectionTitle>
        <div className="project-grid">
          {projects.slice(0, 2).map((p) => (
            <ProjectCard key={p.id} project={p} featured />
          ))}
        </div>
        <details className="more-projects">
          <summary>More projects</summary>
          <div className="project-grid">
            {projects.slice(2).map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
          <a
            className="text-link"
            href="https://github.com/Skaviar?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            All repositories on GitHub
          </a>
        </details>
      </section>
    </>
  );
}

export function About() {
  return (
    <div className="container interior">
      <h1>About me</h1>
      <div className="about-intro">
        <p>
          I’m a backend engineer at Fetch with a background in iOS, Android, and
          cloud systems. I like understanding how things work. I enjoy building
          my own to find out.
        </p>
        <a
          className="button button-dark"
          href="/Swanand_Kavitkar.pdf"
          target="_blank"
          rel="noreferrer"
        >
          View resume
        </a>
      </div>
      <section className="experience">
        <div className="section-heading">
          <h2>Experience</h2>
        </div>
        {resume.work.map((w) => (
          <article className="experience-row" key={w.organisation}>
            <div className="company-heading">
              <span className="company-logo-frame">
                <img
                  className="company-logo"
                  src={w.logo}
                  alt=""
                  width="48"
                  height="48"
                  loading="lazy"
                />
              </span>
              <div>
                <h3>{w.organisation}</h3>
                <span className="company-role">{w.role}</span>
              </div>
            </div>
            <ul className="work-contributions">
              {w.detail.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <span className="experience-date">{w.year}</span>
          </article>
        ))}
      </section>
      <div className="about-columns">
        <section>
          <h2>Skills</h2>
          <div className="skill-group">
            <h3>Systems & cloud</h3>
            <p>Go · Python · AWS · Docker · Kubernetes</p>
            <h3>Mobile & web</h3>
            <p>Kotlin · Android · iOS · React · TypeScript</p>
          </div>
        </section>
        <section>
          <details open>
            <summary>Education</summary>
            {resume.education.map((e) => (
              <div className="education" key={e.university}>
                <div className="credential-logo-frame">
                  <img
                    src={e.logo}
                    alt=""
                    width="40"
                    height="40"
                    loading="lazy"
                  />
                </div>
                <div className="education-copy">
                  <h3>{e.university}</h3>
                  <p>{e.info.split(". Coursework")[0]}</p>
                  <span>
                    {e.year} · GPA {e.gpa}
                  </span>
                </div>
              </div>
            ))}
          </details>
          <details open>
            <summary>Recognition and credentials</summary>
            <ul className="credential-list">
              {certifications.certs.map((c) => (
                <li key={c.title}>
                  <div className="credential-logo-frame">
                    <img
                      src={c.image}
                      alt=""
                      width="40"
                      height="40"
                      loading="lazy"
                    />
                  </div>
                  <div className="credential-copy">
                    <span className="credential-title">{c.title}</span>
                    <span className="credential-date">{c.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </details>
        </section>
      </div>
      <section className="outside-work" aria-labelledby="outside-work-title">
        <h2 id="outside-work-title">Outside work</h2>
        <div className="hobby-grid">
          {hobbies.interests.map((hobby) => (
            <article
              key={hobby.title}
              className={`hobby-card${hobby.image ? "" : " hobby-card-text"}`}
            >
              {hobby.image && (
                <img
                  src={hobby.image}
                  alt={hobby.alt || ""}
                  width="600"
                  height="380"
                  loading="lazy"
                />
              )}
              <div className="hobby-copy">
                <h3>{hobby.title}</h3>
                <p>{hobby.description}</p>
                {hobby.favorites?.length > 0 && (
                  <div className="hobby-favorites">
                    <h4>A few favorites</h4>
                    <ul>
                      {hobby.favorites.map((title) => (
                        <li key={title}>{title}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
export function Blogs() {
  return (
    <section className="container interior blogs">
      <h1>Blogs</h1>
      <p className="page-lead">
        Practical guides from projects, certification prep, and things I’ve
        learned at work.
      </p>
      <div className="article-list">
        {blogs.blogData.map((b) => (
          <a
            className="article-row"
            href={b.link}
            target="_blank"
            rel="noreferrer"
            key={b.link}
          >
            <img
              className="article-image"
              src={b.img}
              alt=""
              width="480"
              height="300"
              loading="lazy"
            />
            <div className="article-copy">
              <h2>{b.title.replace(/^\d+\s/, "")}</h2>
              <p>{b.info}</p>
              <span className="article-read">Read on Medium</span>
            </div>
          </a>
        ))}
      </div>
      <a
        className="text-link"
        href="https://skavitkar.medium.com/"
        target="_blank"
        rel="noreferrer"
      >
        All posts on Medium
      </a>
    </section>
  );
}
function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${pathname === "/about" ? "About" : pathname === "/blogs" ? "Blogs" : "Selected work"} | Swanand Kavitkar`;
  }, [pathname]);
  return null;
}
export default function App() {
  return (
    <HashRouter>
      <ScrollReset />
      <Motion />
      <a
        className="skip-link"
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main-content").focus();
        }}
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/projects" element={<Work hero={false} />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/writing" element={<Navigate to="/blogs" replace />} />
          {["resume", "skills", "hobbies", "certifications"].map((p) => (
            <Route
              key={p}
              path={`/${p}`}
              element={<Navigate to="/about" replace />}
            />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
