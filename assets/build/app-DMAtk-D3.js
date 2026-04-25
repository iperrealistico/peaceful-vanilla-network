(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const m={name:"Peaceful Vanilla Network",tagline:"Community, fun, privacy and connection.",icon:"assets/generated/peaceful-vanilla-network-icon.png",description:"Peaceful Vanilla Network is a small-business ecosystem built by family and friends: gaming worlds, chat, profiles, and experiments made for real connection without big-corp nonsense.",principles:["Community-first","Fun-driven","Privacy-aware","Small business, not big corp"],proof:[{label:"Since",value:"2019"},{label:"Players",value:"110K+"},{label:"Backups",value:"28TB"},{label:"Projects",value:"5"}]},$=[{id:"club",name:"Peaceful Vanilla Club",domainLabel:"peacefulvanilla.club",tagline:"The fun-first gaming world.",description:"A family-and-friends driven Minecraft SMP with a stable world, cross-play support, strong community culture, and a clear no pay-to-win philosophy.",status:"live",icon:"assets/logos/peaceful-vanilla-club-logo.png",color:"#ff9500",orbitRadius:33,orbitSpeed:12e-5,initialAngle:-2.72,primaryCta:{label:"Visit Club",href:"https://www.peacefulvanilla.club/"}},{id:"hytale",name:"Peaceful Vanilla Club: Hytale",domainLabel:"hytale.peacefulvanilla.club",tagline:"The Hytale vanilla server branch.",description:"A dedicated Hytale-facing home for Peaceful Vanilla Club, carrying the same fun-first community spirit, long-term mindset, and no pay-to-win philosophy into a new world.",status:"live",icon:"assets/logos/peaceful-vanilla-club-hytale-icon.jpg",color:"#ff7a00",orbitRadius:46,orbitSpeed:82e-6,initialAngle:-1.48,primaryCta:{label:"Visit Hytale",href:"https://hytale.peacefulvanilla.club/"},secondaryCta:{label:"Visit Club",href:"https://www.peacefulvanilla.club/"}},{id:"chat",name:"Peaceful Vanilla Chat",domainLabel:"peacefulvanilla.chat",tagline:"Private connection without big-corp baggage.",description:"A Matrix-powered, self-hosted communication platform where players, creators, family groups, and friends stay connected without face scans, personal documents, or big-platform lock-in.",status:"live",icon:"assets/logos/peaceful-vanilla-chat-icon-192.png",color:"#507cbe",orbitRadius:37,orbitSpeed:95e-6,initialAngle:-.42,primaryCta:{label:"Visit Chat",href:"https://www.peacefulvanilla.chat/"},secondaryCta:{label:"Enter App",href:"https://app.peacefulvanilla.chat"}},{id:"space",name:"Peaceful Vanilla Space",domainLabel:"peacefulvanilla.space",tagline:"Profiles, hubs, and social connection.",description:"A coming Peaceful Vanilla web layer for profiles, community hubs, and social surfaces that make the wider network easier to discover and more fun to explore.",status:"coming-soon",icon:"assets/generated/peaceful-vanilla-space-icon.png",color:"#ffc26b",orbitRadius:41,orbitSpeed:75e-6,initialAngle:2.38},{id:"fortrust",name:"Fortrust",domainLabel:"Fortrust by Peaceful Vanilla",tagline:"A separate experiment.",description:"An independent Peaceful Vanilla experiment kept intentionally separate, so small-team ideas can be tested freely without blurring the core network identity.",status:"coming-soon",icon:"assets/fortrust/fortrust-icon.png",color:"#d0c0b8",orbitRadius:29,orbitSpeed:105e-6,initialAngle:.92}],U=document.querySelector("#app");if(!U)throw new Error("Missing #app mount point");const g=U,ae="./",R=["network",...$.map(e=>e.id)],B=window.matchMedia("(prefers-reduced-motion: reduce)"),se=88e-6,re=3;let h="network",c=!1,X=null,M=null,w=null,C=null,k=null,q=null,A=null,y=[],N=!0,D=!1,I=0,L=null;function G(e){return`${ae}${e}`}function l(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function v(e,t,n){return Math.min(Math.max(e,t),n)}function _(e){return e==="live"?"Live":"Coming soon"}function Q(e){return $.find(t=>t.id===e)}function V(e){return e!=="network"}function J(e){return e==="network"?k:y.find(t=>t.project.id===e)?.button??null}function le(){const e=$.map(n=>{const o=n.orbitRadius/100*900,i=n.orbitRadius/100*650;return`<ellipse class="orbit-ring" data-ring="${n.id}" cx="450" cy="325" rx="${o.toFixed(1)}" ry="${i.toFixed(1)}" style="--project-color: ${n.color}" />`}).join("");return`
    <svg class="orbit-svg" viewBox="0 0 900 650" preserveAspectRatio="none" aria-hidden="true">
      ${$.map(n=>`<line class="orbit-line" data-connector="${n.id}" x1="450" y1="325" x2="450" y2="325" style="--project-color: ${n.color}" />`).join("")}
      ${e}
    </svg>
  `}function ce(){return $.map(e=>`
        <button
          type="button"
          class="project-node"
          data-select="${e.id}"
          data-project-id="${e.id}"
          aria-label="Show ${l(e.name)}"
          aria-pressed="false"
          style="--project-color: ${e.color}"
        >
          <span class="planet-avatar" aria-hidden="true">
            <img src="${G(e.icon)}" alt="" loading="eager" />
          </span>
          <span class="project-label">
            <span class="project-name">${l(e.id==="fortrust"?"Fortrust":e.id)}</span>
            <span class="project-status status-${e.status}">${_(e.status)}</span>
          </span>
        </button>
      `).join("")}function Z(){return m.proof.map(e=>`
        <div class="proof-item">
          <strong>${l(e.value)}</strong>
          <span>${l(e.label)}</span>
        </div>
      `).join("")}function de(){return`
    <section class="network-story" aria-labelledby="network-story-title">
      <div class="story-title-block">
        <p class="story-kicker">${l(m.tagline)}</p>
        <h2 id="network-story-title">${l(m.name)}</h2>
      </div>

      <article class="network-story-card" aria-label="${l(m.name)} overview">
        <div class="story-card-copy">
          <p class="story-eyebrow">What it is</p>
          <h3>A small independent ecosystem for community, play, privacy, and connection.</h3>
          <p>
            ${l(m.description)}
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
          ${Z()}
        </div>
      </article>
    </section>
  `}function ue(){const e=$.map(t=>`
        <button type="button" data-select="${t.id}" style="--project-color: ${t.color}">
          <strong>${l(t.name)}</strong>
          <span>${l(t.tagline)}</span>
        </button>
      `).join("");return`
    <div class="panel-inner">
      <div class="panel-topline">
        <span class="status-pill" style="--status-color: var(--accent-soft)">Network core</span>
      </div>
      <div class="panel-copy">
        <p class="panel-kicker">${l(m.name)}</p>
        <h2 class="panel-title">${l(m.tagline)}</h2>
        <p class="panel-description">${l(m.description)}</p>
      </div>
      <div class="principles">
        ${m.principles.map(t=>`<span>${l(t)}</span>`).join("")}
      </div>
      <div class="panel-metrics" aria-label="Network proof points">${Z()}</div>
      <div class="network-links">${e}</div>
    </div>
  `}function pe(e){const t=[e.primaryCta?`<a class="panel-cta primary" href="${e.primaryCta.href}" target="_blank" rel="noreferrer">${l(e.primaryCta.label)}</a>`:"",e.secondaryCta?`<a class="panel-cta" href="${e.secondaryCta.href}" target="_blank" rel="noreferrer">${l(e.secondaryCta.label)}</a>`:""].filter(Boolean).join(""),n=e.status==="coming-soon"?'<div class="coming-soon-note">This orbit is visible because it belongs to the network, but its public destination is not linked yet.</div>':"";return`
    <div class="panel-inner">
      <div class="panel-topline">
        <span class="status-pill" style="--status-color: ${e.status==="live"?"var(--success)":"var(--stone)"}">${_(e.status)}</span>
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
        ${t||n}
      </div>
    </div>
  `}function ee(){const e=Q(h);return e?pe(e):ue()}function fe(){g.innerHTML=`
    <div class="app-shell" style="--project-color: var(--accent)" data-selected="network" data-panel-expanded="false">
      <canvas class="starfield" id="starfield" aria-hidden="true"></canvas>

      <main class="command-deck">
        <section class="universe-card" aria-labelledby="network-title">
          <h1 id="network-title" class="visually-hidden">${l(m.name)}</h1>

          <div class="orbit-map" id="orbit-map" tabindex="0" role="application" aria-label="Interactive Peaceful Vanilla Network orbit">
            ${le()}
            <button type="button" class="core-button" data-select="network" aria-label="Show ${l(m.name)} overview">
              <span class="core-aura" aria-hidden="true"></span>
              <img src="${G(m.icon)}" alt="" />
              <span class="core-label">
                <strong>${l(m.name.toUpperCase())}</strong>
                <span>${l(m.tagline)}</span>
              </span>
            </button>
            <div class="project-layer" id="project-layer">
              ${ce()}
            </div>
          </div>
        </section>

        <aside class="detail-panel is-collapsed" id="detail-panel" aria-live="polite" aria-expanded="false" aria-hidden="true" inert>
          ${ee()}
        </aside>
      </main>

      ${de()}

      <div class="selected-project-layer" aria-hidden="true"></div>
    </div>
  `}function he(){M=g.querySelector(".app-shell"),w=g.querySelector("#detail-panel"),C=g.querySelector("#orbit-map"),k=g.querySelector(".core-button"),q=g.querySelector(".selected-project-layer"),y=$.map((e,t)=>{const n=g.querySelector(`button[data-project-id="${e.id}"]`);if(!n)throw new Error(`Missing orbit node for ${e.id}`);return{project:e,button:n,ring:g.querySelector(`[data-ring="${e.id}"]`),connector:g.querySelector(`[data-connector="${e.id}"]`),slotAngle:-Math.PI/2+t*Math.PI*2/$.length,radius:0,collisionRadius:0,x:0,y:0}})}function P(){N=!0}function me(){if(window.addEventListener("resize",P,{passive:!0}),window.addEventListener("orientationchange",P,{passive:!0}),"ResizeObserver"in window){const e=new ResizeObserver(P);C&&e.observe(C),k&&e.observe(k);for(const t of y)e.observe(t.button)}document.fonts?.ready.then(P).catch(()=>{});for(const e of g.querySelectorAll("img"))e.complete||(e.addEventListener("load",P,{once:!0}),e.addEventListener("error",P,{once:!0}))}function ye(e,t){return(e??J(t))?.getBoundingClientRect()??null}function be(e,t){const n=e.getBoundingClientRect(),o=n.left+n.width/2,i=n.top+n.height/2,a=t?t.left+t.width/2:o,s=t?t.top+t.height/2:i,d=n.left+n.width/2,u=n.top+n.height/2;e.style.setProperty("--reveal-origin-x",`${(a-n.left).toFixed(1)}px`),e.style.setProperty("--reveal-origin-y",`${(s-n.top).toFixed(1)}px`),e.style.setProperty("--panel-enter-x",`${(a-d).toFixed(1)}px`),e.style.setProperty("--panel-enter-y",`${(s-u).toFixed(1)}px`)}function ge(e){const t=w?.getBoundingClientRect(),n=c&&t!==void 0&&window.innerWidth>=920,o=n?t.left:window.innerWidth,i=c&&t!==void 0&&window.innerWidth<920?t.top:window.innerHeight,a=n?v(o*.5,150,Math.max(150,o-150)):v(o*.5,96,o-96),s=n?v(window.innerHeight*.5,150,Math.max(150,window.innerHeight-150)):v(i*.5,98,Math.max(98,i-112));return{x:Number.isFinite(a)?a:e.offsetLeft+e.centerX,y:Number.isFinite(s)?s:e.offsetTop+e.centerY}}function ve(e){k?.classList.toggle("is-active",h==="network");for(const t of y){const n=t.project.id===h;t.button.classList.toggle("is-active",n),t.button.setAttribute("aria-pressed",String(n)),t.ring?.classList.toggle("is-active",n),t.ring?.style.setProperty("--project-color",e),t.connector?.classList.toggle("is-active",n),t.connector?.style.setProperty("--project-color",e)}w?.querySelectorAll("[data-select]").forEach(t=>{t.classList.toggle("is-active",t.dataset.select===h)})}function we(e){const t=w;if(t){if(t.innerHTML=ee(),t.toggleAttribute("inert",!c),t.setAttribute("aria-expanded",String(c)),t.setAttribute("aria-hidden",String(!c)),!c){t.classList.remove("is-expanded"),t.classList.add("is-collapsed");return}be(t,e),t.classList.remove("is-expanded"),t.classList.add("is-collapsed"),t.getBoundingClientRect(),t.classList.add("is-expanded"),t.classList.remove("is-collapsed")}}function xe(){const e=q,t=V(h)?y.find(n=>n.project.id===h):void 0;if(!e||!c||!t){A=null,q?.replaceChildren(),q?.classList.remove("has-selection");return}if(A?.dataset.projectId!==t.project.id){const n=t.button.cloneNode(!0);n.classList.add("selected-project-node","is-active"),n.removeAttribute("data-select"),n.removeAttribute("aria-label"),n.setAttribute("tabindex","-1"),n.setAttribute("aria-hidden","true"),n.dataset.projectId=t.project.id,n.style.setProperty("--project-color",t.project.color),e.replaceChildren(n),A=n}e.classList.add("has-selection")}function ke(){document.body.classList.contains("is-detail-scroll-locked")||(I=window.scrollY,document.documentElement.classList.add("is-detail-scroll-locked"),document.body.classList.add("is-detail-scroll-locked"),document.body.style.position="fixed",document.body.style.top=`-${I}px`,document.body.style.left="0",document.body.style.right="0",document.body.style.width="100%")}function $e(){document.body.classList.contains("is-detail-scroll-locked")&&(document.documentElement.classList.remove("is-detail-scroll-locked"),document.body.classList.remove("is-detail-scroll-locked"),document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.right="",document.body.style.width="",window.scrollTo(0,I),L=null)}function Me(){if(c){ke();return}$e()}function W(e){!c||!w||e===0||w.scrollBy({top:e,behavior:"auto"})}function S(e,t){h=e,c=V(h),D=c;const o=Q(h)?.color??"#ff9500",i=c?ye(t,e):X;c&&i&&(X=i),M?.setAttribute("data-selected",h),M?.setAttribute("data-panel-expanded",String(c)),M?.classList.toggle("is-focused",c),M?.classList.toggle("is-panel-expanded",c),M?.classList.toggle("is-scene-frozen",D),M?.style.setProperty("--project-color",o),w?.style.setProperty("--project-color",o),ve(o),we(i),xe(),Me(),P()}function z(e){const n=(R.indexOf(h)+e+R.length)%R.length,o=R[n];o&&S(o,J(o)??void 0)}function Le(){document.addEventListener("click",e=>{const t=e.target instanceof Element?e.target:null,n=t?.closest("[data-select]")??null,o=n?.dataset.select;if(o&&R.includes(o)){S(o,n??void 0);return}c&&t&&!w?.contains(t)&&S("network",k??void 0)}),C?.addEventListener("keydown",e=>{(e.key==="ArrowRight"||e.key==="ArrowDown")&&(e.preventDefault(),z(1)),(e.key==="ArrowLeft"||e.key==="ArrowUp")&&(e.preventDefault(),z(-1)),(e.key==="Escape"||e.key==="Home")&&(e.preventDefault(),S("network",k??void 0))}),document.addEventListener("keydown",e=>{e.key==="Escape"&&c&&(e.preventDefault(),S("network",k??void 0))}),document.addEventListener("wheel",e=>{!c||!w||(e.preventDefault(),W(e.deltaY))},{capture:!0,passive:!1}),document.addEventListener("touchstart",e=>{c&&(L=e.touches[0]?.clientY??null)},{capture:!0,passive:!0}),document.addEventListener("touchmove",e=>{if(!c||!w||L===null)return;const t=e.touches[0]?.clientY;t!==void 0&&(e.preventDefault(),W(L-t),L=t)},{capture:!0,passive:!1}),document.addEventListener("touchend",()=>{L=null}),document.addEventListener("touchcancel",()=>{L=null})}function K(){const e=C;if(!e)return null;const t=e.getBoundingClientRect(),n=Math.max(e.clientWidth||t.width,1),o=Math.max(e.clientHeight||t.height,1),i=n<760,a=n/2,s=o/2,d=(k?.offsetWidth??Math.min(n,o)*.24)/2,u=i?8:18,p=i?10:26,b=i?1.18:.88,f=Math.min(n,o)*(i?.0108:.0114),x={width:n,height:o,offsetLeft:t.left,offsetTop:t.top,centerX:a,centerY:s,coreRadius:d,orbitSquash:b,edgeMargin:u,coreMargin:p,compact:i};for(const r of y){const E=h===r.project.id?i?1.08:1.22:1,F=h===r.project.id?i?16:36:i?10:22,O=Math.max(r.button.offsetWidth,1)*E+F,te=Math.max(r.button.offsetHeight,1)*E+F,j=Math.max(O,te)/2,ne=Math.max(0,a-j-u),oe=Math.max(0,(s-j-u)/b),Y=Math.min(ne,oe),T=d+j+p,ie=r.project.orbitRadius*f;r.collisionRadius=j,r.radius=Y>=T?v(ie,T,Y):Y,r.ring&&(r.ring.setAttribute("rx",(r.radius/n*900).toFixed(1)),r.ring.setAttribute("ry",(r.radius*b/o*650).toFixed(1)))}return N=!1,x}function H(e,t){const n=e.collisionRadius+t.edgeMargin,o=t.width-e.collisionRadius-t.edgeMargin,i=e.collisionRadius+t.edgeMargin,a=t.height-e.collisionRadius-t.edgeMargin;e.x=v(e.x,Math.min(n,o),Math.max(n,o)),e.y=v(e.y,Math.min(i,a),Math.max(i,a));const s=e.x-t.centerX,d=e.y-t.centerY,u=t.coreRadius+e.collisionRadius+t.coreMargin,p=Math.hypot(s,d);if(p<u){const b=p>.001?Math.atan2(d,s):e.slotAngle;e.x=t.centerX+Math.cos(b)*u,e.y=t.centerY+Math.sin(b)*u,e.x=v(e.x,Math.min(n,o),Math.max(n,o)),e.y=v(e.y,Math.min(i,a),Math.max(i,a))}}function Pe(e){for(let t=0;t<re;t+=1){for(const n of y)H(n,e);for(let n=0;n<y.length;n+=1){const o=y[n];if(o)for(let i=n+1;i<y.length;i+=1){const a=y[i];if(!a)continue;const s=a.x-o.x,d=a.y-o.y,u=o.collisionRadius+a.collisionRadius,p=Math.hypot(s,d);if(p>=u)continue;const b=o.slotAngle+(i-n)*.73,f=p>.001?s/p:Math.cos(b),x=p>.001?d/p:Math.sin(b),r=(u-p)/2+.5;o.x-=f*r,o.y-=x*r,a.x+=f*r,a.y+=x*r,H(o,e),H(a,e)}}}}function Se(e){const t=V(h)?y.find(n=>n.project.id===h):void 0;for(const n of y)n.button.style.setProperty("--tx",`${n.x.toFixed(1)}px`),n.button.style.setProperty("--ty",`${n.y.toFixed(1)}px`),n.connector&&(n.connector.setAttribute("x1","450"),n.connector.setAttribute("y1","325"),n.connector.setAttribute("x2",(n.x/e.width*900).toFixed(1)),n.connector.setAttribute("y2",(n.y/e.height*650).toFixed(1)));if(A&&t&&c){const n=ge(e);A.style.setProperty("--tx",`${n.x.toFixed(1)}px`),A.style.setProperty("--ty",`${n.y.toFixed(1)}px`)}}function Ae(){let e=0,t,n=K();function o(i){if((N||!n)&&(n=K()),!n){window.requestAnimationFrame(o);return}const a=t===void 0?16.67:Math.min(i-t,40);if(t=i,!D){e+=B.matches?0:a;const s=e*se;for(const d of y){const u=s+d.slotAngle;d.x=n.centerX+Math.cos(u)*d.radius,d.y=n.centerY+Math.sin(u)*d.radius*n.orbitSquash}Pe(n)}Se(n),window.requestAnimationFrame(o)}window.requestAnimationFrame(o)}function Re(e){return Array.from({length:e},()=>({x:Math.random(),y:Math.random(),size:.45+Math.random()*1.9,tone:Math.random(),twinkle:Math.random()*Math.PI*2,speed:7e-4+Math.random()*.0012}))}function Ce(){const e=document.querySelector("#starfield"),t=e?.getContext("2d");if(!e||!t)return;const n=e,o=t,i=Re(170);let a=0,s=0,d=0;function u(){const f=Math.min(window.devicePixelRatio||1,2);a=window.innerWidth,s=window.innerHeight,n.width=Math.floor(a*f),n.height=Math.floor(s*f),n.style.width=`${a}px`,n.style.height=`${s}px`,o.setTransform(f,0,0,f,0,0),p(0)}function p(f){o.clearRect(0,0,a,s);const x=o.createRadialGradient(a*.5,s*.45,0,a*.5,s*.45,a*.72);x.addColorStop(0,"rgba(255, 149, 0, 0.13)"),x.addColorStop(.34,"rgba(80, 124, 190, 0.06)"),x.addColorStop(1,"rgba(3, 5, 10, 0)"),o.fillStyle=x,o.fillRect(0,0,a,s);for(const r of i){const E=r.tone>.82?"255, 149, 0":r.tone>.66?"80, 124, 190":"247, 249, 252",F=B.matches?.72:.45+Math.sin(f*r.speed+r.twinkle)*.28,O=v(F+(r.tone>.78?.16:0),.16,.88);o.beginPath(),o.fillStyle=`rgba(${E}, ${O.toFixed(3)})`,o.arc(r.x*a,r.y*s,r.size,0,Math.PI*2),o.fill()}}function b(f){f-d>=40&&(d=f,p(f)),window.requestAnimationFrame(b)}window.addEventListener("resize",u,{passive:!0}),u(),B.matches||window.requestAnimationFrame(b)}fe();he();me();Le();S("network");Ae();Ce();
//# sourceMappingURL=app-DMAtk-D3.js.map
