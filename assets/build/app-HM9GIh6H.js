(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const s of c)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function n(c){const s={};return c.integrity&&(s.integrity=c.integrity),c.referrerPolicy&&(s.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?s.credentials="include":c.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(c){if(c.ep)return;c.ep=!0;const s=n(c);fetch(c.href,s)}})();const C={name:"Peaceful Vanilla Network",tagline:"Community, fun, privacy, and connection.",icon:"assets/generated/peaceful-vanilla-network-icon.png",description:"Peaceful Vanilla Network is a small-business ecosystem built by family and friends: gaming worlds, chat, profiles, and experiments made for real connection without big-corp nonsense.",principles:["Community-first","Fun-driven","Privacy-aware","Small business, not big corp"],proof:[{label:"Since",value:"2019"},{label:"Players",value:"110K+"},{label:"Backups",value:"28TB"},{label:"Projects",value:"5"}]},L=[{id:"club",name:"Peaceful Vanilla Club",domainLabel:"peacefulvanilla.club",tagline:"The fun-first gaming world.",description:"A family-and-friends driven Minecraft SMP with a stable world, cross-play support, strong community culture, and a clear no pay-to-win philosophy.",status:"live",icon:"assets/logos/peaceful-vanilla-club-logo.png",color:"#ff9500",orbitRadius:33,orbitSpeed:12e-5,initialAngle:-2.72,primaryCta:{label:"Visit Club",href:"https://www.peacefulvanilla.club/"}},{id:"hytale",name:"Peaceful Vanilla Club: Hytale",domainLabel:"hytale.peacefulvanilla.club",tagline:"The Hytale vanilla server branch.",description:"A dedicated Hytale-facing home for Peaceful Vanilla Club, carrying the same fun-first community spirit, long-term mindset, and no pay-to-win philosophy into a new world.",status:"live",icon:"assets/logos/peaceful-vanilla-club-hytale-icon.jpg",color:"#ff7a00",orbitRadius:46,orbitSpeed:82e-6,initialAngle:-1.48,primaryCta:{label:"Visit Hytale",href:"https://hytale.peacefulvanilla.club/"},secondaryCta:{label:"Visit Club",href:"https://www.peacefulvanilla.club/"}},{id:"chat",name:"Peaceful Vanilla Chat",domainLabel:"peacefulvanilla.chat",tagline:"Private connection without big-corp baggage.",description:"A Matrix-powered, self-hosted communication platform where players, creators, family groups, and friends stay connected without face scans, personal documents, or big-platform lock-in.",status:"live",icon:"assets/logos/peaceful-vanilla-chat-icon-192.png",color:"#507cbe",orbitRadius:37,orbitSpeed:95e-6,initialAngle:-.42,primaryCta:{label:"Visit Chat",href:"https://www.peacefulvanilla.chat/"},secondaryCta:{label:"Enter App",href:"https://app.peacefulvanilla.chat"}},{id:"space",name:"Peaceful Vanilla Space",domainLabel:"peacefulvanilla.space",tagline:"Profiles, hubs, and social connection.",description:"A coming Peaceful Vanilla web layer for profiles, community hubs, and social surfaces that make the wider network easier to discover and more fun to explore.",status:"coming-soon",icon:"assets/generated/peaceful-vanilla-space-icon.png",color:"#ffc26b",orbitRadius:41,orbitSpeed:75e-6,initialAngle:2.38},{id:"fortrust",name:"Fortrust",domainLabel:"Fortrust by Peaceful Vanilla",tagline:"A separate experiment.",description:"An independent Peaceful Vanilla experiment kept intentionally separate, so small-team ideas can be tested freely without blurring the core network identity.",status:"coming-soon",icon:"assets/fortrust/fortrust-icon.png",color:"#d0c0b8",orbitRadius:29,orbitSpeed:105e-6,initialAngle:.92}],G=document.querySelector("#app");if(!G)throw new Error("Missing #app mount point");const nt=G,ot="./",V=["network",...L.map(t=>t.id)];let w="network";const it={club:{x:14,y:31},hytale:{x:50,y:21},chat:{x:88,y:43},space:{x:14,y:78},fortrust:{x:86,y:78}},st={network:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4.5 7.5V16.5L12 21l7.5-4.5V7.5L12 3Z"/><path d="M12 3v18M4.5 7.5 12 12l7.5-4.5M4.5 16.5 12 12l7.5 4.5"/></svg>',club:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 14.5 12 4l8 10.5"/><path d="M6.5 12.5V20h11v-7.5"/><path d="M9 20v-5h6v5"/></svg>',hytale:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4v16M18 4v16M6 12h12"/><path d="M8.5 4h7M8.5 20h7"/></svg>',chat:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8.5A5.5 5.5 0 0 1 10.5 3h3A5.5 5.5 0 0 1 19 8.5v2A5.5 5.5 0 0 1 13.5 16H12l-4.5 4v-4.35A5.5 5.5 0 0 1 5 11.5v-3Z"/><path d="M9 9.5h6M9 12h4"/></svg>',space:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/><path d="M4 20a8 8 0 0 1 16 0"/><path d="M19 8h2M3 8h2M12 18v3"/></svg>',fortrust:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z"/><path d="M9 12l2 2 4-5"/></svg>'};function q(t){return`${ot}${t}`}function g(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function K(t){return t==="live"?"Live":"Coming soon"}function O(t){return L.find(a=>a.id===t)}function rt(){return V.map(t=>{const a=O(t),n=a?.name??C.name,o=a?.color??"#ff9500";return`<button type="button" data-select="${t}" aria-label="Show ${g(n)}" style="--project-color: ${o}">${st[t]}</button>`}).join("")}function lt(){const t=L.map(n=>{const o=n.orbitRadius/100*900,c=n.orbitRadius/100*650;return`<ellipse class="orbit-ring" data-ring="${n.id}" cx="450" cy="325" rx="${o.toFixed(1)}" ry="${c.toFixed(1)}" style="--project-color: ${n.color}" />`}).join("");return`
    <svg class="orbit-svg" viewBox="0 0 900 650" preserveAspectRatio="none" aria-hidden="true">
      ${L.map(n=>`<line class="orbit-line" data-connector="${n.id}" x1="450" y1="325" x2="450" y2="325" style="--project-color: ${n.color}" />`).join("")}
      ${t}
    </svg>
  `}function ct(){return L.map(t=>`
        <button
          type="button"
          class="project-node"
          data-select="${t.id}"
          data-project-id="${t.id}"
          aria-label="Show ${g(t.name)}"
          aria-pressed="false"
          style="--project-color: ${t.color}"
        >
          <span class="planet-avatar" aria-hidden="true">
            <img src="${q(t.icon)}" alt="" loading="eager" />
          </span>
          <span class="project-label">
            <span class="project-name">${g(t.id==="fortrust"?"Fortrust":t.id)}</span>
            <span class="project-status status-${t.status}">${K(t.status)}</span>
          </span>
        </button>
      `).join("")}function U(){return C.proof.map(t=>`
        <div class="proof-item">
          <strong>${g(t.value)}</strong>
          <span>${g(t.label)}</span>
        </div>
      `).join("")}function dt(){const t=L.map(a=>`
        <button type="button" data-select="${a.id}" style="--project-color: ${a.color}">
          <strong>${g(a.name)}</strong>
          <span>${g(a.tagline)}</span>
        </button>
      `).join("");return`
    <div class="panel-inner">
      <div class="panel-topline">
        <span class="status-pill" style="--status-color: var(--accent-soft)">Network core</span>
      </div>
      <div class="feature-art" style="--project-color: var(--accent)">
        <img src="${q(C.icon)}" alt="" />
      </div>
      <div class="panel-copy">
        <p class="panel-kicker">Peaceful Vanilla Network</p>
        <h2 class="panel-title">${g(C.tagline)}</h2>
        <p class="panel-description">${g(C.description)}</p>
      </div>
      <div class="principles">
        ${C.principles.map(a=>`<span>${g(a)}</span>`).join("")}
      </div>
      <div class="panel-metrics" aria-label="Network proof points">${U()}</div>
      <div class="network-links">${t}</div>
    </div>
  `}function pt(t){const a=[t.primaryCta?`<a class="panel-cta primary" href="${t.primaryCta.href}" target="_blank" rel="noreferrer">${g(t.primaryCta.label)}</a>`:"",t.secondaryCta?`<a class="panel-cta" href="${t.secondaryCta.href}" target="_blank" rel="noreferrer">${g(t.secondaryCta.label)}</a>`:""].filter(Boolean).join(""),n=t.status==="coming-soon"?'<div class="coming-soon-note">This orbit is visible because it belongs to the network, but its public destination is not linked yet.</div>':"";return`
    <div class="panel-inner">
      <div class="panel-topline">
        <span class="status-pill" style="--status-color: ${t.status==="live"?"var(--success)":"var(--stone)"}">${K(t.status)}</span>
        <button type="button" class="panel-close" data-select="network" aria-label="Return to network overview">x</button>
      </div>
      <div class="feature-art" data-project-id="${t.id}" style="--project-color: ${t.color}">
        <img src="${q(t.icon)}" alt="" />
      </div>
      <div class="panel-copy">
        <p class="panel-kicker">${g(t.domainLabel)}</p>
        <h2 class="panel-title">${g(t.name)}</h2>
        <p class="panel-description">${g(t.description)}</p>
      </div>
      <div class="principles">
        <span>${g(t.tagline)}</span>
        <span>${g(t.status==="live"?"Active destination":"Network preview")}</span>
      </div>
      <div class="cta-stack">
        ${a||n}
      </div>
    </div>
  `}function _(){const t=O(w);return t?pt(t):dt()}function ut(){nt.innerHTML=`
    <div class="app-shell" style="--project-color: var(--accent)" data-selected="network">
      <canvas class="starfield" id="starfield" aria-hidden="true"></canvas>

      <header class="topbar">
        <button type="button" class="brand-button" data-select="network" aria-label="Show Peaceful Vanilla Network overview">
          <img class="brand-mark" src="${q(C.icon)}" alt="" />
          <span class="brand-copy">
            <span class="brand-title">Peaceful Vanilla</span>
            <span class="brand-subtitle">Network</span>
          </span>
        </button>
        <nav class="mini-nav" aria-label="Network projects">
          ${rt()}
        </nav>
        <p class="top-kicker">${g(C.tagline)}</p>
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
            ${lt()}
            <button type="button" class="core-button" data-select="network" aria-label="Show network overview">
              <span class="core-aura" aria-hidden="true"></span>
              <img src="${q(C.icon)}" alt="" />
              <span class="core-label">
                <strong>Peaceful Vanilla</strong>
                <span>Network core</span>
              </span>
            </button>
            <div class="project-layer" id="project-layer">
              ${ct()}
            </div>
          </div>

          <div class="drag-hint" aria-hidden="true">Click a planet or use arrow keys</div>
          <div class="proof-rail" aria-label="Network proof points">${U()}</div>
        </section>

        <aside class="detail-panel" id="detail-panel" aria-live="polite">
          ${_()}
        </aside>
      </main>

      <footer class="footer-note">Static GitHub Pages build - no backend</footer>
    </div>
  `}function N(t){w=t;const a=O(w),n=document.querySelector(".app-shell"),o=document.querySelector("#detail-panel"),c=a?.color??"#ff9500";n?.setAttribute("data-selected",w),n?.style.setProperty("--project-color",c),o?.style.setProperty("--project-color",c),document.querySelectorAll("[data-select]").forEach(s=>{const m=s.dataset.select===w;s.classList.toggle("is-active",m),s instanceof HTMLButtonElement&&s.classList.contains("project-node")&&(s.setAttribute("aria-pressed",String(m)),s.classList.remove("is-dimmed"))}),document.querySelectorAll("[data-ring]").forEach(s=>{const m=s.dataset.ring===w;s.classList.toggle("is-active",m),s.style.setProperty("--project-color",c)}),document.querySelectorAll("[data-connector]").forEach(s=>{const m=s.dataset.connector===w;s.classList.toggle("is-active",m)}),o&&(o.innerHTML=_())}function Z(t){const n=(V.indexOf(w)+t+V.length)%V.length,o=V[n];o&&N(o)}function ft(){document.addEventListener("click",a=>{const o=(a.target instanceof Element?a.target.closest("[data-select]"):null)?.dataset.select;o&&V.includes(o)&&N(o)}),document.querySelector("#orbit-map")?.addEventListener("keydown",a=>{(a.key==="ArrowRight"||a.key==="ArrowDown")&&(a.preventDefault(),Z(1)),(a.key==="ArrowLeft"||a.key==="ArrowUp")&&(a.preventDefault(),Z(-1)),(a.key==="Escape"||a.key==="Home")&&(a.preventDefault(),N("network"))})}function ht(){const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches,a=document.querySelector("#orbit-map"),n={active:!1,x:0,y:0};function o(e,r,d){return Math.min(Math.max(e,r),d)}function c(e,r,d,f){const p=e.width/2,u=e.height/2;if(r>e.width+16&&(e.x=o(e.x,p+8,r-p-8)),d>e.height+16){const i=u+8+f.top,x=d-u-8-f.bottom;e.y=i<=x?o(e.y,i,x):d/2}}function s(e,r,d){if(r<760&&e.project.id==="hytale")return;const f=document.querySelector(".core-button"),v=(f?.offsetWidth??Math.min(r,d)*.24)/2,p=Math.max(e.width,e.height)/2,u=r<760&&e.project.id===w,i=v+p+(u?18:90),x=r/2,b=d/2;let h=e.x-x,M=e.y-b,y=Math.hypot(h,M);if(y<.001&&(h=Math.cos(e.project.initialAngle),M=Math.sin(e.project.initialAngle),y=1),y<i){const S=i-y;e.x+=h/y*S,e.y+=M/y*S}const l=(f?.offsetWidth??Math.min(r,d)*.24)+164,k=(f?.offsetHeight??Math.min(r,d)*.24)+126,$=l/2+e.width/2-Math.abs(h),A=k/2+e.height/2-Math.abs(M);$>0&&A>0&&(Math.abs(h)>v*.22||$<A?e.x+=(h>=0?1:-1)*$:e.y+=(M>=0?1:-1)*A)}function m(e,r,d,f){for(let u=0;u<8;u+=1){for(const i of e)s(i,r,d),c(i,r,d,f);for(let i=0;i<e.length;i+=1)for(let x=i+1;x<e.length;x+=1){const b=e[i],h=e[x];if(!b||!h)continue;let M=h.x-b.x,y=h.y-b.y;if(Math.hypot(M,y)<.001){const $=i/Math.max(e.length,1)*Math.PI*2;M=Math.cos($),y=Math.sin($)}const l=b.width/2+h.width/2+24-Math.abs(M),k=b.height/2+h.height/2+24-Math.abs(y);if(l>0&&k>0){const $=b.project.id===w||h.project.id===w,A=!$&&(b.x>r*.62&&h.x>r*.62||b.x<r*.38&&h.x<r*.38);if($||!A&&l<k){const S=M>=0?1:-1,R=b.project.id===w?.08:1.08,H=h.project.id===w?.08:1.08;b.x-=S*l*R,h.x+=S*l*H}else{const S=y>=0?1:-1;b.y-=S*(k/2),h.y+=S*(k/2)}}}for(const i of e)s(i,r,d),c(i,r,d,f)}const p=e.find(u=>u.project.id===w);if(p)for(const u of e){if(u===p)continue;const i=u.x-p.x,x=u.y-p.y,b=u.width/2+p.width/2+30-Math.abs(i),h=u.height/2+p.height/2+30-Math.abs(x),M=Math.abs(i)<r*.28&&Math.abs(x)<d*.24;if(b>0&&h>0||M){const y=p.x>r/2?-1:1;u.x=p.x+y*(u.width/2+p.width/2+34),s(u,r,d),c(u,r,d,f)}}}window.addEventListener("pointermove",e=>{n.active=!0,n.x=e.clientX,n.y=e.clientY}),window.addEventListener("pointerleave",()=>{n.active=!1});function P(e){if(!a)return;const r=w==="network"?1:.18,d=a.getBoundingClientRect(),f=Math.max(d.width,1),v=Math.max(d.height,1),p=document.querySelector(".hero-copy"),u=document.querySelector(".detail-panel"),i=p?.getBoundingClientRect(),x=u?.getBoundingClientRect(),b=window.innerWidth<760?{top:i?o(i.bottom-d.top+10,0,v*.34):0,bottom:x?o(d.bottom-x.top+10,0,v*.34):0}:{top:0,bottom:0},h=f<760?.84:1,M=Math.min(f,v)*.01*h,y=[];L.forEach(l=>{const k=document.querySelector(`[data-project-id="${l.id}"]`),$=document.querySelector(`[data-ring="${l.id}"]`);if(!k)return;const A=t?l.initialAngle:l.initialAngle+e*l.orbitSpeed*r,S=f<760,R=l.orbitRadius*M,H=it[l.id],X=t?0:Math.sin(e*l.orbitSpeed*1.7+l.initialAngle)*2.2,Y=S?(H.x+Math.cos(l.initialAngle)*X)/100*f:f/2+Math.cos(A)*R,E=S?(H.y+Math.sin(l.initialAngle)*X)/100*v:v/2+Math.sin(A)*R,B=w===l.id?S?1.04:1.18:1,I=w===l.id?S?44:64:38,J=(k.offsetWidth||120)*B+I,Q=(k.offsetHeight||148)*B+I;let W=Y,T=E;if(n.active&&!t){const tt=n.x-d.left,et=n.y-d.top,j=tt-Y,z=et-E,F=Math.hypot(j,z),at=Math.max(180,Math.min(f,v)*.42),D=Math.max(0,1-F/at)**2*Math.min(32,Math.min(f,v)*.045);F>.001&&(W+=j/F*D,T+=z/F*D)}$&&($.setAttribute("rx",(R/f*900).toFixed(1)),$.setAttribute("ry",(R/v*650).toFixed(1))),y.push({button:k,project:l,x:W,y:T,width:J,height:Q,baseX:Y,baseY:E})}),m(y,f,v,b);for(const l of y){const k=l.x/f*100,$=l.y/v*100,A=document.querySelector(`[data-connector="${l.project.id}"]`);l.button.style.setProperty("--x",`${k.toFixed(3)}%`),l.button.style.setProperty("--y",`${$.toFixed(3)}%`),A&&(A.setAttribute("x1","450"),A.setAttribute("y1","325"),A.setAttribute("x2",(k/100*900).toFixed(1)),A.setAttribute("y2",($/100*650).toFixed(1)))}window.requestAnimationFrame(P)}window.requestAnimationFrame(P)}function mt(t){return Array.from({length:t},()=>({x:Math.random(),y:Math.random(),size:.45+Math.random()*1.9,depth:.25+Math.random()*1.6,tone:Math.random(),twinkle:Math.random()*Math.PI*2}))}function bt(){const t=document.querySelector("#starfield"),a=t?.getContext("2d");if(!t||!a)return;const n=t,o=a,c=window.matchMedia("(prefers-reduced-motion: reduce)").matches,s=mt(190);let m=0,P=0,e=.5,r=.5;function d(){const p=Math.min(window.devicePixelRatio||1,2);m=window.innerWidth,P=window.innerHeight,n.width=Math.floor(m*p),n.height=Math.floor(P*p),n.style.width=`${m}px`,n.style.height=`${P}px`,o.setTransform(p,0,0,p,0,0)}function f(p){o.clearRect(0,0,m,P);const u=o.createRadialGradient(m*.5,P*.45,0,m*.5,P*.45,m*.72);u.addColorStop(0,"rgba(255, 149, 0, 0.13)"),u.addColorStop(.34,"rgba(80, 124, 190, 0.06)"),u.addColorStop(1,"rgba(3, 5, 10, 0)"),o.fillStyle=u,o.fillRect(0,0,m,P);for(const i of s){const x=(e-.5)*i.depth*34,b=(r-.5)*i.depth*22,h=c?.75:.55+Math.sin(p*.0012+i.twinkle)*.28,M=i.x*m+x,y=i.y*P+b,l=i.tone>.82?"255, 149, 0":i.tone>.66?"80, 124, 190":"247, 249, 252";o.beginPath(),o.fillStyle=`rgba(${l}, ${Math.max(.18,h)})`,o.arc(M,y,i.size,0,Math.PI*2),o.fill()}}function v(p){f(p),window.requestAnimationFrame(v)}if(window.addEventListener("resize",d),window.addEventListener("pointermove",p=>{e=p.clientX/Math.max(window.innerWidth,1),r=p.clientY/Math.max(window.innerHeight,1)}),d(),c){f(0);return}window.requestAnimationFrame(v)}ut();ft();N("network");ht();bt();
//# sourceMappingURL=app-HM9GIh6H.js.map
