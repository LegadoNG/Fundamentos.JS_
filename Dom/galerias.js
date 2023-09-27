const container = document.querySelector('.container');
const image = document.querySelector('#image');

function setImage(e){
    const ImageSrc = e.target.src;
    image.src = ImageSrc
}

container.addEventListener('click', setImage);