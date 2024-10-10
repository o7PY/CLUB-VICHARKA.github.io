
export default async function GenerateHeader(headerContainer){
    const origin = window.location.origin;
    const  headerHTML=`
    <div class="headerContainer bg-transparent text-white p-4 flex items-center justify-center sticky top-0 ">
    <nav class="flex text-xl w-full justify-between p-4 mx-8">
      <div class='specialHover p-2 font-semibold  hover:underline underline-offset-4'><a href="${origin}/index.html" class=" ">HOME</a></div>
      <div class='specialHover p-2 font-semibold  hover:underline underline-offset-4'><a href="${origin}/pages/members.html" class="">MEMBERS</a></div>
      <div class='specialHover p-2 font-semibold  hover:underline underline-offset-4'><a href="${origin}/pages/events.html" class=" ">EVENTS</a></div>
      <div class='specialHover p-2 font-semibold  hover:underline underline-offset-4'><a href="${origin}/pages/projects.html" class="">PROJECTS</a></div>
      <div class='specialHover p-2 font-semibold  hover:underline underline-offset-4'><a href="${origin}/pages/contact.html" class="">CONTACT US</a></div>
    </nav>
  </div>
      `
      headerContainer.innerHTML=headerHTML
      console.log('hello')
      return true
}




 