function time(){
    setInterval(() => {
        var time=new Date();
    var h=time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();
    var circle=document.querySelector('.circle');
    circle.innerText=h+':'+min+':'+sec;
    }, 1000);
}