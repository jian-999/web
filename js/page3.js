$(document).ready(function(){
var main_pic=$("#part1>div:nth-child(1) img");
var aGroup=$("#part1>div:nth-child(2) a>img");
var lightbox_pic=$("#lightbox>div:nth-child(1) img");
var lightbox=$("#lightbox");
var arrows=$("#arrows button");
var btn_x=$("#arrows button:nth-child(3)");
var pos=0;


aGroup.on({
    mouseenter:function(){
        main_pic.attr("src",$(this).attr("src"));
        pos=$(this).parent().index();
        
    }
})

main_pic.on({click:function(){
    lightbox.fadeIn();
    changePic(pos);
}
})


arrows.on({click:function(){

    if($(this).attr("data-direction")=="right"){

           if(++pos>aGroup.length-1){
               pos=0;
           }
           changePic(pos);

    }else{
        if(--pos<0){
            pos=aGroup.length-1;
        }
        changePic(pos);
     }

}})


btn_x.on({click:function(){
      lightbox.fadeOut();
}
})



function  changePic(pos){
    lightbox_pic.attr("src",aGroup.eq(pos).attr("src"));
    }
    
})