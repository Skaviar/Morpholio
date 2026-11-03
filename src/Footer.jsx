import React from "react";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a href="mailto:kavitkarswanand5@gmail.com">
          kavitkarswanand5@gmail.com
        </a>
        <nav aria-label="Social links">
          <a href="https://github.com/Skaviar" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/skavitkar/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://skavitkar.medium.com/"
            target="_blank"
            rel="noreferrer"
          >
            Medium
          </a>
        </nav>
        <span>© {new Date().getFullYear()} Swanand Kavitkar</span>
      </div>
    </footer>
  );
}
