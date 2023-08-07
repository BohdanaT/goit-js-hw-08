import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';


const galleryItemsRef = document.querySelector('.gallery');

const createGalleryMarkup = galleryItems.map(
        ({ preview, original, description }) =>
            `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image"
                    src="${preview}" 
                    alt="${description}" />
                </a>
            </li>`
        ).join('');
    
galleryItemsRef.innerHTML = createGalleryMarkup;


new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
