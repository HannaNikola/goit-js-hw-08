// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);





// import { galleryItems } from './gallery-items.js';
// // Change code below this line
// console.log(galleryItems);

// const imgEl = document.querySelector('.gallery');
// console.log(imgEl);

// const imagesList = galleryItems
//   .map(item => {
//     return ` <li class="gallery__item">
//    <a class="gallery__link" href="${item.original}">
//       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
//    </a>
// </li>
//         `;
//   })
//   .join('');

// imgEl.insertAdjacentHTML('beforeend', imagesList);

// imgEl.addEventListener('click', showPhoto);

// function showPhoto(event) {
//   event.preventDefault();
//   console.log(event.target.tagName);
//   if (event.target.tagName !== 'IMG') {
//     return item.original;
//   }
// }

// const lightbox = new SimpleLightbox('.gallery a ', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });
