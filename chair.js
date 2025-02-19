function replaceActiveImage(clickedImage) {
    let activeImage = document.getElementById("active-img");
    let tempSrc = activeImage.src;
    activeImage.src = clickedImage.src;
    clickedImage.src = tempSrc;
}