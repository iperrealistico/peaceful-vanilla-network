(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const w={name:"Peaceful Vanilla Network",tagline:"Community, fun, privacy and connection.",icon:"assets/generated/peaceful-vanilla-network-icon.png",description:"Peaceful Vanilla Network is a small-business ecosystem built by family and friends: gaming worlds, chat, profiles, and experiments made for real connection without big-corp nonsense.",principles:["Community-first","Fun-driven","Privacy-aware","Small business, not big corp"],proof:[{label:"Since",value:"2019"},{label:"Players",value:"110K+"},{label:"Backups",value:"28TB"},{label:"Projects",value:"5"}]},S=[{id:"club",name:"Peaceful Vanilla Club",domainLabel:"peacefulvanilla.club",tagline:"The fun-first gaming world.",description:"A family-and-friends driven Minecraft SMP with a stable world, cross-play support, strong community culture, and a clear no pay-to-win philosophy.",status:"live",icon:"assets/logos/peaceful-vanilla-club-logo.png",color:"#ff9500",orbitRadius:33,orbitSpeed:12e-5,initialAngle:-2.72,primaryCta:{label:"Visit Club",href:"https://www.peacefulvanilla.club/"}},{id:"hytale",name:"Peaceful Vanilla Club: Hytale",domainLabel:"hytale.peacefulvanilla.club",tagline:"The Hytale vanilla server branch.",description:"A dedicated Hytale-facing home for Peaceful Vanilla Club, carrying the same fun-first community spirit, long-term mindset, and no pay-to-win philosophy into a new world.",status:"live",icon:"assets/logos/peaceful-vanilla-club-hytale-icon.jpg",color:"#ff7a00",orbitRadius:46,orbitSpeed:82e-6,initialAngle:-1.48,primaryCta:{label:"Visit Hytale",href:"https://hytale.peacefulvanilla.club/"},secondaryCta:{label:"Visit Club",href:"https://www.peacefulvanilla.club/"}},{id:"chat",name:"Peaceful Vanilla Chat",domainLabel:"peacefulvanilla.chat",tagline:"Private connection without big-corp baggage.",description:"A Matrix-powered, self-hosted communication platform where players, creators, family groups, and friends stay connected without face scans, personal documents, or big-platform lock-in.",status:"live",icon:"assets/logos/peaceful-vanilla-chat-icon-192.png",color:"#507cbe",orbitRadius:37,orbitSpeed:95e-6,initialAngle:-.42,primaryCta:{label:"Visit Chat",href:"https://www.peacefulvanilla.chat/"},secondaryCta:{label:"Enter App",href:"https://app.peacefulvanilla.chat"}},{id:"space",name:"Peaceful Vanilla Space",domainLabel:"peacefulvanilla.space",tagline:"Profiles, hubs, and social connection.",description:"A coming Peaceful Vanilla web layer for profiles, community hubs, and social surfaces that make the wider network easier to discover and more fun to explore.",status:"coming-soon",icon:"assets/generated/peaceful-vanilla-space-icon.png",color:"#ffc26b",orbitRadius:41,orbitSpeed:75e-6,initialAngle:2.38},{id:"fortrust",name:"Fortrust",domainLabel:"Fortrust by Peaceful Vanilla",tagline:"A separate experiment.",description:"An independent Peaceful Vanilla experiment kept intentionally separate, so small-team ideas can be tested freely without blurring the core network identity.",status:"coming-soon",icon:"assets/fortrust/fortrust-icon.png",color:"#d0c0b8",orbitRadius:29,orbitSpeed:105e-6,initialAngle:.92}],le=document.querySelector("#app");if(!le)throw new Error("Missing #app mount point");const P=le,Pe="./",I=["network",...S.map(e=>e.id)],H=window.matchMedia("(prefers-reduced-motion: reduce)"),ee=88e-6,$e=3,re=260,ce=140,te=["sun","sky","planets","settle","title","tagline","ready"],Se={totalMs:3e3,sunMs:360,skyDelayMs:180,skyMs:760,planetsDelayMs:900,planetStaggerMs:90,planetPopMs:340,settleDelayMs:1760,settleMs:620,titleDelayMs:2340,titleMs:360,taglineDelayMs:2700,taglineMs:220};let b="network",p=!1,ne=null,l=null,R=null,C=null,Y=null,$=null,j=null,F=null,v=[],K=!0,X=!1,W=0,z=0,_="sun",L=!1,U=[];function Ae(e){const n=Math.max(e.sunMs,e.skyDelayMs+e.skyMs,e.planetsDelayMs+e.planetPopMs+Math.max(S.length-1,0)*e.planetStaggerMs,e.settleDelayMs+e.settleMs,e.titleDelayMs+e.titleMs,e.taglineDelayMs+e.taglineMs,1),t=e.totalMs/n,s=o=>Math.round(o*t);return{totalMs:Math.round(e.totalMs),sunMs:s(e.sunMs),skyDelayMs:s(e.skyDelayMs),skyMs:s(e.skyMs),planetsDelayMs:s(e.planetsDelayMs),planetStaggerMs:s(e.planetStaggerMs),planetPopMs:s(e.planetPopMs),settleDelayMs:s(e.settleDelayMs),settleMs:s(e.settleMs),titleDelayMs:s(e.titleDelayMs),titleMs:s(e.titleMs),taglineDelayMs:s(e.taglineDelayMs),taglineMs:s(e.taglineMs)}}const d=Ae(Se);function de(e){return`${Pe}${e}`}function r(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function x(e,n,t){return Math.min(Math.max(e,n),t)}function pe(e){return te.indexOf(_)>=te.indexOf(e)}function q(e=re){z=Math.max(z,performance.now()+e)}function ue(e){return X||document.hidden||e<z}function fe(e){return e==="live"?"Live":"Coming soon"}function ye(e){return S.find(n=>n.id===e)}function G(e){return e!=="network"}function me(e){return e==="network"?$:v.find(n=>n.project.id===e)?.button??null}function Le(){const e=S.map(t=>{const s=t.orbitRadius/100*900,o=t.orbitRadius/100*650;return`<ellipse class="orbit-ring" data-ring="${t.id}" cx="450" cy="325" rx="${s.toFixed(1)}" ry="${o.toFixed(1)}" style="--project-color: ${t.color}" />`}).join("");return`
    <svg class="orbit-svg" viewBox="0 0 900 650" preserveAspectRatio="none" aria-hidden="true">
      ${S.map(t=>`<line class="orbit-line" data-connector="${t.id}" x1="450" y1="325" x2="450" y2="325" style="--project-color: ${t.color}" />`).join("")}
      ${e}
    </svg>
  `}function Re(){return S.map((e,n)=>`
        <button
          type="button"
          class="project-node"
          data-select="${e.id}"
          data-project-id="${e.id}"
          aria-label="Show ${r(e.name)}"
          aria-pressed="false"
          style="--project-color: ${e.color}; --intro-order: ${n}"
        >
          <span class="planet-avatar" aria-hidden="true">
            <img src="${de(e.icon)}" alt="" loading="eager" />
          </span>
          <span class="project-label">
            <span class="project-name">${r(e.id==="fortrust"?"Fortrust":e.id)}</span>
            <span class="project-status status-${e.status}">${fe(e.status)}</span>
          </span>
        </button>
      `).join("")}function he(){return w.proof.map(e=>`
        <div class="proof-item">
          <strong>${r(e.value)}</strong>
          <span>${r(e.label)}</span>
        </div>
      `).join("")}function Ce(){return`
    <section class="network-story" aria-labelledby="network-story-title">
      <div class="story-title-block">
        <h2 id="network-story-title">
          <span>Peaceful Vanilla</span>
          <span>Network</span>
        </h2>
        <p class="story-tagline">${r(w.tagline)}</p>
      </div>

      <article class="network-story-card" aria-label="${r(w.name)} overview">
        <div class="story-card-copy">
          <p class="story-eyebrow">What it is</p>
          <h3>A small independent ecosystem for community, play, privacy, and connection.</h3>
          <p>
            ${r(w.description)}
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
          ${he()}
        </div>
      </article>
    </section>
  `}function De(){const e=S.map(n=>`
        <button type="button" data-select="${n.id}" style="--project-color: ${n.color}">
          <strong>${r(n.name)}</strong>
          <span>${r(n.tagline)}</span>
        </button>
      `).join("");return`
    <div class="panel-inner">
      <div class="panel-topline">
        <span class="status-pill" style="--status-color: var(--accent-soft)">Network core</span>
      </div>
      <div class="panel-copy">
        <p class="panel-kicker">${r(w.name)}</p>
        <h2 class="panel-title">${r(w.tagline)}</h2>
        <p class="panel-description">${r(w.description)}</p>
      </div>
      <div class="principles">
        ${w.principles.map(n=>`<span>${r(n)}</span>`).join("")}
      </div>
      <div class="panel-metrics" aria-label="Network proof points">${he()}</div>
      <div class="network-links">${e}</div>
    </div>
  `}function Fe(e){const n=[e.primaryCta?`<a class="panel-cta primary" href="${e.primaryCta.href}" target="_blank" rel="noreferrer">${r(e.primaryCta.label)}</a>`:"",e.secondaryCta?`<a class="panel-cta" href="${e.secondaryCta.href}" target="_blank" rel="noreferrer">${r(e.secondaryCta.label)}</a>`:""].filter(Boolean).join(""),t=e.status==="coming-soon"?'<div class="coming-soon-note">This orbit is visible because it belongs to the network, but its public destination is not linked yet.</div>':"";return`
    <div class="panel-inner">
      <div class="panel-topline">
        <span class="status-pill" style="--status-color: ${e.status==="live"?"var(--success)":"var(--stone)"}">${fe(e.status)}</span>
        <button type="button" class="panel-close" data-select="network" aria-label="Return to network overview">x</button>
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
        ${n||t}
      </div>
    </div>
  `}function ge(){const e=ye(b);return e?Fe(e):De()}function Ee(){P.innerHTML=`
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
          <h1 id="network-title" class="visually-hidden">${r(w.name)}</h1>

          <div class="orbit-map" id="orbit-map" tabindex="0" role="application" aria-label="Interactive Peaceful Vanilla Network orbit">
            <div class="orbit-scene" id="orbit-scene">
              ${Le()}
              <button type="button" class="core-button" data-select="network" aria-label="Show ${r(w.name)} overview">
                <span class="core-aura" aria-hidden="true"></span>
                <img src="${de(w.icon)}" alt="" />
                <span class="core-label">
                  <strong>${r(w.name.toUpperCase())}</strong>
                  <span>${r(w.tagline)}</span>
                </span>
              </button>
              <div class="project-layer" id="project-layer">
                ${Re()}
              </div>
            </div>
          </div>
        </section>

        <aside class="detail-panel is-collapsed" id="detail-panel" aria-live="polite" aria-expanded="false" aria-hidden="true" inert>
          ${ge()}
        </aside>
      </main>

      ${Ce()}

      <div class="selected-project-layer" aria-hidden="true"></div>
    </div>
  `}function Ie(){l=P.querySelector(".app-shell"),R=P.querySelector("#detail-panel"),C=P.querySelector("#orbit-map"),Y=P.querySelector("#orbit-scene"),$=P.querySelector(".core-button"),j=P.querySelector(".selected-project-layer"),v=S.map((e,n)=>{const t=P.querySelector(`button[data-project-id="${e.id}"]`);if(!t)throw new Error(`Missing orbit node for ${e.id}`);return{project:e,button:t,ring:P.querySelector(`[data-ring="${e.id}"]`),connector:P.querySelector(`[data-connector="${e.id}"]`),slotAngle:-Math.PI/2+n*Math.PI*2/S.length,radius:0,collisionRadius:0,x:0,y:0}})}function Oe(){l&&(l.style.setProperty("--intro-total-ms",`${d.totalMs}ms`),l.style.setProperty("--intro-sun-ms",`${d.sunMs}ms`),l.style.setProperty("--intro-sky-delay-ms",`${d.skyDelayMs}ms`),l.style.setProperty("--intro-sky-ms",`${d.skyMs}ms`),l.style.setProperty("--intro-planets-delay-ms",`${d.planetsDelayMs}ms`),l.style.setProperty("--intro-planet-stagger-ms",`${d.planetStaggerMs}ms`),l.style.setProperty("--intro-planet-pop-ms",`${d.planetPopMs}ms`),l.style.setProperty("--intro-settle-delay-ms",`${d.settleDelayMs}ms`),l.style.setProperty("--intro-settle-ms",`${d.settleMs}ms`),l.style.setProperty("--intro-title-delay-ms",`${d.titleDelayMs}ms`),l.style.setProperty("--intro-title-ms",`${d.titleMs}ms`),l.style.setProperty("--intro-tagline-delay-ms",`${d.taglineDelayMs}ms`),l.style.setProperty("--intro-tagline-ms",`${d.taglineMs}ms`))}function je(){l?.setAttribute("data-intro-phase",_),l?.setAttribute("data-intro-ready",String(L)),C&&C.toggleAttribute("inert",!L)}function se(e){_=e,L=e==="ready",je(),be()}function Te(){for(const e of U)window.clearTimeout(e);U=[]}function Ne(){Te(),se("sun"),U=[{phase:"sky",at:d.skyDelayMs},{phase:"planets",at:d.planetsDelayMs},{phase:"settle",at:d.settleDelayMs},{phase:"title",at:d.titleDelayMs},{phase:"tagline",at:d.taglineDelayMs},{phase:"ready",at:d.totalMs}].map(({phase:n,at:t})=>window.setTimeout(()=>{se(n)},t))}function A(){K=!0}function Ve(){if(window.addEventListener("resize",A,{passive:!0}),window.addEventListener("orientationchange",A,{passive:!0}),window.addEventListener("scroll",()=>{q(ce)},{passive:!0}),"ResizeObserver"in window){const e=new ResizeObserver(A);C&&e.observe(C),$&&e.observe($);for(const n of v)e.observe(n.button)}document.fonts?.ready.then(A).catch(()=>{});for(const e of P.querySelectorAll("img"))e.complete||(e.addEventListener("load",A,{once:!0}),e.addEventListener("error",A,{once:!0}))}function Be(e,n){return(e??me(n))?.getBoundingClientRect()??null}function He(e,n){const t=e.getBoundingClientRect(),s=t.left+t.width/2,o=t.top+t.height/2,a=n?n.left+n.width/2:s,i=n?n.top+n.height/2:o,h=t.left+t.width/2,u=t.top+t.height/2;e.style.setProperty("--reveal-origin-x",`${(a-t.left).toFixed(1)}px`),e.style.setProperty("--reveal-origin-y",`${(i-t.top).toFixed(1)}px`),e.style.setProperty("--panel-enter-x",`${(a-h).toFixed(1)}px`),e.style.setProperty("--panel-enter-y",`${(i-u).toFixed(1)}px`)}function Ye(e){const n=R?.getBoundingClientRect(),t=p&&n!==void 0&&window.innerWidth>=920,s=t?n.left:window.innerWidth,o=p&&n!==void 0&&window.innerWidth<920?n.top:window.innerHeight,a=t?x(s*.5,150,Math.max(150,s-150)):x(s*.5,96,s-96),i=t?x(window.innerHeight*.5,150,Math.max(150,window.innerHeight-150)):x(o*.5,98,Math.max(98,o-112));return{x:Number.isFinite(a)?a:e.offsetLeft+e.centerX,y:Number.isFinite(i)?i:e.offsetTop+e.centerY}}function Xe(e){$?.classList.toggle("is-active",b==="network");for(const n of v){const t=n.project.id===b;n.button.classList.toggle("is-active",t),n.button.setAttribute("aria-pressed",String(t)),n.ring?.classList.toggle("is-active",t),n.ring?.style.setProperty("--project-color",e),n.connector?.classList.toggle("is-active",t),n.connector?.style.setProperty("--project-color",e)}R?.querySelectorAll("[data-select]").forEach(n=>{n.classList.toggle("is-active",n.dataset.select===b)})}function We(e){const n=R;if(n){if(n.innerHTML=ge(),n.toggleAttribute("inert",!p),n.setAttribute("aria-expanded",String(p)),n.setAttribute("aria-hidden",String(!p)),!p){n.classList.remove("is-expanded"),n.classList.add("is-collapsed");return}He(n,e),n.classList.remove("is-expanded"),n.classList.add("is-collapsed"),n.getBoundingClientRect(),n.classList.add("is-expanded"),n.classList.remove("is-collapsed")}}function ze(){const e=j,n=G(b)?v.find(t=>t.project.id===b):void 0;if(!e||!p||!n){F=null,j?.replaceChildren(),j?.classList.remove("has-selection");return}if(F?.dataset.projectId!==n.project.id){const t=n.button.cloneNode(!0);t.classList.add("selected-project-node","is-active"),t.removeAttribute("data-select"),t.removeAttribute("aria-label"),t.setAttribute("tabindex","-1"),t.setAttribute("aria-hidden","true"),t.dataset.projectId=n.project.id,t.style.setProperty("--project-color",n.project.color),e.replaceChildren(t),F=t}e.classList.add("has-selection")}function Ue(){document.body.classList.contains("is-detail-scroll-locked")||(W=window.scrollY,document.documentElement.classList.add("is-detail-scroll-locked"),document.body.classList.add("is-detail-scroll-locked"),document.body.style.position="fixed",document.body.style.top=`-${W}px`,document.body.style.left="0",document.body.style.right="0",document.body.style.width="100%")}function Ke(){document.body.classList.contains("is-detail-scroll-locked")&&(document.documentElement.classList.remove("is-detail-scroll-locked"),document.body.classList.remove("is-detail-scroll-locked"),document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.right="",document.body.style.width="",window.scrollTo(0,W))}function be(){if(p||!L){Ue();return}Ke()}function D(e,n){b=e,p=G(b),X=p,q(p?re:180);const s=ye(b)?.color??"#ff9500",o=p?Be(n,e):ne;p&&o&&(ne=o),l?.setAttribute("data-selected",b),l?.setAttribute("data-panel-expanded",String(p)),l?.classList.toggle("is-focused",p),l?.classList.toggle("is-panel-expanded",p),l?.classList.toggle("is-scene-frozen",X),l?.style.setProperty("--project-color",s),R?.style.setProperty("--project-color",s),Xe(s),We(o),ze(),be(),A()}function ae(e){const t=(I.indexOf(b)+e+I.length)%I.length,s=I[t];s&&D(s,me(s)??void 0)}function _e(){document.addEventListener("click",e=>{if(!L)return;const n=e.target instanceof Element?e.target:null,t=n?.closest("[data-select]")??null,s=t?.dataset.select;if(s&&I.includes(s)){D(s,t??void 0);return}p&&n&&!R?.contains(n)&&D("network",$??void 0)}),C?.addEventListener("keydown",e=>{if(!L){e.key==="Tab"&&e.preventDefault();return}(e.key==="ArrowRight"||e.key==="ArrowDown")&&(e.preventDefault(),ae(1)),(e.key==="ArrowLeft"||e.key==="ArrowUp")&&(e.preventDefault(),ae(-1)),(e.key==="Escape"||e.key==="Home")&&(e.preventDefault(),D("network",$??void 0))}),document.addEventListener("keydown",e=>{if(!L){e.key==="Tab"&&e.preventDefault();return}e.key==="Escape"&&p&&(e.preventDefault(),D("network",$??void 0))}),R?.addEventListener("scroll",()=>{q(ce)},{passive:!0})}function oe(){const e=C;if(!e)return null;const n=e.getBoundingClientRect(),t=Math.max(e.clientWidth||n.width,1),s=Math.max(e.clientHeight||n.height,1),o=t/s,a=t<760,i=x((o-1.26)/.54,0,1),h=x((.92-o)/.28,0,1),u=i*Math.min(t*.055,62),y=-h*Math.min(s*.05,42),f=t/2,k=s/2,c=($?.offsetWidth??Math.min(t,s)*.24)/2,m=a?8:18,g=a?10:26,E=a?1.18:.88,T=Math.min(t,s)*(a?.0108:.0114);l?.style.setProperty("--orbit-bias-x",`${u.toFixed(1)}px`),l?.style.setProperty("--orbit-bias-y",`${y.toFixed(1)}px`),Y?.style.setProperty("--scene-settle-x",`${u.toFixed(1)}px`),Y?.style.setProperty("--scene-settle-y",`${y.toFixed(1)}px`);const N={width:t,height:s,offsetLeft:n.left,offsetTop:n.top,centerX:f,centerY:k,coreRadius:c,orbitSquash:E,edgeMargin:m,coreMargin:g,compact:a};for(const M of v){const Q=b===M.project.id?a?1.08:1.22:1,J=b===M.project.id?a?16:36:a?10:22,ve=Math.max(M.button.offsetWidth,1)*Q+J,we=Math.max(M.button.offsetHeight,1)*Q+J,O=Math.max(ve,we)/2,Me=Math.max(0,f-O-m),xe=Math.max(0,(k-O-m)/E),V=Math.min(Me,xe),Z=c+O+g,ke=M.project.orbitRadius*T;M.collisionRadius=O,M.radius=V>=Z?x(ke,Z,V):V,M.ring&&(M.ring.setAttribute("rx",(M.radius/t*900).toFixed(1)),M.ring.setAttribute("ry",(M.radius*E/s*650).toFixed(1)))}return K=!1,N}function B(e,n){const t=e.collisionRadius+n.edgeMargin,s=n.width-e.collisionRadius-n.edgeMargin,o=e.collisionRadius+n.edgeMargin,a=n.height-e.collisionRadius-n.edgeMargin;e.x=x(e.x,Math.min(t,s),Math.max(t,s)),e.y=x(e.y,Math.min(o,a),Math.max(o,a));const i=e.x-n.centerX,h=e.y-n.centerY,u=n.coreRadius+e.collisionRadius+n.coreMargin,y=Math.hypot(i,h);if(y<u){const f=y>.001?Math.atan2(h,i):e.slotAngle;e.x=n.centerX+Math.cos(f)*u,e.y=n.centerY+Math.sin(f)*u,e.x=x(e.x,Math.min(t,s),Math.max(t,s)),e.y=x(e.y,Math.min(o,a),Math.max(o,a))}}function qe(e){for(let n=0;n<$e;n+=1){for(const t of v)B(t,e);for(let t=0;t<v.length;t+=1){const s=v[t];if(s)for(let o=t+1;o<v.length;o+=1){const a=v[o];if(!a)continue;const i=a.x-s.x,h=a.y-s.y,u=s.collisionRadius+a.collisionRadius,y=Math.hypot(i,h);if(y>=u)continue;const f=s.slotAngle+(o-t)*.73,k=y>.001?i/y:Math.cos(f),c=y>.001?h/y:Math.sin(f),m=(u-y)/2+.5;s.x-=k*m,s.y-=c*m,a.x+=k*m,a.y+=c*m,B(s,e),B(a,e)}}}}function ie(e){const n=G(b)?v.find(t=>t.project.id===b):void 0;for(const t of v)t.button.style.setProperty("--tx",`${t.x.toFixed(1)}px`),t.button.style.setProperty("--ty",`${t.y.toFixed(1)}px`),t.connector&&(t.connector.setAttribute("x1","450"),t.connector.setAttribute("y1","325"),t.connector.setAttribute("x2",(t.x/e.width*900).toFixed(1)),t.connector.setAttribute("y2",(t.y/e.height*650).toFixed(1)));if(F&&n&&p){const t=Ye(e);F.style.setProperty("--tx",`${t.x.toFixed(1)}px`),F.style.setProperty("--ty",`${t.y.toFixed(1)}px`)}}function Ge(){let e=0,n,t=oe(),s=!1;function o(a){const i=K||!t;if(i&&(t=oe()),!t){window.requestAnimationFrame(o);return}const h=n===void 0?16.67:Math.min(a-n,40);n=a;const u=pe("planets")&&!ue(a);if(u){e+=h;const y=e*(H.matches?ee*.28:ee);for(const f of v){const k=y+f.slotAngle;f.x=t.centerX+Math.cos(k)*f.radius,f.y=t.centerY+Math.sin(k)*f.radius*t.orbitSquash}qe(t),ie(t)}else(i||u!==s)&&ie(t);s=u,window.requestAnimationFrame(o)}window.requestAnimationFrame(o)}function Qe(e){return Array.from({length:e},()=>({x:Math.random(),y:Math.random(),size:.45+Math.random()*1.9,tone:Math.random(),twinkle:Math.random()*Math.PI*2,speed:7e-4+Math.random()*.0012}))}function Je(){const e=document.querySelector("#starfield"),n=e?.getContext("2d",{alpha:!1})??e?.getContext("2d");if(!e||!n)return;const t=e,s=n,o=Qe(170);let a=0,i=0,h=0,u=!1;function y(){const c=Math.min(window.devicePixelRatio||1,2);a=window.innerWidth,i=window.innerHeight,t.width=Math.floor(a*c),t.height=Math.floor(i*c),t.style.width=`${a}px`,t.style.height=`${i}px`,s.setTransform(c,0,0,c,0,0),f(0)}function f(c){s.clearRect(0,0,a,i);const m=s.createRadialGradient(a*.5,i*.45,0,a*.5,i*.45,a*.72);m.addColorStop(0,"rgba(255, 149, 0, 0.13)"),m.addColorStop(.34,"rgba(80, 124, 190, 0.06)"),m.addColorStop(1,"rgba(3, 5, 10, 0)"),s.fillStyle=m,s.fillRect(0,0,a,i);for(const g of o){const E=g.tone>.82?"255, 149, 0":g.tone>.66?"80, 124, 190":"247, 249, 252",T=H.matches?.66+Math.sin(c*g.speed*.35+g.twinkle)*.08:.45+Math.sin(c*g.speed+g.twinkle)*.28,N=x(T+(g.tone>.78?.16:0),.16,.88);s.beginPath(),s.fillStyle=`rgba(${E}, ${N.toFixed(3)})`,s.arc(g.x*a,g.y*i,g.size,0,Math.PI*2),s.fill()}}function k(c){const m=pe("planets")&&!ue(c),g=H.matches?120:40;m&&c-h>=g?(h=c,f(c)):!m&&u&&f(h||c),u=m,window.requestAnimationFrame(k)}window.addEventListener("resize",y,{passive:!0}),y(),window.requestAnimationFrame(k)}Ee();Ie();Oe();Ve();_e();D("network");Ne();Ge();Je();
//# sourceMappingURL=app-BaEBW4fI.js.map
