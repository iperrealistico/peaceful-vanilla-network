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
const compactOrbitSlots: Record<ProjectId, { x: number; y: number }> = {
  club: { x: 14, y: 31 },
  hytale: { x: 50, y: 21 },
  chat: { x: 88, y: 43 },
  space: { x: 14, y: 78 },
  fortrust: { x: 86, y: 78 }
};

const icons: Record<Selection, string> = {
  network:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4.5 7.5V16.5L12 21l7.5-4.5V7.5L12 3Z"/><path d="M12 3v18M4.5 7.5 12 12l7.5-4.5M4.5 16.5 12 12l7.5 4.5"/></svg>',
  club:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 14.5 12 4l8 10.5"/><path d="M6.5 12.5V20h11v-7.5"/><path d="M9 20v-5h6v5"/></svg>',
  hytale:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4v16M18 4v16M6 12h12"/><path d="M8.5 4h7M8.5 20h7"/></svg>',
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
            <p class="eyebrow">Live network orbit</p>
            <h1 id="network-title">Community, fun, privacy, and connection.</h1>
            <p class="hero-lead">
              A family-and-friends driven network for gaming worlds, private chat,
              community spaces, and small-business experiments built far from big-corp logic.
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

          <div class="drag-hint" aria-hidden="true">Click a planet or use arrow keys</div>
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
  const pointer = {
    active: false,
    x: 0,
    y: 0
  };

  type OrbitLayoutNode = {
    button: HTMLElement;
    project: OrbitProject;
    x: number;
    y: number;
    width: number;
    height: number;
    baseX: number;
    baseY: number;
  };

  type OrbitSafeBounds = {
    top: number;
    bottom: number;
  };

  function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }

  function keepInsideMap(node: OrbitLayoutNode, width: number, height: number, safeBounds: OrbitSafeBounds): void {
    const margin = 8;
    const halfWidth = node.width / 2;
    const halfHeight = node.height / 2;

    if (width > node.width + margin * 2) {
      node.x = clamp(node.x, halfWidth + margin, width - halfWidth - margin);
    }

    if (height > node.height + margin * 2) {
      const minY = halfHeight + margin + safeBounds.top;
      const maxY = height - halfHeight - margin - safeBounds.bottom;
      node.y = minY <= maxY ? clamp(node.y, minY, maxY) : height / 2;
    }
  }

  function pushFromCore(node: OrbitLayoutNode, width: number, height: number): void {
    if (width < 760 && node.project.id === "hytale") {
      return;
    }

    const core = document.querySelector<HTMLElement>(".core-button");
    const coreRadius = (core?.offsetWidth ?? Math.min(width, height) * 0.24) / 2;
    const nodeRadius = Math.max(node.width, node.height) / 2;
    const isCompactSelectedNode = width < 760 && node.project.id === selected;
    const minDistance = coreRadius + nodeRadius + (isCompactSelectedNode ? 18 : 90);
    const centerX = width / 2;
    const centerY = height / 2;
    let deltaX = node.x - centerX;
    let deltaY = node.y - centerY;
    let distance = Math.hypot(deltaX, deltaY);

    if (distance < 0.001) {
      deltaX = Math.cos(node.project.initialAngle);
      deltaY = Math.sin(node.project.initialAngle);
      distance = 1;
    }

    if (distance < minDistance) {
      const push = minDistance - distance;
      node.x += (deltaX / distance) * push;
      node.y += (deltaY / distance) * push;
    }

    const protectedWidth = (core?.offsetWidth ?? Math.min(width, height) * 0.24) + 164;
    const protectedHeight = (core?.offsetHeight ?? Math.min(width, height) * 0.24) + 126;
    const boxOverlapX = protectedWidth / 2 + node.width / 2 - Math.abs(deltaX);
    const boxOverlapY = protectedHeight / 2 + node.height / 2 - Math.abs(deltaY);

    if (boxOverlapX > 0 && boxOverlapY > 0) {
      const useHorizontalPush = Math.abs(deltaX) > coreRadius * 0.22 || boxOverlapX < boxOverlapY;

      if (useHorizontalPush) {
        node.x += (deltaX >= 0 ? 1 : -1) * boxOverlapX;
      } else {
        node.y += (deltaY >= 0 ? 1 : -1) * boxOverlapY;
      }
    }
  }

  function resolveCollisions(nodes: OrbitLayoutNode[], width: number, height: number, safeBounds: OrbitSafeBounds): void {
    const iterations = 8;

    for (let iteration = 0; iteration < iterations; iteration += 1) {
      for (const node of nodes) {
        pushFromCore(node, width, height);
        keepInsideMap(node, width, height, safeBounds);
      }

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const first = nodes[i];
          const second = nodes[j];

          if (!first || !second) {
            continue;
          }

          let deltaX = second.x - first.x;
          let deltaY = second.y - first.y;
          if (Math.hypot(deltaX, deltaY) < 0.001) {
            const fallbackAngle = (i / Math.max(nodes.length, 1)) * Math.PI * 2;
            deltaX = Math.cos(fallbackAngle);
            deltaY = Math.sin(fallbackAngle);
          }

          const overlapX = first.width / 2 + second.width / 2 + 24 - Math.abs(deltaX);
          const overlapY = first.height / 2 + second.height / 2 + 24 - Math.abs(deltaY);

          if (overlapX > 0 && overlapY > 0) {
            const selectedPair = first.project.id === selected || second.project.id === selected;
            const sameSideColumn =
              !selectedPair &&
              ((first.x > width * 0.62 && second.x > width * 0.62) ||
                (first.x < width * 0.38 && second.x < width * 0.38));

            if (selectedPair || (!sameSideColumn && overlapX < overlapY)) {
              const directionX = deltaX >= 0 ? 1 : -1;
              const firstShare = first.project.id === selected ? 0.08 : 1.08;
              const secondShare = second.project.id === selected ? 0.08 : 1.08;
              first.x -= directionX * overlapX * firstShare;
              second.x += directionX * overlapX * secondShare;
            } else {
              const directionY = deltaY >= 0 ? 1 : -1;
              first.y -= directionY * (overlapY / 2);
              second.y += directionY * (overlapY / 2);
            }
          }
        }
      }

      for (const node of nodes) {
        pushFromCore(node, width, height);
        keepInsideMap(node, width, height, safeBounds);
      }
    }

    const selectedNode = nodes.find((node) => node.project.id === selected);

    if (selectedNode) {
      for (const node of nodes) {
        if (node === selectedNode) {
          continue;
        }

        const deltaX = node.x - selectedNode.x;
        const deltaY = node.y - selectedNode.y;
        const overlapX = node.width / 2 + selectedNode.width / 2 + 30 - Math.abs(deltaX);
        const overlapY = node.height / 2 + selectedNode.height / 2 + 30 - Math.abs(deltaY);
        const visuallyTooClose = Math.abs(deltaX) < width * 0.28 && Math.abs(deltaY) < height * 0.24;

        if ((overlapX > 0 && overlapY > 0) || visuallyTooClose) {
          const directionAwayFromEdge = selectedNode.x > width / 2 ? -1 : 1;
          node.x = selectedNode.x + directionAwayFromEdge * (node.width / 2 + selectedNode.width / 2 + 34);
          pushFromCore(node, width, height);
          keepInsideMap(node, width, height, safeBounds);
        }
      }
    }
  }

  window.addEventListener("pointermove", (event) => {
    pointer.active = true;
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  });

  window.addEventListener("pointerleave", () => {
    pointer.active = false;
  });

  function frame(time: number): void {
    if (!orbitMap) {
      return;
    }

    const speedFactor = selected === "network" ? 1 : 0.18;
    const mapRect = orbitMap.getBoundingClientRect();
    const mapWidth = Math.max(mapRect.width, 1);
    const mapHeight = Math.max(mapRect.height, 1);
    const heroCopy = document.querySelector<HTMLElement>(".hero-copy");
    const detailPanel = document.querySelector<HTMLElement>(".detail-panel");
    const heroRect = heroCopy?.getBoundingClientRect();
    const panelRect = detailPanel?.getBoundingClientRect();
    const mobileSafeBounds =
      window.innerWidth < 760
        ? {
            top: heroRect ? clamp(heroRect.bottom - mapRect.top + 10, 0, mapHeight * 0.34) : 0,
            bottom: panelRect ? clamp(mapRect.bottom - panelRect.top + 10, 0, mapHeight * 0.34) : 0
          }
        : { top: 0, bottom: 0 };
    const compactOrbitScale = mapWidth < 760 ? 0.84 : 1;
    const orbitRadiusBase = Math.min(mapWidth, mapHeight) * 0.01 * compactOrbitScale;
    const nodes: OrbitLayoutNode[] = [];

    orbitProjects.forEach((project) => {
      const button = document.querySelector<HTMLElement>(`[data-project-id="${project.id}"]`);
      const ring = document.querySelector<SVGEllipseElement>(`[data-ring="${project.id}"]`);

      if (!button) {
        return;
      }

      const animatedAngle = reducedMotion
        ? project.initialAngle
        : project.initialAngle + time * project.orbitSpeed * speedFactor;
      const isCompactOrbit = mapWidth < 760;
      const radius = project.orbitRadius * orbitRadiusBase;
      const compactSlot = compactOrbitSlots[project.id];
      const compactWobble = reducedMotion ? 0 : Math.sin(time * project.orbitSpeed * 1.7 + project.initialAngle) * 2.2;
      const baseX = isCompactOrbit
        ? ((compactSlot.x + Math.cos(project.initialAngle) * compactWobble) / 100) * mapWidth
        : mapWidth / 2 + Math.cos(animatedAngle) * radius;
      const baseY = isCompactOrbit
        ? ((compactSlot.y + Math.sin(project.initialAngle) * compactWobble) / 100) * mapHeight
        : mapHeight / 2 + Math.sin(animatedAngle) * radius;
      const selectedScale = selected === project.id ? (isCompactOrbit ? 1.04 : 1.18) : 1;
      const visualHalo = selected === project.id ? (isCompactOrbit ? 44 : 64) : 38;
      const width = (button.offsetWidth || 120) * selectedScale + visualHalo;
      const height = (button.offsetHeight || 148) * selectedScale + visualHalo;
      let x = baseX;
      let y = baseY;

      if (pointer.active && !reducedMotion) {
        const pointerX = pointer.x - mapRect.left;
        const pointerY = pointer.y - mapRect.top;
        const deltaX = pointerX - baseX;
        const deltaY = pointerY - baseY;
        const distance = Math.hypot(deltaX, deltaY);
        const influenceRange = Math.max(180, Math.min(mapWidth, mapHeight) * 0.42);
        const influence = Math.max(0, 1 - distance / influenceRange) ** 2;
        const pull = influence * Math.min(32, Math.min(mapWidth, mapHeight) * 0.045);

        if (distance > 0.001) {
          x += (deltaX / distance) * pull;
          y += (deltaY / distance) * pull;
        }
      }

      if (ring) {
        ring.setAttribute("rx", ((radius / mapWidth) * 900).toFixed(1));
        ring.setAttribute("ry", ((radius / mapHeight) * 650).toFixed(1));
      }

      nodes.push({ button, project, x, y, width, height, baseX, baseY });
    });

    resolveCollisions(nodes, mapWidth, mapHeight, mobileSafeBounds);

    for (const node of nodes) {
      const xPercent = (node.x / mapWidth) * 100;
      const yPercent = (node.y / mapHeight) * 100;
      const connector = document.querySelector<SVGLineElement>(`[data-connector="${node.project.id}"]`);

      node.button.style.setProperty("--x", `${xPercent.toFixed(3)}%`);
      node.button.style.setProperty("--y", `${yPercent.toFixed(3)}%`);

      if (connector) {
        connector.setAttribute("x1", "450");
        connector.setAttribute("y1", "325");
        connector.setAttribute("x2", ((xPercent / 100) * 900).toFixed(1));
        connector.setAttribute("y2", ((yPercent / 100) * 650).toFixed(1));
      }
    }

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
