const button = document.querySelector("#add-dish");

button.addEventListener("click", function(){

    const newDish = document.createElement("fieldset");
    const legend = document.createElement("legend");

    legend.textContent = "dish";
    newDish.appendChild(legend);

    const dishLabel = document.createElement("label")
    dishLabel.textContent = "Dish name"
    dishLabel.setAttribute("for", "dish")

    const dishInput = document.createElement("input")
    dishInput.setAttribute("type", "text")
    dishInput.setAttribute("id", "dish")

})