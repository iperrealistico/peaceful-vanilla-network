(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const w={name:"Peaceful Vanilla Network",tagline:"Community, fun, privacy and connection.",icon:"assets/generated/peaceful-vanilla-network-icon.png",description:"Peaceful Vanilla Network is a small-business ecosystem built by family and friends: gaming worlds, chat, profiles, and experiments made for real connection without big-corp nonsense.",principles:["Community-first","Fun-driven","Privacy-aware","Small business, not big corp"],proof:[{label:"Since",value:"2019"},{label:"Players",value:"110K+"},{label:"Backups",value:"28TB"},{label:"Projects",value:"5"}]},P=[{id:"club",name:"Peaceful Vanilla Club",domainLabel:"peacefulvanilla.club",description:"A family-and-friends driven Minecraft SMP with a stable world, cross-play support, strong community culture, and a clear no pay-to-win philosophy.",status:"live",icon:"assets/logos/peaceful-vanilla-club-logo.png",color:"#ff9500",orbitRadius:33,orbitSpeed:12e-5,initialAngle:-2.72,primaryCta:{label:"Visit Club",href:"https://www.peacefulvanilla.club/"}},{id:"hytale",name:"Peaceful Vanilla Club: Hytale",domainLabel:"hytale.peacefulvanilla.club",description:"A dedicated Hytale-facing home for Peaceful Vanilla Club, carrying the same fun-first community spirit, long-term mindset, and no pay-to-win philosophy into a new world.",status:"live",icon:"assets/logos/peaceful-vanilla-club-hytale-icon.jpg",color:"#ff7a00",orbitRadius:46,orbitSpeed:82e-6,initialAngle:-1.48,primaryCta:{label:"Visit Hytale",href:"https://hytale.peacefulvanilla.club/"}},{id:"chat",name:"Peaceful Vanilla Chat",domainLabel:"peacefulvanilla.chat",description:"A Matrix-powered, self-hosted communication platform where players, creators, family groups, and friends stay connected without face scans, personal documents, or big-platform lock-in.",status:"coming-soon",icon:"assets/logos/peaceful-vanilla-chat-icon-256.png",color:"#507cbe",orbitRadius:37,orbitSpeed:95e-6,initialAngle:-.42},{id:"space",name:"Peaceful Vanilla Space",domainLabel:"peacefulvanilla.space",tagline:"Profiles, hubs, and social connection.",destinationNote:"This orbit is visible because it belongs to the network, but its public destination is not linked yet.",description:"A coming Peaceful Vanilla web layer for profiles, community hubs, and social surfaces that make the wider network easier to discover and more fun to explore.",status:"coming-soon",icon:"assets/generated/peaceful-vanilla-space-icon.png",color:"#ffc26b",orbitRadius:41,orbitSpeed:75e-6,initialAngle:2.38},{id:"fortrust",name:"Fortrust",domainLabel:"Fortrust by Peaceful Vanilla",description:"An independent Peaceful Vanilla experiment kept intentionally separate, so different ideas can be experimented freely without blurring the core network identity. A separate game? A server? Both? It's testing grounds.",status:"coming-soon",icon:"assets/fortrust/fortrust-icon.png",color:"#d0c0b8",orbitRadius:29,orbitSpeed:105e-6,initialAngle:.92}],ge=document.querySelector("#app");if(!ge)throw new Error("Missing #app mount point");const k=ge,Oe="./",I=["network",...P.map(e=>e.id)],E=window.matchMedia("(prefers-reduced-motion: reduce)"),de=88e-6,je=3,be=260,we=140,Be=24,He=220,Ve=120,ue=["sun","sky","planets","settle","title","tagline","ready"],We={totalMs:5e3,sunMs:520,skyDelayMs:320,skyMs:2100,planetsDelayMs:1740,planetStaggerMs:135,planetPopMs:720,settleDelayMs:3220,settleMs:1120,titleDelayMs:3660,titleMs:920,taglineDelayMs:4320,taglineMs:520};let f="network",m=!1,r=null,C=null,L=null,U=null,O=null,Y=null,$=null,v=[],_=null,ne=!0,G=!1,K=0,J=0,se="sun",A=!1,j="full",F="idle",Z=[],B=0,T=0,N=0,pe=!1,q=0;function Ye(e){const n=Math.max(e.sunMs,e.skyDelayMs+e.skyMs,e.planetsDelayMs+e.planetPopMs+Math.max(P.length-1,0)*e.planetStaggerMs,e.settleDelayMs+e.settleMs,e.titleDelayMs+e.titleMs,e.taglineDelayMs+e.taglineMs,1),t=e.totalMs/n,s=o=>Math.round(o*t);return{totalMs:Math.round(e.totalMs),sunMs:s(e.sunMs),skyDelayMs:s(e.skyDelayMs),skyMs:s(e.skyMs),planetsDelayMs:s(e.planetsDelayMs),planetStaggerMs:s(e.planetStaggerMs),planetPopMs:s(e.planetPopMs),settleDelayMs:s(e.settleDelayMs),settleMs:s(e.settleMs),titleDelayMs:s(e.titleDelayMs),titleMs:s(e.titleMs),taglineDelayMs:s(e.taglineDelayMs),taglineMs:s(e.taglineMs)}}const u=Ye(We);function ve(e){return`${Oe}${e}`}function l(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function M(e,n,t){return Math.min(Math.max(e,n),t)}function fe(e){return 1-Math.pow(1-e,3)}function Me(e){return ue.indexOf(se)>=ue.indexOf(e)}function qe(e,n,t){return B===0?0:M((e-B-n)/Math.max(t,1),0,1)}function Xe(e=!1){return window.scrollY<=(e?Be:0)}function ae(e=be){J=Math.max(J,performance.now()+e)}function xe(e){return G||document.hidden||e<J}function ke(e){return e==="live"?"Live":"Coming soon"}function $e(e){return P.find(n=>n.id===e)}function oe(e){return e!=="network"}function ze(){const e=P.map(t=>{const s=t.orbitRadius/100*900,o=t.orbitRadius/100*650;return`<ellipse class="orbit-ring" data-ring="${t.id}" cx="450" cy="325" rx="${s.toFixed(1)}" ry="${o.toFixed(1)}" style="--project-color: ${t.color}" />`}).join("");return`
    <svg class="orbit-svg" viewBox="0 0 900 650" preserveAspectRatio="none" aria-hidden="true">
      ${P.map(t=>`<line class="orbit-line" data-connector="${t.id}" x1="450" y1="325" x2="450" y2="325" style="--project-color: ${t.color}" />`).join("")}
      ${e}
    </svg>
  `}function Qe(){return P.map((e,n)=>`
        <button
          type="button"
          class="project-node"
          data-select="${e.id}"
          data-project-id="${e.id}"
          aria-label="Show ${l(e.name)}"
          aria-pressed="false"
          style="--project-color: ${e.color}; --intro-order: ${n}"
        >
          <span class="planet-avatar" aria-hidden="true">
            <img src="${ve(e.icon)}" alt="" loading="eager" />
          </span>
          <span class="project-label">
            <span class="project-name">${l(e.id==="fortrust"?"Fortrust":e.id)}</span>
            <span class="project-status status-${e.status}">${ke(e.status)}</span>
          </span>
        </button>
      `).join("")}function Ue(){return w.proof.map(e=>`
        <div class="proof-item">
          <strong>${l(e.value)}</strong>
          <span>${l(e.label)}</span>
        </div>
      `).join("")}function _e(){return`
    <section class="network-story" aria-labelledby="network-story-title">
      <div class="story-title-block">
        <p class="story-kicker">${l(w.tagline)}</p>
        <h2 id="network-story-title">
          <span>Peaceful Vanilla</span>
          <span>Network</span>
        </h2>
      </div>

      <article class="network-story-card" aria-label="${l(w.name)} overview">
        <div class="story-card-copy">
          <h3>A small independent ecosystem for community, play, privacy, and connection.</h3>
          <p>
            ${l(w.description)}
          </p>
        </div>

        <div class="story-feature-grid" aria-label="What Peaceful Vanilla Network does">
          <section>
            <span>01</span>
            <h4>The Network that connects</h4>
            <p>We are the team behind Club, Hytale, Chat, Space, and more. One single discoverable network.</p>
          </section>
          <section>
            <span>02</span>
            <h4>The Network that protects</h4>
            <p>We keep evil big tech out. We believe in a family-and-friends way of working and ethical entrepreneuring. No big-corps involved.</p>
          </section>
          <section>
            <span>03</span>
            <h4>The Network that builds privacy-first</h4>
            <p>Favors self-hosted, low-friction community tools over invasive platforms.</p>
          </section>
          <section>
            <span>04</span>
            <h4>The Network that gives weird ideas room</h4>
            <p>We love to explore new weird ideas related to gaming and social platforms.</p>
          </section>
        </div>
      </article>
    </section>
  `}function Ge(){const e=P.map(n=>`
        <button type="button" data-select="${n.id}" style="--project-color: ${n.color}">
          <strong>${l(n.name)}</strong>
          ${n.tagline?`<span>${l(n.tagline)}</span>`:""}
        </button>
      `).join("");return`
    <div class="panel-inner">
      <div class="panel-topline">
        <span class="status-pill" style="--status-color: var(--accent-soft)">Network core</span>
      </div>
      <div class="panel-copy">
        <p class="panel-kicker">${l(w.name)}</p>
        <h2 class="panel-title">${l(w.tagline)}</h2>
        <p class="panel-description">${l(w.description)}</p>
      </div>
      <div class="principles">
        ${w.principles.map(n=>`<span>${l(n)}</span>`).join("")}
      </div>
      <div class="panel-metrics" aria-label="Network proof points">${Ue()}</div>
      <div class="network-links">${e}</div>
    </div>
  `}function Ke(e){const n=[e.primaryCta?`<a class="panel-cta primary" href="${e.primaryCta.href}" target="_blank" rel="noreferrer">${l(e.primaryCta.label)}</a>`:"",e.secondaryCta?`<a class="panel-cta" href="${e.secondaryCta.href}" target="_blank" rel="noreferrer">${l(e.secondaryCta.label)}</a>`:""].filter(Boolean).join(""),t=e.destinationNote?`<div class="coming-soon-note">${l(e.destinationNote)}</div>`:"",s=n||t,o=e.tagline?`<div class="principles">
        <span>${l(e.tagline)}</span>
        <span>${l(e.status==="live"?"Active destination":"Network preview")}</span>
      </div>`:"";return`
    <div class="panel-inner">
      <div class="panel-topline">
        <span class="status-pill" style="--status-color: ${e.status==="live"?"var(--success)":"var(--stone)"}">${ke(e.status)}</span>
        <button type="button" class="panel-close" data-select="network" aria-label="Return to network overview">x</button>
      </div>
      <div class="panel-copy">
        <p class="panel-kicker">${l(e.domainLabel)}</p>
        <h2 class="panel-title">${l(e.name)}</h2>
        <p class="panel-description">${l(e.description)}</p>
      </div>
      ${o}
      ${s?`<div class="cta-stack">${s}</div>`:""}
    </div>
  `}function Pe(){const e=$e(f);return e?Ke(e):Ge()}function Je(){k.innerHTML=`
    <div
      class="app-shell"
      style="--project-color: var(--accent)"
      data-selected="network"
      data-panel-expanded="false"
      data-intro-phase="sun"
      data-intro-ready="false"
      data-intro-playback="full"
      data-intro-reveal="idle"
    >
      <div class="intro-surface" aria-hidden="true"></div>
      <div class="cosmos-backdrop" aria-hidden="true">
        <canvas class="starfield" id="starfield" aria-hidden="true"></canvas>
        <div class="cosmos-gradient"></div>
      </div>

      <main class="command-deck">
        <section class="universe-card" aria-labelledby="network-title">
          <h1 id="network-title" class="visually-hidden">${l(w.name)}</h1>

          <div class="orbit-map" id="orbit-map" tabindex="0" role="application" aria-label="Interactive Peaceful Vanilla Network orbit">
            <div class="orbit-scene" id="orbit-scene">
              ${ze()}
              <button type="button" class="core-button" data-select="network" aria-label="Show ${l(w.name)} overview">
                <span class="core-aura" aria-hidden="true"></span>
                <img src="${ve(w.icon)}" alt="" />
                <span class="core-label">
                  <strong>${l(w.name.toUpperCase())}</strong>
                  <span>${l(w.tagline)}</span>
                </span>
              </button>
              <div class="project-layer" id="project-layer">
                ${Qe()}
              </div>
            </div>
          </div>
        </section>

        <aside class="detail-panel is-collapsed" id="detail-panel" aria-live="polite" aria-expanded="false" aria-hidden="true" inert>
          ${Pe()}
        </aside>
      </main>

      ${_e()}

      <div class="selected-project-layer" aria-hidden="true"></div>
    </div>
  `}function Ze(){r=k.querySelector(".app-shell"),C=k.querySelector("#detail-panel"),L=k.querySelector("#orbit-map"),U=k.querySelector("#orbit-scene"),O=k.querySelector(".core-button"),Y=k.querySelector(".selected-project-layer"),v=P.map((e,n)=>{const t=k.querySelector(`button[data-project-id="${e.id}"]`);if(!t)throw new Error(`Missing orbit node for ${e.id}`);return{project:e,button:t,ring:k.querySelector(`[data-ring="${e.id}"]`),connector:k.querySelector(`[data-connector="${e.id}"]`),slotAngle:-Math.PI/2+n*Math.PI*2/P.length,radius:0,collisionRadius:0,x:0,y:0}})}function et(){r&&(r.style.setProperty("--intro-total-ms",`${u.totalMs}ms`),r.style.setProperty("--intro-sun-ms",`${u.sunMs}ms`),r.style.setProperty("--intro-sky-delay-ms",`${u.skyDelayMs}ms`),r.style.setProperty("--intro-sky-ms",`${u.skyMs}ms`),r.style.setProperty("--intro-planets-delay-ms",`${u.planetsDelayMs}ms`),r.style.setProperty("--intro-planet-stagger-ms",`${u.planetStaggerMs}ms`),r.style.setProperty("--intro-planet-pop-ms",`${u.planetPopMs}ms`),r.style.setProperty("--intro-settle-delay-ms",`${u.settleDelayMs}ms`),r.style.setProperty("--intro-settle-ms",`${u.settleMs}ms`),r.style.setProperty("--intro-title-delay-ms",`${u.titleDelayMs}ms`),r.style.setProperty("--intro-title-ms",`${u.titleMs}ms`),r.style.setProperty("--intro-tagline-delay-ms",`${u.taglineDelayMs}ms`),r.style.setProperty("--intro-tagline-ms",`${u.taglineMs}ms`))}function ee(){r?.setAttribute("data-intro-phase",se),r?.setAttribute("data-intro-ready",String(A)),r?.setAttribute("data-intro-playback",j),r?.setAttribute("data-intro-reveal",F),L&&L.toggleAttribute("inert",!A)}function te(e){se=e,A=e==="ready",ee(),De()}function Se(){for(const e of Z)window.clearTimeout(e);Z=[]}function Ae(){T&&(window.cancelAnimationFrame(T),T=0),N&&(window.clearTimeout(N),N=0)}function tt(){q&&(window.clearTimeout(q),q=0)}function nt(){Se(),Ae(),j="full",F="idle",B=performance.now(),te("sun"),Z=[{phase:"sky",at:u.skyDelayMs},{phase:"planets",at:u.planetsDelayMs},{phase:"settle",at:u.settleDelayMs},{phase:"title",at:u.titleDelayMs},{phase:"tagline",at:u.taglineDelayMs},{phase:"ready",at:u.totalMs}].map(({phase:n,at:t})=>window.setTimeout(()=>{te(n)},t))}function st(){Se(),Ae(),j="quick",F="quick-prep",B=0,te("ready"),r&&(r.getBoundingClientRect(),T=window.requestAnimationFrame(()=>{T=0,F="quick-active",ee(),N=window.setTimeout(()=>{N=0,F="idle",ee()},He+40)}))}function Le(e=!1){if(!pe){if(pe=!0,tt(),S(),Xe(e)){nt();return}st()}}function S(){ne=!0}function at(){if(window.addEventListener("resize",S,{passive:!0}),window.addEventListener("orientationchange",S,{passive:!0}),window.addEventListener("scroll",()=>{ae(we)},{passive:!0}),"ResizeObserver"in window){const e=new ResizeObserver(S);L&&e.observe(L),O&&e.observe(O);for(const n of v)e.observe(n.button)}document.fonts?.ready.then(S).catch(()=>{});for(const e of k.querySelectorAll("img"))e.complete||(e.addEventListener("load",S,{once:!0}),e.addEventListener("error",S,{once:!0}))}function Re(e){const n=window.innerWidth>=920,t=n?M(window.innerWidth*.3,240,520):window.innerWidth*.5,s=n?M(window.innerHeight*.5,170,Math.max(170,window.innerHeight-170)):M(window.innerHeight*.31,132,Math.max(132,window.innerHeight*.38));return{x:Number.isFinite(t)?t:e.offsetLeft+e.centerX,y:Number.isFinite(s)?s:e.offsetTop+e.centerY}}function ot(e){O?.classList.toggle("is-active",f==="network");for(const n of v){const t=n.project.id===f;n.button.classList.toggle("is-active",t),n.button.setAttribute("aria-pressed",String(t)),n.ring?.classList.toggle("is-active",t),n.ring?.style.setProperty("--project-color",e),n.connector?.classList.toggle("is-active",t),n.connector?.style.setProperty("--project-color",e)}C?.querySelectorAll("[data-select]").forEach(n=>{n.classList.toggle("is-active",n.dataset.select===f)})}function it(){const e=C;e&&(m&&e.dataset.projectId!==f&&(e.innerHTML=Pe(),e.dataset.projectId=f),e.toggleAttribute("inert",!m),e.setAttribute("aria-expanded",String(m)),e.setAttribute("aria-hidden",String(!m)),e.classList.toggle("is-expanded",m),e.classList.toggle("is-collapsed",!m))}function rt(){const e=Y,n=oe(f)?v.find(t=>t.project.id===f):void 0;if(!e||!m||!n){$=null,Y?.replaceChildren(),Y?.classList.remove("has-selection");return}if($?.dataset.projectId!==n.project.id){const t=n.button.cloneNode(!0);t.classList.add("selected-project-node","is-active"),t.removeAttribute("data-select"),t.removeAttribute("aria-label"),t.setAttribute("tabindex","-1"),t.setAttribute("aria-hidden","true"),t.dataset.projectId=n.project.id,t.style.setProperty("--project-color",n.project.color),e.replaceChildren(t),$=t}if($&&_){const t=Re(_);$.style.setProperty("--tx",`${t.x.toFixed(1)}px`),$.style.setProperty("--ty",`${t.y.toFixed(1)}px`)}e.classList.add("has-selection")}function lt(){document.body.classList.contains("is-detail-scroll-locked")||(K=window.scrollY,document.documentElement.classList.add("is-detail-scroll-locked"),document.body.classList.add("is-detail-scroll-locked"),document.body.style.position="fixed",document.body.style.top=`-${K}px`,document.body.style.left="0",document.body.style.right="0",document.body.style.width="100%")}function ct(){document.body.classList.contains("is-detail-scroll-locked")&&(document.documentElement.classList.remove("is-detail-scroll-locked"),document.body.classList.remove("is-detail-scroll-locked"),document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.right="",document.body.style.width="",window.scrollTo(0,K))}function De(){if(m){lt();return}ct()}function D(e){if(e===f&&A)return;f=e,m=oe(f),G=m,ae(m?be:180);const t=$e(f)?.color??"#ff9500";r?.setAttribute("data-selected",f),r?.setAttribute("data-panel-expanded",String(m)),r?.classList.toggle("is-focused",m),r?.classList.toggle("is-panel-expanded",m),r?.classList.toggle("is-scene-frozen",G),r?.style.setProperty("--project-color",t),C?.style.setProperty("--project-color",t),ot(t),it(),rt(),De(),S()}function ye(e){const t=(I.indexOf(f)+e+I.length)%I.length,s=I[t];s&&D(s)}function dt(){document.addEventListener("click",e=>{if(!A)return;const n=e.target instanceof Element?e.target:null,s=(n?.closest("[data-select]")??null)?.dataset.select;if(s&&I.includes(s)){D(s);return}m&&n&&!C?.contains(n)&&D("network")}),L?.addEventListener("keydown",e=>{if(!A){e.key==="Tab"&&e.preventDefault();return}(e.key==="ArrowRight"||e.key==="ArrowDown")&&(e.preventDefault(),ye(1)),(e.key==="ArrowLeft"||e.key==="ArrowUp")&&(e.preventDefault(),ye(-1)),(e.key==="Escape"||e.key==="Home")&&(e.preventDefault(),D("network"))}),document.addEventListener("keydown",e=>{if(!A){e.key==="Tab"&&e.preventDefault();return}e.key==="Escape"&&m&&(e.preventDefault(),D("network"))}),C?.addEventListener("scroll",()=>{ae(we)},{passive:!0})}function me(){const e=L;if(!e)return null;const n=e.getBoundingClientRect(),t=Math.max(e.clientWidth||n.width,1),s=Math.max(e.clientHeight||n.height,1),o=t/s,a=t<760,c=M((o-1.26)/.54,0,1),h=M((.92-o)/.28,0,1),g=a?0:Math.min(t*.014,18),p=a?Math.min(s*.03,20):0,b=c*Math.min(t*.082,104)+g,d=-h*Math.min(s*.068,56)-p,y=t/2,i=s/2,H=(O?.offsetWidth??Math.min(t,s)*.24)/2,R=a?8:18,V=a?10:26,X=a?1.18:.88,Fe=Math.min(t,s)*(a?.0108:.0114);r?.style.setProperty("--orbit-bias-x",`${b.toFixed(1)}px`),r?.style.setProperty("--orbit-bias-y",`${d.toFixed(1)}px`),U?.style.setProperty("--scene-settle-x",`${b.toFixed(1)}px`),U?.style.setProperty("--scene-settle-y",`${d.toFixed(1)}px`);const ie={width:t,height:s,offsetLeft:n.left,offsetTop:n.top,centerX:y,centerY:i,coreRadius:H,orbitSquash:X,edgeMargin:R,coreMargin:V,compact:a};_=ie;for(const x of v){const re=f===x.project.id?a?1.08:1.22:1,le=f===x.project.id?a?16:36:a?10:22,Ce=Math.max(x.button.offsetWidth,1)*re+le,Ie=Math.max(x.button.offsetHeight,1)*re+le,W=Math.max(Ce,Ie)/2,Ee=Math.max(0,y-W-R),Te=Math.max(0,(i-W-R)/X),z=Math.min(Ee,Te),ce=H+W+V,Ne=x.project.orbitRadius*Fe;x.collisionRadius=W,x.radius=z>=ce?M(Ne,ce,z):z,x.ring&&(x.ring.setAttribute("rx",(x.radius/t*900).toFixed(1)),x.ring.setAttribute("ry",(x.radius*X/s*650).toFixed(1)))}return ne=!1,ie}function Q(e,n){const t=e.collisionRadius+n.edgeMargin,s=n.width-e.collisionRadius-n.edgeMargin,o=e.collisionRadius+n.edgeMargin,a=n.height-e.collisionRadius-n.edgeMargin;e.x=M(e.x,Math.min(t,s),Math.max(t,s)),e.y=M(e.y,Math.min(o,a),Math.max(o,a));const c=e.x-n.centerX,h=e.y-n.centerY,g=n.coreRadius+e.collisionRadius+n.coreMargin,p=Math.hypot(c,h);if(p<g){const b=p>.001?Math.atan2(h,c):e.slotAngle;e.x=n.centerX+Math.cos(b)*g,e.y=n.centerY+Math.sin(b)*g,e.x=M(e.x,Math.min(t,s),Math.max(t,s)),e.y=M(e.y,Math.min(o,a),Math.max(o,a))}}function ut(e){for(let n=0;n<je;n+=1){for(const t of v)Q(t,e);for(let t=0;t<v.length;t+=1){const s=v[t];if(s)for(let o=t+1;o<v.length;o+=1){const a=v[o];if(!a)continue;const c=a.x-s.x,h=a.y-s.y,g=s.collisionRadius+a.collisionRadius,p=Math.hypot(c,h);if(p>=g)continue;const b=s.slotAngle+(o-t)*.73,d=p>.001?c/p:Math.cos(b),y=p>.001?h/p:Math.sin(b),i=(g-p)/2+.5;s.x-=d*i,s.y-=y*i,a.x+=d*i,a.y+=y*i,Q(s,e),Q(a,e)}}}}function he(e){const n=oe(f)?v.find(t=>t.project.id===f):void 0;for(const t of v)t.button.style.setProperty("--tx",`${t.x.toFixed(1)}px`),t.button.style.setProperty("--ty",`${t.y.toFixed(1)}px`),t.connector&&(t.connector.setAttribute("x1","450"),t.connector.setAttribute("y1","325"),t.connector.setAttribute("x2",(t.x/e.width*900).toFixed(1)),t.connector.setAttribute("y2",(t.y/e.height*650).toFixed(1)));if($&&n&&m){const t=Re(e);$.style.setProperty("--tx",`${t.x.toFixed(1)}px`),$.style.setProperty("--ty",`${t.y.toFixed(1)}px`)}}function pt(){let e=0,n=0,t,s=me(),o=!1;function a(c){const h=ne||!s;if(h&&(s=me()),!s){window.requestAnimationFrame(a);return}const g=t===void 0?16.67:Math.min(c-t,40);t=c;const p=Me("planets")&&!xe(c),b=E.matches?80:32;if(p){if(n+=g,n<b){o=p,window.requestAnimationFrame(a);return}e+=n,n=0;const d=e*(E.matches?de*.28:de);for(const y of v){const i=d+y.slotAngle;y.x=s.centerX+Math.cos(i)*y.radius,y.y=s.centerY+Math.sin(i)*y.radius*s.orbitSquash}ut(s),he(s)}else(h||p!==o)&&he(s);o=p,window.requestAnimationFrame(a)}window.requestAnimationFrame(a)}function ft(e){return Array.from({length:e},()=>({x:Math.random(),y:Math.random(),size:.45+Math.random()*1.9,tone:Math.random(),color:Math.random()>.82?"255, 149, 0":Math.random()>.66?"80, 124, 190":"247, 249, 252",twinkle:Math.random()*Math.PI*2,speed:7e-4+Math.random()*.0012,revealDelay:Math.random()*1050,revealDuration:180+Math.random()*760}))}function yt(){const e=document.querySelector("#starfield"),n=e?.getContext("2d");if(!e||!n)return;const t=e,s=n,o=ft(window.innerWidth<760?68:96);let a=0,c=0,h=0;function g(){const d=Math.min(window.devicePixelRatio||1,1.25);a=window.innerWidth,c=window.innerHeight,t.width=Math.floor(a*d),t.height=Math.floor(c*d),t.style.width=`${a}px`,t.style.height=`${c}px`,s.setTransform(d,0,0,d,0,0),p(0)}function p(d){s.clearRect(0,0,a,c);const y=fe(qe(d,u.titleDelayMs,u.titleMs+820));if(y>0){const i=s.createRadialGradient(a*.5,c*.45,0,a*.5,c*.45,a*.72);i.addColorStop(0,`rgba(255, 149, 0, ${(.075*y).toFixed(3)})`),i.addColorStop(.34,`rgba(80, 124, 190, ${(.05*y).toFixed(3)})`),i.addColorStop(1,"rgba(3, 5, 10, 0)"),s.fillStyle=i,s.fillRect(0,0,a,c)}for(const i of o){const H=E.matches?.72+Math.sin(d*i.speed*.22+i.twinkle)*.05:.54+Math.sin(d*i.speed*.72+i.twinkle)*.18,R=fe(M((d-B-u.titleDelayMs-i.revealDelay)/i.revealDuration,0,1));if(R<=0)continue;const V=M((H+(i.tone>.78?.14:0))*R,.08,.8);s.beginPath(),s.fillStyle=`rgba(${i.color}, ${V.toFixed(3)})`,s.arc(i.x*a,i.y*c,i.size,0,Math.PI*2),s.fill()}}function b(d){const y=(j==="full"&&Me("title")||j==="quick"&&F!=="quick-prep")&&!xe(d),i=A?E.matches?180:110:E.matches?160:95;y&&d-h>=i&&(h=d,p(d)),window.requestAnimationFrame(b)}window.addEventListener("resize",g,{passive:!0}),g(),window.requestAnimationFrame(b)}Je();Ze();et();at();dt();D("network");pt();yt();window.addEventListener("pageshow",()=>{window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{Le(!0)})})},{once:!0});q=window.setTimeout(()=>{Le(!0)},Ve);
//# sourceMappingURL=app-eEwB_lX0.js.map
