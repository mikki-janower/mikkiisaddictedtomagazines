$(document).ready(function () {
  (function($) {
    // Init Skrollr
    var s = skrollr.init({
      render: function(data) {
        //Debugging - Log the current scroll position.
        //console.log(data.curTop);
      }
    });
  })(jQuery);

AOS.init({
    container: ".menu"
});
$('.menu').scroll(function (){
    AOS.refresh();
    });
    
document.addEventListener("scroll", function () {
  var pixels = window.pageYOffset;
    $('.arrow').click(function(){
    if (pixels > 250) {
        $('html,body').stop(true, false).animate({ scrollTop: 0 }, pixels);
        $('.menu').css("opacity", "0");
        return false;
    } else{
        $("html, body").animate({ scrollTop: $(document).height() }, 11000);
        return false;
    } 
  });
});
    
document.addEventListener("scroll", function () {
  var pixels = window.pageYOffset;
    var plus=false;
    if (pixels > 250) {
        $('.plus').click(function (){
            if (plus==false){
                console.log(plus);
                $('.plus').css("transition", "linear .15s");
                $('.plus').css("transform", "rotate(45deg)");
                $('.menu').css("opacity", "1");
                plus=true;
            } else{
                $('.plus').css("transition", "linear .15s");
                $('.plus').css("transform", "rotate(0deg)");
                $('.menu').css("opacity", "0");
                plus=false;
            }
        });
    }  
});

//scroll back to top on link click
 $('.toplink').click(function(){
       var pixels = window.pageYOffset;
        $('html,body').stop(true, false).animate({ scrollTop: 0 }, pixels);
        $('.menu').css("opacity", "0");
});
    
 var about=false;
 $('.aboutlink').click(function(){
     if (about==false){
         $('.about').css("opacity", "1");
         
         $('.aboutlink').css("transform", "skewX(-15deg)");
         $('.aboutlink').css("filter", "blur(.025em)");
         
         $('.recslink').css("transform", "skewX(0deg)");
         $('.recslink').css("filter", "blur(0em)");
        $('.index').css("opacity", "0"); 
         $('.indexlink').css("transform", "skewX(0deg)");
         $('.indexlink').css("filter", "blur(0em)");
         about=true;
     }else{
         $('.about').css("opacity", "0"); 
         $('.aboutlink').css("transform", "skewX(0deg)");
         $('.aboutlink').css("filter", "blur(0em)");
         about=false;
     }   
});

 var index=false;
 $('.indexlink').click(function(){
     if (index==false){
         $('.index').css("opacity", "1");
         
         $('.indexlink').css("transform", "skewX(-15deg)");
         $('.indexlink').css("filter", "blur(.025em)");
         
         $('.recs').css("opacity", "0"); 
         $('.recslink').css("transform", "skewX(0deg)");
         $('.recslink').css("filter", "blur(0em)");
          $('.about').css("opacity", "0"); 
         $('.aboutlink').css("transform", "skewX(0deg)");
         $('.aboutlink').css("filter", "blur(0em)");
         
         //make index scrollable
         $('.menu').css("overflow-y", "scroll");
         index=true;
     }else{
         $('.index').css("opacity", "0"); 
         $('.indexlink').css("transform", "skewX(0deg)");
         $('.indexlink').css("filter", "blur(0em)");
         
         $('.menu').css("overflow-y", "hidden");
         index=false;
     }   
});

var recs=false;
 $('.recslink').click(function(){
     if (recs==false){
        $('.about').css("opacity", "0");
         $('.aboutlink').css("transform", "skewX(0deg)");
         $('.aboutlink').css("filter", "blur(0em)");
         
         $('.index').css("opacity", "0");
         $('.indexlink').css("transform", "skewX(0deg)");
         $('.indexlink').css("filter", "blur(0em)");

         recs=true;
     }else{
         recs=false;
     }   
});
    
//-------------------------------media query; arrow opacity----------------------------------//
function checkWidth() {
     var windowSize = $(window).width();
     var pixels = window.pageYOffset;

        if (windowSize <= 700) {
            
            if (pixels>150){
                
            }
        }
    }

    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
    
//-------------------------------document closing bracket; don't touch----------------------------------------//
});
