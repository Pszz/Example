var svgbiz = '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" fill="none" stroke="#000" stroke-linecap="round" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="b"><animate id="a" attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite"/><animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="a.begin"/></path><path id="c"><animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="a.begin+1s"/><animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="a.begin+1s"/></path><path id="d"><animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="a.begin+2s"/><animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="a.begin+2s"/></path><path id="e"><animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="a.begin+3s"/><animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="a.begin+3s"/></path><path id="f"><animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="a.begin+4s"/><animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="a.begin+4s"/></path><path id="g"><animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="a.begin+5s"/><animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="a.begin+5s"/></path></defs><use xlink:href="#b"/><use xlink:href="#b" transform="rotate(60 160 160)"/><use xlink:href="#b" transform="rotate(120 160 160)"/><use xlink:href="#b" transform="rotate(180 160 160)"/><use xlink:href="#b" transform="rotate(240 160 160)"/><use xlink:href="#b" transform="rotate(300 160 160)"/><use xlink:href="#c" transform="rotate(30 160 160)"/><use xlink:href="#c" transform="rotate(90 160 160)"/><use xlink:href="#c" transform="rotate(150 160 160)"/><use xlink:href="#c" transform="rotate(210 160 160)"/><use xlink:href="#c" transform="rotate(270 160 160)"/><use xlink:href="#c" transform="rotate(330 160 160)"/><use xlink:href="#d"/><use xlink:href="#d" transform="rotate(60 160 160)"/><use xlink:href="#d" transform="rotate(120 160 160)"/><use xlink:href="#d" transform="rotate(180 160 160)"/><use xlink:href="#d" transform="rotate(240 160 160)"/><use xlink:href="#d" transform="rotate(300 160 160)"/><use xlink:href="#e" transform="rotate(30 160 160)"/><use xlink:href="#e" transform="rotate(90 160 160)"/><use xlink:href="#e" transform="rotate(150 160 160)"/><use xlink:href="#e" transform="rotate(210 160 160)"/><use xlink:href="#e" transform="rotate(270 160 160)"/><use xlink:href="#e" transform="rotate(330 160 160)"/><use xlink:href="#f"/><use xlink:href="#f" transform="rotate(60 160 160)"/><use xlink:href="#f" transform="rotate(120 160 160)"/><use xlink:href="#f" transform="rotate(180 160 160)"/><use xlink:href="#f" transform="rotate(240 160 160)"/><use xlink:href="#f" transform="rotate(300 160 160)"/><use xlink:href="#g" transform="rotate(30 160 160)"/><use xlink:href="#g" transform="rotate(90 160 160)"/><use xlink:href="#g" transform="rotate(150 160 160)"/><use xlink:href="#g" transform="rotate(210 160 160)"/><use xlink:href="#g" transform="rotate(270 160 160)"/><use xlink:href="#g" transform="rotate(330 160 160)"/></svg>';
var cssbiz = 'background: url(\'data:image/svg+xml;utf8,' + svgbiz + '\') left top no-repeat; font-size: 260px;';
console.log('%c 下面是SVG渲染', 'background:#666;color:#bada55;padding: 10px 100px;');
console.log('%c     ', cssbiz);
console.log('%c 下面是GIF动图', 'background:#666;color:#bada55;padding: 10px 100px;');
console.log("%c", "padding:100px; line-height: 250px;background:url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516360693535&di=516b1bf92e9ed99807dc48305f46786e&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01bf11557bcc4800000059ff2c1ec8.jpg') no-repeat;background-size: 200px auto;");
console.log('%c 下面渐变颜色', 'background:#666;color:#bada55;padding: 10px 100px;');
console.log("%c 渐变酷炫色", "background: rgba(252,234,187,1);background: -moz-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%,rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -webkit-gradient(left top, right top, color-stop(0%, rgba(252,234,187,1)), color-stop(12%, rgba(175,250,77,1)), color-stop(28%, rgba(0,247,49,1)), color-stop(39%, rgba(0,210,247,1)), color-stop(51%, rgba(0,189,247,1)), color-stop(64%, rgba(133,108,217,1)), color-stop(78%, rgba(177,0,247,1)), color-stop(87%, rgba(247,0,189,1)), color-stop(100%, rgba(245,22,52,1)));background: -webkit-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -o-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -ms-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: linear-gradient(to right, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fceabb', endColorstr='#f51634', GradientType=1 );font-size:5em")
document.body.innerHTML =  '<h1>请使用Google Chrome 浏览器访问 F12 打开有惊喜</h1>'