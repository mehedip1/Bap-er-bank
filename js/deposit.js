document.getElementById('btn-deposit').addEventListener('click',function(){
    // console.log('deposit button clickes');
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-3 get the current deposit total

    const  depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const perviousDepositTotal = parseFloat(previousDepositTotalString);
    console.log(typeof perviousDepositTotal);

    // step-4 add numbers

    const currentDepositTotal = perviousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // step-5 balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const perviousBalanceTotalString = balanceTotalElement.innerText;

    const previousBalanceTotal = parseFloat(perviousBalanceTotalString);

    // step-6 total balnce

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotalElement.innerText = currentBalanceTotal;





    depositField.value = '';
})