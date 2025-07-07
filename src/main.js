import './style.css';

// Substitua pelo link do seu modelo Sketchfab
const sketchfabUrl = 'https://sketchfab.com/models/7w7pAfrtLx6w4Qw6Qw6Qw6Qw6Qw6Qw6Q/embed';

document.querySelector('#app').innerHTML = `
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
`;

// Adiciona a logo da marca no canto superior esquerdo do viewport
const logoUrl = 'logo.svg'; // Caminho relativo para funcionar no GitHub Pages
const logoHTML = `
  <span class="brand-logo-bg">
    <img src="${logoUrl}" alt="Logo da Marca" class="brand-logo" />
  </span>
`;
document.body.insertAdjacentHTML('beforeend', logoHTML);

// Adiciona botão de VR no canto inferior direito
const vrButtonHTML = `
  <a href="vr.html" class="vr-btn" title="Abrir em VR">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="24" fill="#020873" fill-opacity="0.95"/>
      <path d="M12 28V20C12 18.8954 12.8954 18 14 18H34C35.1046 18 36 18.8954 36 20V28C36 29.1046 35.1046 30 34 30H32C30.3431 30 29 28.6569 29 27V27C29 28.6569 27.6569 30 26 30H22C20.3431 30 19 28.6569 19 27V27C19 28.6569 17.6569 30 16 30H14C12.8954 30 12 29.1046 12 28Z" stroke="#fff" stroke-width="2"/>
      <circle cx="18" cy="24" r="2" fill="#fff"/>
      <circle cx="30" cy="24" r="2" fill="#fff"/>
    </svg>
  </a>
`;
document.body.insertAdjacentHTML('beforeend', vrButtonHTML);

// Garante que o botão VR sempre abre na mesma aba, mesmo se o navegador tentar forçar nova guia
(function fixVrBtn() {
  const vrBtn = document.querySelector('.vr-btn');
  if (vrBtn) {
    vrBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = vrBtn.getAttribute('href');
    });
  } else {
    setTimeout(fixVrBtn, 50);
  }
})();

