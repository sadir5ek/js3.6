const userdetail = document.querySelector("#userdetail");
const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id");
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
.then(res => res.json())
.then(user => {

    userdetail.innerHTML = `
      <div class=' shadow-2xl w-[300px] p-2 rounded-md bg-[blue] '>
    <h1 class='text-[red] text-[35px] text-center font-bold'>${user.id}</h1>
    <h2 class='text-white text-[19px] ml-[20px] font-bold'>Name: ${user.name}</h2>
     <h2 class='text-[grey] text-[17px] ml-[20px] font-bold '>username: ${user.username}</h2>
     <h2 class='text-[red] text-[15px] ml-[20px] font-bold '>Email: ${user.email}</h2>
<li class='text-[yellow] text-[18px] ml-[25px] italic'>address: ${user.address.street}</li>
<li class='text-[yellow] text-[18px] ml-[25px] italic'>address: ${user.address.suite}</li>
<li class='text-[yellow] text-[18px] ml-[25px] italic'>address: ${user.address.city}</li>
<li class='text-[yellow] text-[18px] ml-[25px] italic'>address: ${user.address.zipcode}</li>
<li class='text-[yellow] text-[18px] ml-[25px] italic'>address: ${user.address.geo.lat}</li>
<li class='text-[yellow] text-[18px] ml-[25px] italic'>address: ${user.address.geo.lng}</li>
<h2 class='text-[pink] text-[18px] ml-[20px] font-bold'>phone: ${user.phone}</h2>
<h2 class='text-[red] text-[18px] ml-[20px] font-bold'>website: ${user.website}</h2>
<li class='text-[yellow] text-[18px] ml-[25px] italic'>company: ${user.company.name}</li>
<li class='text-[yellow] text-[18px] ml-[25px] italic'>company: ${user.company.catchPHrase}</li>
<li class='text-[yellow] text-[18px] ml-[25px] italic'>company: ${user.company.bs}</li>
</div>
    
    `;
})
.catch((err) => console.error("Ошибка при получении данных о ползователе"))