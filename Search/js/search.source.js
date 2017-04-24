//-------------------------分割线
var RootPath = "/html/help/",empty = function(){}; 
function $(s){
    return typeof s == "string" ? document.getElementById(s):s;
}
//加载script脚本
$.loadJS = function(url, callBack, charset){
        var doc = document,
        t = doc.createElement("script");
		t.setAttribute("type", "text/javascript");
		charset && t.setAttribute("charset", charset);
		t.onreadystatechange = t.onload = t.onerror = function(){
			if(!t.readyState || t.readyState == 'loaded' || t.readyState == 'complete'){
				t.onreadystatechange = t.onload = t.onerror = null;
				t = null;
				//防止回调的时候，script还没执行完毕
				callBack && setTimeout(function(){
					callBack(url);
				},0);
			}
		};
		t.src = url;
		doc.getElementsByTagName("head")[0].appendChild(t);
}
//兼容手机和pc单击事件
$.vclick = function(dom,fn){
    var isTouch = 'createTouch' in document;
    var vEvent = isTouch ? "mousedown" : "click";
    if(typeof dom == "object"){
        dom['on' + vEvent] = fn || empty;
    }
}
//兼容oninput事件
$.vchange = function(dom,fn){
    if(dom){
        var isIE = navigator.userAgent.toLocaleLowerCase().indexOf("msie") > 0 ? true : false;
        //非ie需要注册事件
        isIE ? dom.attachEvent("onpropertchange",(fn||empty)) : dom.addEventListener("input",(fn||empty),false);
    }
}



//导入数据
$.loadJS("js/list.js",function(){
  
//创建搜索dom页
void function(){
    var big = document.createElement("div");
    big.innerHTML = [
        '<div class="search_mask" id="$search_0000">',
            '<div class="search_text"><input type="text" id="$search" placeholder="输入关键字" /></div>',
            '<div class="search_list" id="$search_list">',
                '<a href="#" class="search_item">输入即可搜索</a>',
            '</div>',
        '</div>',
        '<div class="search_icon" id="$search_1111"></div>'
    ].join("");
    document.body.appendChild(big);
}();
//搜索按钮动画事件
$.vclick($("$search_1111"),function(){
    //flag==true时，按钮为搜索，flag==false 按钮为关闭
    var icon = this;
    if(!icon.status){ //状态为false时，证明动画未开始,可执行，为true时，证明动画未完成，不可执行
        icon.status = true;
        if(icon.flag){
            $("$search_0000").style.left = "100%";
            setTimeout(function(){
                icon.className = "search_icon";
            },300);
            setTimeout(function(){
                $("$search_0000").style.display = "none";
                icon.flag = false;
                icon.status = false;
            },1000);
           $("$search_list").innerHTML = "";//清空搜索数据
        }else{
            $("$search_0000").style.display = "block";
            setTimeout(function(){
                $("$search_0000").style.left = "0";
                setTimeout(function(){
                    icon.className = "search_close";
                    icon.status = false;
                    icon.flag = true;
                    $("$search").focus();//获得焦点
                },300);
            },100);
             
        }
    }
});

//文本框事件
$.vchange($("$search"),function(){
    var v = this.value.trim();
    if(v != ""){
        Search(v);
    }else{
      $("$search_list").innerHTML = "";
    }
});

//搜索
function Search(str){
    var data = getData_$$();//数据集合[标题,URL，关键字]
    var dom = "";
    for(var i = 0; i < data.length; i++){
        var obj = data[i],objPath = RootPath + obj[1];
        var reg = new RegExp("(" + str + ")","gi");// new RegExp(str,"gi");
        //将搜索和需要搜索的数据统一最小化，为了大小写同时匹配
        var tit = obj[0].toLocaleLowerCase(),
            ipt = str.toLocaleLowerCase(),
            des = obj[2].toLocaleLowerCase();
        
        if(tit.match(ipt) != null){ //标题发现同类之后，就加上醒目标题，返回标题+地址
          var sDom =  obj[0].replace(reg,"<span class='search_key'>$1</span>");
              dom +='<a href="'+ objPath +'" class="search_item">'+ sDom  +'</a>';
            continue;//查到之后 直接返回
        }
         //关键字发现同类之后，直接返回标题+地址
        if(des.match(ipt) !== null){
            dom += '<a href="'+ objPath +'" class="search_item">'+ obj[0]  +'</a>';
        }
    }
    //循环完毕，搜索完成
    $("$search_list").innerHTML = dom;
}

});
