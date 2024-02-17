import { galleryItems } from "./gallery-items.js";
function renderGalleryItems(items) {
  const galleryContainer = document.querySelector(".gallery");
  const galleryMarkup = items
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
    )
    .join("");

  galleryContainer.innerHTML = galleryMarkup;
}

renderGalleryItems(galleryItems);

document
  .querySelector(".gallery")
  .addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const imageSrc = event.target.dataset.source;
  openModal(imageSrc);
}

function openModal(imageSrc) {
  let closeOnEsc; // Przenieś deklarację na zewnątrz bloku onShow

  const instance = basicLightbox.create(
    `
      <div style="text-align: center; padding: 20px;">
          <img src="${imageSrc}" width="800" height="600" style="display:block; margin:auto;">
          <button class="modal-close" style="margin-top: 20px;">Close</button>
      </div>
  `,
    {
      onShow: (instance) => {
        // Definicja funkcji closeOnEsc wewnątrz onShow, ale zadeklarowana wcześniej
        closeOnEsc = (e) => {
          if (e.key === "Escape") {
            instance.close();
          }
        };
        document.addEventListener("keydown", closeOnEsc);

        // Przypisanie akcji zamknięcia do przycisku Close
        instance.element().querySelector(".modal-close").onclick = () =>
          instance.close();
      },
      onClose: () => {
        // Usunięcie nasłuchiwania na zdarzenie klawiatury po zamknięciu modalu
        if (closeOnEsc) {
          document.removeEventListener("keydown", closeOnEsc);
        }
      },
    }
  );

  instance.show();
}
