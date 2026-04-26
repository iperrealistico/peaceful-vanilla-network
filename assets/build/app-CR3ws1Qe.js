(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const v={name:"Peaceful Vanilla Network",tagline:"Community, fun, privacy and connection.",icon:"assets/generated/peaceful-vanilla-network-icon.png",description:"Peaceful Vanilla Network is a small-business ecosystem built by family and friends: gaming worlds, chat, profiles, and experiments made for real connection without big-corp nonsense.",principles:["Community-first","Fun-driven","Privacy-aware","Small business, not big corp"],proof:[{label:"Since",value:"2019"},{label:"Players",value:"110K+"},{label:"Backups",value:"28TB"},{label:"Projects",value:"5"}]},A=[{id:"club",name:"Peaceful Vanilla Club",domainLabel:"peacefulvanilla.club",tagline:"The fun-first gaming world.",description:"A family-and-friends driven Minecraft SMP with a stable world, cross-play support, strong community culture, and a clear no pay-to-win philosophy.",status:"live",icon:"assets/logos/peaceful-vanilla-club-logo.png",color:"#ff9500",orbitRadius:33,orbitSpeed:12e-5,initialAngle:-2.72,primaryCta:{label:"Visit Club",href:"https://www.peacefulvanilla.club/"}},{id:"hytale",name:"Peaceful Vanilla Club: Hytale",domainLabel:"hytale.peacefulvanilla.club",tagline:"The Hytale vanilla server branch.",description:"A dedicated Hytale-facing home for Peaceful Vanilla Club, carrying the same fun-first community spirit, long-term mindset, and no pay-to-win philosophy into a new world.",status:"live",icon:"assets/logos/peaceful-vanilla-club-hytale-icon.jpg",color:"#ff7a00",orbitRadius:46,orbitSpeed:82e-6,initialAngle:-1.48,primaryCta:{label:"Visit Hytale",href:"https://hytale.peacefulvanilla.club/"},secondaryCta:{label:"Visit Club",href:"https://www.peacefulvanilla.club/"}},{id:"chat",name:"Peaceful Vanilla Chat",domainLabel:"peacefulvanilla.chat",tagline:"Private connection without big-corp baggage.",description:"A Matrix-powered, self-hosted communication platform where players, creators, family groups, and friends stay connected without face scans, personal documents, or big-platform lock-in.",status:"live",icon:"assets/logos/peaceful-vanilla-chat-icon-192.png",color:"#507cbe",orbitRadius:37,orbitSpeed:95e-6,initialAngle:-.42,primaryCta:{label:"Visit Chat",href:"https://www.peacefulvanilla.chat/"},secondaryCta:{label:"Enter App",href:"https://app.peacefulvanilla.chat"}},{id:"space",name:"Peaceful Vanilla Space",domainLabel:"peacefulvanilla.space",tagline:"Profiles, hubs, and social connection.",description:"A coming Peaceful Vanilla web layer for profiles, community hubs, and social surfaces that make the wider network easier to discover and more fun to explore.",status:"coming-soon",icon:"assets/generated/peaceful-vanilla-space-icon.png",color:"#ffc26b",orbitRadius:41,orbitSpeed:75e-6,initialAngle:2.38},{id:"fortrust",name:"Fortrust",domainLabel:"Fortrust by Peaceful Vanilla",tagline:"A separate experiment.",description:"An independent Peaceful Vanilla experiment kept intentionally separate, so small-team ideas can be tested freely without blurring the core network identity.",status:"coming-soon",icon:"assets/fortrust/fortrust-icon.png",color:"#d0c0b8",orbitRadius:29,orbitSpeed:105e-6,initialAngle:.92}],be=document.querySelector("#app");if(!be)throw new Error("Missing #app mount point");const k=be,He="./",j=["network",...A.map(e=>e.id)],B=window.matchMedia("(prefers-reduced-motion: reduce)"),de=88e-6,Ve=3,we=260,ve=140,Ye=24,Xe=220,qe=120,ue=["sun","sky","planets","settle","title","tagline","ready"],We={totalMs:5e3,sunMs:520,skyDelayMs:320,skyMs:2100,planetsDelayMs:1740,planetStaggerMs:135,planetPopMs:720,settleDelayMs:3220,settleMs:1120,titleDelayMs:3660,titleMs:920,taglineDelayMs:4320,taglineMs:520};let g="network",y=!1,pe=null,a=null,E=null,D=null,U=null,S=null,q=null,$=null,w=[],G=null,ne=!0,K=!1,_=0,J=0,se="sun",R=!1,V="full",F="idle",Z=[],Y=0,N=0,H=0,fe=!1,W=0;function ze(e){const t=Math.max(e.sunMs,e.skyDelayMs+e.skyMs,e.planetsDelayMs+e.planetPopMs+Math.max(A.length-1,0)*e.planetStaggerMs,e.settleDelayMs+e.settleMs,e.titleDelayMs+e.titleMs,e.taglineDelayMs+e.taglineMs,1),n=e.totalMs/t,s=o=>Math.round(o*n);return{totalMs:Math.round(e.totalMs),sunMs:s(e.sunMs),skyDelayMs:s(e.skyDelayMs),skyMs:s(e.skyMs),planetsDelayMs:s(e.planetsDelayMs),planetStaggerMs:s(e.planetStaggerMs),planetPopMs:s(e.planetPopMs),settleDelayMs:s(e.settleDelayMs),settleMs:s(e.settleMs),titleDelayMs:s(e.titleDelayMs),titleMs:s(e.titleMs),taglineDelayMs:s(e.taglineDelayMs),taglineMs:s(e.taglineMs)}}const d=ze(We);function Me(e){return`${He}${e}`}function c(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function M(e,t,n){return Math.min(Math.max(e,t),n)}function ye(e){return 1-Math.pow(1-e,3)}function xe(e){return ue.indexOf(se)>=ue.indexOf(e)}function Qe(e,t,n){return Y===0?0:M((e-Y-t)/Math.max(n,1),0,1)}function Ue(e=!1){return window.scrollY<=(e?Ye:0)}function ie(e=we){J=Math.max(J,performance.now()+e)}function ke(e){return K||document.hidden||e<J}function Pe(e){return e==="live"?"Live":"Coming soon"}function $e(e){return A.find(t=>t.id===e)}function oe(e){return e!=="network"}function Se(e){return e==="network"?S:w.find(t=>t.project.id===e)?.button??null}function Ge(){const e=A.map(n=>{const s=n.orbitRadius/100*900,o=n.orbitRadius/100*650;return`<ellipse class="orbit-ring" data-ring="${n.id}" cx="450" cy="325" rx="${s.toFixed(1)}" ry="${o.toFixed(1)}" style="--project-color: ${n.color}" />`}).join("");return`
    <svg class="orbit-svg" viewBox="0 0 900 650" preserveAspectRatio="none" aria-hidden="true">
      ${A.map(n=>`<line class="orbit-line" data-connector="${n.id}" x1="450" y1="325" x2="450" y2="325" style="--project-color: ${n.color}" />`).join("")}
      ${e}
    </svg>
  `}function Ke(){return A.map((e,t)=>`
        <button
          type="button"
          class="project-node"
          data-select="${e.id}"
          data-project-id="${e.id}"
          aria-label="Show ${c(e.name)}"
          aria-pressed="false"
          style="--project-color: ${e.color}; --intro-order: ${t}"
        >
          <span class="planet-avatar" aria-hidden="true">
            <img src="${Me(e.icon)}" alt="" loading="eager" />
          </span>
          <span class="project-label">
            <span class="project-name">${c(e.id==="fortrust"?"Fortrust":e.id)}</span>
            <span class="project-status status-${e.status}">${Pe(e.status)}</span>
          </span>
        </button>
      `).join("")}function Ae(){return v.proof.map(e=>`
        <div class="proof-item">
          <strong>${c(e.value)}</strong>
          <span>${c(e.label)}</span>
        </div>
      `).join("")}function _e(){return`
    <section class="network-story" aria-labelledby="network-story-title">
      <div class="story-title-block">
        <p class="story-kicker">${c(v.tagline)}</p>
        <h2 id="network-story-title">
          <span>Peaceful Vanilla</span>
          <span>Network</span>
        </h2>
      </div>

      <article class="network-story-card" aria-label="${c(v.name)} overview">
        <div class="story-card-copy">
          <p class="story-eyebrow">What it is</p>
          <h3>A small independent ecosystem for community, play, privacy, and connection.</h3>
          <p>
            ${c(v.description)}
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
          ${Ae()}
        </div>
      </article>
    </section>
  `}function Je(){const e=A.map(t=>`
        <button type="button" data-select="${t.id}" style="--project-color: ${t.color}">
          <strong>${c(t.name)}</strong>
          <span>${c(t.tagline)}</span>
        </button>
      `).join("");return`
    <div class="panel-inner">
      <div class="panel-topline">
        <span class="status-pill" style="--status-color: var(--accent-soft)">Network core</span>
      </div>
      <div class="panel-copy">
        <p class="panel-kicker">${c(v.name)}</p>
        <h2 class="panel-title">${c(v.tagline)}</h2>
        <p class="panel-description">${c(v.description)}</p>
      </div>
      <div class="principles">
        ${v.principles.map(t=>`<span>${c(t)}</span>`).join("")}
      </div>
      <div class="panel-metrics" aria-label="Network proof points">${Ae()}</div>
      <div class="network-links">${e}</div>
    </div>
  `}function Ze(e){const t=[e.primaryCta?`<a class="panel-cta primary" href="${e.primaryCta.href}" target="_blank" rel="noreferrer">${c(e.primaryCta.label)}</a>`:"",e.secondaryCta?`<a class="panel-cta" href="${e.secondaryCta.href}" target="_blank" rel="noreferrer">${c(e.secondaryCta.label)}</a>`:""].filter(Boolean).join(""),n=e.status==="coming-soon"?'<div class="coming-soon-note">This orbit is visible because it belongs to the network, but its public destination is not linked yet.</div>':"";return`
    <div class="panel-inner">
      <div class="panel-topline">
        <span class="status-pill" style="--status-color: ${e.status==="live"?"var(--success)":"var(--stone)"}">${Pe(e.status)}</span>
        <button type="button" class="panel-close" data-select="network" aria-label="Return to network overview">x</button>
      </div>
      <div class="panel-copy">
        <p class="panel-kicker">${c(e.domainLabel)}</p>
        <h2 class="panel-title">${c(e.name)}</h2>
        <p class="panel-description">${c(e.description)}</p>
      </div>
      <div class="principles">
        <span>${c(e.tagline)}</span>
        <span>${c(e.status==="live"?"Active destination":"Network preview")}</span>
      </div>
      <div class="cta-stack">
        ${t||n}
      </div>
    </div>
  `}function Le(){const e=$e(g);return e?Ze(e):Je()}function et(){k.innerHTML=`
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
          <h1 id="network-title" class="visually-hidden">${c(v.name)}</h1>

          <div class="orbit-map" id="orbit-map" tabindex="0" role="application" aria-label="Interactive Peaceful Vanilla Network orbit">
            <div class="orbit-scene" id="orbit-scene">
              ${Ge()}
              <button type="button" class="core-button" data-select="network" aria-label="Show ${c(v.name)} overview">
                <span class="core-aura" aria-hidden="true"></span>
                <img src="${Me(v.icon)}" alt="" />
                <span class="core-label">
                  <strong>${c(v.name.toUpperCase())}</strong>
                  <span>${c(v.tagline)}</span>
                </span>
              </button>
              <div class="project-layer" id="project-layer">
                ${Ke()}
              </div>
            </div>
          </div>
        </section>

        <aside class="detail-panel is-collapsed" id="detail-panel" aria-live="polite" aria-expanded="false" aria-hidden="true" inert>
          ${Le()}
        </aside>
      </main>

      ${_e()}

      <div class="selected-project-layer" aria-hidden="true"></div>
    </div>
  `}function tt(){a=k.querySelector(".app-shell"),E=k.querySelector("#detail-panel"),D=k.querySelector("#orbit-map"),U=k.querySelector("#orbit-scene"),S=k.querySelector(".core-button"),q=k.querySelector(".selected-project-layer"),w=A.map((e,t)=>{const n=k.querySelector(`button[data-project-id="${e.id}"]`);if(!n)throw new Error(`Missing orbit node for ${e.id}`);return{project:e,button:n,ring:k.querySelector(`[data-ring="${e.id}"]`),connector:k.querySelector(`[data-connector="${e.id}"]`),slotAngle:-Math.PI/2+t*Math.PI*2/A.length,radius:0,collisionRadius:0,x:0,y:0}})}function nt(){a&&(a.style.setProperty("--intro-total-ms",`${d.totalMs}ms`),a.style.setProperty("--intro-sun-ms",`${d.sunMs}ms`),a.style.setProperty("--intro-sky-delay-ms",`${d.skyDelayMs}ms`),a.style.setProperty("--intro-sky-ms",`${d.skyMs}ms`),a.style.setProperty("--intro-planets-delay-ms",`${d.planetsDelayMs}ms`),a.style.setProperty("--intro-planet-stagger-ms",`${d.planetStaggerMs}ms`),a.style.setProperty("--intro-planet-pop-ms",`${d.planetPopMs}ms`),a.style.setProperty("--intro-settle-delay-ms",`${d.settleDelayMs}ms`),a.style.setProperty("--intro-settle-ms",`${d.settleMs}ms`),a.style.setProperty("--intro-title-delay-ms",`${d.titleDelayMs}ms`),a.style.setProperty("--intro-title-ms",`${d.titleMs}ms`),a.style.setProperty("--intro-tagline-delay-ms",`${d.taglineDelayMs}ms`),a.style.setProperty("--intro-tagline-ms",`${d.taglineMs}ms`))}function ee(){a?.setAttribute("data-intro-phase",se),a?.setAttribute("data-intro-ready",String(R)),a?.setAttribute("data-intro-playback",V),a?.setAttribute("data-intro-reveal",F),D&&D.toggleAttribute("inert",!R)}function te(e){se=e,R=e==="ready",ee(),Ee()}function Re(){for(const e of Z)window.clearTimeout(e);Z=[]}function De(){N&&(window.cancelAnimationFrame(N),N=0),H&&(window.clearTimeout(H),H=0)}function st(){W&&(window.clearTimeout(W),W=0)}function it(){Re(),De(),V="full",F="idle",Y=performance.now(),te("sun"),Z=[{phase:"sky",at:d.skyDelayMs},{phase:"planets",at:d.planetsDelayMs},{phase:"settle",at:d.settleDelayMs},{phase:"title",at:d.titleDelayMs},{phase:"tagline",at:d.taglineDelayMs},{phase:"ready",at:d.totalMs}].map(({phase:t,at:n})=>window.setTimeout(()=>{te(t)},n))}function ot(){Re(),De(),V="quick",F="quick-prep",Y=0,te("ready"),a&&(a.getBoundingClientRect(),N=window.requestAnimationFrame(()=>{N=0,F="quick-active",ee(),H=window.setTimeout(()=>{H=0,F="idle",ee()},Xe+40)}))}function Ce(e=!1){if(!fe){if(fe=!0,st(),L(),Ue(e)){it();return}ot()}}function L(){ne=!0}function at(){if(window.addEventListener("resize",L,{passive:!0}),window.addEventListener("orientationchange",L,{passive:!0}),window.addEventListener("scroll",()=>{ie(ve)},{passive:!0}),"ResizeObserver"in window){const e=new ResizeObserver(L);D&&e.observe(D),S&&e.observe(S);for(const t of w)e.observe(t.button)}document.fonts?.ready.then(L).catch(()=>{});for(const e of k.querySelectorAll("img"))e.complete||(e.addEventListener("load",L,{once:!0}),e.addEventListener("error",L,{once:!0}))}function rt(e,t){return(e??Se(t))?.getBoundingClientRect()??null}function lt(e,t){const n=e.getBoundingClientRect(),s=n.left+n.width/2,o=n.top+n.height/2,i=t?t.left+t.width/2:s,r=t?t.top+t.height/2:o,m=n.left+n.width/2,h=n.top+n.height/2;e.style.setProperty("--reveal-origin-x",`${(i-n.left).toFixed(1)}px`),e.style.setProperty("--reveal-origin-y",`${(r-n.top).toFixed(1)}px`),e.style.setProperty("--panel-enter-x",`${(i-m).toFixed(1)}px`),e.style.setProperty("--panel-enter-y",`${(r-h).toFixed(1)}px`)}function Fe(e){const t=window.innerWidth>=920,n=t?M(window.innerWidth*.3,240,520):window.innerWidth*.5,s=t?M(window.innerHeight*.5,170,Math.max(170,window.innerHeight-170)):M(window.innerHeight*.31,132,Math.max(132,window.innerHeight*.38));return{x:Number.isFinite(n)?n:e.offsetLeft+e.centerX,y:Number.isFinite(s)?s:e.offsetTop+e.centerY}}function ct(e){S?.classList.toggle("is-active",g==="network");for(const t of w){const n=t.project.id===g;t.button.classList.toggle("is-active",n),t.button.setAttribute("aria-pressed",String(n)),t.ring?.classList.toggle("is-active",n),t.ring?.style.setProperty("--project-color",e),t.connector?.classList.toggle("is-active",n),t.connector?.style.setProperty("--project-color",e)}E?.querySelectorAll("[data-select]").forEach(t=>{t.classList.toggle("is-active",t.dataset.select===g)})}function dt(e){const t=E;if(t){if(t.innerHTML=Le(),t.toggleAttribute("inert",!y),t.setAttribute("aria-expanded",String(y)),t.setAttribute("aria-hidden",String(!y)),!y){t.classList.remove("is-expanded"),t.classList.add("is-collapsed");return}lt(t,e),t.classList.remove("is-expanded"),t.classList.add("is-collapsed"),t.getBoundingClientRect(),t.classList.add("is-expanded"),t.classList.remove("is-collapsed")}}function ut(){const e=q,t=oe(g)?w.find(n=>n.project.id===g):void 0;if(!e||!y||!t){$=null,q?.replaceChildren(),q?.classList.remove("has-selection");return}if($?.dataset.projectId!==t.project.id){const n=t.button.cloneNode(!0);n.classList.add("selected-project-node","is-active"),n.removeAttribute("data-select"),n.removeAttribute("aria-label"),n.setAttribute("tabindex","-1"),n.setAttribute("aria-hidden","true"),n.dataset.projectId=t.project.id,n.style.setProperty("--project-color",t.project.color),e.replaceChildren(n),$=n}if($&&G){const n=Fe(G);$.style.setProperty("--tx",`${n.x.toFixed(1)}px`),$.style.setProperty("--ty",`${n.y.toFixed(1)}px`)}e.classList.add("has-selection")}function pt(){document.body.classList.contains("is-detail-scroll-locked")||(_=window.scrollY,document.documentElement.classList.add("is-detail-scroll-locked"),document.body.classList.add("is-detail-scroll-locked"),document.body.style.position="fixed",document.body.style.top=`-${_}px`,document.body.style.left="0",document.body.style.right="0",document.body.style.width="100%")}function ft(){document.body.classList.contains("is-detail-scroll-locked")&&(document.documentElement.classList.remove("is-detail-scroll-locked"),document.body.classList.remove("is-detail-scroll-locked"),document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.right="",document.body.style.width="",window.scrollTo(0,_))}function Ee(){if(y){pt();return}ft()}function C(e,t){g=e,y=oe(g),K=y,ie(y?we:180);const s=$e(g)?.color??"#ff9500",o=y?rt(t,e):pe;y&&o&&(pe=o),a?.setAttribute("data-selected",g),a?.setAttribute("data-panel-expanded",String(y)),a?.classList.toggle("is-focused",y),a?.classList.toggle("is-panel-expanded",y),a?.classList.toggle("is-scene-frozen",K),a?.style.setProperty("--project-color",s),E?.style.setProperty("--project-color",s),ct(s),dt(o),ut(),Ee(),L()}function me(e){const n=(j.indexOf(g)+e+j.length)%j.length,s=j[n];s&&C(s,Se(s)??void 0)}function yt(){document.addEventListener("click",e=>{if(!R)return;const t=e.target instanceof Element?e.target:null,n=t?.closest("[data-select]")??null,s=n?.dataset.select;if(s&&j.includes(s)){C(s,n??void 0);return}y&&t&&!E?.contains(t)&&C("network",S??void 0)}),D?.addEventListener("keydown",e=>{if(!R){e.key==="Tab"&&e.preventDefault();return}(e.key==="ArrowRight"||e.key==="ArrowDown")&&(e.preventDefault(),me(1)),(e.key==="ArrowLeft"||e.key==="ArrowUp")&&(e.preventDefault(),me(-1)),(e.key==="Escape"||e.key==="Home")&&(e.preventDefault(),C("network",S??void 0))}),document.addEventListener("keydown",e=>{if(!R){e.key==="Tab"&&e.preventDefault();return}e.key==="Escape"&&y&&(e.preventDefault(),C("network",S??void 0))}),E?.addEventListener("scroll",()=>{ie(ve)},{passive:!0})}function he(){const e=D;if(!e)return null;const t=e.getBoundingClientRect(),n=Math.max(e.clientWidth||t.width,1),s=Math.max(e.clientHeight||t.height,1),o=n/s,i=n<760,r=M((o-1.26)/.54,0,1),m=M((.92-o)/.28,0,1),h=i?0:Math.min(n*.014,18),p=i?Math.min(s*.03,20):0,b=r*Math.min(n*.082,104)+h,P=-m*Math.min(s*.068,56)-p,l=n/2,f=s/2,u=(S?.offsetWidth??Math.min(n,s)*.24)/2,I=i?8:18,T=i?10:26,O=i?1.18:.88,Ie=Math.min(n,s)*(i?.0108:.0114);a?.style.setProperty("--orbit-bias-x",`${b.toFixed(1)}px`),a?.style.setProperty("--orbit-bias-y",`${P.toFixed(1)}px`),U?.style.setProperty("--scene-settle-x",`${b.toFixed(1)}px`),U?.style.setProperty("--scene-settle-y",`${P.toFixed(1)}px`);const ae={width:n,height:s,offsetLeft:t.left,offsetTop:t.top,centerX:l,centerY:f,coreRadius:u,orbitSquash:O,edgeMargin:I,coreMargin:T,compact:i};G=ae;for(const x of w){const re=g===x.project.id?i?1.08:1.22:1,le=g===x.project.id?i?16:36:i?10:22,Te=Math.max(x.button.offsetWidth,1)*re+le,Oe=Math.max(x.button.offsetHeight,1)*re+le,X=Math.max(Te,Oe)/2,je=Math.max(0,l-X-I),Be=Math.max(0,(f-X-I)/O),z=Math.min(je,Be),ce=u+X+T,Ne=x.project.orbitRadius*Ie;x.collisionRadius=X,x.radius=z>=ce?M(Ne,ce,z):z,x.ring&&(x.ring.setAttribute("rx",(x.radius/n*900).toFixed(1)),x.ring.setAttribute("ry",(x.radius*O/s*650).toFixed(1)))}return ne=!1,ae}function Q(e,t){const n=e.collisionRadius+t.edgeMargin,s=t.width-e.collisionRadius-t.edgeMargin,o=e.collisionRadius+t.edgeMargin,i=t.height-e.collisionRadius-t.edgeMargin;e.x=M(e.x,Math.min(n,s),Math.max(n,s)),e.y=M(e.y,Math.min(o,i),Math.max(o,i));const r=e.x-t.centerX,m=e.y-t.centerY,h=t.coreRadius+e.collisionRadius+t.coreMargin,p=Math.hypot(r,m);if(p<h){const b=p>.001?Math.atan2(m,r):e.slotAngle;e.x=t.centerX+Math.cos(b)*h,e.y=t.centerY+Math.sin(b)*h,e.x=M(e.x,Math.min(n,s),Math.max(n,s)),e.y=M(e.y,Math.min(o,i),Math.max(o,i))}}function mt(e){for(let t=0;t<Ve;t+=1){for(const n of w)Q(n,e);for(let n=0;n<w.length;n+=1){const s=w[n];if(s)for(let o=n+1;o<w.length;o+=1){const i=w[o];if(!i)continue;const r=i.x-s.x,m=i.y-s.y,h=s.collisionRadius+i.collisionRadius,p=Math.hypot(r,m);if(p>=h)continue;const b=s.slotAngle+(o-n)*.73,P=p>.001?r/p:Math.cos(b),l=p>.001?m/p:Math.sin(b),f=(h-p)/2+.5;s.x-=P*f,s.y-=l*f,i.x+=P*f,i.y+=l*f,Q(s,e),Q(i,e)}}}}function ge(e){const t=oe(g)?w.find(n=>n.project.id===g):void 0;for(const n of w)n.button.style.setProperty("--tx",`${n.x.toFixed(1)}px`),n.button.style.setProperty("--ty",`${n.y.toFixed(1)}px`),n.connector&&(n.connector.setAttribute("x1","450"),n.connector.setAttribute("y1","325"),n.connector.setAttribute("x2",(n.x/e.width*900).toFixed(1)),n.connector.setAttribute("y2",(n.y/e.height*650).toFixed(1)));if($&&t&&y){const n=Fe(e);$.style.setProperty("--tx",`${n.x.toFixed(1)}px`),$.style.setProperty("--ty",`${n.y.toFixed(1)}px`)}}function ht(){let e=0,t=0,n,s=he(),o=!1;function i(r){const m=ne||!s;if(m&&(s=he()),!s){window.requestAnimationFrame(i);return}const h=n===void 0?16.67:Math.min(r-n,40);n=r;const p=xe("planets")&&!ke(r),b=B.matches?80:32;if(p){if(t+=h,t<b){o=p,window.requestAnimationFrame(i);return}e+=t,t=0;const P=e*(B.matches?de*.28:de);for(const l of w){const f=P+l.slotAngle;l.x=s.centerX+Math.cos(f)*l.radius,l.y=s.centerY+Math.sin(f)*l.radius*s.orbitSquash}mt(s),ge(s)}else(m||p!==o)&&ge(s);o=p,window.requestAnimationFrame(i)}window.requestAnimationFrame(i)}function gt(e){return Array.from({length:e},()=>({x:Math.random(),y:Math.random(),size:.45+Math.random()*1.9,tone:Math.random(),color:Math.random()>.82?"255, 149, 0":Math.random()>.66?"80, 124, 190":"247, 249, 252",twinkle:Math.random()*Math.PI*2,speed:7e-4+Math.random()*.0012,revealDelay:Math.random()*1050,revealDuration:180+Math.random()*760}))}function bt(){const e=document.querySelector("#starfield"),t=e?.getContext("2d");if(!e||!t)return;const n=e,s=t,o=gt(window.innerWidth<760?68:96);let i=0,r=0,m=0,h=!1;function p(){const l=Math.min(window.devicePixelRatio||1,1.25);i=window.innerWidth,r=window.innerHeight,n.width=Math.floor(i*l),n.height=Math.floor(r*l),n.style.width=`${i}px`,n.style.height=`${r}px`,s.setTransform(l,0,0,l,0,0),b(0)}function b(l){s.clearRect(0,0,i,r);const f=ye(Qe(l,d.titleDelayMs,d.titleMs+820));if(f>0){const u=s.createRadialGradient(i*.5,r*.45,0,i*.5,r*.45,i*.72);u.addColorStop(0,`rgba(255, 149, 0, ${(.075*f).toFixed(3)})`),u.addColorStop(.34,`rgba(80, 124, 190, ${(.05*f).toFixed(3)})`),u.addColorStop(1,"rgba(3, 5, 10, 0)"),s.fillStyle=u,s.fillRect(0,0,i,r)}for(const u of o){const I=B.matches?.72+Math.sin(l*u.speed*.22+u.twinkle)*.05:.54+Math.sin(l*u.speed*.72+u.twinkle)*.18,T=ye(M((l-Y-d.titleDelayMs-u.revealDelay)/u.revealDuration,0,1));if(T<=0)continue;const O=M((I+(u.tone>.78?.14:0))*T,.08,.8);s.beginPath(),s.fillStyle=`rgba(${u.color}, ${O.toFixed(3)})`,s.arc(u.x*i,u.y*r,u.size,0,Math.PI*2),s.fill()}}function P(l){const f=(V==="full"&&xe("title")||V==="quick"&&F!=="quick-prep")&&!ke(l),u=R?B.matches?180:110:B.matches?160:95;f&&l-m>=u?(m=l,b(l)):!f&&h&&b(m||l),h=f,window.requestAnimationFrame(P)}window.addEventListener("resize",p,{passive:!0}),p(),window.requestAnimationFrame(P)}et();tt();nt();at();yt();C("network");ht();bt();window.addEventListener("pageshow",()=>{window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{Ce(!0)})})},{once:!0});W=window.setTimeout(()=>{Ce(!0)},qe);
//# sourceMappingURL=app-CR3ws1Qe.js.map
