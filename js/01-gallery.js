import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const containerGalleryEl = document.querySelector(".gallery");


 galleryItems.map(el => {
    containerGalleryEl.insertAdjacentHTML(
      'afterbegin',
      `<div class="gallery__item">
      <a class="gallery__link" href="${el.original}">
        <img
          class="gallery__image"
          src="${el.preview}"
          data-source="${el.original}"
          alt="${el.description}"
        />
      </a>
    </div>`,
    );
  });

  containerGalleryEl.addEventListener("click", onImageClick);

  function onImageClick (event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
      return;
    };

    const instance = basicLightbox.create(
     `<img src="${event.target.dataset.source}" width="800" height="600">`
    )
    
    console.log(event.target.dataset.source);
    instance.show(() => console.log('lightbox now visible'));
    containerGalleryEl.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close(() => console.log('lightbox not visible anymore'))
    }
  })

  };

 