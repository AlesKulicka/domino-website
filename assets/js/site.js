(() => {
  "use strict";

  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");
  const projectsItem = document.querySelector(".site-nav__projects");
  const submenuToggle = document.querySelector(".submenu-toggle");
  const desktopBreakpoint = 960;

  function closeSubmenu() {
    submenuToggle?.setAttribute("aria-expanded", "false");
    projectsItem?.classList.remove("is-open");
  }

  function closeMobileMenu({ returnFocus = false } = {}) {
    menuToggle?.setAttribute("aria-expanded", "false");
    navigation?.classList.remove("is-open");
    document.body.classList.remove("has-open-menu");
    closeSubmenu();

    if (returnFocus) {
      menuToggle?.focus();
    }
  }

  menuToggle?.addEventListener("click", () => {
    const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(willOpen));
    navigation?.classList.toggle("is-open", willOpen);
    document.body.classList.toggle("has-open-menu", willOpen);
  });

  submenuToggle?.addEventListener("click", () => {
    const willOpen = submenuToggle.getAttribute("aria-expanded") !== "true";
    submenuToggle.setAttribute("aria-expanded", String(willOpen));
    projectsItem?.classList.toggle("is-open", willOpen);
  });

  navigation?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeMobileMenu());
  });

  document.addEventListener("click", (event) => {
    if (projectsItem && !projectsItem.contains(event.target)) {
      closeSubmenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    if (navigation?.classList.contains("is-open")) {
      closeMobileMenu({ returnFocus: true });
    } else if (projectsItem?.classList.contains("is-open")) {
      closeSubmenu();
      submenuToggle?.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > desktopBreakpoint) {
      closeMobileMenu();
    }
  });

  const timelineToggle = document.querySelector("[data-timeline-toggle]");
  const extraTimelineItems = document.querySelectorAll("[data-timeline-extra]");

  timelineToggle?.addEventListener("click", () => {
    const willExpand = timelineToggle.getAttribute("aria-expanded") !== "true";

    extraTimelineItems.forEach((item) => {
      item.hidden = !willExpand;
    });

    timelineToggle.setAttribute("aria-expanded", String(willExpand));
    timelineToggle.textContent = willExpand ? "Skrýt starší historii" : "Zobrazit celou historii";

    if (!willExpand) {
      document.querySelector("#historie")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  document.querySelectorAll("[data-current-year]").forEach((year) => {
    year.textContent = String(new Date().getFullYear());
  });
})();
