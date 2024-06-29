
export default function GenerateHeader(headerContainer){
    const origin = window.location.origin;
    const  headerHTML=`
    <div class="headerContainer bg-transparent text-white p-4 flex items-center justify-center sticky top-0 ">
    <nav class="flex text-xl w-full justify-between p-4 mx-8">
      <a href="${origin}/index.html" class="font-semibold  hover:underline underline-offset-4 ">HOME</a>
      <a href="${origin}/pages/members.html" class="font-semibold  hover:underline underline-offset-4">MEMBERS</a>
      <a href="${origin}/pages/events.html" class="font-semibold  hover:underline underline-offset-4 ">EVENTS</a>
      <a href="${origin}/pages/projects.html" class="font-semibold  hover:underline underline-offset-4">PROJECTS</a>
      <a href="${origin}/pages/contact.html" class="font-semibold  hover:underline underline-offset-4">CONTACT US</a>
    </nav>
  </div>
      `
      headerContainer.innerHTML=headerHTML
}




 