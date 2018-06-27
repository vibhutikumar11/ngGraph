$(document).ready(function(){   
      var t;
      var start = $('#sliderControl').find('.active').attr('data-interval');
      t = setTimeout("$('#sliderControl').carousel({interval: 5000});", start-5000);
  
      $('#sliderControl').on('slid.bs.carousel', function () {  
          clearTimeout(t);  
          var duration = $(this).find('.active').attr('data-interval');
          
          $('#sliderControl').carousel('pause');
          t = setTimeout("$('#sliderControl').carousel();", duration-5000);
      });
  
      $('.carousel-control.right').on('click', function(){
          clearTimeout(t); 
      });
  
      $('.carousel-control.left').on('click', function(){
          clearTimeout(t);        
      });

  
  });   