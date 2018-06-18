$(document).ready(function(){   
      var t;
      var start = $('#myCarousel').find('.active').attr('data-interval');
      t = setTimeout("$('#myCarousel').carousel({interval: 5000});", start-5000);
  
      $('#myCarousel').on('slid.bs.carousel', function () {  
          clearTimeout(t);  
          var duration = $(this).find('.active').attr('data-interval');
          
          $('#myCarousel').carousel('pause');
          t = setTimeout("$('#myCarousel').carousel();", duration-5000);
      })
  
      $('.carousel-control.right').on('click', function(){
        
          clearTimeout(t); 
      });
  
      $('.carousel-control.left').on('click', function(){
        
          clearTimeout(t);   
         
      });


    


  
  });   