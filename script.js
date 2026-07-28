"use strict";

// =====================================================
// 1. EASY CONTENT EDITING
// Change the roles, project information, and language progress values below.
// =====================================================

const roles = [
  "Full Stack Developer",
  "Web Application Developer",
  "UI/UX Enthusiast",
  "Problem Solver"
];

const projectData = {
  smartCampus: {
    title: "Smart Campus Hub",
    image: "assets/smart-campus-hub.svg",
    description:
      "A smart campus management web application built with Spring Boot, Java, MongoDB, and React.js to manage students, lecturers, notices, events, academic resources, and campus communication.",
    tags: ["Spring Boot", "Java", "MongoDB", "React.js", "REST API", "Role-Based Auth"],
    highlights: [
      "Student and lecturer management in one centralized system",
      "Notice, event, and academic resource publishing workflows",
      "Role-based authentication for secure access control",
      "Responsive frontend pages for desktop and mobile users"
    ],
    live: "#",
    code: "#"
  },
  aiMl: {
    title: "Artificial Intelligence & Machine Learning Project",
    image: "assets/ai-ml-project.svg",
    description:
      "An AI/ML model built with Python, Scikit-learn, and TensorFlow to predict customer behavior using supervised learning techniques, data preprocessing, model training, and evaluation.",
    tags: ["Python", "Scikit-learn", "TensorFlow", "Decision Trees", "Random Forest", "Accuracy"],
    highlights: [
      "Cleaned and preprocessed data before training",
      "Built and compared Decision Tree and Random Forest models",
      "Evaluated performance using accuracy and precision",
      "Focused on supervised learning for customer behavior prediction"
    ],
    live: "#",
    code: "#"
  },
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
    title: "Hotel Management System",
    image: "assets/hotel-management-web.svg",
    description:
      "A Spring Boot-based hotel management system with MySQL and Thymeleaf for role-based authentication, room reservations, customer booking management, food ordering, payments, refunds, housekeeping tasks, wallet and card management, finance tracking, and reporting dashboards.",
    tags: ["Spring Boot", "MySQL", "Thymeleaf", "Java", "REST API"],
    highlights: [
      "Role-based authentication for secure staff and customer access",
      "Room reservation and booking management workflows",
      "Food ordering, payments, refunds, and wallet or card handling",
      "Housekeeping, finance tracking, and reporting dashboards"
    ],
    live: "#",
    code: "#"
  },
  booking: {
    title: "Appointment Booking App",
    image: "assets/project-5.png",
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
  }
};

const languageCards = [...document.querySelectorAll("[data-language-card]")];

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
// 6. LANGUAGE PROGRESS ANIMATION
// =====================================================

const languagesSection = document.getElementById("languages");

if (languagesSection && languageCards.length) {
  const languagesObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        languageCards.forEach((card) => {
          const progress = Number(card.dataset.progress || 0);
          card.style.setProperty("--progress-width", `${progress}%`);
          card.classList.add("is-animated");
        });

        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.3 }
  );

  languagesObserver.observe(languagesSection);
}

// =====================================================
// 7. PROJECT FILTERS
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
// 8. PROJECT MODAL
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
  modal.querySelector(".modal-close").focus();
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
    projectLiveLink.hidden = !data.live || data.live === "#";
    projectCodeLink.hidden = !data.code || data.code === "#";
    projectLiveLink.href = data.live || "#";
    projectCodeLink.href = data.code || "#";

    projectModalTags.innerHTML = data.tags.map((tag) => `<span>${tag}</span>`).join("");
    projectModalHighlights.innerHTML = data.highlights.map((item) => `<li>${item}</li>`).join("");

    openModal(projectModal);
  });
});

projectModal.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", () => closeModal(projectModal));
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal(projectModal);
  }
});

// =====================================================
// 9. CONTACT FORM
// =====================================================

const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");
  const body = `Hello Amira,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`;

  formNote.textContent = `Thanks, ${name}. Your email app is opening with the message ready to send.`;
  formNote.classList.add("success");
  window.location.href = `mailto:amiraramuditha345@email.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

// =====================================================
// 10. FOOTER YEAR
// =====================================================

document.getElementById("currentYear").textContent = new Date().getFullYear();
