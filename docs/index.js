const headerContainer=document.getElementById("header")
import GenerateHeader from "./pages/components/header.js"
import tick, { antihover, hover } from "./pages/components/cursor.js"
GenerateHeader(headerContainer).
then(()=>{

    document.querySelectorAll('.specialHover').forEach(ele => {
        console.log(ele)
        ele.style.transition = 'all 2s ease-in-out';
        // Removed redundant hover event listeners
        ele.addEventListener('mouseenter', () => {
            hover();
        });
    
        ele.addEventListener('mouseleave', () => {
            antihover();
        });
    });
    
    tick()})



