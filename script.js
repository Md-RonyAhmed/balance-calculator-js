function getInputValue(expense) {
  const input = document.getElementById(expense + '-input');
  const amount = parseFloat(input.value);
  input.value = '';
  
  return amount;
}


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

function updateTotalBalance(isTrue,incomeValue,sum) {
  if (isTrue == true) {
    const balanceText = document.getElementById('balance-amount');
    const balance = balanceText.innerText;
    const totalBalance = parseFloat(balance);
    const total = incomeValue - sum;
    balanceText.innerText = total;
  } else {
    const balanceText = document.getElementById('balance-amount');
    const balance = balanceText.innerText;
    const totalBalance = parseFloat(balance);
    const total = incomeValue - sum;
    balanceText.innerText = 0;
  }
  
}

document.getElementById('calculate-btn').addEventListener('click', function () {
  const incomeInput = getInputValue('income');
  const foodInput = getInputValue('food');
  const rentInput = getInputValue('rent');
  const clothInput = getInputValue('cloth');
  const success = document.getElementById('notify-success');
  const error = document.getElementById('notify-fail');
  if (incomeInput >= 0 && foodInput >= 0 && rentInput >= 0 && clothInput >= 0) {
    const sum = updateTotalExpense(true,foodInput, rentInput, clothInput);
    if (incomeInput < sum) {
      alert("Total expenses can't be greater than Total income...")
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