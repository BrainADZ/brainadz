"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ACTIVE_ATTRIBUTE = "data-active-service-nav";

export default function ServicePageInteractions() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.startsWith("/services/")) return;

    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('nav a[href^="#"]'),
    ).filter((link) => {
      const id = link.getAttribute("href")?.slice(1);
      return id && document.getElementById(id);
    });

    if (links.length < 2) return;

    const nav = links[0].closest("nav");
    if (!nav) return;

    const navLinks = links.filter((link) => link.closest("nav") === nav);
    const sections = navLinks
      .map((link) => {
        const id = link.getAttribute("href")?.slice(1);
        return id ? document.getElementById(id) : null;
      })
      .filter((section): section is HTMLElement => section !== null);

    nav.dataset.serviceSectionNav = "true";

    const setActiveLink = (sectionId: string) => {
      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${sectionId}`;
        if (isActive) link.setAttribute(ACTIVE_ATTRIBUTE, "true");
        else link.removeAttribute(ACTIVE_ATTRIBUTE);

        if (isActive) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    };

    let frame = 0;
    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const activationLine = 190;
        let activeSection = sections[0];

        for (const section of sections) {
          if (section.getBoundingClientRect().top <= activationLine) {
            activeSection = section;
          } else {
            break;
          }
        }

        if (
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 2
        ) {
          activeSection = sections.at(-1) ?? activeSection;
        }

        if (activeSection) setActiveLink(activeSection.id);
      });
    };

    const handleDetailsToggle = (event: Event) => {
      const openedDetails = event.target;
      if (!(openedDetails instanceof HTMLDetailsElement) || !openedDetails.open)
        return;

      const section = openedDetails.closest("section");
      if (!section || !["features", "faqs"].includes(section.id)) return;

      section
        .querySelectorAll<HTMLDetailsElement>("details[open]")
        .forEach((item) => {
          if (item !== openedDetails) item.open = false;
        });
    };

    navLinks.forEach((link) => {
      link.addEventListener("click", updateActiveSection);
    });
    document.addEventListener("toggle", handleDetailsToggle, true);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    updateActiveSection();

    return () => {
      cancelAnimationFrame(frame);
      navLinks.forEach((link) => {
        link.removeEventListener("click", updateActiveSection);
        link.removeAttribute(ACTIVE_ATTRIBUTE);
        link.removeAttribute("aria-current");
      });
      delete nav.dataset.serviceSectionNav;
      document.removeEventListener("toggle", handleDetailsToggle, true);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [pathname]);

  return null;
}
