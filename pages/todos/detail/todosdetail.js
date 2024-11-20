const todosdetail = document.querySelector("#todosdetail");
const urlParams = new URLSearchParams(window.location.search);
  const todosId = urlParams.get("id");
fetch(`https://jsonplaceholder.typicode.com/todos/${todosId}`)
.then(res => res.json())
.then(todos => {

    todosdetail.innerHTML = `
     <div class=' shadow-2xl w-[300px] p-2 rounded-md bg-[red] '>
    <h1 class='text-[blue] text-[25px] ml-[20px] font-bold '>userId:${todos.userId}</h1>
    <h2 class='text-white ml-[20px] text-[20px] font-bold'>id: ${todos.id}</h2>
     <li class='text-[yellow] ml-[20px] italic text-[16px] '>title: ${todos.title}</li>
     <li class='text-[yellow] ml-[20px] italic text-[16px]'>completed: ${todos.completed}</li>
</div>
    
    `;
})
.catch((err) => console.error("Ошибка при получении данных о ползователе"))