import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const nav = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 760px)");
    const onBreakpoint = () => setOpen(false);
    mobile.addEventListener("change", onBreakpoint);
    return () => mobile.removeEventListener("change", onBreakpoint);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (event.key === "Tab") {
        const items = [toggle.current, ...nav.current.querySelectorAll("a")];
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    nav.current?.querySelector("a")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    toggle.current?.focus();
  };

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="wordmark" to="/" aria-label="Swanand Kavitkar, home">
            Swanand Kavitkar
          </Link>
          <button
            ref={toggle}
            className={`menu-toggle${open ? " is-open" : ""}`}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="hamburger" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
          <nav
            ref={nav}
            id="site-nav"
            className={open ? "navigation open" : "navigation"}
            aria-label="Main navigation"
            onClick={(event) => {
              if (open && event.target.closest("a")) closeMenu();
            }}
          >
            <NavLink
              to="/"
              end
              className={() =>
                ["/projects", "/"].includes(location.pathname) ? "active" : ""
              }
            >
              Work
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <a
              className="resume-link"
              href="/Swanand_Kavitkar.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </nav>
        </div>
      </header>
      {open && (
        <button
          type="button"
          className="menu-backdrop"
          aria-label="Close navigation"
          tabIndex={-1}
          onClick={closeMenu}
        />
      )}
    </>
  );
}
