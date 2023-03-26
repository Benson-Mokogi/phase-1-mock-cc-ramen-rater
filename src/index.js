// write your code here
function renderRamen(ramenItem){
    const img  = document.createElement("img")
    img.src = `${ramenItem.image}`
    img.id = `${ramenItem.id}`
    document.getElementById("ramen-menu").appendChild(img)

    img.addEventListener("click", function() {
        //GET method goes here
        console.log("The image was clicked!");
      });
     
}

function getAllRamen(){
    fetch("http://localhost:3000/ramens")
    .then(res => res.json())
    .then(ramens => ramens.forEach(ramenItem => renderRamen(ramenItem)))
}
getAllRamen()
// const submitButton = document.getElementById("new-ramen")
// submitButton.addEventListener("submit",function(event) {
//     event.preventDefault(); // prevent the default form submission behavior
//     getAllRamen();
//   });