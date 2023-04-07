const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// for of loop
for (const i of ingredients) {
  console.log(i)
}

// for loop
for (let i = 0; i < ingredients.length; i ++) {
  console.log(ingredients[i])
}

// while loop
let count = 0
while(count < ingredients.length) {
  console.log(ingredients[count]);
  count++
}

// backwards
for (let i = ingredients.length; i >= 0; i--) {
  console.log(ingredients[i])
}