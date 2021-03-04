
import React from 'react';

let userId="Id_45756";
let budget={
  totalAmount:1000,
  spentAmount:452.78,
  month:"March",
  daysLeft:5
};

function App(props){
  return (
    <div id="budget">
      <h1>$ {budget.spentAmount} / {budget.totalAmount}</h1>
      <img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/65557iBB580A7889411925/image-size/large?v=1.0&px=999" alt="progress" /><br /><br />
      <button type="button" name="button" class="btn btn-outline-primary">See Details <i class="fas fa-chart-pie"></i></button><br /><br />
      <p>
        {userId}, still have {budget.daysLeft} days until next month...
      </p>
    </div>);
}

export default App;
// spendingTag.innerHTML =;
// console.log(userTag);
// userTag.innerHTML = userId;
// month.innerHTML = budget.daysLeft;
// let userTag = document.querySelector("#username");
// let spendingTag = document.querySelector("h1");
// let month = document.querySelector("#month");
