(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();const u={name:"Peaceful Vanilla Network",tagline:"Connected worlds for peaceful communities.",icon:"assets/generated/peaceful-vanilla-network-icon.png",description:"Peaceful Vanilla Network is the home of servers, spaces, and tools built for long-term, privacy-conscious online communities.",principles:["Community-first","Privacy-aware","No pay-to-win culture","Built to last"],proof:[{label:"Since",value:"2019"},{label:"Players",value:"110K+"},{label:"Backups",value:"28TB"},{label:"Projects",value:"4"}]},m=[{id:"club",name:"Peaceful Vanilla Club",domainLabel:"peacefulvanilla.club",tagline:"The long-term gaming world.",description:"A friendly Minecraft SMP and future Hytale home with a stable world, cross-play support, community culture, and a clear no pay-to-win philosophy.",status:"live",icon:"assets/logos/peaceful-vanilla-club-favicon-80.png",color:"#ff9500",orbitRadius:33,orbitSpeed:12e-5,initialAngle:-2.72,primaryCta:{label:"Visit Club",href:"https://www.peacefulvanilla.club/"}},{id:"chat",name:"Peaceful Vanilla Chat",domainLabel:"peacefulvanilla.chat",tagline:"Privacy-first communication.",description:"A Matrix-powered, self-hosted communication platform where players, support teams, creators, and communities stay connected without face scans or personal documents.",status:"live",icon:"assets/logos/peaceful-vanilla-chat-icon-192.png",color:"#507cbe",orbitRadius:37,orbitSpeed:95e-6,initialAngle:-.42,primaryCta:{label:"Visit Chat",href:"https://www.peacefulvanilla.chat/"},secondaryCta:{label:"Enter App",href:"https://app.peacefulvanilla.chat"}},{id:"space",name:"Peaceful Vanilla Space",domainLabel:"peacefulvanilla.space",tagline:"Community hubs and profiles.",description:"A coming Peaceful Vanilla web layer for spaces, profiles, community hubs, and social surfaces that make the wider network easier to discover.",status:"coming-soon",icon:"assets/generated/peaceful-vanilla-space-icon.png",color:"#ffc26b",orbitRadius:41,orbitSpeed:75e-6,initialAngle:2.38},{id:"fortrust",name:"Fortrust",domainLabel:"Fortrust by Peaceful Vanilla",tagline:"A separate experiment.",description:"An independent Peaceful Vanilla experiment kept intentionally separate, so new ideas can be tested without blurring the core network identity.",status:"coming-soon",icon:"assets/fortrust/fortrust-icon-transparent.png",color:"#d0c0b8",orbitRadius:29,orbitSpeed:105e-6,initialAngle:.92}],P=document.querySelector("#app");if(!P)throw new Error("Missing #app mount point");const E=P,B="./",f=["network",...m.map(e=>e.id)];let d="network";const O={network:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4.5 7.5V16.5L12 21l7.5-4.5V7.5L12 3Z"/><path d="M12 3v18M4.5 7.5 12 12l7.5-4.5M4.5 16.5 12 12l7.5 4.5"/></svg>',club:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 14.5 12 4l8 10.5"/><path d="M6.5 12.5V20h11v-7.5"/><path d="M9 20v-5h6v5"/></svg>',chat:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8.5A5.5 5.5 0 0 1 10.5 3h3A5.5 5.5 0 0 1 19 8.5v2A5.5 5.5 0 0 1 13.5 16H12l-4.5 4v-4.35A5.5 5.5 0 0 1 5 11.5v-3Z"/><path d="M9 9.5h6M9 12h4"/></svg>',space:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/><path d="M4 20a8 8 0 0 1 16 0"/><path d="M19 8h2M3 8h2M12 18v3"/></svg>',fortrust:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z"/><path d="M9 12l2 2 4-5"/></svg>'};function w(e){return`${B}${e}`}function r(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function A(e){return e==="live"?"Live":"Coming soon"}function M(e){return m.find(t=>t.id===e)}function H(){return f.map(e=>{const t=M(e),o=t?.name??u.name,n=t?.color??"#ff9500";return`<button type="button" data-select="${e}" aria-label="Show ${r(o)}" style="--project-color: ${n}">${O[e]}</button>`}).join("")}function I(){return`
    <svg class="orbit-svg" viewBox="0 0 900 650" aria-hidden="true">
      <line class="orbit-line" id="orbit-line" x1="450" y1="325" x2="450" y2="325" />
      ${m.map(t=>{const o=t.orbitRadius/100*900,n=t.orbitRadius*.64*650/100;return`<ellipse class="orbit-ring" data-ring="${t.id}" cx="450" cy="325" rx="${o.toFixed(1)}" ry="${n.toFixed(1)}" style="--project-color: ${t.color}" />`}).join("")}
    </svg>
  `}function T(){return m.map(e=>`
        <button
          type="button"
          class="project-node"
          data-select="${e.id}"
          data-project-id="${e.id}"
          aria-label="Show ${r(e.name)}"
          aria-pressed="false"
          style="--project-color: ${e.color}"
        >
          <span class="planet-avatar" aria-hidden="true">
            <img src="${w(e.icon)}" alt="" loading="eager" />
          </span>
          <span class="project-label">
            <span class="project-name">${r(e.id==="fortrust"?"Fortrust":e.id)}</span>
            <span class="project-status status-${e.status}">${A(e.status)}</span>
          </span>
        </button>
      `).join("")}function S(){return u.proof.map(e=>`
        <div class="proof-item">
          <strong>${r(e.value)}</strong>
          <span>${r(e.label)}</span>
        </div>
      `).join("")}function X(){const e=m.map(t=>`
        <button type="button" data-select="${t.id}" style="--project-color: ${t.color}">
          <strong>${r(t.name)}</strong>
          <span>${r(t.tagline)}</span>
        </button>
      `).join("");return`
    <div class="panel-inner">
      <div class="panel-topline">
        <span class="status-pill" style="--status-color: var(--accent-soft)">Network core</span>
      </div>
      <div class="feature-art" style="--project-color: var(--accent)">
        <img src="${w(u.icon)}" alt="" />
      </div>
      <div class="panel-copy">
        <p class="panel-kicker">Peaceful Vanilla Network</p>
        <h2 class="panel-title">${r(u.tagline)}</h2>
        <p class="panel-description">${r(u.description)}</p>
      </div>
      <div class="principles">
        ${u.principles.map(t=>`<span>${r(t)}</span>`).join("")}
      </div>
      <div class="panel-metrics" aria-label="Network proof points">${S()}</div>
      <div class="network-links">${e}</div>
    </div>
  `}function Y(e){const t=[e.primaryCta?`<a class="panel-cta primary" href="${e.primaryCta.href}" target="_blank" rel="noreferrer">${r(e.primaryCta.label)}</a>`:"",e.secondaryCta?`<a class="panel-cta" href="${e.secondaryCta.href}" target="_blank" rel="noreferrer">${r(e.secondaryCta.label)}</a>`:""].filter(Boolean).join(""),o=e.status==="coming-soon"?'<div class="coming-soon-note">This orbit is visible because it belongs to the network, but its public destination is not linked yet.</div>':"";return`
    <div class="panel-inner">
      <div class="panel-topline">
        <span class="status-pill" style="--status-color: ${e.status==="live"?"var(--success)":"var(--stone)"}">${A(e.status)}</span>
        <button type="button" class="panel-close" data-select="network" aria-label="Return to network overview">x</button>
      </div>
      <div class="feature-art" style="--project-color: ${e.color}">
        <img src="${w(e.icon)}" alt="" />
      </div>
      <div class="panel-copy">
        <p class="panel-kicker">${r(e.domainLabel)}</p>
        <h2 class="panel-title">${r(e.name)}</h2>
        <p class="panel-description">${r(e.description)}</p>
      </div>
      <div class="principles">
        <span>${r(e.tagline)}</span>
        <span>${r(e.status==="live"?"Active destination":"Network preview")}</span>
      </div>
      <div class="cta-stack">
        ${t||o}
      </div>
    </div>
  `}function L(){const e=M(d);return e?Y(e):X()}function j(){E.innerHTML=`
    <div class="app-shell" style="--project-color: var(--accent)" data-selected="network">
      <canvas class="starfield" id="starfield" aria-hidden="true"></canvas>

      <header class="topbar">
        <button type="button" class="brand-button" data-select="network" aria-label="Show Peaceful Vanilla Network overview">
          <img class="brand-mark" src="${w(u.icon)}" alt="" />
          <span class="brand-copy">
            <span class="brand-title">Peaceful Vanilla</span>
            <span class="brand-subtitle">Network</span>
          </span>
        </button>
        <nav class="mini-nav" aria-label="Network projects">
          ${H()}
        </nav>
        <p class="top-kicker">${r(u.tagline)}</p>
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
            ${I()}
            <button type="button" class="core-button" data-select="network" aria-label="Show network overview">
              <span class="core-aura" aria-hidden="true"></span>
              <img src="${w(u.icon)}" alt="" />
              <span class="core-label">
                <strong>Peaceful Vanilla</strong>
                <span>Network core</span>
              </span>
            </button>
            <div class="project-layer" id="project-layer">
              ${T()}
            </div>
          </div>

          <div class="drag-hint" aria-hidden="true">Use arrows or click an orbit</div>
          <div class="proof-rail" aria-label="Network proof points">${S()}</div>
        </section>

        <aside class="detail-panel" id="detail-panel" aria-live="polite">
          ${L()}
        </aside>
      </main>

      <footer class="footer-note">Static GitHub Pages build - no backend</footer>
    </div>
  `}function $(e){d=e;const t=M(d),o=document.querySelector(".app-shell"),n=document.querySelector("#detail-panel"),i=document.querySelector("#orbit-line"),s=t?.color??"#ff9500";o?.setAttribute("data-selected",d),o?.style.setProperty("--project-color",s),n?.style.setProperty("--project-color",s),document.querySelectorAll("[data-select]").forEach(a=>{const l=a.dataset.select===d;a.classList.toggle("is-active",l),a instanceof HTMLButtonElement&&a.classList.contains("project-node")&&(a.setAttribute("aria-pressed",String(l)),a.classList.toggle("is-dimmed",d!=="network"&&!l))}),document.querySelectorAll("[data-ring]").forEach(a=>{const l=a.dataset.ring===d;a.classList.toggle("is-active",l),a.style.setProperty("--project-color",s)}),i&&(i.classList.toggle("is-visible",d!=="network"),i.style.setProperty("--project-color",s)),n&&(n.innerHTML=L())}function x(e){const o=(f.indexOf(d)+e+f.length)%f.length,n=f[o];n&&$(n)}function z(){document.addEventListener("click",t=>{const n=(t.target instanceof Element?t.target.closest("[data-select]"):null)?.dataset.select;n&&f.includes(n)&&$(n)}),document.querySelector("#orbit-map")?.addEventListener("keydown",t=>{(t.key==="ArrowRight"||t.key==="ArrowDown")&&(t.preventDefault(),x(1)),(t.key==="ArrowLeft"||t.key==="ArrowUp")&&(t.preventDefault(),x(-1)),(t.key==="Escape"||t.key==="Home")&&(t.preventDefault(),$("network"))})}function D(){const e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,t=document.querySelector("#orbit-line");function o(n){const i=d==="network"?1:.18,s=M(d);m.forEach(a=>{const l=document.querySelector(`[data-project-id="${a.id}"]`),h=e?a.initialAngle:a.initialAngle+n*a.orbitSpeed*i,g=a.orbitRadius,y=a.orbitRadius*.64,b=50+Math.cos(h)*g,v=50+Math.sin(h)*y;l?.style.setProperty("--x",`${b.toFixed(3)}%`),l?.style.setProperty("--y",`${v.toFixed(3)}%`),t&&s?.id===a.id&&(t.setAttribute("x1","450"),t.setAttribute("y1","325"),t.setAttribute("x2",(b/100*900).toFixed(1)),t.setAttribute("y2",(v/100*650).toFixed(1)))}),window.requestAnimationFrame(o)}window.requestAnimationFrame(o)}function Z(e){return Array.from({length:e},()=>({x:Math.random(),y:Math.random(),size:.45+Math.random()*1.9,depth:.25+Math.random()*1.6,tone:Math.random(),twinkle:Math.random()*Math.PI*2}))}function U(){const e=document.querySelector("#starfield"),t=e?.getContext("2d");if(!e||!t)return;const o=e,n=t,i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,s=Z(190);let a=0,l=0,h=.5,g=.5;function y(){const c=Math.min(window.devicePixelRatio||1,2);a=window.innerWidth,l=window.innerHeight,o.width=Math.floor(a*c),o.height=Math.floor(l*c),o.style.width=`${a}px`,o.style.height=`${l}px`,n.setTransform(c,0,0,c,0,0)}function b(c){n.clearRect(0,0,a,l);const k=n.createRadialGradient(a*.5,l*.45,0,a*.5,l*.45,a*.72);k.addColorStop(0,"rgba(255, 149, 0, 0.13)"),k.addColorStop(.34,"rgba(80, 124, 190, 0.06)"),k.addColorStop(1,"rgba(3, 5, 10, 0)"),n.fillStyle=k,n.fillRect(0,0,a,l);for(const p of s){const C=(h-.5)*p.depth*34,V=(g-.5)*p.depth*22,N=i?.75:.55+Math.sin(c*.0012+p.twinkle)*.28,q=p.x*a+C,F=p.y*l+V,R=p.tone>.82?"255, 149, 0":p.tone>.66?"80, 124, 190":"247, 249, 252";n.beginPath(),n.fillStyle=`rgba(${R}, ${Math.max(.18,N)})`,n.arc(q,F,p.size,0,Math.PI*2),n.fill()}}function v(c){b(c),window.requestAnimationFrame(v)}if(window.addEventListener("resize",y),window.addEventListener("pointermove",c=>{h=c.clientX/Math.max(window.innerWidth,1),g=c.clientY/Math.max(window.innerHeight,1)}),y(),i){b(0);return}window.requestAnimationFrame(v)}j();z();$("network");D();U();
//# sourceMappingURL=app-DP-_-R8i.js.map
