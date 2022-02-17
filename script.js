function getInputElement(expense) {
  const incomeInput = document.getElementById(expense +'-input');
  const foodInput = document.getElementById(expense +'-input');
  const rentInput = document.getElementById(expense +'-input');
  const clothInput = document.getElementById(expense +'-input');
}

document.getElementById('calculate-btn').addEventListener('click', function () {
  const incomeValue = parseFloat(incomeInput.value);
  const food = foodInput.value;
  const rent = rentInput.value;
  const cloth = clothInput.value;
  const foodValue = parseFloat(food);
  const rentValue = parseFloat(rent);
  const clothValue = parseFloat(cloth);
  const sum = foodValue + rentValue + clothValue;
  const total = incomeValue - sum;
 
  const expenseText = document.getElementById('total-expense');
  const totalExp = expenseText.innerText;
  const totalExpense = parseFloat(totalExp);
  expenseText.innerText = sum;
  incomeInput.value = '';
  foodInput.value = '';
  rentInput.value = '';
  clothInput.value = '';
  
  const balanceText = document.getElementById('balance-amount');
  const balance = balanceText.innerText;
  const totalBalance = parseFloat(balance);
  balanceText.innerText = total;

});