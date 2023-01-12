function createDishElement (element) {
    return `            
    <div class="col">
        <img src="${element.img}" class="img-Breakfast" alt="...">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">${element.weight}</p>
        <button type="button" class="button"><img src="./img/button.png"></button>
        <p class="card-text"><small class="text-muted">${element.price}</small></p>
    </div>
`;
}

window.onload = () => {
    const breakfastContainer = document.getElementById("Breakfasts");
    const saladContainer = document.getElementById("Salads");
    for (const breakfast of breakfasts) {
        breakfastContainer.innerHTML += createDishElement(breakfast);
    }
    for (const salad of salads) {
        saladContainer.innerHTML += createDishElement(salad);
    }
} 
