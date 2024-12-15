const headerContainer=document.getElementById("header")
const footerContainer=document.getElementById("footer")
import GenerateHeader from "./pages/components/header.js"
import GenerateFooter from "./pages/components/footer.js"

const blob =document.getElementById("blob")
document.body.onpointermove = event =>{
    const {clientX,clientY} = event

    blob.animate({
        left:`${clientX}px`,
        top:`${clientY}px`
    },{duration:1500,fill:"forwards"})
}


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null

let fontEffectElements=document.querySelectorAll(".fontEffect")
fontEffectElements.forEach((ele)=>{
    ele.onmouseover = event => {  
        let iteration = 0;
      let initialText=event.target.dataset.value
        clearInterval(interval);
        
        interval = setInterval(() => {
          event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
              if(index < iteration) {
                return initialText[index];
              }
            
              return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
          
          if(iteration >=initialText){ 
            clearInterval(interval);
          }
          
          iteration += 1 / 3;
        }, 30);
      }
})

GenerateHeader(headerContainer)
GenerateFooter(footerContainer)



