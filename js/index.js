const unsplashAPI = "https://api.unsplash.com/photos/?client_id=fN08An0QrEjLNjPclbs5kFfPlXNu8neGbbQ-mBDkxF0";
const galleryDiv = document.getElementById('row');

function renderImage(imageData) {
  let image = document.createElement('div');
  image.className = 'col-lg-4 col-md-6 col-6'
  image.innerHTML = `
    <div class="card">
      <img src=${imageData.urls.small} alt="">
    </div>
  `

  galleryDiv.appendChild(image);
}

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  fetch(unsplashAPI)
  .then(res => res.json())
  .then(data => {
    data.forEach(imageData => renderImage(imageData))
  });
});
