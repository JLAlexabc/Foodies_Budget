


//1. harcode data
//2. show budget

let userId="Id_45756";
let budget={
  totalAmount:1000,
  spentAmount:452.78,
  month:"March",
  daysLeft:5
};
let userTag = document.querySelector("#username");
let spendingTag = document.querySelector("h1");
let month = document.querySelector("#month");

spendingTag.innerHTML ="$ "+ budget.spentAmount + " / " +budget.totalAmount;
console.log(userTag);
userTag.innerHTML = userId;
month.innerHTML = budget.daysLeft;
// console.log(budget.spentAmount);
// console.log(budget.totalAmount);
// console.log(budget.month);
