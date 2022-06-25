import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const containerGalleryEl = document.querySelector(".gallery");


//  galleryItems.map(el => {
//     containerGalleryEl.insertAdjacentHTML(
//       'afterbegin',
//       `<div class="gallery__item">
//       <a class="gallery__link" href="${el.original}">
//         <img
//           class="gallery__image"
//           src="${el.preview}"
//           data-source="${el.original}"
//           alt="${el.description}"
//         />
//       </a>
//     </div>`,
//     );
//   });

  const markup = galleryItems
  .map((el) => `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>`)
  .join("");


  containerGalleryEl.insertAdjacentHTML("afterbegin", markup);


  containerGalleryEl.addEventListener("click", onImageClick);

  function onImageClick (event) {
    

    if (event.target.nodeName !== "IMG") {
      return;
    };

    const instance = basicLightbox.create(
     `<img src="${event.target.dataset.source}" width="800" height="600">`
    )
    
    console.log(event.target.dataset.source);
    instance.show();
    containerGalleryEl.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  })
event.preventDefault();
  };

 