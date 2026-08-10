const button = document.querySelector("#add-dish");
let dishCount = 1;
const dishes = document.querySelector("#dishes")

button.addEventListener("click", function(){
    dishCount ++;
    const dishId = `dish-${dishCount}`;
    const newDish = document.createElement("fieldset");
    
    const legend = document.createElement("legend");
    legend.textContent = "dish";
    newDish.appendChild(legend);

    const dishLabel = document.createElement("label");
    dishLabel.textContent = "Dish name";
    dishLabel.setAttribute("for", dishId);
    newDish.appendChild(dishLabel);
    const dishInput = document.createElement("input");
    dishInput.setAttribute("type", "text");
    dishInput.setAttribute("id", dishId);
    newDish.appendChild(dishInput);

    const popLabel = document.createElement("label");
    popLabel.textContent = "Popularity";
    popLabel.setAttribute("for", "popularity");
    newDish.appendChild(popLabel);
    const popInput = document.createElement("input");
    popInput.setAttribute("type", "number");
    popInput.setAttribute("id", "popularity");
    popInput.setAttribute("min", "0");
    popInput.setAttribute("max", "100");
    newDish.appendChild(popInput);

    const stockLabel = document.createElement("label");
    stockLabel.textContent = "Current stock";
    stockLabel.setAttribute("for", "stock");
    newDish.appendChild(stockLabel);
    const stockInput = document.createElement("input");
    stockInput.setAttribute("type", "number");
    stockInput.setAttribute("id", "stock");
    stockInput.setAttribute("min", "0");
    stockInput.setAttribute("step", "1");
    newDish.appendChild(stockInput);


    dishes.appendChild(newDish);

    

  
    

})