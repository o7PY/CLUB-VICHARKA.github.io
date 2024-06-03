
export default function GenerateHeader(){
    const headerContainers=document.querySelectorAll(".header")
    const origin = window.location.origin;
    console.log(headerContainers)
    headerContainers.forEach(((header)=>{

    const  headerHTML=`
      <div class="headerContainer">
      <div class="logo">

        </div>
        <nav>
            <a href="${origin}/index.html">HOME</a>
            <a href="${origin}/pages/members.html">MEMEBERS</a>
            <a href="${origin}/pages/events.html">EVENTS</a>
            <a href="${origin}/pages/projects.html">PROJECTS</a>
            <a href="${origin}/pages/contact.html">CONTACT US</a>
        </nav>
      </div>    

      `

      header.innerHTML=headerHTML
       
}))
}




