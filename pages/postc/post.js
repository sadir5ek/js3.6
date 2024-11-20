const postlist = document.querySelector("#rootd");
fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) => res.json())
.then((data) => {

    data.map((post) => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `
        <a href="./detail/postdetail.html?id=${post.id}">
        <div class=' shadow-2xl w-[300px] p-2 rounded-md bg-[black] '>
    <h1 class='text-white text-[25px] ml-[25px] font-bold '>userId:${post.userId}</h1>
    <h2 class='text-white ml-[20px] text-[20px] font-bold'>id: ${post.id}</h2>
     <h2 class='text-white ml-[20px] italic text-[16px] font-bold'>title: ${post.title}</h2>
     <li class='text-white ml-[20px] italic text-[16px]'>body: ${post.body}</li>
</div>
        </a>
        `;
        postlist.appendChild(postElement);
    });
});