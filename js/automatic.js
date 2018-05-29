var slideIndex = 0;
mostrarSlides();

function mostrarSlides(){
    var i;
    var slides = document.getElementsByClassName("miSlide");
    for(i=0;i< slides.length;i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length){slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(mostrarSlides,5000);
}