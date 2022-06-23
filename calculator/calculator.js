window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 250000;
  document.getElementById("loan-years").value = 15;
  document.getElementById("loan-rate").value = 4;

  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const newMonthly = calculateMonthlyPayment(getCurrentUIValues());

  if (newMonthly) {
    updateMonthly(newMonthly);
  }
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const periodicRate = values.rate / 1200;
  const totalPayments = values.years * 12;
  let newMonthlyPayment = (values.amount * periodicRate) / (1 - (1 + periodicRate) ** (-1 * totalPayments));
  if (!newMonthlyPayment) {
    alert("Enter Numbers please");
    return false;
  }
  newMonthlyPayment = newMonthlyPayment.toFixed(2).toString();
  return newMonthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = monthly;
}
