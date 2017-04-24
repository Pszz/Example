//配置 
var API = {data:{}};
void function(api){
    var doc = document, J = api.JSON = {}, M = api.msg = {};
    var suffix = ".js";
    //公共配置  例如title和客服qq等  直接可以通过API.config.属性名调用
    var c = api.config = {
        rootPath : "",//根目录
        title : "赖皮网-专业不良资产处置平台",//通用title
        qq : "",//客服qq地址
        data : function(){
            var ns = doc.getElementsByTagName("script");
            var n = ns[ns.length - 1];
            for(var i = ns.length - 1; i >= 0 ; i -= 1){
                if(ns[i].src){
                    n = ns[i];
                    break;
                }
            }
            //config.js 调用 config.source.js 时,其他js统一引入 .source.js 用于调试
            if(/\.source\.js/.test(n.src)){
                suffix = ".source.js";
            }
            return n.getAttribute("data") || "";
        }(),
        getData : function(key){
            return new RegExp("[?:; ]*" + key + "=([^;]*);?").test(this.data) ? decodeURIComponent(RegExp["$1"]) : "";
        }
    };
    

    c.jsSuffix = suffix;
    
    doc.title = c.title;
  
    //静态地址写入
    var css = c.getData("css");
    c.rootPath = c.getData("uri") || c.rootPath;
    var rv = [];
     //加载 必要文件
    rv.push('<link href="'+  c.rootPath +'css/main.css" rel="stylesheet" type="text/css" />');
    rv.push('<script type="text/javascript" src="'+ c.rootPath +'script/jquery-1.8.3'+ suffix +'"></script>');
    rv.push('<link href="'+ c.rootPath  +'css/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />');
    
    //加载 动态css
    if(css != "none"){
        if(css){
            css = css.replace(/^\[/,"").replace(/\]$/,"").split(",");
            for(var i = 0; i < css.length; i++){
                rv.push('<link href="'+ c.rootPath + css[i] +'.css" rel="stylesheet" type="text/css" />');
            }
        }      
    }
	doc.write(rv.join(''));
    //动态加载js
    function loadPageJS(){
        var js = c.getData("js");
        //向head插入数据
       // var headJs = [c.rootPath +'script/public'];
        //向body插入的数据
       //var bodyJs = ["http://hm.baidu.com/hm.js?7ed291a4e1e9aeceaa65a7fd653e9547"];
        js = js ? js.replace(/^\[/,"").replace(/\]$/,"").split(",") : "";
        //不加载js 则设置js=none 
        if(!(js == "none" || js == "")){
            for(var i = 0; i < js.length; i++){
                js[i] = c.rootPath + (c.rootPath ? "/" : "") + "script/" + js[i].replace(/^script\/|\/script\//,"");
            }
            useJs(js);
        }
       // useJs(headJs);
       //useJs(bodyJs,"body");//百度统计，放到最后加载
    }
    //调用js
    function useJs(arr,loca){
        if(arr.length != 0){
            var js = arr.shift().replace(".js","") + suffix;
			var t = doc.createElement("script");
			t.type = "text/javascript";
			t.src =  js;
			if(loca != "body"){
				loca = "head";
			}
			t.onreadystatechange = t.onload = t.onerror = function(){
				if(!t.readyState || t.readyState == "loaded" || t.readyState == "complete"){
				t.onreadystatechange = t.onload = t.onerror = null;
				t = null;
				setTimeout(function(){
					useJs(arr);
				},0);
				}
			}
			doc.getElementsByTagName(loca)[0].appendChild(t);
        }
    }
	//dom加载完成后执行
    function domReady(){
        loadPageJS();
    }
    //文档流加载完成后 写入js
    doc.attachEvent ? doc.attachEvent("onreadystatechange", function(){
        if(doc.readyState == "complete" || doc.readyState == "loaded"){
            domReady();
        }
    }) : doc.addEventListener("DOMContentLoaded", domReady, false);
}(API);