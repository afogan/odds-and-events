let bank = [];
let odds = [];
let evens = [];

function addNumber (number) {
bank = [...bank, number]
render ();
}

function sortOne () {
const number = bank[0];

    if (number%2 === 0) {
    evens = [...evens, number]; 
    bank = bank.slice(1);

    } else {
        odds = [...odds, number]; 
        bank = bank.slice(1);
    }
    render ();
}

function sortAll () {
evens = [...evens, ...bank.filter(n => n % 2 === 0)]; 
odds = [...odds, ...bank.filter(n => n % 2 !== 0)]; 
bank = [];    

render ();
}
function Form () {
    const $form = document.createElement ("div");
    $form.innerHTML = `
    <label>Add a number to the bank</label>
    <input id="numberInput" type="number" />
    <button id="addBtn">Add Number</button>
    <button id="sortOneBtn">Sort One</button>
    <button id="sortAllBtn">Sort All</button>
    `;
    $form.querySelector("#sortOneBtn").addEventListener("click", () => sortOne());
    $form.querySelector("#sortAllBtn").addEventListener("click", () => sortAll());
    $form.querySelector ("#addBtn").addEventListener ("click", () => {
        const value = Number ($form.querySelector("#numberInput").value);
        addNumber(value);
    });
    return $form;
}
function Bank () {
    const $bank = document.createElement("div");
    $bank.innerHTML = `
    <h2>Bank</h2>
    <div id="bankNumbers" style="border: 1px solid black; border-radius: 8px; padding: 10px;"></div>
    `;
    
  const $bankNumbers = $bank.querySelector("#bankNumbers");
  bank.forEach(number => {
  const $number = document.createElement("p");
  $number.textContent = number;
  $bankNumbers.appendChild($number);
});
return $bank;
}

function Odds() {
const $odds = document.createElement("div");
$odds.innerHTML= `
<h2>Odds</h2>
<div id="oddNumbers" style="border: 1px solid black; border-radius: 8px; padding: 10px;"></div>
`;
const $oddNumbers = $odds.querySelector("#oddNumbers");
odds.forEach(number => {
  const $number = document.createElement("p");
  $number.textContent = number;
  $oddNumbers.appendChild($number);
});
return $odds;
}

function Evens () {
const $evens = document.createElement("div");
$evens.innerHTML=`
<h2>Evens</h2>
<div id="evenNumbers" style="border: 1px solid black; border-radius: 8px; padding: 10px;"></div>
`;
const $evenNumbers = $evens.querySelector("#evenNumbers");
evens.forEach(number => {
    const $number = document.createElement("p");
    $number.textContent = number;
    $evenNumbers.appendChild($number);
});
return $evens;
}

function render () {
    const $app = document.querySelector ("#app");
    $app.innerHTML = `
    <h1>Odds, and Evens, and Events, Oh My!</h1>
    <p id="Form"> </p>
    <p id="Bank"> </p>
    <p id="Odds"> </p>
    <p id="Evens"> </p>
  `;

  $app.querySelector("#Form").replaceWith(Form());
  $app.querySelector("#Bank").replaceWith(Bank());
  $app.querySelector("#Odds").replaceWith(Odds());
  $app.querySelector("#Evens").replaceWith(Evens());
}
render ();