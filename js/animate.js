$(document).ready(function(){
var slidesSet=$("#animation>section");
var slides=$("#animation>section figure");
var pos;
var windowPics;
var singleSlideWidth;
var arrows=$("#arrows button");
var len=slides.length;

arrows.on({click:function(){

         if($(this).attr("data-direction")!="right"){
             if(++pos!=(len+windowPics)){
              slidesSet.animate({marginLeft:-(pos-windowPics)*singleSlideWidth+"px" });



             }else{
               slidesSet.animate({marginLeft:-(pos-windowPics)*singleSlideWidth+"px"},function(){
                  slidesSet.css({"margin-left":"0px"});
                  pos=windowPics;
                                 });
             }
            

         }else{


          if(pos==windowPics){
            slidesSet.css({"margin-left":-(len)*singleSlideWidth+"px"});
            pos=len+windowPics;
            slidesSet.animate({marginLeft:-(--pos-windowPics)*singleSlideWidth+"px" });


          }else{
            slidesSet.animate({marginLeft:-(--pos-windowPics)*singleSlideWidth+"px" });
          }

         }



}})


function computeWidthSlide(){

       if(window.matchMedia("(max-width:600px)").matches){
           pos=windowPics=1;
           singleSlideWidth=$(window).innerWidth()/windowPics;
           slides.css({'width':singleSlideWidth+"px",'height':0.7*singleSlideWidth+'px'});


       }else if(window.matchMedia("(min-width:601px) and (max-width:800px)").matches){

          pos=windowPics=2;
          singleSlideWidth=$(window).innerWidth()/windowPics;
          slides.css({'width':singleSlideWidth+"px",'height':0.7*singleSlideWidth+'px'});

       }else{
          pos=windowPics=3;
          singleSlideWidth=$(window).innerWidth()/windowPics;
          slides.css({'width':singleSlideWidth+"px",'height':0.7*singleSlideWidth+'px'});

       }

       slidesSet.css({'width':singleSlideWidth*(slides.length+1)+"px"});
}


$(window).on({resize:function(){


     computeWidthSlide();


}})



    function initial(){

       for(var x=0;x<4;x++){
            slides.eq(x).clone().appendTo("#animation>section");
           
       }
       slides=$("#animation>section figure");
       computeWidthSlide();


       }

       initial();



})