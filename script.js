// get the all input value
function getInputValue(expense) {
    const input = document.getElementById(expense + '-input');
    const amount = parseFloat(input.value);
    return amount;
}
// By clearing all the input field
function clearInput() {
  const inputIncome = document.getElementById('income-input');
  const val1 = parseFloat(inputIncome.value);
  inputIncome.value = '';

  const inputDiscount = document.getElementById('save-input');
  const val2 = parseFloat(inputDiscount.value);
  inputDiscount.value = '';
  const inputFood = document.getElementById('food-input');
  const val3 = parseFloat(inputFood.value);
  inputFood.value = '';
  const inputRent = document.getElementById('rent-input');
  const val4 = parseFloat(inputRent.value);
  inputRent.value = '';
  const inputCloth = document.getElementById('cloth-input');
  const val5 = parseFloat(inputCloth.value);
  inputCloth.value = '';
}
// update the total expenses
function updateTotalExpense(isTrue, foodValue, rentValue, clothValue) {
  if (isTrue == true) {
    const sum = foodValue + rentValue + clothValue;
    const expenseText = document.getElementById('total-expense');
    const totalExp = expenseText.innerText;
    const totalExpense = parseFloat(totalExp);
    expenseText.innerText = sum;
    return sum; 
  } else {
    const expenseText = document.getElementById('total-expense');
    const totalExp = expenseText.innerText;
    const totalExpense = parseFloat(totalExp);
    expenseText.innerText = 0;
  }
}
// Update the total balance 
function updateTotalBalance(isTrue,incomeValue,sum) {
  if (isTrue == true) {
    const balanceText = document.getElementById('balance-amount');
    const balance = balanceText.innerText;
    const totalBalance = parseFloat(balance);
    const total = incomeValue - sum;
    balanceText.innerText = total;
    return total;
  } else {
    const balanceText = document.getElementById('balance-amount');
    const balance = balanceText.innerText;
    const totalBalance = parseFloat(balance);
    const total = incomeValue - sum;
    balanceText.innerText = 0;
  }
  
}

// selecting calculate button and call other important function 
document.getElementById('calculate-btn').addEventListener('click', function () {
  const incomeInput = getInputValue('income');
  const foodInput = getInputValue('food');
  const rentInput = getInputValue('rent');
  const clothInput = getInputValue('cloth');
  const success = document.getElementById('notify-success');
  const error = document.getElementById('notify-fail');
  //handling error
  if (isNaN(incomeInput) == true || isNaN(foodInput) == true || isNaN(rentInput) == true || isNaN(clothInput) == true) {
    alert('Please enter only positive numbers');
  }
  if (incomeInput >= 0 && foodInput >= 0 && rentInput >= 0 && clothInput >= 0) {
    const sum = updateTotalExpense(true,foodInput, rentInput, clothInput);
    if (incomeInput < sum) {
      alert("Total expenses can't be greater than Total income...");
      updateTotalExpense(false, foodInput, rentInput, clothInput);
      updateTotalBalance(false, incomeInput, sum);
    } else {
      updateTotalBalance(true,incomeInput, sum);
    }
    success.style.display = 'block';
    error.style.display = 'none';
  } else {
    error.style.display = 'block';
    success.style.display = 'none';
  }

});

// selecting save button and call other important function
document.getElementById('save-btn').addEventListener('click', function () {
  //calculate saving amount
  const discountInput = getInputValue('save');
  const incomeInput = getInputValue('income');
  if (isNaN(discountInput) == true) {
    alert('Please enter only positive numbers not strings');
  }
  if (discountInput < 0) {
    alert('Please enter only positive amount of discount');
  } else {
    const savingAmount = (incomeInput * discountInput) / 100;
    const savingText = document.getElementById('saving-amount');
    const saving = savingText.innerText;
    const totalSaving = parseFloat(saving);
    // calculate totalSaving amount
    const foodInput = getInputValue('food');
    const rentInput = getInputValue('rent');
    const clothInput = getInputValue('cloth');
    const sum = updateTotalExpense(true, foodInput, rentInput, clothInput);
    const totalSavingAmount = updateTotalBalance(true, incomeInput, sum);
    // calculate remaining balance
    const remainBalanceText = document.getElementById('remaining-balance');
    const remain = remainBalanceText.innerText;
    const balanceSaving = parseFloat(remain);
    const totalBalanceSave = totalSavingAmount - savingAmount;
    remainBalanceText.innerText = totalBalanceSave;
    savingText.innerText = savingAmount;
  }
  
  // clear the all input field
  clearInput();
  
});