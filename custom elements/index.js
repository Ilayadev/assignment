const template = document.createElement('template');
template.innerHTML = `
<style>
.user-card{
    display:inline-flex;  
    justify-content:space-around;
    flex-direction:column;
    box-shadow: 0px 0px 2px 3px #dedede;
    background:#f4f4f4;
    grid-gap:10px;
    padding:5px;
}
.user-card button{
    cursor:pointer;
    border-radius:5px;
    border:0;
    background:darkorchid;
    color:#fff;  
    padding:5px 10px;  
    
}
.user-card img{
    width:200px;
    height:200px;
   
}
.about{
    text-align:center;
}
</style>
<div class="user-card">
  <img />
  <div class="about" >
     <h3></h3>
     <div class="info">
       <p> <slot name="email"></p>
       <p><slot name="phone"></p>
     </div>
     <button id="button">hide info
     </button>
  </div>
</div>

`
;
class mycomponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('img').src = this.getAttribute('image'); 
        this.shadowRoot.querySelector('h3').innerHTML = this.getAttribute('name');
        this.showInfo=true;
    }
    toggled(){
        this.showInfo=!this.showInfo
        const info = this.shadowRoot.querySelector('.info');
        const toggbutton=this.shadowRoot.querySelector('#button');
        if(this.showInfo){
            info.style.display='block';
            toggbutton.innerHTML="hide info";
        }
        else{
            info.style.display='none';
            toggbutton.innerHTML="show info";
        }

        
    }
    connectedCallback(){
        this.shadowRoot.querySelector('#button').addEventListener('click',() => this.toggled())
    }
    disconnectedCallback(){
        this.shadowRoot.querySelector('#button').removeEventListener();
    }
}
customElements.define('user-card', mycomponent);
