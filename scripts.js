document.addEventListener("DOMContentLoaded", function () {
  const iframe = document.querySelector("iframe");
  if (iframe) {
    iframe.addEventListener("error", function () {
      console.error("Video embed tidak dapat dimuat.");
      alert("Video embed tidak dapat ditampilkan. Periksa URL atau sumber video.");
    });
  } else {
    console.warn("Elemen iframe untuk video embed tidak ditemukan.");
  }
});

 // Zoom untuk semua gambar kecuali parallax
const images = document.querySelectorAll('img:not(.parallax)');
const modal = document.createElement('div');
modal.classList.add('image-modal');
modal.innerHTML = `
    <div class="modal-content">
        <img src="" alt="Zoomed Image">
    </div>
`;
document.body.appendChild(modal);

images.forEach(img => {
    img.addEventListener('click', () => {
        const modalImage = modal.querySelector('img');
        modalImage.src = img.src; // Mengatur sumber gambar yang di-zoom
        modal.style.display = 'flex'; // Tampilkan modal
    });
});

modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.tagName === 'IMG') {
        modal.style.display = 'none'; // Sembunyikan modal saat klik di luar gambar
    }
});
