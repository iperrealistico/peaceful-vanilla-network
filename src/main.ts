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

function renderOrbitRings(): string {
  const rings = orbitProjects
    .map((project) => {
      const radiusX = (project.orbitRadius / 100) * 900;
      const radiusY = (project.orbitRadius / 100) * 650;

      return `<ellipse class="orbit-ring" data-ring="${project.id}" cx="450" cy="325" rx="${radiusX.toFixed(
        1
      )}" ry="${radiusY.toFixed(1)}" style="--project-color: ${project.color}" />`;
    })
    .join("");
  const connectors = orbitProjects
    .map(
      (project) =>
        `<line class="orbit-line" data-connector="${project.id}" x1="450" y1="325" x2="450" y2="325" style="--project-color: ${project.color}" />`
    )
    .join("");

  return `
    <svg class="orbit-svg" viewBox="0 0 900 650" preserveAspectRatio="none" aria-hidden="true">
      ${connectors}
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
      <div class="feature-art" data-project-id="${project.id}" style="--project-color: ${project.color}">
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

      <main class="command-deck">
        <section class="universe-card" aria-labelledby="network-title">
          <h1 id="network-title" class="visually-hidden">Peaceful Vanilla Network</h1>

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
        </section>

        <aside class="detail-panel" id="detail-panel" aria-live="polite">
          ${renderPanel()}
        </aside>
      </main>
    </div>
  `;
}

function setSelection(next: Selection): void {
  selected = next;

  const project = getProject(selected);
  const shell = document.querySelector<HTMLElement>(".app-shell");
  const panel = document.querySelector<HTMLElement>("#detail-panel");
  const projectColor = project?.color ?? "#ff9500";

  shell?.setAttribute("data-selected", selected);
  shell?.style.setProperty("--project-color", projectColor);
  panel?.style.setProperty("--project-color", projectColor);

  document.querySelectorAll<HTMLElement>("[data-select]").forEach((element) => {
    const isActive = element.dataset.select === selected;
    element.classList.toggle("is-active", isActive);
    if (element instanceof HTMLButtonElement && element.classList.contains("project-node")) {
      element.setAttribute("aria-pressed", String(isActive));
      element.classList.remove("is-dimmed");
    }
  });

  document.querySelectorAll<SVGElement>("[data-ring]").forEach((ring) => {
    const isActive = ring.dataset.ring === selected;
    ring.classList.toggle("is-active", isActive);
    ring.style.setProperty("--project-color", projectColor);
  });

  document.querySelectorAll<SVGElement>("[data-connector]").forEach((connector) => {
    const isActive = connector.dataset.connector === selected;
    connector.classList.toggle("is-active", isActive);
  });

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
  const orbitMap = document.querySelector<HTMLElement>("#orbit-map");
  const displayedPositions = new Map<ProjectId, { x: number; y: number }>();
  let orbitTime = 0;
  let previousFrameTime: number | undefined;

  function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }

  function frame(time: number): void {
    if (!orbitMap) {
      return;
    }

    const delta = previousFrameTime === undefined ? 16.67 : Math.min(time - previousFrameTime, 40);
    previousFrameTime = time;
    orbitTime += reducedMotion ? 0 : delta;

    const speedFactor = 1;
    const mapRect = orbitMap.getBoundingClientRect();
    const mapWidth = Math.max(mapRect.width, 1);
    const mapHeight = Math.max(mapRect.height, 1);
    const core = document.querySelector<HTMLElement>(".core-button");
    const coreRadius = (core?.offsetWidth ?? Math.min(mapWidth, mapHeight) * 0.24) / 2;
    const centerX = mapWidth / 2;
    const centerY = mapHeight / 2;
    const edgeMargin = mapWidth < 760 ? 10 : 20;
    const coreMargin = mapWidth < 760 ? 14 : 32;
    const compactOrbitScale = mapWidth < 760 ? 0.84 : 1;
    const orbitRadiusBase = Math.min(mapWidth, mapHeight) * 0.01 * compactOrbitScale;

    orbitProjects.forEach((project) => {
      const button = document.querySelector<HTMLElement>(`[data-project-id="${project.id}"]`);
      const ring = document.querySelector<SVGEllipseElement>(`[data-ring="${project.id}"]`);

      if (!button) {
        return;
      }

      const isCompactOrbit = mapWidth < 760;
      const animatedAngle = project.initialAngle + orbitTime * project.orbitSpeed * speedFactor;
      const orbitSquash = isCompactOrbit ? 0.78 : 1;
      const selectedScale = selected === project.id ? (isCompactOrbit ? 1.04 : 1.18) : 1;
      const visualHalo = selected === project.id ? (isCompactOrbit ? 44 : 64) : 38;
      const width = (button.offsetWidth || 120) * selectedScale + visualHalo;
      const height = (button.offsetHeight || 148) * selectedScale + visualHalo;
      const nodeRadius = Math.max(width, height) / 2;
      const maxRadiusX = Math.max(0, centerX - width / 2 - edgeMargin);
      const maxRadiusY = Math.max(0, (centerY - height / 2 - edgeMargin) / orbitSquash);
      const maxRadius = Math.min(maxRadiusX, maxRadiusY);
      const minRadius = Math.min(maxRadius, coreRadius + nodeRadius + coreMargin);
      const radius = clamp(project.orbitRadius * orbitRadiusBase, minRadius, maxRadius);
      const x = centerX + Math.cos(animatedAngle) * radius;
      const y = centerY + Math.sin(animatedAngle) * radius * orbitSquash;

      if (ring) {
        ring.setAttribute("rx", ((radius / mapWidth) * 900).toFixed(1));
        ring.setAttribute("ry", (((radius * orbitSquash) / mapHeight) * 650).toFixed(1));
      }

      const previous = displayedPositions.get(project.id);
      const smoothing = reducedMotion || !previous ? 1 : Math.min(1, delta / 90);
      const displayX = previous ? previous.x + (x - previous.x) * smoothing : x;
      const displayY = previous ? previous.y + (y - previous.y) * smoothing : y;
      const xPercent = (displayX / mapWidth) * 100;
      const yPercent = (displayY / mapHeight) * 100;
      const connector = document.querySelector<SVGLineElement>(`[data-connector="${project.id}"]`);

      displayedPositions.set(project.id, { x: displayX, y: displayY });
      button.style.setProperty("--x", `${xPercent.toFixed(3)}%`);
      button.style.setProperty("--y", `${yPercent.toFixed(3)}%`);

      if (connector) {
        connector.setAttribute("x1", "450");
        connector.setAttribute("y1", "325");
        connector.setAttribute("x2", ((xPercent / 100) * 900).toFixed(1));
        connector.setAttribute("y2", ((yPercent / 100) * 650).toFixed(1));
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
  let targetPointerX = 0.5;
  let targetPointerY = 0.5;

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
    pointerX += (targetPointerX - pointerX) * 0.06;
    pointerY += (targetPointerY - pointerY) * 0.06;

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
    targetPointerX = event.clientX / Math.max(window.innerWidth, 1);
    targetPointerY = event.clientY / Math.max(window.innerHeight, 1);
  });
  window.addEventListener("pointerleave", () => {
    targetPointerX = 0.5;
    targetPointerY = 0.5;
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
