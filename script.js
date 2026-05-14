const featuredProjects = [
  {
    title: "Explainable AI-Generated Image Detection RewardBench",
    area: "AI research",
    year: "2026",
    summary:
      "First-author benchmark for evaluating multimodal LLM reward models on explainable AI-generated image detection.",
    stack: ["Python", "PyTorch", "Hugging Face", "MLLMs"],
    status: "NeurIPS 2025 workshop; COLM 2026 under review",
    href: "projects/research.html",
  },
  {
    title: "Aerospace Minibot Navigation System",
    area: "Robotics / aerospace",
    year: "2025",
    summary:
      "Built minibot hardware and navigation code for movement simulation, including path planning, camera localization, and test controls.",
    stack: ["Python", "Onshape", "Sensor fusion", "Manufacturing"],
    status: "Built during HStar internship",
    href: "projects/aerospace.html",
  },
  {
    title: "FIRST Tech Challenge Robotics Program",
    area: "Robotics / leadership",
    year: "2025",
    summary:
      "Co-founded and captained a robotics team, contributing to robot design, build, and programming.",
    stack: ["Robot design", "Programming", "CAD", "Controls"],
    status: "World Championship Inspire Award; 3x World Qualifier",
    href: "projects/robotics.html",
  },
];

const archiveProjects = [
  {
    year: "2025-2026",
    project: "Explainable AI-Generated Image Detection RewardBench",
    area: "AI Research",
    stack: "Python, PyTorch, Hugging Face, MLLMs",
    href: "projects/research.html",
  },
  {
    year: "2025",
    project: "Aerospace Minibot Navigation System",
    area: "Robotics / Aerospace",
    stack: "Python, Onshape, Sensor Fusion",
    href: "projects/aerospace.html",
  },
  {
    year: "2022-2025",
    project: "FIRST Tech Challenge Robotics",
    area: "Robotics",
    stack: "Robot Design, Programming, CAD",
    href: "projects/robotics.html",
  },
];

const projectGrid = document.querySelector("[data-project-grid]");
const archiveTable = document.querySelector("[data-archive-table]");
const benchmarkTabs = document.querySelectorAll("[data-step]");
const benchmarkSection = document.querySelector(".benchmark-section");
const previousStepButton = document.querySelector("[data-step-prev]");
const nextStepButton = document.querySelector("[data-step-next]");
const stepCount = document.querySelector("[data-step-count]");
const stepTitle = document.querySelector("[data-step-title]");
const stepBody = document.querySelector("[data-step-body]");
const imageCard = document.querySelector(".benchmark-image-card");
const responseCards = document.querySelectorAll("[data-response]");
const judgeCard = document.querySelector(".judge-card");
const evaluationCard = document.querySelector(".evaluation-card");
const humanChoice = document.querySelector("[data-human-choice]");
const humanReason = document.querySelector("[data-human-reason]");
const scorePill = document.querySelector("[data-score-pill]");
const preferredResponse = 1;
let selectedBenchmarkResponse = null;
let activeBenchmarkStep = 0;
const robotHotspots = document.querySelectorAll("[data-robot-part]");
const partKicker = document.querySelector("[data-part-kicker]");
const partTitle = document.querySelector("[data-part-title]");
const partBody = document.querySelector("[data-part-body]");
const partPoints = document.querySelector("[data-part-points]");
const pathModeButtons = document.querySelectorAll("[data-path-mode]");
const pathingShell = document.querySelector(".pathing-shell");
const pathKicker = document.querySelector("[data-path-kicker]");
const pathTitle = document.querySelector("[data-path-title]");
const pathBody = document.querySelector("[data-path-body]");
const pathPoints = document.querySelector("[data-path-points]");

const benchmarkSteps = [
  {
    title: "Start with an authenticity task.",
    body:
      "Each item begins with an image and the question of whether it is real or AI-generated.",
    muted: ["responses", "judge"],
  },
  {
    title: "Compare two model-generated explanations.",
    body:
      "Policy models produce competing explanations. In this sample, GPT-4o and Gemini both classify the image as real, but differ in how deeply they justify the choice.",
    muted: ["judge"],
  },
  {
    title: "Use human preference as the target signal.",
    body:
      "Human annotators choose the better explanation. For this triplet, Gemini 2.5 Pro is preferred because it gives more specific visual evidence.",
    muted: [],
  },
  {
    title: "Evaluate reward models against human judgment.",
    body:
      "Reward models are scored by how often their choices align with human preferences across roughly 3,000 image-response-response triplets.",
    muted: ["image"],
  },
];

const robotParts = {
  chassis: {
    kicker: "Chassis + PTO",
    title: "Mecanum chassis built around speed, packaging, and hang.",
    body:
      "The drivetrain used mecanum movement for omnidirectional control, with odometry and PTO packaging treated as first-class design constraints instead of afterthoughts.",
    points: [
      "Balanced motor packaging and center-of-gravity decisions for fast cycles.",
      "Integrated PTO concept to couple drivetrain power into the lift for hang.",
      "Designed around maintenance access, wiring, wheel coverage, and odometry placement.",
    ],
  },
  intake: {
    kicker: "Active intake",
    title: "Pass-through intake for faster transfer cycles.",
    body:
      "The intake used active rollers and extension to add reach, self-orient game pieces, and reduce the amount of rotation needed between pickup and scoring.",
    points: [
      "Three degrees of freedom from rotation and extension.",
      "Pass-through transfer to make intake-to-outtake handoff faster.",
      "Designed for driver control, reach, and repeatable piece orientation.",
    ],
  },
  outtake: {
    kicker: "Outtake",
    title: "Compact claw and vertical lift for scoring flexibility.",
    body:
      "The outtake focused on maximizing scoring opportunities while keeping the claw footprint low, lightweight, and compatible with the pass-through transfer flow.",
    points: [
      "Five degrees of freedom across the arm and scoring system.",
      "Light claw design to maximize grab area without carrying unnecessary mass.",
      "Integrated transfer, scoring, and hang requirements into one package.",
    ],
  },
  slides: {
    kicker: "Slides + counterspringing",
    title: "Carbon fiber slides with exact counterbalance work.",
    body:
      "The lift used lightweight carbon fiber slides and carefully staged constant-force springs to offset gravity and reduce motor load during extension.",
    points: [
      "Counterspringing reduced current draw and improved lift efficiency.",
      "Spring forces were staged because moving mass changes as continuous slides extend.",
      "Spools, rigid supports, and mirrored spring placement helped distribute force cleanly.",
    ],
  },
  software: {
    kicker: "Software",
    title: "Custom pathing and loop-time optimization.",
    body:
      "The software stack combined adaptive pure pursuit, centripetal correction, glide braking, Dijkstra rerouting, sensor logic, and queue-based hardware writes.",
    points: [
      "Pure pursuit target selection with velocity-scaled lookahead.",
      "Centripetal correction and kinematic stopping prediction for better high-speed behavior.",
      "Hardware request queue prioritized writes and improved loop times by over 100 Hz versus no usage.",
    ],
  },
  sensors: {
    kicker: "Sensors + autonomy",
    title: "Sensors made autonomous and teleop more fluid.",
    body:
      "The robot used odometry pods, distance sensors, limit switches, color sensing, analog position feedback, and camera calibration to support localization and automation.",
    points: [
      "Three odometry pods supported accurate positioning.",
      "Distance sensors supported relocalization and auto-dump behavior.",
      "OpenCV homography transformed low-cost camera data into usable field information.",
    ],
  },
};

const pathModes = {
  pursuit: {
    kicker: "Pathing mode",
    title: "Adaptive pure pursuit",
    body:
      "The robot chooses a lookahead point from line-circle intersections and scales the follow radius with velocity so fast motion stays smooth while slow motion stays precise.",
    points: [
      "Velocity-dependent lookahead distance.",
      "Target selection based on path intersections.",
      "Designed against Roadrunner/Pedro-style references.",
    ],
    reroute: false,
  },
  centripetal: {
    kicker: "Correction layer",
    title: "Centripetal correction",
    body:
      "The controller estimates how velocity and target acceleration interact, then adds a correction vector to reduce path error during fast turns and strafing.",
    points: [
      "Uses velocity, target direction, and acceleration-like vectors.",
      "Applies stronger correction when strafing changes effective motion behavior.",
      "Filters correction out at low speed or when the angle/norm thresholds are not meaningful.",
    ],
    reroute: false,
  },
  glide: {
    kicker: "Stopping behavior",
    title: "Kinematic glide braking",
    body:
      "Instead of blindly driving to the target, the robot predicts stopping distance from velocity and deceleration, then corrects early when it would overshoot.",
    points: [
      "Predicts stopping time from current speed and deceleration.",
      "Estimates future position before deciding whether to brake.",
      "Helps the robot stop cleanly instead of drifting through the target.",
    ],
    reroute: false,
  },
  reroute: {
    kicker: "Dynamic routing",
    title: "Dijkstra rerouting",
    body:
      "When the robot times out near a blocked waypoint, the graph can mark that node as blocked and compute a new shortest route to the destination.",
    points: [
      "Graph nodes represent legal waypoints on the field.",
      "Blocked nodes are removed from adjacency lists.",
      "Dijkstra recomputes the route and feeds it back into pure pursuit.",
    ],
    reroute: true,
  },
};

if (projectGrid) {
  projectGrid.innerHTML = featuredProjects
    .map(
      (project, index) => `
        <article class="project-card">
          <a class="project-card-link" href="${project.href}">
            <div class="project-visual" aria-hidden="true">
              <span>0${index + 1}</span>
              <div></div>
            </div>
            <div class="project-card-body">
              <div class="project-meta">${project.year} / ${project.area}</div>
              <h3>${project.title}</h3>
              <p>${project.summary}</p>
              <div class="tag-list" aria-label="Project stack">
                ${project.stack.map((item) => `<span>${item}</span>`).join("")}
              </div>
              <span class="project-status">${project.status}</span>
              <span class="project-link-text">Open project</span>
            </div>
          </a>
        </article>
      `,
    )
    .join("");
}

if (archiveTable) {
  archiveTable.innerHTML = archiveProjects
    .map(
      (project) => `
        <tr>
          <td>${project.year}</td>
          <td><a href="${project.href}">${project.project}</a></td>
          <td>${project.area}</td>
          <td>${project.stack}</td>
        </tr>
      `,
    )
    .join("");
}

function setBenchmarkStep(stepIndex) {
  const step = benchmarkSteps[stepIndex];
  if (!step || !stepCount || !stepTitle || !stepBody || !imageCard || !judgeCard) return;
  activeBenchmarkStep = stepIndex;

  if (benchmarkSection) {
    benchmarkSection.classList.remove("is-step-0", "is-step-1", "is-step-2", "is-step-3");
    benchmarkSection.classList.add(`is-step-${stepIndex}`);
  }

  if (stepIndex < 2) {
    selectedBenchmarkResponse = null;
    responseCards.forEach((card) => {
      card.classList.remove("is-selected", "is-correct", "is-wrong");
    });
    if (scorePill) {
      scorePill.classList.remove("is-correct", "is-wrong");
      scorePill.textContent = "Choose a response";
    }
    if (humanChoice && humanReason) {
      humanChoice.textContent = "Preference hidden";
      humanReason.textContent =
        "Advance to the human preference step or choose a response to reveal the annotation.";
    }
  } else if (selectedBenchmarkResponse === null) {
    if (scorePill) {
      scorePill.classList.remove("is-correct", "is-wrong");
      scorePill.textContent = stepIndex === 2 ? "Human label revealed" : "Evaluation target";
    }
    if (humanChoice && humanReason) {
      humanChoice.textContent = "Response 2 is better";
      humanReason.textContent =
        "Human annotators preferred Gemini's answer because it cites more specific visual evidence.";
    }
  }

  benchmarkTabs.forEach((tab) => {
    const isActive = Number(tab.dataset.step) === stepIndex;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  stepCount.textContent = `Step ${stepIndex + 1} of ${benchmarkSteps.length}`;
  stepTitle.textContent = step.title;
  stepBody.textContent = step.body;

  imageCard.classList.toggle("is-muted", step.muted.includes("image"));
  imageCard.classList.toggle("is-active-stage", stepIndex === 0);
  responseCards.forEach((card) => {
    card.classList.toggle("is-muted", step.muted.includes("responses"));
    card.classList.toggle("is-active-stage", stepIndex === 1);
  });
  judgeCard.classList.toggle("is-muted", step.muted.includes("judge"));
  judgeCard.classList.toggle("is-revealed", stepIndex >= 2);
  judgeCard.classList.toggle("is-active-stage", stepIndex === 2);
  if (evaluationCard) {
    evaluationCard.classList.toggle("is-active-stage", stepIndex === 3);
  }

  if (previousStepButton) {
    previousStepButton.disabled = stepIndex === 0;
  }
  if (nextStepButton) {
    nextStepButton.disabled = stepIndex === benchmarkSteps.length - 1;
    nextStepButton.textContent = stepIndex === benchmarkSteps.length - 1 ? "Done" : "Next";
  }
}

function setSelectedResponse(responseIndex) {
  if (!scorePill || !humanChoice || !humanReason) return;
  selectedBenchmarkResponse = responseIndex;
  responseCards.forEach((card) => {
    const cardIndex = Number(card.dataset.response);
    const isSelected = cardIndex === responseIndex;
    const isPreferred = cardIndex === preferredResponse;
    card.classList.toggle("is-selected", isSelected);
    card.classList.toggle("is-correct", isPreferred);
    card.classList.toggle("is-wrong", isSelected && !isPreferred);
  });

  scorePill.classList.toggle("is-correct", responseIndex === preferredResponse);
  scorePill.classList.toggle("is-wrong", responseIndex !== preferredResponse);

  if (responseIndex === preferredResponse) {
    scorePill.textContent = "Match: human preference";
    humanChoice.textContent = "Correct: Gemini is the human preference";
    humanReason.textContent =
      "Human annotators preferred Gemini's answer because it cites image quality, motion blur, water physics, and lack of AI artifacts.";
  } else {
    scorePill.textContent = "Different from human label";
    humanChoice.textContent = "Human preference: Gemini 2.5 Pro";
    humanReason.textContent =
      "GPT-4o is correct that the image appears real, but its explanation is less detailed than Gemini's evidence-grounded reasoning.";
  }

  setBenchmarkStep(2);
}

benchmarkTabs.forEach((tab) => {
  tab.addEventListener("click", () => setBenchmarkStep(Number(tab.dataset.step)));
});

if (previousStepButton) {
  previousStepButton.addEventListener("click", () => {
    setBenchmarkStep(Math.max(activeBenchmarkStep - 1, 0));
  });
}

if (nextStepButton) {
  nextStepButton.addEventListener("click", () => {
    setBenchmarkStep(Math.min(activeBenchmarkStep + 1, benchmarkSteps.length - 1));
  });
}

responseCards.forEach((card) => {
  card.addEventListener("click", () => setSelectedResponse(Number(card.dataset.response)));
});

if (benchmarkTabs.length) {
  setBenchmarkStep(0);
}

function setRobotPart(partName) {
  const part = robotParts[partName];
  if (!part || !partTitle || !partBody || !partPoints || !partKicker) return;

  robotHotspots.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.robotPart === partName);
  });

  partKicker.textContent = part.kicker;
  partTitle.textContent = part.title;
  partBody.textContent = part.body;
  partPoints.innerHTML = part.points.map((point) => `<li>${point}</li>`).join("");
}

function setPathMode(modeName) {
  const mode = pathModes[modeName];
  if (!mode || !pathTitle || !pathBody || !pathPoints || !pathKicker) return;

  pathModeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.pathMode === modeName);
  });

  if (pathingShell) {
    pathingShell.classList.toggle("is-reroute", mode.reroute);
  }

  pathKicker.textContent = mode.kicker;
  pathTitle.textContent = mode.title;
  pathBody.textContent = mode.body;
  pathPoints.innerHTML = mode.points.map((point) => `<li>${point}</li>`).join("");
}

robotHotspots.forEach((button) => {
  button.addEventListener("click", () => setRobotPart(button.dataset.robotPart));
});

pathModeButtons.forEach((button) => {
  button.addEventListener("click", () => setPathMode(button.dataset.pathMode));
});

if (robotHotspots.length) {
  setRobotPart("chassis");
}

if (pathModeButtons.length) {
  setPathMode("pursuit");
}
