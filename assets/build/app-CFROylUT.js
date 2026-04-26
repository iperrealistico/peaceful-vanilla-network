(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();const w={name:"Peaceful Vanilla Network",tagline:"Community, fun, privacy and connection.",icon:"assets/generated/peaceful-vanilla-network-icon.png",description:"Peaceful Vanilla Network is a small-business ecosystem built by family and friends: gaming worlds, chat, profiles, and experiments made for real connection without big-corp nonsense.",principles:["Community-first","Fun-driven","Privacy-aware","Small business, not big corp"],proof:[{label:"Since",value:"2019"},{label:"Players",value:"110K+"},{label:"Backups",value:"28TB"},{label:"Projects",value:"5"}]},A=[{id:"club",name:"Peaceful Vanilla Club",domainLabel:"peacefulvanilla.club",tagline:"The fun-first gaming world.",description:"A family-and-friends driven Minecraft SMP with a stable world, cross-play support, strong community culture, and a clear no pay-to-win philosophy.",status:"live",icon:"assets/logos/peaceful-vanilla-club-logo.png",color:"#ff9500",orbitRadius:33,orbitSpeed:12e-5,initialAngle:-2.72,primaryCta:{label:"Visit Club",href:"https://www.peacefulvanilla.club/"}},{id:"hytale",name:"Peaceful Vanilla Club: Hytale",domainLabel:"hytale.peacefulvanilla.club",tagline:"The Hytale vanilla server branch.",description:"A dedicated Hytale-facing home for Peaceful Vanilla Club, carrying the same fun-first community spirit, long-term mindset, and no pay-to-win philosophy into a new world.",status:"live",icon:"assets/logos/peaceful-vanilla-club-hytale-icon.jpg",color:"#ff7a00",orbitRadius:46,orbitSpeed:82e-6,initialAngle:-1.48,primaryCta:{label:"Visit Hytale",href:"https://hytale.peacefulvanilla.club/"},secondaryCta:{label:"Visit Club",href:"https://www.peacefulvanilla.club/"}},{id:"chat",name:"Peaceful Vanilla Chat",domainLabel:"peacefulvanilla.chat",tagline:"Private connection without big-corp baggage.",description:"A Matrix-powered, self-hosted communication platform where players, creators, family groups, and friends stay connected without face scans, personal documents, or big-platform lock-in.",status:"live",icon:"assets/logos/peaceful-vanilla-chat-icon-192.png",color:"#507cbe",orbitRadius:37,orbitSpeed:95e-6,initialAngle:-.42,primaryCta:{label:"Visit Chat",href:"https://www.peacefulvanilla.chat/"},secondaryCta:{label:"Enter App",href:"https://app.peacefulvanilla.chat"}},{id:"space",name:"Peaceful Vanilla Space",domainLabel:"peacefulvanilla.space",tagline:"Profiles, hubs, and social connection.",description:"A coming Peaceful Vanilla web layer for profiles, community hubs, and social surfaces that make the wider network easier to discover and more fun to explore.",status:"coming-soon",icon:"assets/generated/peaceful-vanilla-space-icon.png",color:"#ffc26b",orbitRadius:41,orbitSpeed:75e-6,initialAngle:2.38},{id:"fortrust",name:"Fortrust",domainLabel:"Fortrust by Peaceful Vanilla",tagline:"A separate experiment.",description:"An independent Peaceful Vanilla experiment kept intentionally separate, so small-team ideas can be tested freely without blurring the core network identity.",status:"coming-soon",icon:"assets/fortrust/fortrust-icon.png",color:"#d0c0b8",orbitRadius:29,orbitSpeed:105e-6,initialAngle:.92}],ve=document.querySelector("#app");if(!ve)throw new Error("Missing #app mount point");const P=ve,Ve="./",T=["network",...A.map(e=>e.id)],z=window.matchMedia("(prefers-reduced-motion: reduce)"),pe=88e-6,Ye=3,we=260,Me=140,Be=24,Xe=220,fe=["sun","sky","planets","settle","title","tagline","ready"],We={totalMs:5e3,sunMs:520,skyDelayMs:320,skyMs:2100,planetsDelayMs:1740,planetStaggerMs:135,planetPopMs:720,settleDelayMs:3220,settleMs:1120,titleDelayMs:3660,titleMs:920,taglineDelayMs:4320,taglineMs:520};let b="network",y=!1,ye=null,o=null,E=null,R=null,Q=null,S=null,B=null,$=null,v=[],U=null,ne=!0,G=!1,K=0,_=0,se="sun",F=!1,ie="full",O="idle",J=[],H=0,j=0,N=0,Z=!0;function qe(e){const n=Math.max(e.sunMs,e.skyDelayMs+e.skyMs,e.planetsDelayMs+e.planetPopMs+Math.max(A.length-1,0)*e.planetStaggerMs,e.settleDelayMs+e.settleMs,e.titleDelayMs+e.titleMs,e.taglineDelayMs+e.taglineMs,1),t=e.totalMs/n,s=a=>Math.round(a*t);return{totalMs:Math.round(e.totalMs),sunMs:s(e.sunMs),skyDelayMs:s(e.skyDelayMs),skyMs:s(e.skyMs),planetsDelayMs:s(e.planetsDelayMs),planetStaggerMs:s(e.planetStaggerMs),planetPopMs:s(e.planetPopMs),settleDelayMs:s(e.settleDelayMs),settleMs:s(e.settleMs),titleDelayMs:s(e.titleDelayMs),titleMs:s(e.titleMs),taglineDelayMs:s(e.taglineDelayMs),taglineMs:s(e.taglineMs)}}const d=qe(We);function xe(e){return`${Ve}${e}`}function l(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function M(e,n,t){return Math.min(Math.max(e,n),t)}function me(e){return 1-Math.pow(1-e,3)}function ke(e){return fe.indexOf(se)>=fe.indexOf(e)}function ze(e,n,t){return H===0?0:M((e-H-n)/Math.max(t,1),0,1)}function Pe(e=!1){return window.scrollY<=(e?Be:0)}function ae(e=we){_=Math.max(_,performance.now()+e)}function $e(e){return G||document.hidden||e<_}function Se(e){return e==="live"?"Live":"Coming soon"}function Ae(e){return A.find(n=>n.id===e)}function oe(e){return e!=="network"}function Le(e){return e==="network"?S:v.find(n=>n.project.id===e)?.button??null}function Qe(){const e=A.map(t=>{const s=t.orbitRadius/100*900,a=t.orbitRadius/100*650;return`<ellipse class="orbit-ring" data-ring="${t.id}" cx="450" cy="325" rx="${s.toFixed(1)}" ry="${a.toFixed(1)}" style="--project-color: ${t.color}" />`}).join("");return`
    <svg class="orbit-svg" viewBox="0 0 900 650" preserveAspectRatio="none" aria-hidden="true">
      ${A.map(t=>`<line class="orbit-line" data-connector="${t.id}" x1="450" y1="325" x2="450" y2="325" style="--project-color: ${t.color}" />`).join("")}
      ${e}
    </svg>
  `}function Ue(){return A.map((e,n)=>`
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
            <img src="${xe(e.icon)}" alt="" loading="eager" />
          </span>
          <span class="project-label">
            <span class="project-name">${l(e.id==="fortrust"?"Fortrust":e.id)}</span>
            <span class="project-status status-${e.status}">${Se(e.status)}</span>
          </span>
        </button>
      `).join("")}function Re(){return w.proof.map(e=>`
        <div class="proof-item">
          <strong>${l(e.value)}</strong>
          <span>${l(e.label)}</span>
        </div>
      `).join("")}function Ge(){return`
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
          <p class="story-eyebrow">What it is</p>
          <h3>A small independent ecosystem for community, play, privacy, and connection.</h3>
          <p>
            ${l(w.description)}
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
          ${Re()}
        </div>
      </article>
    </section>
  `}function Ke(){const e=A.map(n=>`
        <button type="button" data-select="${n.id}" style="--project-color: ${n.color}">
          <strong>${l(n.name)}</strong>
          <span>${l(n.tagline)}</span>
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
      <div class="panel-metrics" aria-label="Network proof points">${Re()}</div>
      <div class="network-links">${e}</div>
    </div>
  `}function _e(e){const n=[e.primaryCta?`<a class="panel-cta primary" href="${e.primaryCta.href}" target="_blank" rel="noreferrer">${l(e.primaryCta.label)}</a>`:"",e.secondaryCta?`<a class="panel-cta" href="${e.secondaryCta.href}" target="_blank" rel="noreferrer">${l(e.secondaryCta.label)}</a>`:""].filter(Boolean).join(""),t=e.status==="coming-soon"?'<div class="coming-soon-note">This orbit is visible because it belongs to the network, but its public destination is not linked yet.</div>':"";return`
    <div class="panel-inner">
      <div class="panel-topline">
        <span class="status-pill" style="--status-color: ${e.status==="live"?"var(--success)":"var(--stone)"}">${Se(e.status)}</span>
        <button type="button" class="panel-close" data-select="network" aria-label="Return to network overview">x</button>
      </div>
      <div class="panel-copy">
        <p class="panel-kicker">${l(e.domainLabel)}</p>
        <h2 class="panel-title">${l(e.name)}</h2>
        <p class="panel-description">${l(e.description)}</p>
      </div>
      <div class="principles">
        <span>${l(e.tagline)}</span>
        <span>${l(e.status==="live"?"Active destination":"Network preview")}</span>
      </div>
      <div class="cta-stack">
        ${n||t}
      </div>
    </div>
  `}function De(){const e=Ae(b);return e?_e(e):Ke()}function Je(){P.innerHTML=`
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
              ${Qe()}
              <button type="button" class="core-button" data-select="network" aria-label="Show ${l(w.name)} overview">
                <span class="core-aura" aria-hidden="true"></span>
                <img src="${xe(w.icon)}" alt="" />
                <span class="core-label">
                  <strong>${l(w.name.toUpperCase())}</strong>
                  <span>${l(w.tagline)}</span>
                </span>
              </button>
              <div class="project-layer" id="project-layer">
                ${Ue()}
              </div>
            </div>
          </div>
        </section>

        <aside class="detail-panel is-collapsed" id="detail-panel" aria-live="polite" aria-expanded="false" aria-hidden="true" inert>
          ${De()}
        </aside>
      </main>

      ${Ge()}

      <div class="selected-project-layer" aria-hidden="true"></div>
    </div>
  `}function Ze(){o=P.querySelector(".app-shell"),E=P.querySelector("#detail-panel"),R=P.querySelector("#orbit-map"),Q=P.querySelector("#orbit-scene"),S=P.querySelector(".core-button"),B=P.querySelector(".selected-project-layer"),v=A.map((e,n)=>{const t=P.querySelector(`button[data-project-id="${e.id}"]`);if(!t)throw new Error(`Missing orbit node for ${e.id}`);return{project:e,button:t,ring:P.querySelector(`[data-ring="${e.id}"]`),connector:P.querySelector(`[data-connector="${e.id}"]`),slotAngle:-Math.PI/2+n*Math.PI*2/A.length,radius:0,collisionRadius:0,x:0,y:0}})}function et(){o&&(o.style.setProperty("--intro-total-ms",`${d.totalMs}ms`),o.style.setProperty("--intro-sun-ms",`${d.sunMs}ms`),o.style.setProperty("--intro-sky-delay-ms",`${d.skyDelayMs}ms`),o.style.setProperty("--intro-sky-ms",`${d.skyMs}ms`),o.style.setProperty("--intro-planets-delay-ms",`${d.planetsDelayMs}ms`),o.style.setProperty("--intro-planet-stagger-ms",`${d.planetStaggerMs}ms`),o.style.setProperty("--intro-planet-pop-ms",`${d.planetPopMs}ms`),o.style.setProperty("--intro-settle-delay-ms",`${d.settleDelayMs}ms`),o.style.setProperty("--intro-settle-ms",`${d.settleMs}ms`),o.style.setProperty("--intro-title-delay-ms",`${d.titleDelayMs}ms`),o.style.setProperty("--intro-title-ms",`${d.titleMs}ms`),o.style.setProperty("--intro-tagline-delay-ms",`${d.taglineDelayMs}ms`),o.style.setProperty("--intro-tagline-ms",`${d.taglineMs}ms`))}function ee(){o?.setAttribute("data-intro-phase",se),o?.setAttribute("data-intro-ready",String(F)),o?.setAttribute("data-intro-playback",ie),o?.setAttribute("data-intro-reveal",O),R&&R.toggleAttribute("inert",!F)}function te(e){se=e,F=e==="ready",ee(),Ie()}function Ce(){for(const e of J)window.clearTimeout(e);J=[]}function Fe(){j&&(window.cancelAnimationFrame(j),j=0),N&&(window.clearTimeout(N),N=0)}function tt(){Ce(),Fe(),ie="full",O="idle",H=performance.now(),te("sun"),J=[{phase:"sky",at:d.skyDelayMs},{phase:"planets",at:d.planetsDelayMs},{phase:"settle",at:d.settleDelayMs},{phase:"title",at:d.titleDelayMs},{phase:"tagline",at:d.taglineDelayMs},{phase:"ready",at:d.totalMs}].map(({phase:n,at:t})=>window.setTimeout(()=>{te(n)},t))}function nt(){Ce(),Fe(),ie="quick",O="quick-prep",H=0,te("ready"),o&&(o.getBoundingClientRect(),j=window.requestAnimationFrame(()=>{j=0,O="quick-active",ee(),N=window.setTimeout(()=>{N=0,O="idle",ee()},Xe+40)}))}function re(e=!1,n=!1){const t=Pe(n);if(!(!e&&t===Z)){if(Z=t,L(),t){tt();return}nt()}}function L(){ne=!0}function st(){if(window.addEventListener("resize",L,{passive:!0}),window.addEventListener("orientationchange",L,{passive:!0}),window.addEventListener("scroll",()=>{ae(Me),re()},{passive:!0}),"ResizeObserver"in window){const e=new ResizeObserver(L);R&&e.observe(R),S&&e.observe(S);for(const n of v)e.observe(n.button)}document.fonts?.ready.then(L).catch(()=>{});for(const e of P.querySelectorAll("img"))e.complete||(e.addEventListener("load",L,{once:!0}),e.addEventListener("error",L,{once:!0}))}function it(e,n){return(e??Le(n))?.getBoundingClientRect()??null}function at(e,n){const t=e.getBoundingClientRect(),s=t.left+t.width/2,a=t.top+t.height/2,i=n?n.left+n.width/2:s,r=n?n.top+n.height/2:a,h=t.left+t.width/2,f=t.top+t.height/2;e.style.setProperty("--reveal-origin-x",`${(i-t.left).toFixed(1)}px`),e.style.setProperty("--reveal-origin-y",`${(r-t.top).toFixed(1)}px`),e.style.setProperty("--panel-enter-x",`${(i-h).toFixed(1)}px`),e.style.setProperty("--panel-enter-y",`${(r-f).toFixed(1)}px`)}function Ee(e){const n=window.innerWidth>=920,t=n?M(window.innerWidth*.3,240,520):window.innerWidth*.5,s=n?M(window.innerHeight*.5,170,Math.max(170,window.innerHeight-170)):M(window.innerHeight*.31,132,Math.max(132,window.innerHeight*.38));return{x:Number.isFinite(t)?t:e.offsetLeft+e.centerX,y:Number.isFinite(s)?s:e.offsetTop+e.centerY}}function ot(e){S?.classList.toggle("is-active",b==="network");for(const n of v){const t=n.project.id===b;n.button.classList.toggle("is-active",t),n.button.setAttribute("aria-pressed",String(t)),n.ring?.classList.toggle("is-active",t),n.ring?.style.setProperty("--project-color",e),n.connector?.classList.toggle("is-active",t),n.connector?.style.setProperty("--project-color",e)}E?.querySelectorAll("[data-select]").forEach(n=>{n.classList.toggle("is-active",n.dataset.select===b)})}function rt(e){const n=E;if(n){if(n.innerHTML=De(),n.toggleAttribute("inert",!y),n.setAttribute("aria-expanded",String(y)),n.setAttribute("aria-hidden",String(!y)),!y){n.classList.remove("is-expanded"),n.classList.add("is-collapsed");return}at(n,e),n.classList.remove("is-expanded"),n.classList.add("is-collapsed"),n.getBoundingClientRect(),n.classList.add("is-expanded"),n.classList.remove("is-collapsed")}}function lt(){const e=B,n=oe(b)?v.find(t=>t.project.id===b):void 0;if(!e||!y||!n){$=null,B?.replaceChildren(),B?.classList.remove("has-selection");return}if($?.dataset.projectId!==n.project.id){const t=n.button.cloneNode(!0);t.classList.add("selected-project-node","is-active"),t.removeAttribute("data-select"),t.removeAttribute("aria-label"),t.setAttribute("tabindex","-1"),t.setAttribute("aria-hidden","true"),t.dataset.projectId=n.project.id,t.style.setProperty("--project-color",n.project.color),e.replaceChildren(t),$=t}if($&&U){const t=Ee(U);$.style.setProperty("--tx",`${t.x.toFixed(1)}px`),$.style.setProperty("--ty",`${t.y.toFixed(1)}px`)}e.classList.add("has-selection")}function ct(){document.body.classList.contains("is-detail-scroll-locked")||(K=window.scrollY,document.documentElement.classList.add("is-detail-scroll-locked"),document.body.classList.add("is-detail-scroll-locked"),document.body.style.position="fixed",document.body.style.top=`-${K}px`,document.body.style.left="0",document.body.style.right="0",document.body.style.width="100%")}function dt(){document.body.classList.contains("is-detail-scroll-locked")&&(document.documentElement.classList.remove("is-detail-scroll-locked"),document.body.classList.remove("is-detail-scroll-locked"),document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.right="",document.body.style.width="",window.scrollTo(0,K))}function Ie(){if(y){ct();return}dt()}function C(e,n){b=e,y=oe(b),G=y,ae(y?we:180);const s=Ae(b)?.color??"#ff9500",a=y?it(n,e):ye;y&&a&&(ye=a),o?.setAttribute("data-selected",b),o?.setAttribute("data-panel-expanded",String(y)),o?.classList.toggle("is-focused",y),o?.classList.toggle("is-panel-expanded",y),o?.classList.toggle("is-scene-frozen",G),o?.style.setProperty("--project-color",s),E?.style.setProperty("--project-color",s),ot(s),rt(a),lt(),Ie(),L()}function he(e){const t=(T.indexOf(b)+e+T.length)%T.length,s=T[t];s&&C(s,Le(s)??void 0)}function ut(){document.addEventListener("click",e=>{if(!F)return;const n=e.target instanceof Element?e.target:null,t=n?.closest("[data-select]")??null,s=t?.dataset.select;if(s&&T.includes(s)){C(s,t??void 0);return}y&&n&&!E?.contains(n)&&C("network",S??void 0)}),R?.addEventListener("keydown",e=>{if(!F){e.key==="Tab"&&e.preventDefault();return}(e.key==="ArrowRight"||e.key==="ArrowDown")&&(e.preventDefault(),he(1)),(e.key==="ArrowLeft"||e.key==="ArrowUp")&&(e.preventDefault(),he(-1)),(e.key==="Escape"||e.key==="Home")&&(e.preventDefault(),C("network",S??void 0))}),document.addEventListener("keydown",e=>{if(!F){e.key==="Tab"&&e.preventDefault();return}e.key==="Escape"&&y&&(e.preventDefault(),C("network",S??void 0))}),E?.addEventListener("scroll",()=>{ae(Me)},{passive:!0})}function ge(){const e=R;if(!e)return null;const n=e.getBoundingClientRect(),t=Math.max(e.clientWidth||n.width,1),s=Math.max(e.clientHeight||n.height,1),a=t/s,i=t<760,r=M((a-1.26)/.54,0,1),h=M((.92-a)/.28,0,1),f=i?0:Math.min(t*.014,18),m=i?Math.min(s*.03,20):0,p=r*Math.min(t*.082,104)+f,k=-h*Math.min(s*.068,56)-m,u=t/2,g=s/2,c=(S?.offsetWidth??Math.min(t,s)*.24)/2,I=i?8:18,V=i?10:26,D=i?1.18:.88,X=Math.min(t,s)*(i?.0108:.0114);o?.style.setProperty("--orbit-bias-x",`${p.toFixed(1)}px`),o?.style.setProperty("--orbit-bias-y",`${k.toFixed(1)}px`),Q?.style.setProperty("--scene-settle-x",`${p.toFixed(1)}px`),Q?.style.setProperty("--scene-settle-y",`${k.toFixed(1)}px`);const le={width:t,height:s,offsetLeft:n.left,offsetTop:n.top,centerX:u,centerY:g,coreRadius:c,orbitSquash:D,edgeMargin:I,coreMargin:V,compact:i};U=le;for(const x of v){const ce=b===x.project.id?i?1.08:1.22:1,de=b===x.project.id?i?16:36:i?10:22,Te=Math.max(x.button.offsetWidth,1)*ce+de,Oe=Math.max(x.button.offsetHeight,1)*ce+de,Y=Math.max(Te,Oe)/2,je=Math.max(0,u-Y-I),Ne=Math.max(0,(g-Y-I)/D),W=Math.min(je,Ne),ue=c+Y+V,He=x.project.orbitRadius*X;x.collisionRadius=Y,x.radius=W>=ue?M(He,ue,W):W,x.ring&&(x.ring.setAttribute("rx",(x.radius/t*900).toFixed(1)),x.ring.setAttribute("ry",(x.radius*D/s*650).toFixed(1)))}return ne=!1,le}function q(e,n){const t=e.collisionRadius+n.edgeMargin,s=n.width-e.collisionRadius-n.edgeMargin,a=e.collisionRadius+n.edgeMargin,i=n.height-e.collisionRadius-n.edgeMargin;e.x=M(e.x,Math.min(t,s),Math.max(t,s)),e.y=M(e.y,Math.min(a,i),Math.max(a,i));const r=e.x-n.centerX,h=e.y-n.centerY,f=n.coreRadius+e.collisionRadius+n.coreMargin,m=Math.hypot(r,h);if(m<f){const p=m>.001?Math.atan2(h,r):e.slotAngle;e.x=n.centerX+Math.cos(p)*f,e.y=n.centerY+Math.sin(p)*f,e.x=M(e.x,Math.min(t,s),Math.max(t,s)),e.y=M(e.y,Math.min(a,i),Math.max(a,i))}}function pt(e){for(let n=0;n<Ye;n+=1){for(const t of v)q(t,e);for(let t=0;t<v.length;t+=1){const s=v[t];if(s)for(let a=t+1;a<v.length;a+=1){const i=v[a];if(!i)continue;const r=i.x-s.x,h=i.y-s.y,f=s.collisionRadius+i.collisionRadius,m=Math.hypot(r,h);if(m>=f)continue;const p=s.slotAngle+(a-t)*.73,k=m>.001?r/m:Math.cos(p),u=m>.001?h/m:Math.sin(p),g=(f-m)/2+.5;s.x-=k*g,s.y-=u*g,i.x+=k*g,i.y+=u*g,q(s,e),q(i,e)}}}}function be(e){const n=oe(b)?v.find(t=>t.project.id===b):void 0;for(const t of v)t.button.style.setProperty("--tx",`${t.x.toFixed(1)}px`),t.button.style.setProperty("--ty",`${t.y.toFixed(1)}px`),t.connector&&(t.connector.setAttribute("x1","450"),t.connector.setAttribute("y1","325"),t.connector.setAttribute("x2",(t.x/e.width*900).toFixed(1)),t.connector.setAttribute("y2",(t.y/e.height*650).toFixed(1)));if($&&n&&y){const t=Ee(e);$.style.setProperty("--tx",`${t.x.toFixed(1)}px`),$.style.setProperty("--ty",`${t.y.toFixed(1)}px`)}}function ft(){let e=0,n,t=ge(),s=!1;function a(i){const r=ne||!t;if(r&&(t=ge()),!t){window.requestAnimationFrame(a);return}const h=n===void 0?16.67:Math.min(i-n,40);n=i;const f=ke("planets")&&!$e(i);if(f){e+=h;const m=e*(z.matches?pe*.28:pe);for(const p of v){const k=m+p.slotAngle;p.x=t.centerX+Math.cos(k)*p.radius,p.y=t.centerY+Math.sin(k)*p.radius*t.orbitSquash}pt(t),be(t)}else(r||f!==s)&&be(t);s=f,window.requestAnimationFrame(a)}window.requestAnimationFrame(a)}function yt(e){return Array.from({length:e},()=>({x:Math.random(),y:Math.random(),size:.45+Math.random()*1.9,tone:Math.random(),twinkle:Math.random()*Math.PI*2,speed:7e-4+Math.random()*.0012,revealDelay:Math.random()*1050,revealDuration:180+Math.random()*760}))}function mt(){const e=document.querySelector("#starfield"),n=e?.getContext("2d");if(!e||!n)return;const t=e,s=n,a=yt(170);let i=0,r=0,h=0,f=!1;function m(){const u=Math.min(window.devicePixelRatio||1,2);i=window.innerWidth,r=window.innerHeight,t.width=Math.floor(i*u),t.height=Math.floor(r*u),t.style.width=`${i}px`,t.style.height=`${r}px`,s.setTransform(u,0,0,u,0,0),p(0)}function p(u){s.clearRect(0,0,i,r);const g=me(ze(u,d.titleDelayMs,d.titleMs+820));if(g>0){const c=s.createRadialGradient(i*.5,r*.45,0,i*.5,r*.45,i*.72);c.addColorStop(0,`rgba(255, 149, 0, ${(.11*g).toFixed(3)})`),c.addColorStop(.34,`rgba(80, 124, 190, ${(.075*g).toFixed(3)})`),c.addColorStop(1,"rgba(3, 5, 10, 0)"),s.fillStyle=c,s.fillRect(0,0,i,r)}for(const c of a){const I=c.tone>.82?"255, 149, 0":c.tone>.66?"80, 124, 190":"247, 249, 252",V=z.matches?.66+Math.sin(u*c.speed*.35+c.twinkle)*.08:.45+Math.sin(u*c.speed+c.twinkle)*.28,D=me(M((u-H-d.titleDelayMs-c.revealDelay)/c.revealDuration,0,1));if(D<=0)continue;const X=M((V+(c.tone>.78?.16:0))*D,.05,.88);s.beginPath(),s.fillStyle=`rgba(${I}, ${X.toFixed(3)})`,s.arc(c.x*i,c.y*r,c.size,0,Math.PI*2),s.fill()}}function k(u){const g=ke("title")&&!$e(u),c=z.matches?120:40;g&&u-h>=c?(h=u,p(u)):!g&&f&&p(h||u),f=g,window.requestAnimationFrame(k)}window.addEventListener("resize",m,{passive:!0}),m(),window.requestAnimationFrame(k)}Je();Ze();et();st();ut();C("network");ft();mt();Z=Pe(!0);re(!0,!0);window.requestAnimationFrame(()=>{re(!1,!0)});
//# sourceMappingURL=app-CFROylUT.js.map
