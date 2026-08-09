const button = document.querySelector("#add-dish");
let dishCount = 1;

button.addEventListener("click", function(){
    dishCount ++;
    const dishId = `dish-$(dishCount)`;

    const newDish = document.createElement("fieldset");
    const legend = document.createElement("legend");

    legend.textContent = "dish";
    newDish.appendChild(legend);

    const dishLabel = document.createElement("label")
    dishLabel.textContent = "Dish name"
    dishLabel.setAttribute("for", dishId)

    const dishInput = document.createElement("input")
    dishInput.setAttribute("type", "text")
    dishInput.setAttribute("id", dishId)
    
    

})