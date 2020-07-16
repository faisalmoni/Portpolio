$(function(){
//    COUNTER JS

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

 //    wow. js

 var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0, 
    mobile: true, 
    live: true, 
    callback: function (box) {
        
    },
    scrollContainer: null, 
    resetAnimation: true, 
});
wow.init()

 // FILTER JS
 var mixer = mixitup('.filter');

  //    portfolio slide
  $(".testi_slide").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
     responsive: [
        
         {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
               
            }
},
         {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
               
            }
},
                    

       
       

]

}); //    portfolio slide
$(".logo_active").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
   
     responsive: [
        
         {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
               
            }
},
         {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
               
            }
},
                    

       
       

]

});


});