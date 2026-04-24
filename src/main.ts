import { networkCore, orbitProjects, type OrbitProject, type ProjectId } from "./data/projects";
import "./styles/global.css";

type Selection = "network" | ProjectId;

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Missing #app mount point");
}

const mount = app;
const baseUrl = import.meta.env.BASE_URL;
const selectionOrder: Selection[] = ["network", ...orbitProjects.map((project) => project.id)];
let selected: Selection = "network";

const icons: Record<Selection, string> = {
  network:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4.5 7.5V16.5L12 21l7.5-4.5V7.5L12 3Z"/><path d="M12 3v18M4.5 7.5 12 12l7.5-4.5M4.5 16.5 12 12l7.5 4.5"/></svg>',
  club:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 14.5 12 4l8 10.5"/><path d="M6.5 12.5V20h11v-7.5"/><path d="M9 20v-5h6v5"/></svg>',
  chat:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8.5A5.5 5.5 0 0 1 10.5 3h3A5.5 5.5 0 0 1 19 8.5v2A5.5 5.5 0 0 1 13.5 16H12l-4.5 4v-4.35A5.5 5.5 0 0 1 5 11.5v-3Z"/><path d="M9 9.5h6M9 12h4"/></svg>',
  space:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/><path d="M4 20a8 8 0 0 1 16 0"/><path d="M19 8h2M3 8h2M12 18v3"/></svg>',
  fortrust:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z"/><path d="M9 12l2 2 4-5"/></svg>'
};

function assetPath(path: string): string {
  return `${baseUrl}${path}`;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function statusLabel(status: OrbitProject["status"]): string {
  return status === "live" ? "Live" : "Coming soon";
}

function getProject(id: Selection): OrbitProject | undefined {
  return orbitProjects.find((project) => project.id === id);
}

function renderNav(): string {
  return selectionOrder
    .map((id) => {
      const project = getProject(id);
      const label = project?.name ?? networkCore.name;
      const color = project?.color ?? "#ff9500";

      return `<button type="button" data-select="${id}" aria-label="Show ${escapeHtml(
        label
      )}" style="--project-color: ${color}">${icons[id]}</button>`;
    })
    .join("");
}

function renderOrbitRings(): string {
  const rings = orbitProjects
    .map((project) => {
      const radiusX = (project.orbitRadius / 100) * 900;
      const radiusY = (project.orbitRadius * 0.64 * 650) / 100;

      return `<ellipse class="orbit-ring" data-ring="${project.id}" cx="450" cy="325" rx="${radiusX.toFixed(
        1
      )}" ry="${radiusY.toFixed(1)}" style="--project-color: ${project.color}" />`;
    })
    .join("");

  return `
    <svg class="orbit-svg" viewBox="0 0 900 650" aria-hidden="true">
      <line class="orbit-line" id="orbit-line" x1="450" y1="325" x2="450" y2="325" />
      ${rings}
    </svg>
  `;
}

function renderProjectNodes(): string {
  return orbitProjects
    .map(
      (project) => `
        <button
          type="button"
          class="project-node"
          data-select="${project.id}"
          data-project-id="${project.id}"
          aria-label="Show ${escapeHtml(project.name)}"
          aria-pressed="false"
          style="--project-color: ${project.color}"
        >
          <span class="planet-avatar" aria-hidden="true">
            <img src="${assetPath(project.icon)}" alt="" loading="eager" />
          </span>
          <span class="project-label">
            <span class="project-name">${escapeHtml(project.id === "fortrust" ? "Fortrust" : project.id)}</span>
            <span class="project-status status-${project.status}">${statusLabel(project.status)}</span>
          </span>
        </button>
      `
    )
    .join("");
}

function renderProofItems(): string {
  return networkCore.proof
    .map(
      (item) => `
        <div class="proof-item">
          <strong>${escapeHtml(item.value)}</strong>
          <span>${escapeHtml(item.label)}</span>
        </div>
      `
    )
    .join("");
}

function renderCorePanel(): string {
  const projectLinks = orbitProjects
    .map(
      (project) => `
        <button type="button" data-select="${project.id}" style="--project-color: ${project.color}">
          <strong>${escapeHtml(project.name)}</strong>
          <span>${escapeHtml(project.tagline)}</span>
        </button>
      `
    )
    .join("");

  return `
    <div class="panel-inner">
      <div class="panel-topline">
        <span class="status-pill" style="--status-color: var(--accent-soft)">Network core</span>
      </div>
      <div class="feature-art" style="--project-color: var(--accent)">
        <img src="${assetPath(networkCore.icon)}" alt="" />
      </div>
      <div class="panel-copy">
        <p class="panel-kicker">Peaceful Vanilla Network</p>
        <h2 class="panel-title">${escapeHtml(networkCore.tagline)}</h2>
        <p class="panel-description">${escapeHtml(networkCore.description)}</p>
      </div>
      <div class="principles">
        ${networkCore.principles.map((principle) => `<span>${escapeHtml(principle)}</span>`).join("")}
      </div>
      <div class="panel-metrics" aria-label="Network proof points">${renderProofItems()}</div>
      <div class="network-links">${projectLinks}</div>
    </div>
  `;
}

function renderProjectPanel(project: OrbitProject): string {
  const ctas = [
    project.primaryCta
      ? `<a class="panel-cta primary" href="${project.primaryCta.href}" target="_blank" rel="noreferrer">${escapeHtml(
          project.primaryCta.label
        )}</a>`
      : "",
    project.secondaryCta
      ? `<a class="panel-cta" href="${project.secondaryCta.href}" target="_blank" rel="noreferrer">${escapeHtml(
          project.secondaryCta.label
        )}</a>`
      : ""
  ]
    .filter(Boolean)
    .join("");

  const comingSoon =
    project.status === "coming-soon"
      ? `<div class="coming-soon-note">This orbit is visible because it belongs to the network, but its public destination is not linked yet.</div>`
      : "";

  return `
    <div class="panel-inner">
      <div class="panel-topline">
        <span class="status-pill" style="--status-color: ${
          project.status === "live" ? "var(--success)" : "var(--stone)"
        }">${statusLabel(project.status)}</span>
        <button type="button" class="panel-close" data-select="network" aria-label="Return to network overview">x</button>
      </div>
      <div class="feature-art" style="--project-color: ${project.color}">
        <img src="${assetPath(project.icon)}" alt="" />
      </div>
      <div class="panel-copy">
        <p class="panel-kicker">${escapeHtml(project.domainLabel)}</p>
        <h2 class="panel-title">${escapeHtml(project.name)}</h2>
        <p class="panel-description">${escapeHtml(project.description)}</p>
      </div>
      <div class="principles">
        <span>${escapeHtml(project.tagline)}</span>
        <span>${escapeHtml(project.status === "live" ? "Active destination" : "Network preview")}</span>
      </div>
      <div class="cta-stack">
        ${ctas || comingSoon}
      </div>
    </div>
  `;
}

function renderPanel(): string {
  const project = getProject(selected);
  return project ? renderProjectPanel(project) : renderCorePanel();
}

function renderShell(): void {
  mount.innerHTML = `
    <div class="app-shell" style="--project-color: var(--accent)" data-selected="network">
      <canvas class="starfield" id="starfield" aria-hidden="true"></canvas>

      <header class="topbar">
        <button type="button" class="brand-button" data-select="network" aria-label="Show Peaceful Vanilla Network overview">
          <img class="brand-mark" src="${assetPath(networkCore.icon)}" alt="" />
          <span class="brand-copy">
            <span class="brand-title">Peaceful Vanilla</span>
            <span class="brand-subtitle">Network</span>
          </span>
        </button>
        <nav class="mini-nav" aria-label="Network projects">
          ${renderNav()}
        </nav>
        <p class="top-kicker">${escapeHtml(networkCore.tagline)}</p>
      </header>

      <main class="command-deck">
        <section class="universe-card" aria-labelledby="network-title">
          <div class="hero-copy">
            <p class="eyebrow">Public home - ecosystem map</p>
            <h1 id="network-title">Connected worlds for peaceful communities.</h1>
            <p class="hero-lead">
              Peaceful Vanilla Network is the gravitational center for our servers,
              community spaces, self-hosted communication, and future experiments.
            </p>
          </div>

          <div class="orbit-map" id="orbit-map" tabindex="0" role="application" aria-label="Interactive Peaceful Vanilla Network orbit">
            ${renderOrbitRings()}
            <button type="button" class="core-button" data-select="network" aria-label="Show network overview">
              <span class="core-aura" aria-hidden="true"></span>
              <img src="${assetPath(networkCore.icon)}" alt="" />
              <span class="core-label">
                <strong>Peaceful Vanilla</strong>
                <span>Network core</span>
              </span>
            </button>
            <div class="project-layer" id="project-layer">
              ${renderProjectNodes()}
            </div>
          </div>

          <div class="drag-hint" aria-hidden="true">Use arrows or click an orbit</div>
          <div class="proof-rail" aria-label="Network proof points">${renderProofItems()}</div>
        </section>

        <aside class="detail-panel" id="detail-panel" aria-live="polite">
          ${renderPanel()}
        </aside>
      </main>

      <footer class="footer-note">Static GitHub Pages build - no backend</footer>
    </div>
  `;
}

function setSelection(next: Selection): void {
  selected = next;

  const project = getProject(selected);
  const shell = document.querySelector<HTMLElement>(".app-shell");
  const panel = document.querySelector<HTMLElement>("#detail-panel");
  const line = document.querySelector<SVGLineElement>("#orbit-line");
  const projectColor = project?.color ?? "#ff9500";

  shell?.setAttribute("data-selected", selected);
  shell?.style.setProperty("--project-color", projectColor);
  panel?.style.setProperty("--project-color", projectColor);

  document.querySelectorAll<HTMLElement>("[data-select]").forEach((element) => {
    const isActive = element.dataset.select === selected;
    element.classList.toggle("is-active", isActive);
    if (element instanceof HTMLButtonElement && element.classList.contains("project-node")) {
      element.setAttribute("aria-pressed", String(isActive));
      element.classList.toggle("is-dimmed", selected !== "network" && !isActive);
    }
  });

  document.querySelectorAll<SVGElement>("[data-ring]").forEach((ring) => {
    const isActive = ring.dataset.ring === selected;
    ring.classList.toggle("is-active", isActive);
    ring.style.setProperty("--project-color", projectColor);
  });

  if (line) {
    line.classList.toggle("is-visible", selected !== "network");
    line.style.setProperty("--project-color", projectColor);
  }

  if (panel) {
    panel.innerHTML = renderPanel();
  }
}

function selectByOffset(offset: number): void {
  const currentIndex = selectionOrder.indexOf(selected);
  const nextIndex = (currentIndex + offset + selectionOrder.length) % selectionOrder.length;
  const nextSelection = selectionOrder[nextIndex];

  if (nextSelection) {
    setSelection(nextSelection);
  }
}

function wireInteractions(): void {
  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-select]") : null;
    const next = target?.dataset.select as Selection | undefined;

    if (next && selectionOrder.includes(next)) {
      setSelection(next);
    }
  });

  const orbitMap = document.querySelector<HTMLElement>("#orbit-map");
  orbitMap?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      selectByOffset(1);
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      selectByOffset(-1);
    }

    if (event.key === "Escape" || event.key === "Home") {
      event.preventDefault();
      setSelection("network");
    }
  });
}

function animateOrbit(): void {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const line = document.querySelector<SVGLineElement>("#orbit-line");

  function frame(time: number): void {
    const speedFactor = selected === "network" ? 1 : 0.18;
    const selectedProject = getProject(selected);

    orbitProjects.forEach((project) => {
      const button = document.querySelector<HTMLElement>(`[data-project-id="${project.id}"]`);
      const animatedAngle = reducedMotion
        ? project.initialAngle
        : project.initialAngle + time * project.orbitSpeed * speedFactor;
      const radiusX = project.orbitRadius;
      const radiusY = project.orbitRadius * 0.64;
      const x = 50 + Math.cos(animatedAngle) * radiusX;
      const y = 50 + Math.sin(animatedAngle) * radiusY;

      button?.style.setProperty("--x", `${x.toFixed(3)}%`);
      button?.style.setProperty("--y", `${y.toFixed(3)}%`);

      if (line && selectedProject?.id === project.id) {
        line.setAttribute("x1", "450");
        line.setAttribute("y1", "325");
        line.setAttribute("x2", ((x / 100) * 900).toFixed(1));
        line.setAttribute("y2", ((y / 100) * 650).toFixed(1));
      }
    });

    window.requestAnimationFrame(frame);
  }

  window.requestAnimationFrame(frame);
}

interface Star {
  x: number;
  y: number;
  size: number;
  depth: number;
  tone: number;
  twinkle: number;
}

function createStars(count: number): Star[] {
  return Array.from({ length: count }, () => ({
    x: Math.random(),
    y: Math.random(),
    size: 0.45 + Math.random() * 1.9,
    depth: 0.25 + Math.random() * 1.6,
    tone: Math.random(),
    twinkle: Math.random() * Math.PI * 2
  }));
}

function startStarfield(): void {
  const canvas = document.querySelector<HTMLCanvasElement>("#starfield");
  const context = canvas?.getContext("2d");

  if (!canvas || !context) {
    return;
  }

  const starCanvas = canvas;
  const starContext = context;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const stars = createStars(190);
  let width = 0;
  let height = 0;
  let pointerX = 0.5;
  let pointerY = 0.5;

  function resize(): void {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    starCanvas.width = Math.floor(width * dpr);
    starCanvas.height = Math.floor(height * dpr);
    starCanvas.style.width = `${width}px`;
    starCanvas.style.height = `${height}px`;
    starContext.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw(time: number): void {
    starContext.clearRect(0, 0, width, height);

    const gradient = starContext.createRadialGradient(width * 0.5, height * 0.45, 0, width * 0.5, height * 0.45, width * 0.72);
    gradient.addColorStop(0, "rgba(255, 149, 0, 0.13)");
    gradient.addColorStop(0.34, "rgba(80, 124, 190, 0.06)");
    gradient.addColorStop(1, "rgba(3, 5, 10, 0)");
    starContext.fillStyle = gradient;
    starContext.fillRect(0, 0, width, height);

    for (const star of stars) {
      const driftX = (pointerX - 0.5) * star.depth * 34;
      const driftY = (pointerY - 0.5) * star.depth * 22;
      const twinkle = reducedMotion ? 0.75 : 0.55 + Math.sin(time * 0.0012 + star.twinkle) * 0.28;
      const x = star.x * width + driftX;
      const y = star.y * height + driftY;
      const color = star.tone > 0.82 ? "255, 149, 0" : star.tone > 0.66 ? "80, 124, 190" : "247, 249, 252";

      starContext.beginPath();
      starContext.fillStyle = `rgba(${color}, ${Math.max(0.18, twinkle)})`;
      starContext.arc(x, y, star.size, 0, Math.PI * 2);
      starContext.fill();
    }
  }

  function tick(time: number): void {
    draw(time);
    window.requestAnimationFrame(tick);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX / Math.max(window.innerWidth, 1);
    pointerY = event.clientY / Math.max(window.innerHeight, 1);
  });

  resize();

  if (reducedMotion) {
    draw(0);
    return;
  }

  window.requestAnimationFrame(tick);
}

renderShell();
wireInteractions();
setSelection("network");
animateOrbit();
startStarfield();
