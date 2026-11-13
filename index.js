// 1. Розрахунок вартості покупки
const priceInput = prompt("Enter the product price: ");
const quantityInput = prompt("Enter the product quantity: ");

const price = Number(priceInput);
const quantity = Number(quantityInput);

let total = price * quantity;
const originalTotal = total;
total -= total * 0.15;

console.log(originalTotal);
console.log(total);

console.log(typeof priceInput);
console.log(typeof quantityInput);

console.log(typeof price);
console.log(typeof quantity);

console.log(typeof total);
console.log(Number.isNaN(total));

// 2. Обробка тексту
const cityInput = prompt("Enter the city name: ");
const countryInput = prompt("Enter the country name: ");

const city = cityInput.trim();
const country = countryInput.trim();

console.log(city.toLowerCase());
console.log(country.toUpperCase());

console.log(city.length);
console.log(country.length);

console.log(city.includes("a"));

console.log(city.indexOf("a"));
console.log(city.lastIndexOf("a"));

const message = `I live in ${city}, ${country}`;
console.log(message);

// 3. Робота з об'єктом Math
const a = 23;
const b = 5;

const sum = a + b;
const difference = a - b;
const product = a * b;
const quotient = a / b;

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);

console.log(Math.round(quotient));
console.log(Math.floor(quotient));
console.log(Math.ceil(quotient));

console.log(Math.min(a, b));
console.log(Math.max(a, b));
