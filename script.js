const featuredProjects = [
  {
    title: "Decision Intelligence Dashboard",
    type: "Product System",
    year: "2026",
    summary:
      "A placeholder case study for turning messy operational signals into a decision-ready product experience.",
    tags: ["Analytics", "Product", "UX"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Applied Research Toolkit",
    type: "Technical Build",
    year: "2025",
    summary:
      "A flexible slot for a technical project: methods, architecture, implementation notes, and measurable outcomes.",
    tags: ["Research", "Automation", "Systems"],
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Workflow Redesign",
    type: "Case Study",
    year: "2025",
    summary:
      "A project card shaped for before-and-after storytelling, with space for role, constraints, and results.",
    tags: ["Strategy", "Design", "Delivery"],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
];

const archiveProjects = [
  {
    year: "2026",
    project: "Portfolio Foundation",
    type: "Website",
    stack: "HTML, CSS, JavaScript",
  },
  {
    year: "2025",
    project: "Internal Tool Prototype",
    type: "Prototype",
    stack: "React, API Design",
  },
  {
    year: "2025",
    project: "Research Briefing System",
    type: "Automation",
    stack: "Data Pipelines, LLMs",
  },
  {
    year: "2024",
    project: "Client Delivery Dashboard",
    type: "Dashboard",
    stack: "Analytics, Visualization",
  },
];

const projectGrid = document.querySelector("[data-project-grid]");
const archiveTable = document.querySelector("[data-archive-table]");

projectGrid.innerHTML = featuredProjects
  .map(
    (project) => `
      <article class="project-card">
        <figure>
          <img src="${project.image}" alt="Visual placeholder for ${project.title}" loading="lazy">
        </figure>
        <div class="project-card-body">
          <div class="project-meta">${project.year} / ${project.type}</div>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <div class="tag-list" aria-label="Project tags">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <a class="button secondary" href="#" aria-label="Open ${project.title} case study">Case Study</a>
        </div>
      </article>
    `,
  )
  .join("");

archiveTable.innerHTML = archiveProjects
  .map(
    (project) => `
      <tr>
        <td>${project.year}</td>
        <td>${project.project}</td>
        <td>${project.type}</td>
        <td>${project.stack}</td>
      </tr>
    `,
  )
  .join("");
