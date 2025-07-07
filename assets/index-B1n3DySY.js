(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const t of e.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function o(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(r){if(r.ep)return;r.ep=!0;const e=o(r);fetch(r.href,e)}})();document.querySelector("#app").innerHTML=`
  <div class="sketchfab-container">
    <iframe
      src="https://sketchfab.com/models/291020f3ba7b4d6fa6393edf1a1921b2/embed?autostart=1&preload=1"
      title="Traço Livre – Caixa Interativa"
      frameborder="0"
      allowfullscreen
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
      allow="autoplay; fullscreen; xr-spatial-tracking"
      xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share
      class="sketchfab-embed"
    ></iframe>
    <div class="overlay">
      <!-- Info removido conforme solicitado -->
      <!-- Botões removidos conforme solicitado -->
    </div>
  </div>
`;const l="/logo.svg",c=`
  <span class="brand-logo-bg">
    <img src="${l}" alt="Logo da Marca" class="brand-logo" />
  </span>
`;document.body.insertAdjacentHTML("beforeend",c);const a=`
  <a href="/vr.html" class="vr-btn" title="Abrir em VR" target="_blank" rel="noopener">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="24" fill="#020873" fill-opacity="0.95"/>
      <path d="M12 28V20C12 18.8954 12.8954 18 14 18H34C35.1046 18 36 18.8954 36 20V28C36 29.1046 35.1046 30 34 30H32C30.3431 30 29 28.6569 29 27V27C29 28.6569 27.6569 30 26 30H22C20.3431 30 19 28.6569 19 27V27C19 28.6569 17.6569 30 16 30H14C12.8954 30 12 29.1046 12 28Z" stroke="#fff" stroke-width="2"/>
      <circle cx="18" cy="24" r="2" fill="#fff"/>
      <circle cx="30" cy="24" r="2" fill="#fff"/>
    </svg>
  </a>
`;document.body.insertAdjacentHTML("beforeend",a);
