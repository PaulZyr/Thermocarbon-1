$(function(){

    let $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
        $hamburger.toggleClass("is-active");
    }); 

});

// Owl carousel 
// $('.interface_slider').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     items:1,
//     navText : ['<img src="img/prev.svg">','<img src="img/next.svg">'],
//   })
  
  
  // let system_step_carousel = $('.system__steps');
  // let system_step_carousel =  document.querySelector('.system__steps'); 
  // let system_step_settings = {
  //   // loop:true,
  //   margin:0,
  //   nav:false,
  //   thumbs: false,
  //   autoWidth:true,
  //   // stagePadding: 50,
  //   items:2
  // };
  
  // system_step_carousel.owlCarousel(system_step_settings);
  // if(window.innerWidth < 767){
  //   system_step_carousel.owlCarousel(system_step_settings);
  // }
  
  //   //Resize slider
  //   $(window).on('resize',function (e) {
  //     if(window.innerWidth > 767){
  //       system_step_carousel.trigger('destroy.owl.carousel');
  //     }
  //     else{
  //       system_step_carousel.owlCarousel(system_step_settings);
  //     }
  //   });

    new SlimSelect({
      select: '#slim-select',
      showSearch: false,
    })