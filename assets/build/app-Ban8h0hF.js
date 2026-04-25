(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const w={name:"Peaceful Vanilla Network",tagline:"Community, fun, privacy and connection.",icon:"assets/generated/peaceful-vanilla-network-icon.png",description:"Peaceful Vanilla Network is a small-business ecosystem built by family and friends: gaming worlds, chat, profiles, and experiments made for real connection without big-corp nonsense.",principles:["Community-first","Fun-driven","Privacy-aware","Small business, not big corp"],proof:[{label:"Since",value:"2019"},{label:"Players",value:"110K+"},{label:"Backups",value:"28TB"},{label:"Projects",value:"5"}]},L=[{id:"club",name:"Peaceful Vanilla Club",domainLabel:"peacefulvanilla.club",tagline:"The fun-first gaming world.",description:"A family-and-friends driven Minecraft SMP with a stable world, cross-play support, strong community culture, and a clear no pay-to-win philosophy.",status:"live",icon:"assets/logos/peaceful-vanilla-club-logo.png",color:"#ff9500",orbitRadius:33,orbitSpeed:12e-5,initialAngle:-2.72,primaryCta:{label:"Visit Club",href:"https://www.peacefulvanilla.club/"}},{id:"hytale",name:"Peaceful Vanilla Club: Hytale",domainLabel:"hytale.peacefulvanilla.club",tagline:"The Hytale vanilla server branch.",description:"A dedicated Hytale-facing home for Peaceful Vanilla Club, carrying the same fun-first community spirit, long-term mindset, and no pay-to-win philosophy into a new world.",status:"live",icon:"assets/logos/peaceful-vanilla-club-hytale-icon.jpg",color:"#ff7a00",orbitRadius:46,orbitSpeed:82e-6,initialAngle:-1.48,primaryCta:{label:"Visit Hytale",href:"https://hytale.peacefulvanilla.club/"},secondaryCta:{label:"Visit Club",href:"https://www.peacefulvanilla.club/"}},{id:"chat",name:"Peaceful Vanilla Chat",domainLabel:"peacefulvanilla.chat",tagline:"Private connection without big-corp baggage.",description:"A Matrix-powered, self-hosted communication platform where players, creators, family groups, and friends stay connected without face scans, personal documents, or big-platform lock-in.",status:"live",icon:"assets/logos/peaceful-vanilla-chat-icon-192.png",color:"#507cbe",orbitRadius:37,orbitSpeed:95e-6,initialAngle:-.42,primaryCta:{label:"Visit Chat",href:"https://www.peacefulvanilla.chat/"},secondaryCta:{label:"Enter App",href:"https://app.peacefulvanilla.chat"}},{id:"space",name:"Peaceful Vanilla Space",domainLabel:"peacefulvanilla.space",tagline:"Profiles, hubs, and social connection.",description:"A coming Peaceful Vanilla web layer for profiles, community hubs, and social surfaces that make the wider network easier to discover and more fun to explore.",status:"coming-soon",icon:"assets/generated/peaceful-vanilla-space-icon.png",color:"#ffc26b",orbitRadius:41,orbitSpeed:75e-6,initialAngle:2.38},{id:"fortrust",name:"Fortrust",domainLabel:"Fortrust by Peaceful Vanilla",tagline:"A separate experiment.",description:"An independent Peaceful Vanilla experiment kept intentionally separate, so small-team ideas can be tested freely without blurring the core network identity.",status:"coming-soon",icon:"assets/fortrust/fortrust-icon.png",color:"#d0c0b8",orbitRadius:29,orbitSpeed:105e-6,initialAngle:.92}],ue=document.querySelector("#app");if(!ue)throw new Error("Missing #app mount point");const P=ue,Re="./",O=["network",...L.map(e=>e.id)],X=window.matchMedia("(prefers-reduced-motion: reduce)"),ae=88e-6,Ce=3,fe=260,ye=140,oe=["sun","sky","planets","settle","title","tagline","ready"],Fe={totalMs:5e3,sunMs:520,skyDelayMs:320,skyMs:2100,planetsDelayMs:1740,planetStaggerMs:135,planetPopMs:720,settleDelayMs:3220,settleMs:1120,titleDelayMs:3660,titleMs:920,taglineDelayMs:4320,taglineMs:520};let b="network",y=!1,ie=null,r=null,E=null,R=null,W=null,S=null,N=null,$=null,v=[],z=null,q=!0,U=!1,G=0,K=0,Q="sun",D=!1,_=[],H=0;function Ee(e){const n=Math.max(e.sunMs,e.skyDelayMs+e.skyMs,e.planetsDelayMs+e.planetPopMs+Math.max(L.length-1,0)*e.planetStaggerMs,e.settleDelayMs+e.settleMs,e.titleDelayMs+e.titleMs,e.taglineDelayMs+e.taglineMs,1),t=e.totalMs/n,s=o=>Math.round(o*t);return{totalMs:Math.round(e.totalMs),sunMs:s(e.sunMs),skyDelayMs:s(e.skyDelayMs),skyMs:s(e.skyMs),planetsDelayMs:s(e.planetsDelayMs),planetStaggerMs:s(e.planetStaggerMs),planetPopMs:s(e.planetPopMs),settleDelayMs:s(e.settleDelayMs),settleMs:s(e.settleMs),titleDelayMs:s(e.titleDelayMs),titleMs:s(e.titleMs),taglineDelayMs:s(e.taglineDelayMs),taglineMs:s(e.taglineMs)}}const d=Ee(Fe);function me(e){return`${Re}${e}`}function l(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function M(e,n,t){return Math.min(Math.max(e,n),t)}function re(e){return 1-Math.pow(1-e,3)}function he(e){return oe.indexOf(Q)>=oe.indexOf(e)}function Ie(e,n,t){return H===0?0:M((e-H-n)/Math.max(t,1),0,1)}function J(e=fe){K=Math.max(K,performance.now()+e)}function ge(e){return U||document.hidden||e<K}function be(e){return e==="live"?"Live":"Coming soon"}function ve(e){return L.find(n=>n.id===e)}function Z(e){return e!=="network"}function we(e){return e==="network"?S:v.find(n=>n.project.id===e)?.button??null}function Oe(){const e=L.map(t=>{const s=t.orbitRadius/100*900,o=t.orbitRadius/100*650;return`<ellipse class="orbit-ring" data-ring="${t.id}" cx="450" cy="325" rx="${s.toFixed(1)}" ry="${o.toFixed(1)}" style="--project-color: ${t.color}" />`}).join("");return`
    <svg class="orbit-svg" viewBox="0 0 900 650" preserveAspectRatio="none" aria-hidden="true">
      ${L.map(t=>`<line class="orbit-line" data-connector="${t.id}" x1="450" y1="325" x2="450" y2="325" style="--project-color: ${t.color}" />`).join("")}
      ${e}
    </svg>
  `}function je(){return L.map((e,n)=>`
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
            <img src="${me(e.icon)}" alt="" loading="eager" />
          </span>
          <span class="project-label">
            <span class="project-name">${l(e.id==="fortrust"?"Fortrust":e.id)}</span>
            <span class="project-status status-${e.status}">${be(e.status)}</span>
          </span>
        </button>
      `).join("")}function Me(){return w.proof.map(e=>`
        <div class="proof-item">
          <strong>${l(e.value)}</strong>
          <span>${l(e.label)}</span>
        </div>
      `).join("")}function Te(){return`
    <section class="network-story" aria-labelledby="network-story-title">
      <div class="story-title-block">
        <h2 id="network-story-title">
          <span>Peaceful Vanilla</span>
          <span>Network</span>
        </h2>
        <p class="story-tagline">${l(w.tagline)}</p>
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
          ${Me()}
        </div>
      </article>
    </section>
  `}function Ne(){const e=L.map(n=>`
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
      <div class="panel-metrics" aria-label="Network proof points">${Me()}</div>
      <div class="network-links">${e}</div>
    </div>
  `}function He(e){const n=[e.primaryCta?`<a class="panel-cta primary" href="${e.primaryCta.href}" target="_blank" rel="noreferrer">${l(e.primaryCta.label)}</a>`:"",e.secondaryCta?`<a class="panel-cta" href="${e.secondaryCta.href}" target="_blank" rel="noreferrer">${l(e.secondaryCta.label)}</a>`:""].filter(Boolean).join(""),t=e.status==="coming-soon"?'<div class="coming-soon-note">This orbit is visible because it belongs to the network, but its public destination is not linked yet.</div>':"";return`
    <div class="panel-inner">
      <div class="panel-topline">
        <span class="status-pill" style="--status-color: ${e.status==="live"?"var(--success)":"var(--stone)"}">${be(e.status)}</span>
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
  `}function xe(){const e=ve(b);return e?He(e):Ne()}function Ve(){P.innerHTML=`
    <div
      class="app-shell"
      style="--project-color: var(--accent)"
      data-selected="network"
      data-panel-expanded="false"
      data-intro-phase="sun"
      data-intro-ready="false"
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
              ${Oe()}
              <button type="button" class="core-button" data-select="network" aria-label="Show ${l(w.name)} overview">
                <span class="core-aura" aria-hidden="true"></span>
                <img src="${me(w.icon)}" alt="" />
                <span class="core-label">
                  <strong>${l(w.name.toUpperCase())}</strong>
                  <span>${l(w.tagline)}</span>
                </span>
              </button>
              <div class="project-layer" id="project-layer">
                ${je()}
              </div>
            </div>
          </div>
        </section>

        <aside class="detail-panel is-collapsed" id="detail-panel" aria-live="polite" aria-expanded="false" aria-hidden="true" inert>
          ${xe()}
        </aside>
      </main>

      ${Te()}

      <div class="selected-project-layer" aria-hidden="true"></div>
    </div>
  `}function Ye(){r=P.querySelector(".app-shell"),E=P.querySelector("#detail-panel"),R=P.querySelector("#orbit-map"),W=P.querySelector("#orbit-scene"),S=P.querySelector(".core-button"),N=P.querySelector(".selected-project-layer"),v=L.map((e,n)=>{const t=P.querySelector(`button[data-project-id="${e.id}"]`);if(!t)throw new Error(`Missing orbit node for ${e.id}`);return{project:e,button:t,ring:P.querySelector(`[data-ring="${e.id}"]`),connector:P.querySelector(`[data-connector="${e.id}"]`),slotAngle:-Math.PI/2+n*Math.PI*2/L.length,radius:0,collisionRadius:0,x:0,y:0}})}function Be(){r&&(r.style.setProperty("--intro-total-ms",`${d.totalMs}ms`),r.style.setProperty("--intro-sun-ms",`${d.sunMs}ms`),r.style.setProperty("--intro-sky-delay-ms",`${d.skyDelayMs}ms`),r.style.setProperty("--intro-sky-ms",`${d.skyMs}ms`),r.style.setProperty("--intro-planets-delay-ms",`${d.planetsDelayMs}ms`),r.style.setProperty("--intro-planet-stagger-ms",`${d.planetStaggerMs}ms`),r.style.setProperty("--intro-planet-pop-ms",`${d.planetPopMs}ms`),r.style.setProperty("--intro-settle-delay-ms",`${d.settleDelayMs}ms`),r.style.setProperty("--intro-settle-ms",`${d.settleMs}ms`),r.style.setProperty("--intro-title-delay-ms",`${d.titleDelayMs}ms`),r.style.setProperty("--intro-title-ms",`${d.titleMs}ms`),r.style.setProperty("--intro-tagline-delay-ms",`${d.taglineDelayMs}ms`),r.style.setProperty("--intro-tagline-ms",`${d.taglineMs}ms`))}function Xe(){r?.setAttribute("data-intro-phase",Q),r?.setAttribute("data-intro-ready",String(D)),R&&R.toggleAttribute("inert",!D)}function le(e){Q=e,D=e==="ready",Xe(),Pe()}function We(){for(const e of _)window.clearTimeout(e);_=[]}function ze(){We(),H=performance.now(),le("sun"),_=[{phase:"sky",at:d.skyDelayMs},{phase:"planets",at:d.planetsDelayMs},{phase:"settle",at:d.settleDelayMs},{phase:"title",at:d.titleDelayMs},{phase:"tagline",at:d.taglineDelayMs},{phase:"ready",at:d.totalMs}].map(({phase:n,at:t})=>window.setTimeout(()=>{le(n)},t))}function A(){q=!0}function Ue(){if(window.addEventListener("resize",A,{passive:!0}),window.addEventListener("orientationchange",A,{passive:!0}),window.addEventListener("scroll",()=>{J(ye)},{passive:!0}),"ResizeObserver"in window){const e=new ResizeObserver(A);R&&e.observe(R),S&&e.observe(S);for(const n of v)e.observe(n.button)}document.fonts?.ready.then(A).catch(()=>{});for(const e of P.querySelectorAll("img"))e.complete||(e.addEventListener("load",A,{once:!0}),e.addEventListener("error",A,{once:!0}))}function Ge(e,n){return(e??we(n))?.getBoundingClientRect()??null}function Ke(e,n){const t=e.getBoundingClientRect(),s=t.left+t.width/2,o=t.top+t.height/2,a=n?n.left+n.width/2:s,i=n?n.top+n.height/2:o,h=t.left+t.width/2,f=t.top+t.height/2;e.style.setProperty("--reveal-origin-x",`${(a-t.left).toFixed(1)}px`),e.style.setProperty("--reveal-origin-y",`${(i-t.top).toFixed(1)}px`),e.style.setProperty("--panel-enter-x",`${(a-h).toFixed(1)}px`),e.style.setProperty("--panel-enter-y",`${(i-f).toFixed(1)}px`)}function ke(e){const n=window.innerWidth>=920,t=n?M(window.innerWidth*.3,240,520):window.innerWidth*.5,s=n?M(window.innerHeight*.5,170,Math.max(170,window.innerHeight-170)):M(window.innerHeight*.31,132,Math.max(132,window.innerHeight*.38));return{x:Number.isFinite(t)?t:e.offsetLeft+e.centerX,y:Number.isFinite(s)?s:e.offsetTop+e.centerY}}function _e(e){S?.classList.toggle("is-active",b==="network");for(const n of v){const t=n.project.id===b;n.button.classList.toggle("is-active",t),n.button.setAttribute("aria-pressed",String(t)),n.ring?.classList.toggle("is-active",t),n.ring?.style.setProperty("--project-color",e),n.connector?.classList.toggle("is-active",t),n.connector?.style.setProperty("--project-color",e)}E?.querySelectorAll("[data-select]").forEach(n=>{n.classList.toggle("is-active",n.dataset.select===b)})}function qe(e){const n=E;if(n){if(n.innerHTML=xe(),n.toggleAttribute("inert",!y),n.setAttribute("aria-expanded",String(y)),n.setAttribute("aria-hidden",String(!y)),!y){n.classList.remove("is-expanded"),n.classList.add("is-collapsed");return}Ke(n,e),n.classList.remove("is-expanded"),n.classList.add("is-collapsed"),n.getBoundingClientRect(),n.classList.add("is-expanded"),n.classList.remove("is-collapsed")}}function Qe(){const e=N,n=Z(b)?v.find(t=>t.project.id===b):void 0;if(!e||!y||!n){$=null,N?.replaceChildren(),N?.classList.remove("has-selection");return}if($?.dataset.projectId!==n.project.id){const t=n.button.cloneNode(!0);t.classList.add("selected-project-node","is-active"),t.removeAttribute("data-select"),t.removeAttribute("aria-label"),t.setAttribute("tabindex","-1"),t.setAttribute("aria-hidden","true"),t.dataset.projectId=n.project.id,t.style.setProperty("--project-color",n.project.color),e.replaceChildren(t),$=t}if($&&z){const t=ke(z);$.style.setProperty("--tx",`${t.x.toFixed(1)}px`),$.style.setProperty("--ty",`${t.y.toFixed(1)}px`)}e.classList.add("has-selection")}function Je(){document.body.classList.contains("is-detail-scroll-locked")||(G=window.scrollY,document.documentElement.classList.add("is-detail-scroll-locked"),document.body.classList.add("is-detail-scroll-locked"),document.body.style.position="fixed",document.body.style.top=`-${G}px`,document.body.style.left="0",document.body.style.right="0",document.body.style.width="100%")}function Ze(){document.body.classList.contains("is-detail-scroll-locked")&&(document.documentElement.classList.remove("is-detail-scroll-locked"),document.body.classList.remove("is-detail-scroll-locked"),document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.right="",document.body.style.width="",window.scrollTo(0,G))}function Pe(){if(y||!D){Je();return}Ze()}function F(e,n){b=e,y=Z(b),U=y,J(y?fe:180);const s=ve(b)?.color??"#ff9500",o=y?Ge(n,e):ie;y&&o&&(ie=o),r?.setAttribute("data-selected",b),r?.setAttribute("data-panel-expanded",String(y)),r?.classList.toggle("is-focused",y),r?.classList.toggle("is-panel-expanded",y),r?.classList.toggle("is-scene-frozen",U),r?.style.setProperty("--project-color",s),E?.style.setProperty("--project-color",s),_e(s),qe(o),Qe(),Pe(),A()}function ce(e){const t=(O.indexOf(b)+e+O.length)%O.length,s=O[t];s&&F(s,we(s)??void 0)}function et(){document.addEventListener("click",e=>{if(!D)return;const n=e.target instanceof Element?e.target:null,t=n?.closest("[data-select]")??null,s=t?.dataset.select;if(s&&O.includes(s)){F(s,t??void 0);return}y&&n&&!E?.contains(n)&&F("network",S??void 0)}),R?.addEventListener("keydown",e=>{if(!D){e.key==="Tab"&&e.preventDefault();return}(e.key==="ArrowRight"||e.key==="ArrowDown")&&(e.preventDefault(),ce(1)),(e.key==="ArrowLeft"||e.key==="ArrowUp")&&(e.preventDefault(),ce(-1)),(e.key==="Escape"||e.key==="Home")&&(e.preventDefault(),F("network",S??void 0))}),document.addEventListener("keydown",e=>{if(!D){e.key==="Tab"&&e.preventDefault();return}e.key==="Escape"&&y&&(e.preventDefault(),F("network",S??void 0))}),E?.addEventListener("scroll",()=>{J(ye)},{passive:!0})}function de(){const e=R;if(!e)return null;const n=e.getBoundingClientRect(),t=Math.max(e.clientWidth||n.width,1),s=Math.max(e.clientHeight||n.height,1),o=t/s,a=t<760,i=M((o-1.26)/.54,0,1),h=M((.92-o)/.28,0,1),f=a?0:Math.min(t*.014,18),m=a?Math.min(s*.03,20):0,u=i*Math.min(t*.082,104)+f,k=-h*Math.min(s*.068,56)-m,p=t/2,g=s/2,c=(S?.offsetWidth??Math.min(t,s)*.24)/2,I=a?8:18,j=a?10:26,C=a?1.18:.88,V=Math.min(t,s)*(a?.0108:.0114);r?.style.setProperty("--orbit-bias-x",`${u.toFixed(1)}px`),r?.style.setProperty("--orbit-bias-y",`${k.toFixed(1)}px`),W?.style.setProperty("--scene-settle-x",`${u.toFixed(1)}px`),W?.style.setProperty("--scene-settle-y",`${k.toFixed(1)}px`);const ee={width:t,height:s,offsetLeft:n.left,offsetTop:n.top,centerX:p,centerY:g,coreRadius:c,orbitSquash:C,edgeMargin:I,coreMargin:j,compact:a};z=ee;for(const x of v){const te=b===x.project.id?a?1.08:1.22:1,ne=b===x.project.id?a?16:36:a?10:22,$e=Math.max(x.button.offsetWidth,1)*te+ne,Se=Math.max(x.button.offsetHeight,1)*te+ne,T=Math.max($e,Se)/2,Le=Math.max(0,p-T-I),Ae=Math.max(0,(g-T-I)/C),Y=Math.min(Le,Ae),se=c+T+j,De=x.project.orbitRadius*V;x.collisionRadius=T,x.radius=Y>=se?M(De,se,Y):Y,x.ring&&(x.ring.setAttribute("rx",(x.radius/t*900).toFixed(1)),x.ring.setAttribute("ry",(x.radius*C/s*650).toFixed(1)))}return q=!1,ee}function B(e,n){const t=e.collisionRadius+n.edgeMargin,s=n.width-e.collisionRadius-n.edgeMargin,o=e.collisionRadius+n.edgeMargin,a=n.height-e.collisionRadius-n.edgeMargin;e.x=M(e.x,Math.min(t,s),Math.max(t,s)),e.y=M(e.y,Math.min(o,a),Math.max(o,a));const i=e.x-n.centerX,h=e.y-n.centerY,f=n.coreRadius+e.collisionRadius+n.coreMargin,m=Math.hypot(i,h);if(m<f){const u=m>.001?Math.atan2(h,i):e.slotAngle;e.x=n.centerX+Math.cos(u)*f,e.y=n.centerY+Math.sin(u)*f,e.x=M(e.x,Math.min(t,s),Math.max(t,s)),e.y=M(e.y,Math.min(o,a),Math.max(o,a))}}function tt(e){for(let n=0;n<Ce;n+=1){for(const t of v)B(t,e);for(let t=0;t<v.length;t+=1){const s=v[t];if(s)for(let o=t+1;o<v.length;o+=1){const a=v[o];if(!a)continue;const i=a.x-s.x,h=a.y-s.y,f=s.collisionRadius+a.collisionRadius,m=Math.hypot(i,h);if(m>=f)continue;const u=s.slotAngle+(o-t)*.73,k=m>.001?i/m:Math.cos(u),p=m>.001?h/m:Math.sin(u),g=(f-m)/2+.5;s.x-=k*g,s.y-=p*g,a.x+=k*g,a.y+=p*g,B(s,e),B(a,e)}}}}function pe(e){const n=Z(b)?v.find(t=>t.project.id===b):void 0;for(const t of v)t.button.style.setProperty("--tx",`${t.x.toFixed(1)}px`),t.button.style.setProperty("--ty",`${t.y.toFixed(1)}px`),t.connector&&(t.connector.setAttribute("x1","450"),t.connector.setAttribute("y1","325"),t.connector.setAttribute("x2",(t.x/e.width*900).toFixed(1)),t.connector.setAttribute("y2",(t.y/e.height*650).toFixed(1)));if($&&n&&y){const t=ke(e);$.style.setProperty("--tx",`${t.x.toFixed(1)}px`),$.style.setProperty("--ty",`${t.y.toFixed(1)}px`)}}function nt(){let e=0,n,t=de(),s=!1;function o(a){const i=q||!t;if(i&&(t=de()),!t){window.requestAnimationFrame(o);return}const h=n===void 0?16.67:Math.min(a-n,40);n=a;const f=he("planets")&&!ge(a);if(f){e+=h;const m=e*(X.matches?ae*.28:ae);for(const u of v){const k=m+u.slotAngle;u.x=t.centerX+Math.cos(k)*u.radius,u.y=t.centerY+Math.sin(k)*u.radius*t.orbitSquash}tt(t),pe(t)}else(i||f!==s)&&pe(t);s=f,window.requestAnimationFrame(o)}window.requestAnimationFrame(o)}function st(e){return Array.from({length:e},()=>({x:Math.random(),y:Math.random(),size:.45+Math.random()*1.9,tone:Math.random(),twinkle:Math.random()*Math.PI*2,speed:7e-4+Math.random()*.0012,revealDelay:Math.random()*1050,revealDuration:180+Math.random()*760}))}function at(){const e=document.querySelector("#starfield"),n=e?.getContext("2d");if(!e||!n)return;const t=e,s=n,o=st(170);let a=0,i=0,h=0,f=!1;function m(){const p=Math.min(window.devicePixelRatio||1,2);a=window.innerWidth,i=window.innerHeight,t.width=Math.floor(a*p),t.height=Math.floor(i*p),t.style.width=`${a}px`,t.style.height=`${i}px`,s.setTransform(p,0,0,p,0,0),u(0)}function u(p){s.clearRect(0,0,a,i);const g=re(Ie(p,d.titleDelayMs,d.titleMs+820));if(g>0){const c=s.createRadialGradient(a*.5,i*.45,0,a*.5,i*.45,a*.72);c.addColorStop(0,`rgba(255, 149, 0, ${(.11*g).toFixed(3)})`),c.addColorStop(.34,`rgba(80, 124, 190, ${(.075*g).toFixed(3)})`),c.addColorStop(1,"rgba(3, 5, 10, 0)"),s.fillStyle=c,s.fillRect(0,0,a,i)}for(const c of o){const I=c.tone>.82?"255, 149, 0":c.tone>.66?"80, 124, 190":"247, 249, 252",j=X.matches?.66+Math.sin(p*c.speed*.35+c.twinkle)*.08:.45+Math.sin(p*c.speed+c.twinkle)*.28,C=re(M((p-H-d.titleDelayMs-c.revealDelay)/c.revealDuration,0,1));if(C<=0)continue;const V=M((j+(c.tone>.78?.16:0))*C,.05,.88);s.beginPath(),s.fillStyle=`rgba(${I}, ${V.toFixed(3)})`,s.arc(c.x*a,c.y*i,c.size,0,Math.PI*2),s.fill()}}function k(p){const g=he("title")&&!ge(p),c=X.matches?120:40;g&&p-h>=c?(h=p,u(p)):!g&&f&&u(h||p),f=g,window.requestAnimationFrame(k)}window.addEventListener("resize",m,{passive:!0}),m(),window.requestAnimationFrame(k)}Ve();Ye();Be();Ue();et();F("network");ze();nt();at();
//# sourceMappingURL=app-Ban8h0hF.js.map
