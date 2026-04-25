(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const y={name:"Peaceful Vanilla Network",tagline:"Community, fun, privacy and connection.",icon:"assets/generated/peaceful-vanilla-network-icon.png",description:"Peaceful Vanilla Network is a small-business ecosystem built by family and friends: gaming worlds, chat, profiles, and experiments made for real connection without big-corp nonsense.",principles:["Community-first","Fun-driven","Privacy-aware","Small business, not big corp"],proof:[{label:"Since",value:"2019"},{label:"Players",value:"110K+"},{label:"Backups",value:"28TB"},{label:"Projects",value:"5"}]},$=[{id:"club",name:"Peaceful Vanilla Club",domainLabel:"peacefulvanilla.club",tagline:"The fun-first gaming world.",description:"A family-and-friends driven Minecraft SMP with a stable world, cross-play support, strong community culture, and a clear no pay-to-win philosophy.",status:"live",icon:"assets/logos/peaceful-vanilla-club-logo.png",color:"#ff9500",orbitRadius:33,orbitSpeed:12e-5,initialAngle:-2.72,primaryCta:{label:"Visit Club",href:"https://www.peacefulvanilla.club/"}},{id:"hytale",name:"Peaceful Vanilla Club: Hytale",domainLabel:"hytale.peacefulvanilla.club",tagline:"The Hytale vanilla server branch.",description:"A dedicated Hytale-facing home for Peaceful Vanilla Club, carrying the same fun-first community spirit, long-term mindset, and no pay-to-win philosophy into a new world.",status:"live",icon:"assets/logos/peaceful-vanilla-club-hytale-icon.jpg",color:"#ff7a00",orbitRadius:46,orbitSpeed:82e-6,initialAngle:-1.48,primaryCta:{label:"Visit Hytale",href:"https://hytale.peacefulvanilla.club/"},secondaryCta:{label:"Visit Club",href:"https://www.peacefulvanilla.club/"}},{id:"chat",name:"Peaceful Vanilla Chat",domainLabel:"peacefulvanilla.chat",tagline:"Private connection without big-corp baggage.",description:"A Matrix-powered, self-hosted communication platform where players, creators, family groups, and friends stay connected without face scans, personal documents, or big-platform lock-in.",status:"live",icon:"assets/logos/peaceful-vanilla-chat-icon-192.png",color:"#507cbe",orbitRadius:37,orbitSpeed:95e-6,initialAngle:-.42,primaryCta:{label:"Visit Chat",href:"https://www.peacefulvanilla.chat/"},secondaryCta:{label:"Enter App",href:"https://app.peacefulvanilla.chat"}},{id:"space",name:"Peaceful Vanilla Space",domainLabel:"peacefulvanilla.space",tagline:"Profiles, hubs, and social connection.",description:"A coming Peaceful Vanilla web layer for profiles, community hubs, and social surfaces that make the wider network easier to discover and more fun to explore.",status:"coming-soon",icon:"assets/generated/peaceful-vanilla-space-icon.png",color:"#ffc26b",orbitRadius:41,orbitSpeed:75e-6,initialAngle:2.38},{id:"fortrust",name:"Fortrust",domainLabel:"Fortrust by Peaceful Vanilla",tagline:"A separate experiment.",description:"An independent Peaceful Vanilla experiment kept intentionally separate, so small-team ideas can be tested freely without blurring the core network identity.",status:"coming-soon",icon:"assets/fortrust/fortrust-icon.png",color:"#d0c0b8",orbitRadius:29,orbitSpeed:105e-6,initialAngle:.92}],_=document.querySelector("#app");if(!_)throw new Error("Missing #app mount point");const w=_,ce="./",R=["network",...$.map(e=>e.id)],j=window.matchMedia("(prefers-reduced-motion: reduce)"),de=88e-6,ue=3,Q=260,J=140;let m="network",u=!1,z=null,M=null,S=null,C=null,k=null,q=null,A=null,g=[],Y=!0,V=!1,B=0,D=0;function Z(e){return`${ce}${e}`}function l(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function x(e,n,t){return Math.min(Math.max(e,n),t)}function T(e=Q){D=Math.max(D,performance.now()+e)}function ee(e){return V||document.hidden||e<D}function te(e){return e==="live"?"Live":"Coming soon"}function ne(e){return $.find(n=>n.id===e)}function X(e){return e!=="network"}function oe(e){return e==="network"?k:g.find(n=>n.project.id===e)?.button??null}function pe(){const e=$.map(t=>{const o=t.orbitRadius/100*900,i=t.orbitRadius/100*650;return`<ellipse class="orbit-ring" data-ring="${t.id}" cx="450" cy="325" rx="${o.toFixed(1)}" ry="${i.toFixed(1)}" style="--project-color: ${t.color}" />`}).join("");return`
    <svg class="orbit-svg" viewBox="0 0 900 650" preserveAspectRatio="none" aria-hidden="true">
      ${$.map(t=>`<line class="orbit-line" data-connector="${t.id}" x1="450" y1="325" x2="450" y2="325" style="--project-color: ${t.color}" />`).join("")}
      ${e}
    </svg>
  `}function fe(){return $.map(e=>`
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
            <img src="${Z(e.icon)}" alt="" loading="eager" />
          </span>
          <span class="project-label">
            <span class="project-name">${l(e.id==="fortrust"?"Fortrust":e.id)}</span>
            <span class="project-status status-${e.status}">${te(e.status)}</span>
          </span>
        </button>
      `).join("")}function ie(){return y.proof.map(e=>`
        <div class="proof-item">
          <strong>${l(e.value)}</strong>
          <span>${l(e.label)}</span>
        </div>
      `).join("")}function he(){return`
    <section class="network-story" aria-labelledby="network-story-title">
      <div class="story-title-block">
        <p class="story-kicker">${l(y.tagline)}</p>
        <h2 id="network-story-title">${l(y.name)}</h2>
      </div>

      <article class="network-story-card" aria-label="${l(y.name)} overview">
        <div class="story-card-copy">
          <p class="story-eyebrow">What it is</p>
          <h3>A small independent ecosystem for community, play, privacy, and connection.</h3>
          <p>
            ${l(y.description)}
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
          ${ie()}
        </div>
      </article>
    </section>
  `}function me(){const e=$.map(n=>`
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
        <p class="panel-kicker">${l(y.name)}</p>
        <h2 class="panel-title">${l(y.tagline)}</h2>
        <p class="panel-description">${l(y.description)}</p>
      </div>
      <div class="principles">
        ${y.principles.map(n=>`<span>${l(n)}</span>`).join("")}
      </div>
      <div class="panel-metrics" aria-label="Network proof points">${ie()}</div>
      <div class="network-links">${e}</div>
    </div>
  `}function ye(e){const n=[e.primaryCta?`<a class="panel-cta primary" href="${e.primaryCta.href}" target="_blank" rel="noreferrer">${l(e.primaryCta.label)}</a>`:"",e.secondaryCta?`<a class="panel-cta" href="${e.secondaryCta.href}" target="_blank" rel="noreferrer">${l(e.secondaryCta.label)}</a>`:""].filter(Boolean).join(""),t=e.status==="coming-soon"?'<div class="coming-soon-note">This orbit is visible because it belongs to the network, but its public destination is not linked yet.</div>':"";return`
    <div class="panel-inner">
      <div class="panel-topline">
        <span class="status-pill" style="--status-color: ${e.status==="live"?"var(--success)":"var(--stone)"}">${te(e.status)}</span>
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
  `}function se(){const e=ne(m);return e?ye(e):me()}function ge(){w.innerHTML=`
    <div class="app-shell" style="--project-color: var(--accent)" data-selected="network" data-panel-expanded="false">
      <canvas class="starfield" id="starfield" aria-hidden="true"></canvas>

      <main class="command-deck">
        <section class="universe-card" aria-labelledby="network-title">
          <h1 id="network-title" class="visually-hidden">${l(y.name)}</h1>

          <div class="orbit-map" id="orbit-map" tabindex="0" role="application" aria-label="Interactive Peaceful Vanilla Network orbit">
            ${pe()}
            <button type="button" class="core-button" data-select="network" aria-label="Show ${l(y.name)} overview">
              <span class="core-aura" aria-hidden="true"></span>
              <img src="${Z(y.icon)}" alt="" />
              <span class="core-label">
                <strong>${l(y.name.toUpperCase())}</strong>
                <span>${l(y.tagline)}</span>
              </span>
            </button>
            <div class="project-layer" id="project-layer">
              ${fe()}
            </div>
          </div>
        </section>

        <aside class="detail-panel is-collapsed" id="detail-panel" aria-live="polite" aria-expanded="false" aria-hidden="true" inert>
          ${se()}
        </aside>
      </main>

      ${he()}

      <div class="selected-project-layer" aria-hidden="true"></div>
    </div>
  `}function be(){M=w.querySelector(".app-shell"),S=w.querySelector("#detail-panel"),C=w.querySelector("#orbit-map"),k=w.querySelector(".core-button"),q=w.querySelector(".selected-project-layer"),g=$.map((e,n)=>{const t=w.querySelector(`button[data-project-id="${e.id}"]`);if(!t)throw new Error(`Missing orbit node for ${e.id}`);return{project:e,button:t,ring:w.querySelector(`[data-ring="${e.id}"]`),connector:w.querySelector(`[data-connector="${e.id}"]`),slotAngle:-Math.PI/2+n*Math.PI*2/$.length,radius:0,collisionRadius:0,x:0,y:0}})}function P(){Y=!0}function ve(){if(window.addEventListener("resize",P,{passive:!0}),window.addEventListener("orientationchange",P,{passive:!0}),window.addEventListener("scroll",()=>{T(J)},{passive:!0}),"ResizeObserver"in window){const e=new ResizeObserver(P);C&&e.observe(C),k&&e.observe(k);for(const n of g)e.observe(n.button)}document.fonts?.ready.then(P).catch(()=>{});for(const e of w.querySelectorAll("img"))e.complete||(e.addEventListener("load",P,{once:!0}),e.addEventListener("error",P,{once:!0}))}function we(e,n){return(e??oe(n))?.getBoundingClientRect()??null}function xe(e,n){const t=e.getBoundingClientRect(),o=t.left+t.width/2,i=t.top+t.height/2,s=n?n.left+n.width/2:o,a=n?n.top+n.height/2:i,h=t.left+t.width/2,c=t.top+t.height/2;e.style.setProperty("--reveal-origin-x",`${(s-t.left).toFixed(1)}px`),e.style.setProperty("--reveal-origin-y",`${(a-t.top).toFixed(1)}px`),e.style.setProperty("--panel-enter-x",`${(s-h).toFixed(1)}px`),e.style.setProperty("--panel-enter-y",`${(a-c).toFixed(1)}px`)}function ke(e){const n=S?.getBoundingClientRect(),t=u&&n!==void 0&&window.innerWidth>=920,o=t?n.left:window.innerWidth,i=u&&n!==void 0&&window.innerWidth<920?n.top:window.innerHeight,s=t?x(o*.5,150,Math.max(150,o-150)):x(o*.5,96,o-96),a=t?x(window.innerHeight*.5,150,Math.max(150,window.innerHeight-150)):x(i*.5,98,Math.max(98,i-112));return{x:Number.isFinite(s)?s:e.offsetLeft+e.centerX,y:Number.isFinite(a)?a:e.offsetTop+e.centerY}}function $e(e){k?.classList.toggle("is-active",m==="network");for(const n of g){const t=n.project.id===m;n.button.classList.toggle("is-active",t),n.button.setAttribute("aria-pressed",String(t)),n.ring?.classList.toggle("is-active",t),n.ring?.style.setProperty("--project-color",e),n.connector?.classList.toggle("is-active",t),n.connector?.style.setProperty("--project-color",e)}S?.querySelectorAll("[data-select]").forEach(n=>{n.classList.toggle("is-active",n.dataset.select===m)})}function Me(e){const n=S;if(n){if(n.innerHTML=se(),n.toggleAttribute("inert",!u),n.setAttribute("aria-expanded",String(u)),n.setAttribute("aria-hidden",String(!u)),!u){n.classList.remove("is-expanded"),n.classList.add("is-collapsed");return}xe(n,e),n.classList.remove("is-expanded"),n.classList.add("is-collapsed"),n.getBoundingClientRect(),n.classList.add("is-expanded"),n.classList.remove("is-collapsed")}}function Pe(){const e=q,n=X(m)?g.find(t=>t.project.id===m):void 0;if(!e||!u||!n){A=null,q?.replaceChildren(),q?.classList.remove("has-selection");return}if(A?.dataset.projectId!==n.project.id){const t=n.button.cloneNode(!0);t.classList.add("selected-project-node","is-active"),t.removeAttribute("data-select"),t.removeAttribute("aria-label"),t.setAttribute("tabindex","-1"),t.setAttribute("aria-hidden","true"),t.dataset.projectId=n.project.id,t.style.setProperty("--project-color",n.project.color),e.replaceChildren(t),A=t}e.classList.add("has-selection")}function Se(){document.body.classList.contains("is-detail-scroll-locked")||(B=window.scrollY,document.documentElement.classList.add("is-detail-scroll-locked"),document.body.classList.add("is-detail-scroll-locked"),document.body.style.position="fixed",document.body.style.top=`-${B}px`,document.body.style.left="0",document.body.style.right="0",document.body.style.width="100%")}function Le(){document.body.classList.contains("is-detail-scroll-locked")&&(document.documentElement.classList.remove("is-detail-scroll-locked"),document.body.classList.remove("is-detail-scroll-locked"),document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.right="",document.body.style.width="",window.scrollTo(0,B))}function Ae(){if(u){Se();return}Le()}function L(e,n){m=e,u=X(m),V=u,T(u?Q:180);const o=ne(m)?.color??"#ff9500",i=u?we(n,e):z;u&&i&&(z=i),M?.setAttribute("data-selected",m),M?.setAttribute("data-panel-expanded",String(u)),M?.classList.toggle("is-focused",u),M?.classList.toggle("is-panel-expanded",u),M?.classList.toggle("is-scene-frozen",V),M?.style.setProperty("--project-color",o),S?.style.setProperty("--project-color",o),$e(o),Me(i),Pe(),Ae(),P()}function U(e){const t=(R.indexOf(m)+e+R.length)%R.length,o=R[t];o&&L(o,oe(o)??void 0)}function Re(){document.addEventListener("click",e=>{const n=e.target instanceof Element?e.target:null,t=n?.closest("[data-select]")??null,o=t?.dataset.select;if(o&&R.includes(o)){L(o,t??void 0);return}u&&n&&!S?.contains(n)&&L("network",k??void 0)}),C?.addEventListener("keydown",e=>{(e.key==="ArrowRight"||e.key==="ArrowDown")&&(e.preventDefault(),U(1)),(e.key==="ArrowLeft"||e.key==="ArrowUp")&&(e.preventDefault(),U(-1)),(e.key==="Escape"||e.key==="Home")&&(e.preventDefault(),L("network",k??void 0))}),document.addEventListener("keydown",e=>{e.key==="Escape"&&u&&(e.preventDefault(),L("network",k??void 0))}),S?.addEventListener("scroll",()=>{T(J)},{passive:!0})}function K(){const e=C;if(!e)return null;const n=e.getBoundingClientRect(),t=Math.max(e.clientWidth||n.width,1),o=Math.max(e.clientHeight||n.height,1),i=t<760,s=t/2,a=o/2,h=(k?.offsetWidth??Math.min(t,o)*.24)/2,c=i?8:18,p=i?10:26,d=i?1.18:.88,v=Math.min(t,o)*(i?.0108:.0114),f={width:t,height:o,offsetLeft:n.left,offsetTop:n.top,centerX:s,centerY:a,coreRadius:h,orbitSquash:d,edgeMargin:c,coreMargin:p,compact:i};for(const r of g){const b=m===r.project.id?i?1.08:1.22:1,F=m===r.project.id?i?16:36:i?10:22,O=Math.max(r.button.offsetWidth,1)*b+F,H=Math.max(r.button.offsetHeight,1)*b+F,E=Math.max(O,H)/2,ae=Math.max(0,s-E-c),re=Math.max(0,(a-E-c)/d),I=Math.min(ae,re),W=h+E+p,le=r.project.orbitRadius*v;r.collisionRadius=E,r.radius=I>=W?x(le,W,I):I,r.ring&&(r.ring.setAttribute("rx",(r.radius/t*900).toFixed(1)),r.ring.setAttribute("ry",(r.radius*d/o*650).toFixed(1)))}return Y=!1,f}function N(e,n){const t=e.collisionRadius+n.edgeMargin,o=n.width-e.collisionRadius-n.edgeMargin,i=e.collisionRadius+n.edgeMargin,s=n.height-e.collisionRadius-n.edgeMargin;e.x=x(e.x,Math.min(t,o),Math.max(t,o)),e.y=x(e.y,Math.min(i,s),Math.max(i,s));const a=e.x-n.centerX,h=e.y-n.centerY,c=n.coreRadius+e.collisionRadius+n.coreMargin,p=Math.hypot(a,h);if(p<c){const d=p>.001?Math.atan2(h,a):e.slotAngle;e.x=n.centerX+Math.cos(d)*c,e.y=n.centerY+Math.sin(d)*c,e.x=x(e.x,Math.min(t,o),Math.max(t,o)),e.y=x(e.y,Math.min(i,s),Math.max(i,s))}}function Ce(e){for(let n=0;n<ue;n+=1){for(const t of g)N(t,e);for(let t=0;t<g.length;t+=1){const o=g[t];if(o)for(let i=t+1;i<g.length;i+=1){const s=g[i];if(!s)continue;const a=s.x-o.x,h=s.y-o.y,c=o.collisionRadius+s.collisionRadius,p=Math.hypot(a,h);if(p>=c)continue;const d=o.slotAngle+(i-t)*.73,v=p>.001?a/p:Math.cos(d),f=p>.001?h/p:Math.sin(d),r=(c-p)/2+.5;o.x-=v*r,o.y-=f*r,s.x+=v*r,s.y+=f*r,N(o,e),N(s,e)}}}}function G(e){const n=X(m)?g.find(t=>t.project.id===m):void 0;for(const t of g)t.button.style.setProperty("--tx",`${t.x.toFixed(1)}px`),t.button.style.setProperty("--ty",`${t.y.toFixed(1)}px`),t.connector&&(t.connector.setAttribute("x1","450"),t.connector.setAttribute("y1","325"),t.connector.setAttribute("x2",(t.x/e.width*900).toFixed(1)),t.connector.setAttribute("y2",(t.y/e.height*650).toFixed(1)));if(A&&n&&u){const t=ke(e);A.style.setProperty("--tx",`${t.x.toFixed(1)}px`),A.style.setProperty("--ty",`${t.y.toFixed(1)}px`)}}function Fe(){let e=0,n,t=K(),o=!1;function i(s){const a=Y||!t;if(a&&(t=K()),!t){window.requestAnimationFrame(i);return}const h=n===void 0?16.67:Math.min(s-n,40);n=s;const c=!j.matches&&!ee(s);if(c){e+=h;const p=e*de;for(const d of g){const v=p+d.slotAngle;d.x=t.centerX+Math.cos(v)*d.radius,d.y=t.centerY+Math.sin(v)*d.radius*t.orbitSquash}Ce(t),G(t)}else(a||c!==o)&&G(t);o=c,window.requestAnimationFrame(i)}window.requestAnimationFrame(i)}function Ee(e){return Array.from({length:e},()=>({x:Math.random(),y:Math.random(),size:.45+Math.random()*1.9,tone:Math.random(),twinkle:Math.random()*Math.PI*2,speed:7e-4+Math.random()*.0012}))}function je(){const e=document.querySelector("#starfield"),n=e?.getContext("2d",{alpha:!1})??e?.getContext("2d");if(!e||!n)return;const t=e,o=n,i=Ee(170);let s=0,a=0,h=0,c=!1;function p(){const f=Math.min(window.devicePixelRatio||1,2);s=window.innerWidth,a=window.innerHeight,t.width=Math.floor(s*f),t.height=Math.floor(a*f),t.style.width=`${s}px`,t.style.height=`${a}px`,o.setTransform(f,0,0,f,0,0),d(0)}function d(f){o.clearRect(0,0,s,a);const r=o.createRadialGradient(s*.5,a*.45,0,s*.5,a*.45,s*.72);r.addColorStop(0,"rgba(255, 149, 0, 0.13)"),r.addColorStop(.34,"rgba(80, 124, 190, 0.06)"),r.addColorStop(1,"rgba(3, 5, 10, 0)"),o.fillStyle=r,o.fillRect(0,0,s,a);for(const b of i){const F=b.tone>.82?"255, 149, 0":b.tone>.66?"80, 124, 190":"247, 249, 252",O=j.matches?.72:.45+Math.sin(f*b.speed+b.twinkle)*.28,H=x(O+(b.tone>.78?.16:0),.16,.88);o.beginPath(),o.fillStyle=`rgba(${F}, ${H.toFixed(3)})`,o.arc(b.x*s,b.y*a,b.size,0,Math.PI*2),o.fill()}}function v(f){const r=!j.matches&&!ee(f);r&&f-h>=40?(h=f,d(f)):!r&&c&&d(h||f),c=r,window.requestAnimationFrame(v)}window.addEventListener("resize",p,{passive:!0}),p(),j.matches||window.requestAnimationFrame(v)}ge();be();ve();Re();L("network");Fe();je();
//# sourceMappingURL=app-O31naDZi.js.map
