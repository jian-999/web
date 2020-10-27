$(document).ready(function(){
var   title1=$(".title1>span");
var   title2=$(".title2>span");
var  pre1="";
var  pre2="";

title1.on({
          click:function(){
               if(pre1){
                         pre1.slideUp();
                         }
                pre1=$(this).parent().next();
                pre1.slideDown();         

                if(pre2){
                   pre2.slideUp();
                   }
                   
          }
})

title2.on({
    click:function(){
      
          if(pre2){
             pre2.slideUp();
             }
             pre2=$(this).parent().next();
             pre2.slideDown(); 
             
    }
})





})