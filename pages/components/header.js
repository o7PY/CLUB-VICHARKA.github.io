
export default function GenerateHeader(){
    const headerContainers=document.querySelectorAll(".header")
    const origin = window.location.origin;
    console.log(headerContainers)
    headerContainers.forEach(((header)=>{

    const  headerHTML=`
    <div class="headerContainer bg-white text-[#070F61] border-b border-[#070F61] p-4 flex items-center justify-between">
    <div class="logo text-2xl font-semibold">
          CLUB VICHARKA
    </div>
    <nav class="flex space-x-4">
      <a href="${origin}/index.html" class="font-semibold hover:text-black hover:underline">HOME</a>
      <a href="${origin}/pages/members.html" class="font-semibold hover:text-black hover:underline">MEMBERS</a>
      <a href="${origin}/pages/events.html" class="font-semibold hover:text-black hover:underline">EVENTS</a>
      <a href="${origin}/pages/projects.html" class="font-semibold hover:text-black hover:underline">PROJECTS</a>
      <a href="${origin}/pages/contact.html" class="font-semibold hover:text-black hover:underline">CONTACT US</a>
    </nav>
  </div>
      `

      header.innerHTML=headerHTML
       
}))
}




