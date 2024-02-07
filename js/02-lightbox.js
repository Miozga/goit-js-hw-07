import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.innerHTML = galleryMarkup;

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

galleryContainer.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();
  const isGalleryImage = event.target.classList.contains("gallery__image");
  if (!isGalleryImage) {
    return;
  }

  const source = event.target.dataset.source;
  openModalWithImage(source);
}

function openModalWithImage(src) {
  const instance = basicLightbox.create(`
    <img src="${src}" width="800" height="600">
  `);

  instance.show();


  window.addEventListener("keydown", onEscKeyPress);

  function onEscKeyPress(event) {
    if (event.key === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscKeyPress);
  }
}
