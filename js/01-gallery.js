import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
galleryContainer.innerHTML = galleryItems
  .map(
    (item) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
            />
        </a>
    </li>
`
  )
  .join("");

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) return;

  const imageSrc = event.target.dataset.source;
  openModal(imageSrc);
});
function openModal(imageSrc) {
  const instance = basicLightbox.create(`
      <img src="${imageSrc}" width="800" height="600">
  `);

  instance.show();

  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape") {
        instance.close();
      }
    },
    { once: true }
  );
}
