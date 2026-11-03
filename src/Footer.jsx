import React from "react";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Skaviar",
    icon: "/imgs/landing/github.png",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/skavitkar/",
    icon: "/imgs/landing/linkedin-blue.png",
  },
  {
    name: "Medium",
    href: "https://skavitkar.medium.com/",
    icon: "/imgs/landing/medium.png",
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="site-footer"
      aria-labelledby="contact-heading"
    >
      <div className="container footer-inner">
        <div className="footer-contact">
          <h2 id="contact-heading" tabIndex={-1}>
            Get in touch
          </h2>
          <a className="contact-email" href="mailto:kavitkarswanand5@gmail.com">
            <svg
              aria-hidden="true"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <rect x="3" y="5" width="18" height="14" rx="3" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            <span>kavitkarswanand5@gmail.com</span>
          </a>
        </div>
        <nav className="social-links" aria-label="Find me online">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={social.icon}
                alt=""
                width="22"
                height="22"
                loading="lazy"
              />
              <span>{social.name}</span>
            </a>
          ))}
        </nav>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Swanand Kavitkar
        </p>
      </div>
    </footer>
  );
}
