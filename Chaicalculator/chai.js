//prompt() function to collect the number of cups
const userInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = parseInt(userInput);
// Check if the input is a valid number
if (isNaN(numberOfCups) || numberOfCups <= 0) {
  console.log("Please enter a valid number greater than 0.");
} else {
  calculateChaiIngredients(numberOfCups);
}
//define function to calculate the ingredients
function calculateChaiIngredients(numberOfCups) {
  const waterPerCup = 200;
  const milkPerCup = 50;
  const teaLeavesPerCup = 1;
  const sugarPerCup = 2;
//totals for each ingredient
    const totalWater = waterPerCup * numberOfCups;
    const totalMilk = milkPerCup * numberOfCups;
    const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
    const totalSugar = sugarPerCup * numberOfCups;
    
    //display the results
    console.log(`To make ${numberOfCups} cups of Chai Bora, you will need:`);
    console.log(`${totalWater} ml of water`);
    console.log(`${totalMilk} ml of milk`);
    console.log(`${totalTeaLeaves} tablespoons of tea leaves`);
    console.log(`${totalSugar} teaspoons of sugar`);
    console.log("Enjoy your Chai Bora!");
    }