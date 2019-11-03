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
    targetSelector:'.menu',
});
 $('.menu').scroll(function (){
    AOS.refresh();
    }); 
    
//------------------------------------------------------click on mobile
 $(document).click(function(event) { 

  if ( $(".children").is(":visible")) {
    $("ul.children").slideUp('slow');
  }

});
    
//----------------------------------------------------scroll on arrow click
document.addEventListener("scroll", function () {
  var pixels = window.pageYOffset;
    $('.arrow').click(function(){
        $('.menu').css("display", "none");
        $('.menu').css("opacity", "0");
    if (pixels > 250) {
        $('html,body').stop(true, false).animate({ scrollTop: 0 }, pixels);
        return false;
    } else{
        $("html, body").animate({ scrollTop: $(document).height() }, 11000);
        return false;
    } 
  });
});
    
//----------------------------------------------------progress bar
document.addEventListener("scroll", function () {
  var height = document.body.scrollHeight;
  var pixels = window.pageYOffset;
  $('.progress').css("margin-left", (pixels/height)*100 + '%');
});
    
//----------------------------------------------------open and close the menu
document.addEventListener("scroll", function () {
  var pixels = window.pageYOffset;
    var plus=false;
    if (pixels > 250) {
        $('.plus').on('click touchstart', function (){
            if (plus==false){
                console.log(plus);
                $('.plus').css("transition", "linear .15s");
                $('.plus').css("transform", "rotate(45deg)");

                $('.menu').css("visibility", "visible", 5000);
                $('.menu').css("opacity", "1");
                plus=true;
                
                //disable scroll on body
            } else{
                $('.plus').css("transition", "linear .15s");
                $('.plus').css("transform", "rotate(0deg)");
                $('.menu').css("visibility", "hidden");
                $('.menu').css("opacity", "0");
                
                //turn index off
                         $('.index').css("opacity", "0"); 
                         $('.indexlink').css("transform", "skewX(0deg)");
                         $('.indexlink').css("filter", "blur(0em)");

                         //$('.menu').css("overflow-y", "hidden");
                         index=false;
                //turn about off
                         $('.about').css("opacity", "0"); 
                         $('.aboutlink').css("transform", "skewX(0deg)");
                         $('.aboutlink').css("filter", "blur(0em)");
                         about=false;
                //scroll to top of menu div
                         $('.menu').stop(true, false).animate({ scrollTop: 0 });
                //re-enable scroll on body
                //reset plus
                plus=false;
            }
        });
    }  
});

//----------------------------------------------------scroll back to top on link click
 $('.toplink').on('click touchstart', function (){
       var pixels = window.pageYOffset;
        $('html,body').stop(true, false).animate({ scrollTop: 0 }, pixels);
        $('.menu').css("visibility", "hidden");
        $('.menu').css("opacity", "0");
});
    
//------------------------------------------------------open and close about page
 var about=false;
 $('.aboutlink').on('click touchstart', function (){
     if (about==false){
         $('.about').css("opacity", "1");
         
         $('.menu').css("overflow-y", "hidden");
         $('.aboutlink').css("transform", "skewX(-15deg)");
         $('.aboutlink').css("filter", "blur(.025em)");
         
         $('.recslink').css("transform", "skewX(0deg)");
         $('.recslink').css("filter", "blur(0em)");
        $('.index').css("opacity", "0"); 
         $('.indexlink').css("transform", "skewX(0deg)");
         $('.indexlink').css("filter", "blur(0em)");
         about=true;
     }else{
         $('.menu').css("overflow-y", "scroll");
         $('.about').css("opacity", "0"); 
         $('.aboutlink').css("transform", "skewX(0deg)");
         $('.aboutlink').css("filter", "blur(0em)");
         about=false;
     }   
});

//----------------------------------------------------open and close index
 var index=false;
 $('.indexlink').on('click touchstart', function (){
     if (index==false){
         $('.index').css("opacity", "1");
         
        AOS.refresh();
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
         
         //$('.menu').css("overflow-y", "hidden");
         index=false;
     }   
});

//----------------------------------------------------close other pages on recs link click
var recs=false;
 $('.recslink').on('click touchstart', function (){
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
