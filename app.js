const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const imageGallery = document.getElementById('image-gallery');

searchButton.addEventListener('click', async () => {
    const query = searchInput.value;
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=bm8L38vSX83ZzIVsYlggEdpWIYg0npbvyt9tDc-Ly30`);
    const data = await response.json();

    imageGallery.innerHTML = '';

    data.results.forEach(result => {
        const image = document.createElement('img');
        image.src = result.urls.regular;
        image.alt = result.alt_description;
        imageGallery.appendChild(image);
    });
});