import { dbank } from "../../declarations/dbank";

async function handleWindowLoad() {
  await updateBalance();
}

async function submitForm(event) {
  event.preventDefault();

  const submitButton = event.target.querySelector('#submit-btn');
  submitButton.setAttribute('disabled', true);

  const inputField = document.querySelector('#input-amount');
  const withdrawalField = document.querySelector('#withdrawal-amount');

  if (inputField.value.length !== 0) {
    await dbank.topUp(parseFloat(inputField.value));
  }

  if (withdrawalField.value.length !== 0) {
    await dbank.withdraw(parseFloat(withdrawalField.value));
  }
  
  await dbank.compound();
  await updateBalance();
  
  clearFields(inputField, withdrawalField);

  submitButton.removeAttribute('disabled');
}

function clearFields() {
  const fields = [...arguments];
  fields.forEach((field) => {
    field.value = '';
  });
}

async function updateBalance() {
  var accountBalance = await dbank.getbalance();
  accountBalance = Math.round(accountBalance * 100) / 100;
  var balance = document.querySelector('#value');
  balance.innerHTML = accountBalance;
}

window.addEventListener('load', handleWindowLoad);

document.querySelector('form').addEventListener('submit', submitForm);
