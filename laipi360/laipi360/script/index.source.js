(function(){
     function init(){
         //大图轮播
         (function(){
            var mySwiper = new Swiper('.swiper-containe',{
                pagination : ".swiper-pagination",
                autoplay : 3000,
                nextButton: '.arrow-right',
                prevButton: '.arrow-left',
            });	
         }());
       

       //广告提示
       (function(){
           var loopDom =  $("#loop"), loopLen = loopDom.children("h4").length, num = 1;
           loopDom[0].innerHTML += loopDom[0].innerHTML;//重复一份
           function play(){
                loopDom.animate({top:'-' + num + "00%"},2000,"swing",function(){
                    if(num > loopLen){
                        num = 1;
                        loopDom.css("top",0);
                    }else{
                        num++;
                    }
                    setTimeout(play,2000);              
                });
           }
           play();
       }());
         
      //tab项
      (function(){
            var listMenu = $("#list-menu"),listA = listMenu.children("a");
            listA.append("<i></i>");//添加一个悬浮效果
            listMenu.children("a[href=#]").attr("href","javascript:;");//#会返回顶部
            listA.click(function(){
               var that = $(this),v = that.attr("v");
                $(".list-content").hide();
                $(".list-content[v="+ v +"]").show();
                listA.removeClass("list-menu-active");
                that.addClass("list-menu-active");
            });
            
      }());
     }
    //初始化
    setTimeout(init,0);
}());	
