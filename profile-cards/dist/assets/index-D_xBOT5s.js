(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const c=document.querySelectorAll('[id^="card-"]'),o=document.getElementById("lightbox-modal"),s=document.getElementById("lightbox-img"),i=document.getElementById("lightbox-title"),e=document.getElementById("lightbox-status-container"),t=document.getElementById("lightbox-close");if(!o||!s||!i||!e)return;c.forEach(r=>{const l=r.querySelector("img"),d=r.querySelector("h2");if(!l||!d)return;const u=r.querySelector(".text-red-500")!==null;l.addEventListener("click",m=>{m.stopPropagation();const f=l.src,a=d.textContent.trim();s.src=f,s.alt=a,i.textContent=a,e.className="mt-2 text-xs font-mono font-semibold tracking-widest px-3.5 py-1 rounded-full uppercase flex items-center gap-1.5",u?(e.classList.add("bg-[#3c1414]/50","text-red-400","border","border-red-900/40"),e.innerHTML=`
          <svg class="w-3.5 h-3.5 text-red-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          Registry Failed
        `):(e.classList.add("bg-emerald-500/10","text-emerald-400","border","border-emerald-500/20"),e.innerHTML=`
          <span class="flex items-center -space-x-1 text-emerald-400">
            <svg class="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <svg class="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
          Verified Integrity
        `),o.classList.remove("opacity-0","pointer-events-none"),o.classList.add("opacity-100"),document.body.classList.add("overflow-hidden")})});const n=()=>{o.classList.add("opacity-0","pointer-events-none"),o.classList.remove("opacity-100"),document.body.classList.remove("overflow-hidden"),setTimeout(()=>{o.classList.contains("opacity-0")&&(s.src="")},300)};t.addEventListener("click",n),o.addEventListener("click",r=>{r.target===o&&n()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&n()})});
