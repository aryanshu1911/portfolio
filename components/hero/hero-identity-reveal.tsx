"use client";

import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const identityRevealSessionKey = "portfolio.identity-reveal.seen";

type RevealState = "initial" | "active" | "complete";

function hasSeenIdentityReveal() {
  try {
    return window.sessionStorage.getItem(identityRevealSessionKey) === "true";
  } catch {
    return false;
  }
}

function markIdentityRevealSeen() {
  try {
    window.sessionStorage.setItem(identityRevealSessionKey, "true");
  } catch {
    // Falls back gracefully if sessionStorage is disabled or unavailable.
  }
}

export function HeroIdentityReveal() {
  const [revealState, setRevealState] = useState<RevealState>("initial");

  useEffect(() => {
    const seen = hasSeenIdentityReveal();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen || reducedMotion) {
      setRevealState("complete");
      document.documentElement.dataset.identityReveal = "complete";
      return;
    }

    document.documentElement.dataset.identityReveal = "active";
    markIdentityRevealSeen();

    const startTimer = window.setTimeout(() => {
      setRevealState("active");
    }, 50);

    const completeTimer = window.setTimeout(() => {
      setRevealState("complete");
      document.documentElement.dataset.identityReveal = "complete";
    }, 1500);

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(completeTimer);
    };
  }, []);

  return (
    // B — id="home" added for navigation anchor targeting
    <section id="home" className="hero" data-reveal={revealState} aria-labelledby="hero-title">
      <div className="hero__background" aria-hidden="true" />
      <div className="hero__inner site-container">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">Software Engineer</p>
          <h1 id="hero-title" className="hero__name">
            Aryanshu Singh
          </h1>
          <div className="hero__details">
            {/* C — AI/ML corrected from AIML */}
            <p className="hero__title">Software Engineer · AI/ML · Cybersecurity</p>
            <p className="hero__tagline">
              Building intelligent software by combining backend engineering, AI, ML,
              and cybersecurity into scalable real-world solutions.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#projects">
                View selected work
              </a>
              <a className="button button--secondary" href="#contact">
                Start a conversation
              </a>
            </div>
          </div>
        </div>

        <div className="hero__identity" aria-label="Aryanshu Singh identity card">
          <div className="hero__identity-status">
            <ShieldCheck aria-hidden="true" size={16} />
            <span>Verified profile</span>
          </div>

          {/* A — aria-hidden removed from portrait; alt text is now correctly exposed */}
          <div className="hero__identity-portrait">
            <Image
              src="/images/profile/myself_1.jpeg"
              alt="Aryanshu Singh"
              fill
              priority
              sizes="(min-width: 48rem) 9rem, 9rem"
              className="hero__identity-portrait-img"
            />
          </div>

          <div className="hero__identity-meta">
            <div className="hero__identity-meta-row">
              <span className="hero__identity-meta-label">Role</span>
              <span className="hero__identity-meta-value">Software Engineer</span>
            </div>
            <div className="hero__identity-meta-row">
              <span className="hero__identity-meta-label">Availability</span>
              <span className="hero__identity-meta-value hero__identity-meta-value--status">
                <span
                  className="hero__identity-status-dot hero__identity-status-dot--pulse"
                  aria-hidden="true"
                />
                Open to Opportunities
              </span>
            </div>
            <div className="hero__identity-meta-row">
              <span className="hero__identity-meta-label">Location</span>
              <span className="hero__identity-meta-value">Navi Mumbai, India</span>
            </div>
            <div className="hero__identity-meta-row">
              <span className="hero__identity-meta-label">Specialization</span>
              <span className="hero__identity-meta-value hero__identity-meta-value--mono">
                Backend · AI/ML · Security
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
