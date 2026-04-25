import { networkCore, orbitProjects, type OrbitProject, type ProjectId } from "./data/projects";
import "./styles/global.css";

type Selection = "network" | ProjectId;

interface OrbitRuntime {
  project: OrbitProject;
  button: HTMLButtonElement;
  ring: SVGEllipseElement | null;
  connector: SVGLineElement | null;
  slotAngle: number;
  radius: number;
  collisionRadius: number;
  x: number;
  y: number;
}

interface OrbitLayout {
  width: number;
  height: number;
  offsetLeft: number;
  offsetTop: number;
  centerX: number;
  centerY: number;
  coreRadius: number;
  orbitSquash: number;
  edgeMargin: number;
  coreMargin: number;
  compact: boolean;
}

interface Star {
  x: number;
  y: number;
  size: number;
  tone: number;
  twinkle: number;
  speed: number;
}

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Missing #app mount point");
}

const mount = app;
const baseUrl = import.meta.env.BASE_URL;
const selectionOrder: Selection[] = ["network", ...orbitProjects.map((project) => project.id)];
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const constellationSpeed = 0.000088;
const collisionIterations = 3;
const selectionPauseMs = 260;
const scrollPauseMs = 140;

let selected: Selection = "network";
let panelExpanded = false;
let lastRevealSourceRect: DOMRectReadOnly | null = null;
let shellElement: HTMLElement | null = null;
let detailPanelElement: HTMLElement | null = null;
let orbitMapElement: HTMLElement | null = null;
let coreButtonElement: HTMLButtonElement | null = null;
let selectedProjectLayerElement: HTMLElement | null = null;
let selectedProjectClone: HTMLElement | null = null;
let orbitRuntime: OrbitRuntime[] = [];
let layoutDirty = true;
let sceneFrozen = false;
let lockedScrollY = 0;
let motionPauseUntil = 0;

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

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function pauseSceneMotion(durationMs: number = selectionPauseMs): void {
  motionPauseUntil = Math.max(motionPauseUntil, performance.now() + durationMs);
}

function isSceneMotionPaused(time: number): boolean {
  return sceneFrozen || document.hidden || time < motionPauseUntil;
}

function statusLabel(status: OrbitProject["status"]): string {
  return status === "live" ? "Live" : "Coming soon";
}

function getProject(id: Selection): OrbitProject | undefined {
  return orbitProjects.find((project) => project.id === id);
}

function isProjectSelection(value: Selection): value is ProjectId {
  return value !== "network";
}

function getSelectionTrigger(value: Selection): HTMLElement | null {
  if (value === "network") {
    return coreButtonElement;
  }

  return orbitRuntime.find((runtime) => runtime.project.id === value)?.button ?? null;
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

function renderNetworkStory(): string {
  return `
    <section class="network-story" aria-labelledby="network-story-title">
      <div class="story-title-block">
        <p class="story-kicker">${escapeHtml(networkCore.tagline)}</p>
        <h2 id="network-story-title">${escapeHtml(networkCore.name)}</h2>
      </div>

      <article class="network-story-card" aria-label="${escapeHtml(networkCore.name)} overview">
        <div class="story-card-copy">
          <p class="story-eyebrow">What it is</p>
          <h3>A small independent ecosystem for community, play, privacy, and connection.</h3>
          <p>
            ${escapeHtml(networkCore.description)}
          </p>
        </div>

        <div class="story-feature-grid" aria-label="What Peaceful Vanilla Network does">
          <section>
            <span>01</span>
            <h4>Connects the projects</h4>
            <p>Links Club, Hytale, Chat, Space, and experiments into one discoverable network.</p>
          </section>
          <section>
            <span>02</span>
            <h4>Protects the culture</h4>
            <p>Keeps the family-and-friends, no big-corp, no pay-to-win philosophy visible.</p>
          </section>
          <section>
            <span>03</span>
            <h4>Builds privacy-first spaces</h4>
            <p>Favors self-hosted, low-friction community tools over invasive platform lock-in.</p>
          </section>
          <section>
            <span>04</span>
            <h4>Gives ideas room</h4>
            <p>Lets new web layers and experiments launch without blurring the core network.</p>
          </section>
        </div>

        <div class="story-proof-grid" aria-label="Network proof points">
          ${renderProofItems()}
        </div>
      </article>
    </section>
  `;
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
      <div class="panel-copy">
        <p class="panel-kicker">${escapeHtml(networkCore.name)}</p>
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
    <div class="app-shell" style="--project-color: var(--accent)" data-selected="network" data-panel-expanded="false">
      <canvas class="starfield" id="starfield" aria-hidden="true"></canvas>

      <main class="command-deck">
        <section class="universe-card" aria-labelledby="network-title">
          <h1 id="network-title" class="visually-hidden">${escapeHtml(networkCore.name)}</h1>

          <div class="orbit-map" id="orbit-map" tabindex="0" role="application" aria-label="Interactive Peaceful Vanilla Network orbit">
            ${renderOrbitRings()}
            <button type="button" class="core-button" data-select="network" aria-label="Show ${escapeHtml(networkCore.name)} overview">
              <span class="core-aura" aria-hidden="true"></span>
              <img src="${assetPath(networkCore.icon)}" alt="" />
              <span class="core-label">
                <strong>${escapeHtml(networkCore.name.toUpperCase())}</strong>
                <span>${escapeHtml(networkCore.tagline)}</span>
              </span>
            </button>
            <div class="project-layer" id="project-layer">
              ${renderProjectNodes()}
            </div>
          </div>
        </section>

        <aside class="detail-panel is-collapsed" id="detail-panel" aria-live="polite" aria-expanded="false" aria-hidden="true" inert>
          ${renderPanel()}
        </aside>
      </main>

      ${renderNetworkStory()}

      <div class="selected-project-layer" aria-hidden="true"></div>
    </div>
  `;
}

function cacheRuntimeElements(): void {
  shellElement = mount.querySelector<HTMLElement>(".app-shell");
  detailPanelElement = mount.querySelector<HTMLElement>("#detail-panel");
  orbitMapElement = mount.querySelector<HTMLElement>("#orbit-map");
  coreButtonElement = mount.querySelector<HTMLButtonElement>(".core-button");
  selectedProjectLayerElement = mount.querySelector<HTMLElement>(".selected-project-layer");
  orbitRuntime = orbitProjects.map((project, index) => {
    const button = mount.querySelector<HTMLButtonElement>(`button[data-project-id="${project.id}"]`);

    if (!button) {
      throw new Error(`Missing orbit node for ${project.id}`);
    }

    return {
      project,
      button,
      ring: mount.querySelector<SVGEllipseElement>(`[data-ring="${project.id}"]`),
      connector: mount.querySelector<SVGLineElement>(`[data-connector="${project.id}"]`),
      slotAngle: -Math.PI / 2 + (index * Math.PI * 2) / orbitProjects.length,
      radius: 0,
      collisionRadius: 0,
      x: 0,
      y: 0
    };
  });
}

function setLayoutDirty(): void {
  layoutDirty = true;
}

function observeLayoutChanges(): void {
  window.addEventListener("resize", setLayoutDirty, { passive: true });
  window.addEventListener("orientationchange", setLayoutDirty, { passive: true });
  window.addEventListener(
    "scroll",
    () => {
      pauseSceneMotion(scrollPauseMs);
    },
    { passive: true }
  );

  if ("ResizeObserver" in window) {
    const resizeObserver = new ResizeObserver(setLayoutDirty);

    if (orbitMapElement) {
      resizeObserver.observe(orbitMapElement);
    }

    if (coreButtonElement) {
      resizeObserver.observe(coreButtonElement);
    }

    for (const runtime of orbitRuntime) {
      resizeObserver.observe(runtime.button);
    }
  }

  document.fonts?.ready.then(setLayoutDirty).catch(() => undefined);

  for (const image of mount.querySelectorAll<HTMLImageElement>("img")) {
    if (!image.complete) {
      image.addEventListener("load", setLayoutDirty, { once: true });
      image.addEventListener("error", setLayoutDirty, { once: true });
    }
  }
}

function getSourceRect(sourceElement: HTMLElement | undefined, next: Selection): DOMRectReadOnly | null {
  const source = sourceElement ?? getSelectionTrigger(next);
  return source?.getBoundingClientRect() ?? null;
}

function setPanelRevealOrigin(panel: HTMLElement, sourceRect: DOMRectReadOnly | null): void {
  const panelRect = panel.getBoundingClientRect();
  const fallbackX = panelRect.left + panelRect.width / 2;
  const fallbackY = panelRect.top + panelRect.height / 2;
  const sourceCenterX = sourceRect ? sourceRect.left + sourceRect.width / 2 : fallbackX;
  const sourceCenterY = sourceRect ? sourceRect.top + sourceRect.height / 2 : fallbackY;
  const panelCenterX = panelRect.left + panelRect.width / 2;
  const panelCenterY = panelRect.top + panelRect.height / 2;

  panel.style.setProperty("--reveal-origin-x", `${(sourceCenterX - panelRect.left).toFixed(1)}px`);
  panel.style.setProperty("--reveal-origin-y", `${(sourceCenterY - panelRect.top).toFixed(1)}px`);
  panel.style.setProperty("--panel-enter-x", `${(sourceCenterX - panelCenterX).toFixed(1)}px`);
  panel.style.setProperty("--panel-enter-y", `${(sourceCenterY - panelCenterY).toFixed(1)}px`);
}

function getSelectedShowcasePosition(layout: OrbitLayout): { x: number; y: number } {
  const panelRect = detailPanelElement?.getBoundingClientRect();
  const desktopRailOpen = panelExpanded && panelRect !== undefined && window.innerWidth >= 920;
  const sceneRight = desktopRailOpen ? panelRect.left : window.innerWidth;
  const sceneBottom = panelExpanded && panelRect !== undefined && window.innerWidth < 920 ? panelRect.top : window.innerHeight;
  const x = desktopRailOpen ? clamp(sceneRight * 0.5, 150, Math.max(150, sceneRight - 150)) : clamp(sceneRight * 0.5, 96, sceneRight - 96);
  const y = desktopRailOpen
    ? clamp(window.innerHeight * 0.5, 150, Math.max(150, window.innerHeight - 150))
    : clamp(sceneBottom * 0.5, 98, Math.max(98, sceneBottom - 112));

  return {
    x: Number.isFinite(x) ? x : layout.offsetLeft + layout.centerX,
    y: Number.isFinite(y) ? y : layout.offsetTop + layout.centerY
  };
}

function updateActiveElements(projectColor: string): void {
  coreButtonElement?.classList.toggle("is-active", selected === "network");

  for (const runtime of orbitRuntime) {
    const isActive = runtime.project.id === selected;
    runtime.button.classList.toggle("is-active", isActive);
    runtime.button.setAttribute("aria-pressed", String(isActive));
    runtime.ring?.classList.toggle("is-active", isActive);
    runtime.ring?.style.setProperty("--project-color", projectColor);
    runtime.connector?.classList.toggle("is-active", isActive);
    runtime.connector?.style.setProperty("--project-color", projectColor);
  }

  detailPanelElement?.querySelectorAll<HTMLElement>("[data-select]").forEach((element) => {
    element.classList.toggle("is-active", element.dataset.select === selected);
  });
}

function updatePanelState(sourceRect: DOMRectReadOnly | null): void {
  const panel = detailPanelElement;

  if (!panel) {
    return;
  }

  panel.innerHTML = renderPanel();
  panel.toggleAttribute("inert", !panelExpanded);
  panel.setAttribute("aria-expanded", String(panelExpanded));
  panel.setAttribute("aria-hidden", String(!panelExpanded));

  if (!panelExpanded) {
    panel.classList.remove("is-expanded");
    panel.classList.add("is-collapsed");
    return;
  }

  setPanelRevealOrigin(panel, sourceRect);
  panel.classList.remove("is-expanded");
  panel.classList.add("is-collapsed");
  panel.getBoundingClientRect();
  panel.classList.add("is-expanded");
  panel.classList.remove("is-collapsed");
}

function syncSelectedProjectClone(): void {
  const layer = selectedProjectLayerElement;
  const activeRuntime = isProjectSelection(selected)
    ? orbitRuntime.find((runtime) => runtime.project.id === selected)
    : undefined;

  if (!layer || !panelExpanded || !activeRuntime) {
    selectedProjectClone = null;
    selectedProjectLayerElement?.replaceChildren();
    selectedProjectLayerElement?.classList.remove("has-selection");
    return;
  }

  if (selectedProjectClone?.dataset.projectId !== activeRuntime.project.id) {
    const clone = activeRuntime.button.cloneNode(true) as HTMLButtonElement;
    clone.classList.add("selected-project-node", "is-active");
    clone.removeAttribute("data-select");
    clone.removeAttribute("aria-label");
    clone.setAttribute("tabindex", "-1");
    clone.setAttribute("aria-hidden", "true");
    clone.dataset.projectId = activeRuntime.project.id;
    clone.style.setProperty("--project-color", activeRuntime.project.color);
    layer.replaceChildren(clone);
    selectedProjectClone = clone;
  }

  layer.classList.add("has-selection");
}

function lockDocumentScroll(): void {
  if (document.body.classList.contains("is-detail-scroll-locked")) {
    return;
  }

  lockedScrollY = window.scrollY;
  document.documentElement.classList.add("is-detail-scroll-locked");
  document.body.classList.add("is-detail-scroll-locked");
  document.body.style.position = "fixed";
  document.body.style.top = `-${lockedScrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
}

function unlockDocumentScroll(): void {
  if (!document.body.classList.contains("is-detail-scroll-locked")) {
    return;
  }

  document.documentElement.classList.remove("is-detail-scroll-locked");
  document.body.classList.remove("is-detail-scroll-locked");
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  window.scrollTo(0, lockedScrollY);
}

function syncDocumentScrollLock(): void {
  if (panelExpanded) {
    lockDocumentScroll();
    return;
  }

  unlockDocumentScroll();
}

function setSelection(next: Selection, sourceElement?: HTMLElement): void {
  selected = next;
  panelExpanded = isProjectSelection(selected);
  sceneFrozen = panelExpanded;
  pauseSceneMotion(panelExpanded ? selectionPauseMs : 180);

  const project = getProject(selected);
  const projectColor = project?.color ?? "#ff9500";
  const sourceRect = panelExpanded ? getSourceRect(sourceElement, next) : lastRevealSourceRect;

  if (panelExpanded && sourceRect) {
    lastRevealSourceRect = sourceRect;
  }

  shellElement?.setAttribute("data-selected", selected);
  shellElement?.setAttribute("data-panel-expanded", String(panelExpanded));
  shellElement?.classList.toggle("is-focused", panelExpanded);
  shellElement?.classList.toggle("is-panel-expanded", panelExpanded);
  shellElement?.classList.toggle("is-scene-frozen", sceneFrozen);
  shellElement?.style.setProperty("--project-color", projectColor);
  detailPanelElement?.style.setProperty("--project-color", projectColor);

  updateActiveElements(projectColor);
  updatePanelState(sourceRect);
  syncSelectedProjectClone();
  syncDocumentScrollLock();
  setLayoutDirty();
}

function selectByOffset(offset: number): void {
  const currentIndex = selectionOrder.indexOf(selected);
  const nextIndex = (currentIndex + offset + selectionOrder.length) % selectionOrder.length;
  const nextSelection = selectionOrder[nextIndex];

  if (nextSelection) {
    setSelection(nextSelection, getSelectionTrigger(nextSelection) ?? undefined);
  }
}

function wireInteractions(): void {
  document.addEventListener("click", (event) => {
    const clickedElement = event.target instanceof Element ? event.target : null;
    const target = clickedElement?.closest<HTMLElement>("[data-select]") ?? null;
    const next = target?.dataset.select as Selection | undefined;

    if (next && selectionOrder.includes(next)) {
      setSelection(next, target ?? undefined);
      return;
    }

    if (panelExpanded && clickedElement && !detailPanelElement?.contains(clickedElement)) {
      setSelection("network", coreButtonElement ?? undefined);
    }
  });

  orbitMapElement?.addEventListener("keydown", (event) => {
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
      setSelection("network", coreButtonElement ?? undefined);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && panelExpanded) {
      event.preventDefault();
      setSelection("network", coreButtonElement ?? undefined);
    }
  });
  detailPanelElement?.addEventListener(
    "scroll",
    () => {
      pauseSceneMotion(scrollPauseMs);
    },
    { passive: true }
  );
}

function refreshOrbitLayout(): OrbitLayout | null {
  const orbitMap = orbitMapElement;

  if (!orbitMap) {
    return null;
  }

  const mapRect = orbitMap.getBoundingClientRect();
  const mapWidth = Math.max(orbitMap.clientWidth || mapRect.width, 1);
  const mapHeight = Math.max(orbitMap.clientHeight || mapRect.height, 1);
  const compact = mapWidth < 760;
  const centerX = mapWidth / 2;
  const centerY = mapHeight / 2;
  const coreRadius = (coreButtonElement?.offsetWidth ?? Math.min(mapWidth, mapHeight) * 0.24) / 2;
  const edgeMargin = compact ? 8 : 18;
  const coreMargin = compact ? 10 : 26;
  const orbitSquash = compact ? 1.18 : 0.88;
  const orbitRadiusBase = Math.min(mapWidth, mapHeight) * (compact ? 0.0108 : 0.0114);
  const layout: OrbitLayout = {
    width: mapWidth,
    height: mapHeight,
    offsetLeft: mapRect.left,
    offsetTop: mapRect.top,
    centerX,
    centerY,
    coreRadius,
    orbitSquash,
    edgeMargin,
    coreMargin,
    compact
  };

  for (const runtime of orbitRuntime) {
    const selectedScale = selected === runtime.project.id ? (compact ? 1.08 : 1.22) : 1;
    const halo = selected === runtime.project.id ? (compact ? 16 : 36) : compact ? 10 : 22;
    const nodeWidth = Math.max(runtime.button.offsetWidth, 1) * selectedScale + halo;
    const nodeHeight = Math.max(runtime.button.offsetHeight, 1) * selectedScale + halo;
    const nodeRadius = Math.max(nodeWidth, nodeHeight) / 2;
    const maxRadiusX = Math.max(0, centerX - nodeRadius - edgeMargin);
    const maxRadiusY = Math.max(0, (centerY - nodeRadius - edgeMargin) / orbitSquash);
    const maxRadius = Math.min(maxRadiusX, maxRadiusY);
    const minRadius = coreRadius + nodeRadius + coreMargin;
    const desiredRadius = runtime.project.orbitRadius * orbitRadiusBase;

    runtime.collisionRadius = nodeRadius;
    runtime.radius = maxRadius >= minRadius ? clamp(desiredRadius, minRadius, maxRadius) : maxRadius;

    if (runtime.ring) {
      runtime.ring.setAttribute("rx", ((runtime.radius / mapWidth) * 900).toFixed(1));
      runtime.ring.setAttribute("ry", (((runtime.radius * orbitSquash) / mapHeight) * 650).toFixed(1));
    }
  }

  layoutDirty = false;
  return layout;
}

function keepRuntimeInBounds(runtime: OrbitRuntime, layout: OrbitLayout): void {
  const minX = runtime.collisionRadius + layout.edgeMargin;
  const maxX = layout.width - runtime.collisionRadius - layout.edgeMargin;
  const minY = runtime.collisionRadius + layout.edgeMargin;
  const maxY = layout.height - runtime.collisionRadius - layout.edgeMargin;
  runtime.x = clamp(runtime.x, Math.min(minX, maxX), Math.max(minX, maxX));
  runtime.y = clamp(runtime.y, Math.min(minY, maxY), Math.max(minY, maxY));

  const dx = runtime.x - layout.centerX;
  const dy = runtime.y - layout.centerY;
  const minCoreDistance = layout.coreRadius + runtime.collisionRadius + layout.coreMargin;
  const distance = Math.hypot(dx, dy);

  if (distance < minCoreDistance) {
    const angle = distance > 0.001 ? Math.atan2(dy, dx) : runtime.slotAngle;
    runtime.x = layout.centerX + Math.cos(angle) * minCoreDistance;
    runtime.y = layout.centerY + Math.sin(angle) * minCoreDistance;
    runtime.x = clamp(runtime.x, Math.min(minX, maxX), Math.max(minX, maxX));
    runtime.y = clamp(runtime.y, Math.min(minY, maxY), Math.max(minY, maxY));
  }
}

function solveOrbitCollisions(layout: OrbitLayout): void {
  for (let iteration = 0; iteration < collisionIterations; iteration += 1) {
    for (const runtime of orbitRuntime) {
      keepRuntimeInBounds(runtime, layout);
    }

    for (let index = 0; index < orbitRuntime.length; index += 1) {
      const current = orbitRuntime[index];

      if (!current) {
        continue;
      }

      for (let nextIndex = index + 1; nextIndex < orbitRuntime.length; nextIndex += 1) {
        const next = orbitRuntime[nextIndex];

        if (!next) {
          continue;
        }

        const dx = next.x - current.x;
        const dy = next.y - current.y;
        const minDistance = current.collisionRadius + next.collisionRadius;
        const distance = Math.hypot(dx, dy);

        if (distance >= minDistance) {
          continue;
        }

        const fallbackAngle = current.slotAngle + (nextIndex - index) * 0.73;
        const normalX = distance > 0.001 ? dx / distance : Math.cos(fallbackAngle);
        const normalY = distance > 0.001 ? dy / distance : Math.sin(fallbackAngle);
        const push = (minDistance - distance) / 2 + 0.5;

        current.x -= normalX * push;
        current.y -= normalY * push;
        next.x += normalX * push;
        next.y += normalY * push;

        keepRuntimeInBounds(current, layout);
        keepRuntimeInBounds(next, layout);
      }
    }
  }
}

function applyOrbitPositions(layout: OrbitLayout): void {
  const activeRuntime = isProjectSelection(selected)
    ? orbitRuntime.find((runtime) => runtime.project.id === selected)
    : undefined;

  for (const runtime of orbitRuntime) {
    runtime.button.style.setProperty("--tx", `${runtime.x.toFixed(1)}px`);
    runtime.button.style.setProperty("--ty", `${runtime.y.toFixed(1)}px`);

    if (runtime.connector) {
      runtime.connector.setAttribute("x1", "450");
      runtime.connector.setAttribute("y1", "325");
      runtime.connector.setAttribute("x2", ((runtime.x / layout.width) * 900).toFixed(1));
      runtime.connector.setAttribute("y2", ((runtime.y / layout.height) * 650).toFixed(1));
    }
  }

  if (selectedProjectClone && activeRuntime && panelExpanded) {
    const showcase = getSelectedShowcasePosition(layout);
    selectedProjectClone.style.setProperty("--tx", `${showcase.x.toFixed(1)}px`);
    selectedProjectClone.style.setProperty("--ty", `${showcase.y.toFixed(1)}px`);
  }
}

function animateOrbit(): void {
  let orbitTime = 0;
  let previousFrameTime: number | undefined;
  let layout = refreshOrbitLayout();
  let previousDynamicScene = false;

  function frame(time: number): void {
    const needsLayoutRefresh = layoutDirty || !layout;

    if (needsLayoutRefresh) {
      layout = refreshOrbitLayout();
    }

    if (!layout) {
      window.requestAnimationFrame(frame);
      return;
    }

    const delta = previousFrameTime === undefined ? 16.67 : Math.min(time - previousFrameTime, 40);
    previousFrameTime = time;
    const dynamicScene = !reducedMotionQuery.matches && !isSceneMotionPaused(time);

    if (dynamicScene) {
      orbitTime += delta;

      const baseAngle = orbitTime * constellationSpeed;

      for (const runtime of orbitRuntime) {
        const angle = baseAngle + runtime.slotAngle;
        runtime.x = layout.centerX + Math.cos(angle) * runtime.radius;
        runtime.y = layout.centerY + Math.sin(angle) * runtime.radius * layout.orbitSquash;
      }

      solveOrbitCollisions(layout);
      applyOrbitPositions(layout);
    } else if (needsLayoutRefresh || dynamicScene !== previousDynamicScene) {
      applyOrbitPositions(layout);
    }

    previousDynamicScene = dynamicScene;
    window.requestAnimationFrame(frame);
  }

  window.requestAnimationFrame(frame);
}

function createStars(count: number): Star[] {
  return Array.from({ length: count }, () => ({
    x: Math.random(),
    y: Math.random(),
    size: 0.45 + Math.random() * 1.9,
    tone: Math.random(),
    twinkle: Math.random() * Math.PI * 2,
    speed: 0.0007 + Math.random() * 0.0012
  }));
}

function startStarfield(): void {
  const canvas = document.querySelector<HTMLCanvasElement>("#starfield");
  const context = canvas?.getContext("2d", { alpha: false }) ?? canvas?.getContext("2d");

  if (!canvas || !context) {
    return;
  }

  const starCanvas = canvas;
  const starContext = context;
  const stars = createStars(170);
  let width = 0;
  let height = 0;
  let lastDraw = 0;
  let previousDynamicScene = false;

  function resize(): void {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    starCanvas.width = Math.floor(width * dpr);
    starCanvas.height = Math.floor(height * dpr);
    starCanvas.style.width = `${width}px`;
    starCanvas.style.height = `${height}px`;
    starContext.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw(0);
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
      const color = star.tone > 0.82 ? "255, 149, 0" : star.tone > 0.66 ? "80, 124, 190" : "247, 249, 252";
      const twinkle = reducedMotionQuery.matches ? 0.72 : 0.45 + Math.sin(time * star.speed + star.twinkle) * 0.28;
      const alpha = clamp(twinkle + (star.tone > 0.78 ? 0.16 : 0), 0.16, 0.88);

      starContext.beginPath();
      starContext.fillStyle = `rgba(${color}, ${alpha.toFixed(3)})`;
      starContext.arc(star.x * width, star.y * height, star.size, 0, Math.PI * 2);
      starContext.fill();
    }
  }

  function tick(time: number): void {
    const dynamicScene = !reducedMotionQuery.matches && !isSceneMotionPaused(time);

    if (dynamicScene && time - lastDraw >= 40) {
      lastDraw = time;
      draw(time);
    } else if (!dynamicScene && previousDynamicScene) {
      draw(lastDraw || time);
    }

    previousDynamicScene = dynamicScene;
    window.requestAnimationFrame(tick);
  }

  window.addEventListener("resize", resize, { passive: true });
  resize();

  if (!reducedMotionQuery.matches) {
    window.requestAnimationFrame(tick);
  }
}

renderShell();
cacheRuntimeElements();
observeLayoutChanges();
wireInteractions();
setSelection("network");
animateOrbit();
startStarfield();
