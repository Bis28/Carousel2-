var slideIndex = 0;
var sliderTimer = 0;
var dots = document.querySelectorAll(".dot");
var slides = document.querySelectorAll(".mySlides");

showSlides(slideIndex);

dots.forEach(function(dot, index){
	dot.addEventListener('click', function(event){
        document.querySelector('.dot.active').classList.remove('active')
       	slides.forEach(function(slide){
        	slide.classList.add('hidden');
        });
        slides[index].classList.remove('hidden');  
  		dots[index].classList.add('active');
        
        clearTimeout(sliderTimer); 
        sliderTimer = setTimeout(function(){
        	showSlides(index);
        }, 2000);
    });
})

function showSlides(newSlideIndex) { 
  slideIndex = isNaN(newSlideIndex) ? slideIndex: newSlideIndex;
  slides.forEach(function(slide){
      slide.classList.add('hidden');
  })
 
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  dots.forEach(function(dot){
    dot.classList.remove('active');
  })
  slides[slideIndex-1].classList.remove('hidden');  
  dots[slideIndex-1].className += " active";
  sliderTimer = setTimeout(showSlides, 4000);
}
