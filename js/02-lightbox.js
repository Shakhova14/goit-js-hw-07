import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const containerGalleryEl = document.querySelector(".gallery");


const galleryMarkup = galleryItems.map(el => {
    containerGalleryEl.insertAdjacentHTML(
      'afterbegin', `<a href="${el.original}"><img src="${el.preview}" alt="${el.description}" title=""/></a>`
    );
  });

  let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
  gallery.on('show.simplelightbox', galleryMarkup);
  
