// * 1.add withdrew handler with withdrew button

 document.getElementById('btn-withdraw').addEventListener('click',function(){

   
    const withdrawField = document.getElementById('withdraw-field');

    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);
   
    

   //  // step -3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString );
   //  step-4
   const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
   withdrawTotalElement.innerText = currentWithdrawTotal;

   // step-5
   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);

   // // step-6
   const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;

   balanceTotalElement.innerText = newBalanceTotal;

   // // step-7

   withdrawField.value = '';


 })