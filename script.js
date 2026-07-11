"use strict";

// =====================================================
// 1. EASY CONTENT EDITING
// Change the roles, project information, and certificate data below.
// =====================================================

const roles = [
  "Full Stack Developer",
  "Web Application Developer",
  "UI/UX Enthusiast",
  "Problem Solver"
];

const projectData = {
  ecommerce: {
    title: "E-Commerce Platform",
    image: "assets/project-1.svg",
    description:
      "A complete online shopping solution with product discovery, category filtering, customer authentication, shopping cart, checkout, order tracking, payment integration, and an administration dashboard.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API"],
    highlights: [
      "Responsive customer storefront and secure login",
      "Product, inventory, order, and customer management",
      "Reusable API architecture and validation",
      "Optimized user flow from browsing to checkout"
    ],
    live: "#",
    code: "#"
  },
  hospital: {
    title: "Hospital Management System",
    image: "assets/project-2.svg",
    description:
      "A role-based hospital management application for handling patients, doctors, appointments, billing, prescriptions, and operational reports through a centralized dashboard.",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    highlights: [
      "Separate permissions for administrators, doctors, and staff",
      "Appointment scheduling and patient records",
      "Payment, report, and status management",
      "Mobile-friendly dashboard interface"
    ],
    live: "#",
    code: "#"
  },
  agency: {
    title: "Creative Agency Website",
    image: "assets/project-3.svg",
    description:
      "A premium marketing website designed to present services, work, client stories, and contact pathways with polished interactions and visual storytelling.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "SEO"],
    highlights: [
      "Modern landing page design",
      "Smooth scrolling and entrance animations",
      "Service and portfolio components",
      "Performance and accessibility improvements"
    ],
    live: "#",
    code: "#"
  },
  booking: {
    title: "Appointment Booking App",
    image: "assets/project-4.svg",
    description:
      "A scheduling platform that lets users discover service providers, select time slots, manage bookings, receive notifications, and complete online payments.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Firebase"],
    highlights: [
      "Authentication and profile management",
      "Availability and appointment workflows",
      "Notification and payment integration",
      "Administrative booking controls"
    ],
    live: "#",
    code: "#"
  },
  travel: {
    title: "Travel Experience Platform",
    image: "assets/project-5.svg",
    description:
      "A tourism platform for promoting destinations and experiences while managing packages, ticket options, reservations, customers, and travel content.",
    tags: ["Next.js", "Laravel", "MySQL", "API", "Cloud"],
    highlights: [
      "Destination and activity discovery",
      "Package and ticket management",
      "Reservation and customer workflows",
      "SEO-friendly content pages"
    ],
    live: "#",
    code: "#"
  },
  dashboard: {
    title: "Business Analytics Dashboard",
    image: "assets/project-6.svg",
    description:
      "A clean, responsive dashboard that presents operational metrics, charts, recent activity, alerts, and exportable reports for business decision-making.",
    tags: ["Figma", "React", "Chart.js", "REST API", "UX"],
    highlights: [
      "Reusable card and table components",
      "Interactive chart and filtering controls",
      "Responsive desktop and mobile layouts",
      "Clear information hierarchy for fast decisions"
    ],
    live: "#",
    code: "#"
  }
};

const certificateData = {
  aws: {
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "Amazon Web Services Academy",
    date: "Completed in 2026",
    skills: ["Cloud Concepts", "AWS Services", "Security", "Architecture", "Pricing"],
    label: "AWS CLOUD",
    link: "#"
  },
  google: {
    title: "Google UX Design Fundamentals",
    issuer: "Google Career Certificates",
    date: "Completed in 2025",
    skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    label: "GOOGLE UX",
    link: "#"
  },
  azure: {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft Learn",
    date: "Completed in 2025",
    skills: ["Azure Services", "Cloud Security", "Governance", "Cloud Concepts"],
    label: "AZURE",
    link: "#"
  },
  javascript: {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "Completed in 2024",
    skills: ["JavaScript", "ES6", "Algorithms", "Data Structures", "OOP"],
    label: "JAVASCRIPT",
    link: "#"
  }
};

// =====================================================
// 2. MOBILE MENU
// =====================================================

const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");

function closeMobileMenu() {
  menuButton.classList.remove("active");
  mobileNav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}

menuButton.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  menuButton.classList.toggle("active", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 850) closeMobileMenu();
});

// =====================================================
// 3. HEADER, ACTIVE NAVIGATION, BACK TO TOP
// =====================================================

const header = document.getElementById("siteHeader");
const backToTop = document.getElementById("backToTop");
const navLinks = [...document.querySelectorAll(".nav-link")];
const sections = [...document.querySelectorAll("main section[id]")];

function updateScrollUI() {
  header.classList.toggle("scrolled", window.scrollY > 20);
  backToTop.classList.toggle("show", window.scrollY > 600);

  let currentSection = "home";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 160) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentSection}`);
  });
}

window.addEventListener("scroll", updateScrollUI, { passive: true });
updateScrollUI();

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// =====================================================
// 4. TYPING EFFECT
// =====================================================

const typingElement = document.getElementById("typingText");
let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeRole() {
  const role = roles[roleIndex];

  if (!deleting) {
    characterIndex += 1;
    typingElement.textContent = role.slice(0, characterIndex);

    if (characterIndex === role.length) {
      deleting = true;
      setTimeout(typeRole, 1400);
      return;
    }
  } else {
    characterIndex -= 1;
    typingElement.textContent = role.slice(0, characterIndex);

    if (characterIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeRole, deleting ? 42 : 78);
}

typeRole();

// =====================================================
// 5. SCROLL REVEAL
// =====================================================

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

// =====================================================
// 6. PROJECT FILTERS
// =====================================================

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const selectedFilter = button.dataset.filter;
    projectCards.forEach((card) => {
      const shouldShow = selectedFilter === "all" || card.dataset.category === selectedFilter;
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

// =====================================================
// 7. PROJECT MODAL
// =====================================================

const projectModal = document.getElementById("projectModal");
const projectModalTitle = document.getElementById("projectModalTitle");
const projectModalImage = document.getElementById("projectModalImage");
const projectModalDescription = document.getElementById("projectModalDescription");
const projectModalTags = document.getElementById("projectModalTags");
const projectModalHighlights = document.getElementById("projectModalHighlights");
const projectLiveLink = document.getElementById("projectLiveLink");
const projectCodeLink = document.getElementById("projectCodeLink");

function openModal(modal) {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal(modal) {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".open-project").forEach((button) => {
  button.addEventListener("click", () => {
    const data = projectData[button.dataset.project];
    if (!data) return;

    projectModalTitle.textContent = data.title;
    projectModalImage.src = data.image;
    projectModalImage.alt = `${data.title} preview`;
    projectModalDescription.textContent = data.description;
    projectLiveLink.href = data.live;
    projectCodeLink.href = data.code;

    projectModalTags.innerHTML = data.tags.map((tag) => `<span>${tag}</span>`).join("");
    projectModalHighlights.innerHTML = data.highlights.map((item) => `<li>${item}</li>`).join("");

    openModal(projectModal);
  });
});

projectModal.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", () => closeModal(projectModal));
});

// =====================================================
// 8. CERTIFICATE MODAL
// =====================================================

const certModal = document.getElementById("certModal");
const certModalTitle = document.getElementById("certModalTitle");
const certIssuer = document.getElementById("certIssuer");
const certDate = document.getElementById("certDate");
const certSkills = document.getElementById("certSkills");
const certPreview = document.getElementById("certPreview");
const certLink = document.getElementById("certLink");

document.querySelectorAll(".open-cert").forEach((button) => {
  button.addEventListener("click", () => {
    const data = certificateData[button.dataset.cert];
    if (!data) return;

    certModalTitle.textContent = data.title;
    certIssuer.textContent = data.issuer;
    certDate.textContent = data.date;
    certPreview.textContent = data.label;
    certLink.href = data.link;
    certSkills.innerHTML = data.skills.map((skill) => `<span>${skill}</span>`).join("");

    openModal(certModal);
  });
});

certModal.querySelectorAll("[data-close-cert]").forEach((element) => {
  element.addEventListener("click", () => closeModal(certModal));
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal(projectModal);
    closeModal(certModal);
  }
});

// =====================================================
// 9. CONTACT & SUBSCRIBE DEMO FORMS
// =====================================================

const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const subscribeForm = document.getElementById("subscribeForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get("name");

  formNote.textContent = `Thank you, ${name}. Your demo message has been captured. Connect this form to your email service before publishing.`;
  formNote.classList.add("success");
  contactForm.reset();
});

subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = subscribeForm.querySelector("button");
  button.textContent = "Added!";
  subscribeForm.reset();
  setTimeout(() => (button.textContent = "Subscribe"), 1800);
});

// =====================================================
// 10. FOOTER YEAR
// =====================================================

document.getElementById("currentYear").textContent = new Date().getFullYear();
