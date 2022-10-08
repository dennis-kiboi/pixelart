const unsplashAPI = "https://api.unsplash.com/photos/?client_id=fN08An0QrEjLNjPclbs5kFfPlXNu8neGbbQ-mBDkxF0";
const galleryDiv = document.getElementById('row');

function renderImage(imageData) {
  let image = document.createElement('div');
  image.className = 'col-lg-4 col-md-6 col-6 mb-4'
  image.innerHTML = `
    <div class="card">
      <img src=${imageData.urls.small} alt="">
    </div>
  `

  galleryDiv.appendChild(image);
}

window.addEventListener('DOMContentLoaded', () => {
  
  fetch(unsplashAPI)
  .then(res => res.json())
  .then(data => {
    data.forEach(imageData => renderImage(imageData));
    
    const masonry = new Masonry(galleryDiv, {
      percentPosition: true
    });

    imagesLoaded(galleryDiv).on( 'progress', function() {
      // layout Masonry after each image loads
      masonry.layout();
    });
  });

});
