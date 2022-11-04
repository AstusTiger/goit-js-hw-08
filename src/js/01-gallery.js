// Add imports above this line
import SimpleLightbox from 'simplelightbox/src/simple-lightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryMarkUp = galleryItems.reduce((acc, item) => {
  return (
    acc +
    `<a class='gallery__item' href=${item.original}><img class='gallery__image' src=${item.preview} alt=${item.description}/></a>`
  );
}, '');
gallery.insertAdjacentHTML('afterbegin', galleryMarkUp);

let lightbox = new SimpleLightbox('.gallery a', {
  /* options */
});
