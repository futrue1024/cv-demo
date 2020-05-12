let demo = document.querySelector("#demo");
let style = document.querySelector("#style");

let string = `
/* 我想学会前端，
*  快点娶王宁！
*  接下来就要加样式了，
*/

/* 开始制作太极，
*  先画一个圆
*/
#div1{
    width:200px;
    height:200px;
    border:1px solid red;
    position:fixed;
    right:10px;
    top:10px;
    border-radius:50%;

} 
/* 给圆加点样式
*  来点阴影
*/
#div1{
    box-shadow:0 0 3px rgb(0,0,0,0.5);
    border:none;
}
/* 开始给圆加点颜色
*  一半黑一半白 
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个小圆
*  
*/
#div1::before{
    content:'';
    display:block;
    width:100px;
    height:100px;
  
    border-radius:50%;
    position:absolute;
}
#div1::after{
    content:'';
    display:block;
    width:100px;
    height:100px;
    border-radius:50%;

    position:absolute;
}
/* 给小球加点样式
*/
#div1::before{
    top:0;
    left:50%;
    transform:translate(-50%);
    background:black;background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
}  
#div1::after{
    bottom:0;
    left:50%;
    transform:translate(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
} 
/* 让太极动起来
*/



`;
let string2 = "";

//string = string.replace(/\n/g, "<br>");
let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }
    demo.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    //style中的样式不需要被看到，只需要加载到style中
    //即可，如果style.innerHTML = string2，会使得样式中
    //含有html标签等，使得样式代码不生效。
    window.scrollTo(0, 9999999999);
    demo.scrollTo(0, 9999999999);
    //每次写完滚动条自动滚到最下方
    if (n < string.length - 1) {
      n += 1;
      step();
    }
  }, 50);
};

step();
