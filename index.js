// const operator = prompt("Entrez un opérateur");

// let result = 0;

//  function calculator(operator, firstValue, secondValue) {
//     switch (operator) {
//         case "+":
//           result = firstValue + secondValue;
//           break;
//         case "-":
//           result = firstValue - secondValue;
//           break;
//         case "*":
//           result = firstValue * secondValue;
//           break;
//         case "/":
//           result = firstValue / secondValue;
//           break;
//         default:
//           console.log("Invalid operator");
//       }
//       return result;
//  }

// console.log(calculator(operator, 1, 2));


/* Price is right*/

// const rightPrice = Math.ceil(Math.random() * 100);
// const namePlayer = prompt("Enter your name");
// let price = prompt("Enter your price");

// while (parseInt(price) !== rightPrice) {
//     if (parseInt(price) > rightPrice) {
//         console.log("It's less");
//     } else if (parseInt(price) < rightPrice) {
//         console.log("It's more");
//     }
//     price = prompt("Enter your price");
// }

// console.log(`Well done ${namePlayer} you won!`);

const rightPrice = Math.ceil(Math.random() * 100);
const namePlayer = prompt("Enter your name");
let price;
let found = false;

for (_ ; !found; _) {
    price = prompt("Enter your price");
    if (parseInt(price) === rightPrice) {
        found = true;
    } else if (parseInt(price) > rightPrice) {
        console.log("It's less");
    } else if (parseInt(price) < rightPrice) {
        console.log("It's more");
    }
}

console.log(`Well done ${namePlayer} you won!`);