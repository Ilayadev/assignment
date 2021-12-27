function highlight(el){
    var element=document.querySelector('.container');
    var circle=document.querySelector('.circle');
    circle.style.left=el.x+'px';
    circle.style.top=el.y+'px';
    var inputcolor=document.querySelector('.inputcolor');
    inputcolor.value=el.x%255+","+el.y%255+","+Math.round(Math.random()*255);
    element.style.backgroundColor='rgba('+inputcolor.value+','+0.6 +')';
    // console.log(el);
    
}