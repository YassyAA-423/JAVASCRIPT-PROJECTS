//Example of dictionary for season months
function my_Dictionary() {
    var North_Hemisphere_Seasons = {
        Spring: "March, April, May",
        Summer: "June, July, August",
        Autumn: "September, October, November",
        Winter: "December, January, February"
    };
    delete North_Hemisphere_Seasons.Summer; //Should delete Summer from the dictionary before it's displayed
    document.getElementById("Summer").innerHTML = North_Hemisphere_Seasons.Summer;
    document.getElementById("Winter").innerHTML = North_Hemisphere_Seasons.Winter;

}

function second_Dictionary() {
    var Drinks = {
        Tea: "Bubble Tea",
        Soda: "Pepsi",
        Hot_beverage: "Hot Chocolate",
        Juice: "Orange Juice"
    };
    document.getElementById("Drink").innerHTML = Drinks.Hot_beverage;

}