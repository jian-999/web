$(document).ready(function(){
var slides=$("#animation>div>figure");
var arrows=$("#arrows>button")
var pos=0;
var L=3;
var C=0;
var R=1;
var O;
var timer;
var points=$("#points span");

points.on({
 click:function(){
    clearInterval(timer);
     if($(this).index()!=pos){
         L=pos;
         C=pos=$(this).index();
     }
     setlocalR();
     computedTimer();

 }


})



$(window).on({resize:function(){
    clearInterval(timer);
    setlocalR();
    computedTimer();
}})
arrows.on({click:function(){
    clearInterval(timer);
  switch($(this).attr('data-direction')){
                                           case 'left':{
                                                        computedR();
                                                        setlocalR();
                                                        break;
                                           }
                                           case 'right': {
                                                         computedL();
                                                          setlocalL();      
                                           }



  }
  computedTimer();

}})


function computedR(){

              O=L;

             L=pos++;
              
             if(pos>slides.length-1){
                 pos=0;
             }
             C=pos;

             if(pos+1>slides.length-1){R=0;}else{R=pos+1}

}

function computedL(){

    O=R;

    R=pos--;
    
   if(pos<0){
       pos=slides.length-1;
   }
   C=pos;

   if(pos-1<0){L=slides.length-1;}else{L=pos-1}

}


function setlocalR(){
             
    slides.removeClass();
    
            if(window.matchMedia("(max-width:800px)").matches){
                points.removeClass();
                slides.eq(L).addClass('CL');
                slides.eq(C).addClass('RC');
                points.eq(C).addClass("ponits_btn");

            }else{
              
                slides.eq(O).addClass('L2O');
                slides.eq(L).addClass('C2L');
                slides.eq(C).addClass('R2C thumbnail');
                slides.eq(R).addClass('O2R');

            }
          
}


 function computedTimer(){
   clearInterval(timer);
   timer=setInterval(ss,3000);

 }

function  ss(){
               computedR();
                setlocalR();
}


function setlocalL(){
    slides.removeClass();

  slides.eq(O).addClass('R2O');
  slides.eq(R).addClass('C2R');
  slides.eq(C).addClass('L2C thumbnail');
  slides.eq(L).addClass('O2L');
}



function initial(){
         
    setlocalR();
    computedTimer();


}


initial();




    
})