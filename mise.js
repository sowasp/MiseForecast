const button = document.querySelector("#add-dish");
let dishCount = 1;
const dishes = document.querySelector("#dishes");
const forecastButton = document.querySelector("#forecast");
const deleteButton = document.querySelector("#delete-dish");



function getDishInputs() {
    const popularityInputs = document.querySelectorAll("[id^='popularity']");
    const stockInputs = document.querySelectorAll("[id^='stock']");
    const dishNames = document.querySelectorAll("input[id^='dish']");

    return {
        popularityInputs,
        stockInputs,
        dishNames
    };
}

button.addEventListener("click", function(){
    
    const inputs = getDishInputs();
    const lastIndex = inputs.dishNames.length - 1;
    if (
        inputs.dishNames[lastIndex].value === "" ||
        inputs.popularityInputs[lastIndex].value === "" ||
        inputs.stockInputs[lastIndex].value === ""
        ){
            return
        }
    

    dishCount ++;
    const dishId = `dish-${dishCount}`;
    const popId = `popularity-${dishCount}`;
    const stockId = `stock-${dishCount}`;
    //Unique IDs keep each label connected to its own input.

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
    popLabel.setAttribute("for", popId);
    newDish.appendChild(popLabel);
    const popInput = document.createElement("input");
    popInput.setAttribute("type", "number");
    popInput.setAttribute("id", popId);
    popInput.setAttribute("min", "0");
    popInput.setAttribute("max", "100");
    popInput.setAttribute("step", "1");
    newDish.appendChild(popInput);

    const stockLabel = document.createElement("label");
    stockLabel.textContent = "Current stock";
    stockLabel.setAttribute("for", stockId);
    newDish.appendChild(stockLabel);
    const stockInput = document.createElement("input");
    stockInput.setAttribute("type", "number");
    stockInput.setAttribute("id", stockId);
    stockInput.setAttribute("min", "0");
    stockInput.setAttribute("step", "1");
    newDish.appendChild(stockInput);


    dishes.appendChild(newDish);

})

deleteButton.addEventListener("click", function(){
    const fieldsets = document.querySelectorAll("#dishes fieldset");
    const lastIndex = fieldsets.length - 1;
    if(fieldsets.length === 1){
        return;
    } 
    fieldsets[lastIndex].remove();
    

    
})





forecastButton.addEventListener("click", function(){


    
    const inputs = getDishInputs();
    const covers = document.querySelector("#covers");
    let result = "";
   
    if (covers.value === "") {
        return 
    } 

    const numCovers = Number(covers.value);

    for(let i = 0; i < inputs.popularityInputs.length; i++) {
        const popularity = Number(inputs.popularityInputs[i].value);
        const expected = (numCovers * popularity) / 100;
        const stock = Number(inputs.stockInputs[i].value);
        const prepNeeded = Math.ceil(expected - stock); 
        // Prefer Math.ceil so forecasted prep never rounds below expected demand.
        
        
        
        if (
            inputs.dishNames[i].value === "" ||
            inputs.popularityInputs[i].value === "" ||
            inputs.stockInputs[i].value === ""
            ){
                continue
            }
        if (prepNeeded > 0) {

            result += inputs.dishNames[i].value + ": " + prepNeeded + " portions" + "\n";
        } else {
            result += inputs.dishNames[i].value + ": " +"No prep needed.\n";
        }
        

    }

    const forecastOut = document.querySelector("#forecast-output");
    forecastOut.textContent = result;
    
});
    
    





