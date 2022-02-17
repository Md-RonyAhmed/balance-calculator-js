function getInputValue(expense) {
  const input = document.getElementById(expense + '-input');
  const amount = parseFloat(input.value);
  input.value = '';
  
  return amount;
}


function updateTotalExpense(foodValue, rentValue, clothValue) {
  const sum = foodValue + rentValue + clothValue;
  const expenseText = document.getElementById('total-expense');
  const totalExp = expenseText.innerText;
  const totalExpense = parseFloat(totalExp);
  expenseText.innerText = sum;
  return sum;
}

function updateTotalBalance(incomeValue,sum) {
  const balanceText = document.getElementById('balance-amount');
  const balance = balanceText.innerText;
  const totalBalance = parseFloat(balance);
  const total = incomeValue - sum;
  balanceText.innerText = total;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
  const incomeInput = getInputValue('income');
  const foodInput = getInputValue('food');
  const rentInput = getInputValue('rent');
  const clothInput = getInputValue('cloth');
  if (incomeInput >= 0 && foodInput >= 0 && rentInput >= 0 && clothInput >= 0) {
    const sum = updateTotalExpense(foodInput, rentInput, clothInput);
    updateTotalBalance(incomeInput, sum);
  } else {
    
  }

});