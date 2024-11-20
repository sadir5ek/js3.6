const userlist = document.querySelector("#root");
fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((data) => {

    data.map((user) => {
        const userElement = document.createElement("div");
        userElement.innerHTML = `
        <a href="./detail/userdetail.html?id=${user.id}">
         <div class=' shadow-2xl w-[300px] p-2 rounded-md bg-[blue] cursor-pointer'>
    <h1 class='text-[red] text-[35px] text-center font-bold'>${user.id}</h1>
    <h2 class='text-white text-[19px] ml-[20px] font-bold'>Name: ${user.name}</h2>
     <h2 class='text-[grey] text-[17px] ml-[20px] font-bold '>username: ${user.username}</h2>
     <h2 class='text-[red] text-[15px] ml-[20px] font-bold '>Email: ${user.email}</h2>
     </div>
        </a>
        `;
        userlist.appendChild(userElement);
    });
});