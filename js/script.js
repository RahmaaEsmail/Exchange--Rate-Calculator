'use strict';
// reference
const currencyOneEle = document.querySelector('#currency-one');
const currencyTwoEle = document.querySelector('#currency-two');
const rateOneEle = document.querySelector('.currency-one-rate');
const rateTwoEle = document.querySelector('.currency-two-rate');
const swapCurrencyText = document.querySelector('.swap-currency p');
const swapBtn = document.querySelector('.btn');

const calculateChangeCurrencyRate = async function() {

    const response = await fetch(`https://v6.exchangerate-api.com/v6/b1212ab5a4d7ebb728e330d5/latest/${currencyOneEle.value}`);
    const data = await response.json();

    const currencyList = await data.conversion_rates;

    rateTwoEle.value = (rateOneEle.value * currencyList[currencyTwoEle.value]).toFixed(2);

    swapCurrencyText.textContent = `1 ${currencyOneEle.value} = ${currencyList[currencyTwoEle.value]} ${currencyTwoEle.value}`;
  
}

//  Event listeners
currencyOneEle.addEventListener('change',calculateChangeCurrencyRate)
currencyTwoEle.addEventListener('change',calculateChangeCurrencyRate)
rateOneEle.addEventListener('input',calculateChangeCurrencyRate)
rateTwoEle.addEventListener('input',calculateChangeCurrencyRate)
swapBtn.addEventListener('click', function () {
    [currencyOneEle.value , currencyTwoEle.value] = [currencyTwoEle.value , currencyOneEle.value]
    calculateChangeCurrencyRate()
})  

calculateChangeCurrencyRate()