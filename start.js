// Data

let date = new Date();
date.setDate(date.getDate() + 14)
let currentDate = date.toISOString().substring(0,10);
let dataDis = document.getElementById('currentDate')
dataDis.setAttribute("value", currentDate);

// Walidacja

let inputName = document.getElementById("input-name");
let inputSurname = document.getElementById("input-surname");
let inputAdress = document.getElementById("input-adress");
let inputLeasing = document.getElementById("input-leasing");
let inputCash = document.getElementById("input-cash");

function checkInputData() {
    if (inputName.value == "" || inputName.value == null) {
        inputName.classList.add("is-invalid");
    } else {
        inputName.classList.remove("is-invalid");
    }
    if (inputSurname.value == "" || inputSurname.value == null) {
        inputSurname.classList.add("is-invalid");
    } else {
        inputSurname.classList.remove("is-invalid");
    }
    if (inputAdress.value == "" || inputAdress.value == null) {
        inputAdress.classList.add("is-invalid");
    } else {
        inputAdress.classList.remove("is-invalid");
    }
    if (inputLeasing.checked == false && inputCash.checked == false) {
        inputLeasing.classList.add("is-invalid");
        inputCash.classList.add("is-invalid");
    } else {
        inputLeasing.classList.remove("is-invalid");
        inputCash.classList.remove("is-invalid");
    };
}

// Cena całkowita

function inputPticeData() {
    if ()
}

let totalPrice = document.getElementById("total-price");
let Car1
totalPRice = 
            
// Local Storage

localStorage.setItem('form-payment', 'wartoscElementu');
            
            
function sendLocal() {
    localStorage.setItem(inputName.value, inputSurname.value);
}

// RADIOBUTTON 

  /**
   * Set the new checked state into the localStorage.
   * Only accepts a boolean value as state.
   */
  function setIsChecked(state) {
    if (typeof state === 'boolean') {
      localStorage.setItem('checked', state);
    }
  }
  
/**
 * Get the checked state from the localStorage
 * Return the value as a boolean.
 */
 function getIsChecked() {
    const storedValue = localStorage.getItem('checked');
    return Boolean(storedValue);
  }
  
  // Store the element in a constant, as it will probably never change.
const checkBoxElement = document.getElementById('chk');

// Get the current value from the localStorage.
// The result will be true or false.
const isChecked = getIsChecked();

// Set the checked value based on the localStorage value.
checkBoxElement.checked = isChecked;