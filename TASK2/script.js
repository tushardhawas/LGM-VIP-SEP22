let box = document.getElementById("cards");
let API = async () => {
  let response = await fetch("https://reqres.in/api/users?page=1");
  let file = await response.json();
  let info = file.data.map((element) => {
     return `
  <div class="card m-3 shadow bg-light text-info">
  <div class="row g-0">
    <div class="col-md-6">
      <img src="${element.avatar}" class="img-fluid rounded-circle m-3" alt="">
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title">${element.first_name} ${element.last_name}</h5>
        <p class="card-text">${element.email}</p>
        <p class="card-text"><small class="text-muted">User ID: ${element.id}</small></p>
      </div>
    </div>
  </div>
</div>
  `;
})
   .join("");
   cards.innerHTML = info;
};


let navBtn = document.getElementById("nav-btn");
navBtn.addEventListener("click", () => {
  cards.innerHTML = `
  <div class="text-center mt-5">
  
  <h1 class='load'>Fetching Data...</h1>

 `;
  setTimeout(() => {
    API();
  }, 3000);
});