// Activity 1
arr = ['one', 'two', 'three'];

let myList = arr.map((name) => `<li>${name}</li>`);
console.log(myList.join());
const myListEl = document.getElementById("myList");
console.log(myListEl);

myListEl.innerHTML = myList.join();


// Activity 2
function gpaPoints(grade) {
  let gpaPoints = 0;
  switch (grade) {
    case "A":
      gpaPoints = 4;
			break;
    case "B":
      gpaPoints = 3;
      break;
    case "C":
      gpaPoints = 2;
			break;
    default:
      gpaPoints = -1;
  }
  return gpaPoints;
}

grades = ['A', 'B', 'C', 'B'];
gpa = grades.map(gpaPoints);
console.log(gpa);

// Activity 3
averageGPA = gpa.reduce((total, grade) => total + grade) / gpa.length;
console.log(averageGPA);

// Activity 4
fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape']
bigFruits = fruits.filter(fruit => fruit.length >= 6)
console.log(bigFruits);

// Activity 5
numbers = [12, 34, 21, 54]
const luckNumber = 21;
console.log(numbers.indexOf(luckNumber));