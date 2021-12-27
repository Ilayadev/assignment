function creating(el){
 
 var circle=document.querySelector('.circle').cloneNode(true);
 circle.removeAttribute('id');
 document.querySelector('.container').appendChild(circle);
 circle.style.left=el.offsetX+'px';
 circle.style.top=el.offsetY+'px';
 var sizebox=document.querySelector('.inputsize');
 circle.style.width=sizebox.value+'px';
 circle.style.height=sizebox.value+'px';
 var colorbox=document.querySelector('.inputcolor');
 circle.style.backgroundColor=colorbox.value; 
 
 }

   
 

 
