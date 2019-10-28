
// API CALL

$.getJSON ('https://api.themoviedb.org/3/movie/upcoming?api_key=3791e23652e0c8a6dd7a2eea7435a413')
     
  .then(function(response) {
      
      var $carousel = $('#carouselExampleIndicators');
      var $carouselInner = $carousel.find('.carousel-inner');

      response.results.forEach(function(movie, i) {
       
        var template = '';

        if(i === 0) {
          template = '<div class="carousel-item active">';
        } else {
          template = '<div class="carousel-item">';
        }
        
        template += '<img src="https://image.tmdb.org/t/p/w500' + movie.backdrop_path + '">'; 
        template += '<div>';
        template += '<h2>' + movie.title + '</h2>';
        template += '<p style="max-width: 504px; margin: auto;">' 
                    + movie.overview.substring(0, 300) + '...' + '</p>';
        template += '<p>' + '&#11088;' + ' ' + Math.round(movie.vote_average) + '</p>';
        template += '</div>';
        template += '</div>';

        $carouselInner.append(template);
      })
      $carousel.carousel();  
  })

  // $('.carousel-control.left').click(function() {
  //   $('#myCarousel').carousel('prev');
  // });
  
  // $('.carousel-control.right').click(function() {
  //   $('#myCarousel').carousel('next');
  // });

// // SLIDESHOW 

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("movieSlide");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
  
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
