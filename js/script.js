var slideIndex = 1;
mostrarSlides(slideIndex);

function masSlides(n){
    mostrarSlides(slideIndex += n);
}

function SlideActual(n){
    mostrarSlides(slideIndex = n);
}

function mostrarSlides(n){
    var i;
    var slides = document.getElementsByClassName("miSlide");
    var puntos = document.getElementsByClassName("punto");
    if(n  > slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slides.length}
    for(i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
   
    for(i=0; i < puntos.length; i++){
        puntos[i].className = puntos[i].className.replace(" activo", "");
      
    }
   
    
   
    slides[slideIndex-1].style.display = "block";  
    puntos[slideIndex-1].className += " activo";
}
