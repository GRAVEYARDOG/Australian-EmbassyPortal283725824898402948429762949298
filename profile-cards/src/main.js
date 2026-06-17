// Import global stylesheets for Vite compilation
import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('[id^="card-"]');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxStatusContainer = document.getElementById('lightbox-status-container');
  const lightboxClose = document.getElementById('lightbox-close');

  if (!lightboxModal || !lightboxImg || !lightboxTitle || !lightboxStatusContainer) {
    return;
  }

  cards.forEach(card => {
    const imgEntity = card.querySelector('img');
    const nameEntity = card.querySelector('h2');
    
    if (!imgEntity || !nameEntity) return;

    // Check if verification succeeded or failed
    const isFailed = card.querySelector('.text-red-500') !== null;

    imgEntity.addEventListener('click', (e) => {
      e.stopPropagation();
      
      const imgSrc = imgEntity.src;
      const personName = nameEntity.textContent.trim();

      // Configure lightbox content
      lightboxImg.src = imgSrc;
      lightboxImg.alt = personName;
      lightboxTitle.textContent = personName;

      // Class settings for status label
      lightboxStatusContainer.className = 'mt-2 text-xs font-mono font-semibold tracking-widest px-3.5 py-1 rounded-full uppercase flex items-center gap-1.5';
      
      if (isFailed) {
        lightboxStatusContainer.classList.add('bg-[#3c1414]/50', 'text-red-400', 'border', 'border-red-900/40');
        lightboxStatusContainer.innerHTML = `
          <svg class="w-3.5 h-3.5 text-red-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          Registry Failed
        `;
      } else {
        lightboxStatusContainer.classList.add('bg-emerald-500/10', 'text-emerald-400', 'border', 'border-emerald-500/20');
        lightboxStatusContainer.innerHTML = `
          <span class="flex items-center -space-x-1 text-emerald-400">
            <svg class="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <svg class="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
          Verified Integrity
        `;
      }

      // Show Lightbox with smooth CSS opacity transition
      lightboxModal.classList.remove('opacity-0', 'pointer-events-none');
      lightboxModal.classList.add('opacity-100');
      document.body.classList.add('overflow-hidden'); // Disable background scrolling
    });
  });

  // Helper closing handlers
  const closeLightbox = () => {
    lightboxModal.classList.add('opacity-0', 'pointer-events-none');
    lightboxModal.classList.remove('opacity-100');
    document.body.classList.remove('overflow-hidden');
    // Clear image src source after fade out to avoid momentary glitch
    setTimeout(() => {
      if (lightboxModal.classList.contains('opacity-0')) {
        lightboxImg.src = '';
      }
    }, 300);
  };

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });
});

