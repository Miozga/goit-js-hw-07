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


  document.addEventListener(
    "keydown",

      const instance = basicLightbox.create(`
          <div class="modal">
              <p>A custom modal that has been styled independently. It's not part of basicLightbox, but perfectly shows its flexibility.</p>
              <input placeholder="Type something">
              <a href="#" class="close-modal">Close</a>
          </div>
      `, {
          onShow: (instance) => {
              instance.element().querySelector('.close-modal').onclick = instance.close;
          }
      });

      instance.show();


  );

