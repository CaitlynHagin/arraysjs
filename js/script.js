console.log ("test linked")

let myArray = [

   //strings 
    "tea",
    "coffee",
    "matcha",
    "chai",
    "smoothie",
    "irnbru",
    "lemon",
    "peppermint",
    "strawberry",
    "orange"

];

let missingLastItem = myArray.pop()

// pop- takes off bottom, push- adds will mutate/change your original array

myArray.push('hot coco')

console.log(myArray.length)

let find = myArray.indexOf("chai",2)

console.log(find)

let myFoundItem = myArray.includes("lemon")
let myNonFoundItem = myArray.includes('veg')

console.log(myFoundItem, myNonFoundItem)

console.log(myArray.sort().reverse()) 
//sorts it in alphabetical order