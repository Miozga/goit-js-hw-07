import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.innerHTML = galleryMarkup;

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
        <li>
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
    `
    )
    .join("");
}
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionDelay: 250,
    captionsData: "alt",
  });
});
