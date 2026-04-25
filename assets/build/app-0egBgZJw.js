(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const y={name:"Peaceful Vanilla Network",tagline:"Community, fun, privacy and connection.",icon:"assets/generated/peaceful-vanilla-network-icon.png",description:"Peaceful Vanilla Network is a small-business ecosystem built by family and friends: gaming worlds, chat, profiles, and experiments made for real connection without big-corp nonsense.",principles:["Community-first","Fun-driven","Privacy-aware","Small business, not big corp"],proof:[{label:"Since",value:"2019"},{label:"Players",value:"110K+"},{label:"Backups",value:"28TB"},{label:"Projects",value:"5"}]},P=[{id:"club",name:"Peaceful Vanilla Club",domainLabel:"peacefulvanilla.club",tagline:"The fun-first gaming world.",description:"A family-and-friends driven Minecraft SMP with a stable world, cross-play support, strong community culture, and a clear no pay-to-win philosophy.",status:"live",icon:"assets/logos/peaceful-vanilla-club-logo.png",color:"#ff9500",orbitRadius:33,orbitSpeed:12e-5,initialAngle:-2.72,primaryCta:{label:"Visit Club",href:"https://www.peacefulvanilla.club/"}},{id:"hytale",name:"Peaceful Vanilla Club: Hytale",domainLabel:"hytale.peacefulvanilla.club",tagline:"The Hytale vanilla server branch.",description:"A dedicated Hytale-facing home for Peaceful Vanilla Club, carrying the same fun-first community spirit, long-term mindset, and no pay-to-win philosophy into a new world.",status:"live",icon:"assets/logos/peaceful-vanilla-club-hytale-icon.jpg",color:"#ff7a00",orbitRadius:46,orbitSpeed:82e-6,initialAngle:-1.48,primaryCta:{label:"Visit Hytale",href:"https://hytale.peacefulvanilla.club/"},secondaryCta:{label:"Visit Club",href:"https://www.peacefulvanilla.club/"}},{id:"chat",name:"Peaceful Vanilla Chat",domainLabel:"peacefulvanilla.chat",tagline:"Private connection without big-corp baggage.",description:"A Matrix-powered, self-hosted communication platform where players, creators, family groups, and friends stay connected without face scans, personal documents, or big-platform lock-in.",status:"live",icon:"assets/logos/peaceful-vanilla-chat-icon-192.png",color:"#507cbe",orbitRadius:37,orbitSpeed:95e-6,initialAngle:-.42,primaryCta:{label:"Visit Chat",href:"https://www.peacefulvanilla.chat/"},secondaryCta:{label:"Enter App",href:"https://app.peacefulvanilla.chat"}},{id:"space",name:"Peaceful Vanilla Space",domainLabel:"peacefulvanilla.space",tagline:"Profiles, hubs, and social connection.",description:"A coming Peaceful Vanilla web layer for profiles, community hubs, and social surfaces that make the wider network easier to discover and more fun to explore.",status:"coming-soon",icon:"assets/generated/peaceful-vanilla-space-icon.png",color:"#ffc26b",orbitRadius:41,orbitSpeed:75e-6,initialAngle:2.38},{id:"fortrust",name:"Fortrust",domainLabel:"Fortrust by Peaceful Vanilla",tagline:"A separate experiment.",description:"An independent Peaceful Vanilla experiment kept intentionally separate, so small-team ideas can be tested freely without blurring the core network identity.",status:"coming-soon",icon:"assets/fortrust/fortrust-icon.png",color:"#d0c0b8",orbitRadius:29,orbitSpeed:105e-6,initialAngle:.92}],Z=document.querySelector("#app");if(!Z)throw new Error("Missing #app mount point");const k=Z,he="./",F=["network",...P.map(e=>e.id)],q=window.matchMedia("(prefers-reduced-motion: reduce)"),me=88e-6,ye=3,ee=260,te=140;let m="network",l=!1,G=null,$=null,L=null,E=null,M=null,B=null,R=null,b=[],X=!0,V=!1,Y=0,D=0;function ne(e){return`${he}${e}`}function r(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function v(e,n,t){return Math.min(Math.max(e,n),t)}function T(e=ee){D=Math.max(D,performance.now()+e)}function oe(e){return V||document.hidden||e<D}function ie(e){return e==="live"?"Live":"Coming soon"}function se(e){return P.find(n=>n.id===e)}function W(e){return e!=="network"}function ae(e){return e==="network"?M:b.find(n=>n.project.id===e)?.button??null}function be(){const e=P.map(t=>{const o=t.orbitRadius/100*900,s=t.orbitRadius/100*650;return`<ellipse class="orbit-ring" data-ring="${t.id}" cx="450" cy="325" rx="${o.toFixed(1)}" ry="${s.toFixed(1)}" style="--project-color: ${t.color}" />`}).join("");return`
    <svg class="orbit-svg" viewBox="0 0 900 650" preserveAspectRatio="none" aria-hidden="true">
      ${P.map(t=>`<line class="orbit-line" data-connector="${t.id}" x1="450" y1="325" x2="450" y2="325" style="--project-color: ${t.color}" />`).join("")}
      ${e}
    </svg>
  `}function ge(){return P.map(e=>`
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
            <img src="${ne(e.icon)}" alt="" loading="eager" />
          </span>
          <span class="project-label">
            <span class="project-name">${r(e.id==="fortrust"?"Fortrust":e.id)}</span>
            <span class="project-status status-${e.status}">${ie(e.status)}</span>
          </span>
        </button>
      `).join("")}function re(){return y.proof.map(e=>`
        <div class="proof-item">
          <strong>${r(e.value)}</strong>
          <span>${r(e.label)}</span>
        </div>
      `).join("")}function ve(){return`
    <section class="network-story" aria-labelledby="network-story-title">
      <div class="story-title-block">
        <p class="story-kicker">${r(y.tagline)}</p>
        <h2 id="network-story-title">${r(y.name)}</h2>
      </div>

      <article class="network-story-card" aria-label="${r(y.name)} overview">
        <div class="story-card-copy">
          <p class="story-eyebrow">What it is</p>
          <h3>A small independent ecosystem for community, play, privacy, and connection.</h3>
          <p>
            ${r(y.description)}
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
          ${re()}
        </div>
      </article>
    </section>
  `}function we(){const e=P.map(n=>`
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
        <p class="panel-kicker">${r(y.name)}</p>
        <h2 class="panel-title">${r(y.tagline)}</h2>
        <p class="panel-description">${r(y.description)}</p>
      </div>
      <div class="principles">
        ${y.principles.map(n=>`<span>${r(n)}</span>`).join("")}
      </div>
      <div class="panel-metrics" aria-label="Network proof points">${re()}</div>
      <div class="network-links">${e}</div>
    </div>
  `}function xe(e){const n=[e.primaryCta?`<a class="panel-cta primary" href="${e.primaryCta.href}" target="_blank" rel="noreferrer">${r(e.primaryCta.label)}</a>`:"",e.secondaryCta?`<a class="panel-cta" href="${e.secondaryCta.href}" target="_blank" rel="noreferrer">${r(e.secondaryCta.label)}</a>`:""].filter(Boolean).join(""),t=e.status==="coming-soon"?'<div class="coming-soon-note">This orbit is visible because it belongs to the network, but its public destination is not linked yet.</div>':"";return`
    <div class="panel-inner">
      <div class="panel-topline">
        <span class="status-pill" style="--status-color: ${e.status==="live"?"var(--success)":"var(--stone)"}">${ie(e.status)}</span>
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
  `}function le(){const e=se(m);return e?xe(e):we()}function ke(){k.innerHTML=`
    <div class="app-shell" style="--project-color: var(--accent)" data-selected="network" data-panel-expanded="false">
      <canvas class="starfield" id="starfield" aria-hidden="true"></canvas>

      <main class="command-deck">
        <section class="universe-card" aria-labelledby="network-title">
          <h1 id="network-title" class="visually-hidden">${r(y.name)}</h1>

          <div class="orbit-map" id="orbit-map" tabindex="0" role="application" aria-label="Interactive Peaceful Vanilla Network orbit">
            ${be()}
            <button type="button" class="core-button" data-select="network" aria-label="Show ${r(y.name)} overview">
              <span class="core-aura" aria-hidden="true"></span>
              <img src="${ne(y.icon)}" alt="" />
              <span class="core-label">
                <strong>${r(y.name.toUpperCase())}</strong>
                <span>${r(y.tagline)}</span>
              </span>
            </button>
            <div class="project-layer" id="project-layer">
              ${ge()}
            </div>
          </div>
        </section>

        <aside class="detail-panel is-collapsed" id="detail-panel" aria-live="polite" aria-expanded="false" aria-hidden="true" inert>
          ${le()}
        </aside>
      </main>

      ${ve()}

      <div class="selected-project-layer" aria-hidden="true"></div>
    </div>
  `}function $e(){$=k.querySelector(".app-shell"),L=k.querySelector("#detail-panel"),E=k.querySelector("#orbit-map"),M=k.querySelector(".core-button"),B=k.querySelector(".selected-project-layer"),b=P.map((e,n)=>{const t=k.querySelector(`button[data-project-id="${e.id}"]`);if(!t)throw new Error(`Missing orbit node for ${e.id}`);return{project:e,button:t,ring:k.querySelector(`[data-ring="${e.id}"]`),connector:k.querySelector(`[data-connector="${e.id}"]`),slotAngle:-Math.PI/2+n*Math.PI*2/P.length,radius:0,collisionRadius:0,x:0,y:0}})}function S(){X=!0}function Me(){if(window.addEventListener("resize",S,{passive:!0}),window.addEventListener("orientationchange",S,{passive:!0}),window.addEventListener("scroll",()=>{T(te)},{passive:!0}),"ResizeObserver"in window){const e=new ResizeObserver(S);E&&e.observe(E),M&&e.observe(M);for(const n of b)e.observe(n.button)}document.fonts?.ready.then(S).catch(()=>{});for(const e of k.querySelectorAll("img"))e.complete||(e.addEventListener("load",S,{once:!0}),e.addEventListener("error",S,{once:!0}))}function Pe(e,n){return(e??ae(n))?.getBoundingClientRect()??null}function Se(e,n){const t=e.getBoundingClientRect(),o=t.left+t.width/2,s=t.top+t.height/2,i=n?n.left+n.width/2:o,a=n?n.top+n.height/2:s,h=t.left+t.width/2,c=t.top+t.height/2;e.style.setProperty("--reveal-origin-x",`${(i-t.left).toFixed(1)}px`),e.style.setProperty("--reveal-origin-y",`${(a-t.top).toFixed(1)}px`),e.style.setProperty("--panel-enter-x",`${(i-h).toFixed(1)}px`),e.style.setProperty("--panel-enter-y",`${(a-c).toFixed(1)}px`)}function Le(e){const n=L?.getBoundingClientRect(),t=l&&n!==void 0&&window.innerWidth>=920,o=t?n.left:window.innerWidth,s=l&&n!==void 0&&window.innerWidth<920?n.top:window.innerHeight,i=t?v(o*.5,150,Math.max(150,o-150)):v(o*.5,96,o-96),a=t?v(window.innerHeight*.5,150,Math.max(150,window.innerHeight-150)):v(s*.5,98,Math.max(98,s-112));return{x:Number.isFinite(i)?i:e.offsetLeft+e.centerX,y:Number.isFinite(a)?a:e.offsetTop+e.centerY}}function Ae(e){M?.classList.toggle("is-active",m==="network");for(const n of b){const t=n.project.id===m;n.button.classList.toggle("is-active",t),n.button.setAttribute("aria-pressed",String(t)),n.ring?.classList.toggle("is-active",t),n.ring?.style.setProperty("--project-color",e),n.connector?.classList.toggle("is-active",t),n.connector?.style.setProperty("--project-color",e)}L?.querySelectorAll("[data-select]").forEach(n=>{n.classList.toggle("is-active",n.dataset.select===m)})}function Re(e){const n=L;if(n){if(n.innerHTML=le(),n.toggleAttribute("inert",!l),n.setAttribute("aria-expanded",String(l)),n.setAttribute("aria-hidden",String(!l)),!l){n.classList.remove("is-expanded"),n.classList.add("is-collapsed");return}Se(n,e),n.classList.remove("is-expanded"),n.classList.add("is-collapsed"),n.getBoundingClientRect(),n.classList.add("is-expanded"),n.classList.remove("is-collapsed")}}function Ce(){const e=B,n=W(m)?b.find(t=>t.project.id===m):void 0;if(!e||!l||!n){R=null,B?.replaceChildren(),B?.classList.remove("has-selection");return}if(R?.dataset.projectId!==n.project.id){const t=n.button.cloneNode(!0);t.classList.add("selected-project-node","is-active"),t.removeAttribute("data-select"),t.removeAttribute("aria-label"),t.setAttribute("tabindex","-1"),t.setAttribute("aria-hidden","true"),t.dataset.projectId=n.project.id,t.style.setProperty("--project-color",n.project.color),e.replaceChildren(t),R=t}e.classList.add("has-selection")}function Fe(){document.body.classList.contains("is-detail-scroll-locked")||(Y=window.scrollY,document.documentElement.classList.add("is-detail-scroll-locked"),document.body.classList.add("is-detail-scroll-locked"),document.body.style.position="fixed",document.body.style.top=`-${Y}px`,document.body.style.left="0",document.body.style.right="0",document.body.style.width="100%")}function Ee(){document.body.classList.contains("is-detail-scroll-locked")&&(document.documentElement.classList.remove("is-detail-scroll-locked"),document.body.classList.remove("is-detail-scroll-locked"),document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.right="",document.body.style.width="",window.scrollTo(0,Y))}function je(){if(l){Fe();return}Ee()}function A(e,n){m=e,l=W(m),V=l,T(l?ee:180);const o=se(m)?.color??"#ff9500",s=l?Pe(n,e):G;l&&s&&(G=s),$?.setAttribute("data-selected",m),$?.setAttribute("data-panel-expanded",String(l)),$?.classList.toggle("is-focused",l),$?.classList.toggle("is-panel-expanded",l),$?.classList.toggle("is-scene-frozen",V),$?.style.setProperty("--project-color",o),L?.style.setProperty("--project-color",o),Ae(o),Re(s),Ce(),je(),S()}function _(e){const t=(F.indexOf(m)+e+F.length)%F.length,o=F[t];o&&A(o,ae(o)??void 0)}function qe(){document.addEventListener("click",e=>{const n=e.target instanceof Element?e.target:null,t=n?.closest("[data-select]")??null,o=t?.dataset.select;if(o&&F.includes(o)){A(o,t??void 0);return}l&&n&&!L?.contains(n)&&A("network",M??void 0)}),E?.addEventListener("keydown",e=>{(e.key==="ArrowRight"||e.key==="ArrowDown")&&(e.preventDefault(),_(1)),(e.key==="ArrowLeft"||e.key==="ArrowUp")&&(e.preventDefault(),_(-1)),(e.key==="Escape"||e.key==="Home")&&(e.preventDefault(),A("network",M??void 0))}),document.addEventListener("keydown",e=>{e.key==="Escape"&&l&&(e.preventDefault(),A("network",M??void 0))}),L?.addEventListener("scroll",()=>{T(te)},{passive:!0})}function Q(){const e=E;if(!e)return null;const n=e.getBoundingClientRect(),t=Math.max(e.clientWidth||n.width,1),o=Math.max(e.clientHeight||n.height,1),s=t/o,i=t<760,a=v((s-1.26)/.54,0,1),h=v((.92-s)/.28,0,1),c=a*Math.min(t*.055,62),p=-h*Math.min(o*.05,42),d=t/2+c,w=o/2+p,u=(M?.offsetWidth??Math.min(t,o)*.24)/2,f=i?8:18,x=i?10:26,C=i?1.18:.88,O=Math.min(t,o)*(i?.0108:.0114);$?.style.setProperty("--orbit-bias-x",`${c.toFixed(1)}px`),$?.style.setProperty("--orbit-bias-y",`${p.toFixed(1)}px`);const H={width:t,height:o,offsetLeft:n.left,offsetTop:n.top,centerX:d,centerY:w,coreRadius:u,orbitSquash:C,edgeMargin:f,coreMargin:x,compact:i};for(const g of b){const z=m===g.project.id?i?1.08:1.22:1,U=m===g.project.id?i?16:36:i?10:22,ce=Math.max(g.button.offsetWidth,1)*z+U,de=Math.max(g.button.offsetHeight,1)*z+U,j=Math.max(ce,de)/2,ue=Math.max(0,d-j-f),pe=Math.max(0,(w-j-f)/C),I=Math.min(ue,pe),K=u+j+x,fe=g.project.orbitRadius*O;g.collisionRadius=j,g.radius=I>=K?v(fe,K,I):I,g.ring&&(g.ring.setAttribute("rx",(g.radius/t*900).toFixed(1)),g.ring.setAttribute("ry",(g.radius*C/o*650).toFixed(1)))}return X=!1,H}function N(e,n){const t=e.collisionRadius+n.edgeMargin,o=n.width-e.collisionRadius-n.edgeMargin,s=e.collisionRadius+n.edgeMargin,i=n.height-e.collisionRadius-n.edgeMargin;e.x=v(e.x,Math.min(t,o),Math.max(t,o)),e.y=v(e.y,Math.min(s,i),Math.max(s,i));const a=e.x-n.centerX,h=e.y-n.centerY,c=n.coreRadius+e.collisionRadius+n.coreMargin,p=Math.hypot(a,h);if(p<c){const d=p>.001?Math.atan2(h,a):e.slotAngle;e.x=n.centerX+Math.cos(d)*c,e.y=n.centerY+Math.sin(d)*c,e.x=v(e.x,Math.min(t,o),Math.max(t,o)),e.y=v(e.y,Math.min(s,i),Math.max(s,i))}}function Be(e){for(let n=0;n<ye;n+=1){for(const t of b)N(t,e);for(let t=0;t<b.length;t+=1){const o=b[t];if(o)for(let s=t+1;s<b.length;s+=1){const i=b[s];if(!i)continue;const a=i.x-o.x,h=i.y-o.y,c=o.collisionRadius+i.collisionRadius,p=Math.hypot(a,h);if(p>=c)continue;const d=o.slotAngle+(s-t)*.73,w=p>.001?a/p:Math.cos(d),u=p>.001?h/p:Math.sin(d),f=(c-p)/2+.5;o.x-=w*f,o.y-=u*f,i.x+=w*f,i.y+=u*f,N(o,e),N(i,e)}}}}function J(e){const n=W(m)?b.find(t=>t.project.id===m):void 0;for(const t of b)t.button.style.setProperty("--tx",`${t.x.toFixed(1)}px`),t.button.style.setProperty("--ty",`${t.y.toFixed(1)}px`),t.connector&&(t.connector.setAttribute("x1","450"),t.connector.setAttribute("y1","325"),t.connector.setAttribute("x2",(t.x/e.width*900).toFixed(1)),t.connector.setAttribute("y2",(t.y/e.height*650).toFixed(1)));if(R&&n&&l){const t=Le(e);R.style.setProperty("--tx",`${t.x.toFixed(1)}px`),R.style.setProperty("--ty",`${t.y.toFixed(1)}px`)}}function Oe(){let e=0,n,t=Q(),o=!1;function s(i){const a=X||!t;if(a&&(t=Q()),!t){window.requestAnimationFrame(s);return}const h=n===void 0?16.67:Math.min(i-n,40);n=i;const c=!q.matches&&!oe(i);if(c){e+=h;const p=e*me;for(const d of b){const w=p+d.slotAngle;d.x=t.centerX+Math.cos(w)*d.radius,d.y=t.centerY+Math.sin(w)*d.radius*t.orbitSquash}Be(t),J(t)}else(a||c!==o)&&J(t);o=c,window.requestAnimationFrame(s)}window.requestAnimationFrame(s)}function He(e){return Array.from({length:e},()=>({x:Math.random(),y:Math.random(),size:.45+Math.random()*1.9,tone:Math.random(),twinkle:Math.random()*Math.PI*2,speed:7e-4+Math.random()*.0012}))}function Ie(){const e=document.querySelector("#starfield"),n=e?.getContext("2d",{alpha:!1})??e?.getContext("2d");if(!e||!n)return;const t=e,o=n,s=He(170);let i=0,a=0,h=0,c=!1;function p(){const u=Math.min(window.devicePixelRatio||1,2);i=window.innerWidth,a=window.innerHeight,t.width=Math.floor(i*u),t.height=Math.floor(a*u),t.style.width=`${i}px`,t.style.height=`${a}px`,o.setTransform(u,0,0,u,0,0),d(0)}function d(u){o.clearRect(0,0,i,a);const f=o.createRadialGradient(i*.5,a*.45,0,i*.5,a*.45,i*.72);f.addColorStop(0,"rgba(255, 149, 0, 0.13)"),f.addColorStop(.34,"rgba(80, 124, 190, 0.06)"),f.addColorStop(1,"rgba(3, 5, 10, 0)"),o.fillStyle=f,o.fillRect(0,0,i,a);for(const x of s){const C=x.tone>.82?"255, 149, 0":x.tone>.66?"80, 124, 190":"247, 249, 252",O=q.matches?.72:.45+Math.sin(u*x.speed+x.twinkle)*.28,H=v(O+(x.tone>.78?.16:0),.16,.88);o.beginPath(),o.fillStyle=`rgba(${C}, ${H.toFixed(3)})`,o.arc(x.x*i,x.y*a,x.size,0,Math.PI*2),o.fill()}}function w(u){const f=!q.matches&&!oe(u);f&&u-h>=40?(h=u,d(u)):!f&&c&&d(h||u),c=f,window.requestAnimationFrame(w)}window.addEventListener("resize",p,{passive:!0}),p(),q.matches||window.requestAnimationFrame(w)}ke();$e();Me();qe();A("network");Oe();Ie();
//# sourceMappingURL=app-0egBgZJw.js.map
