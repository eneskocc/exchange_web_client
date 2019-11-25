const amountElement=document.querySelector("#amount");
const firstSelect=document.querySelector("#firstCurrency");
const secondSelect=document.querySelector("#secondCurrency");

const currency=new Currency("USD","TRY");
const ui=new UI(firstSelect,secondSelect);
eventListeners();

function eventListeners() {
    amountElement.addEventListener("input",excahngeCurrency);
    firstSelect.onchange=function(){
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.firstChange();
    };
    secondSelect.onchange=function(){
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.secondChange();
    };
}

function excahngeCurrency() {
    currency.changeAmount(amountElement.value);
    
    currency.exchange()
    .then(result=>{
        ui.displayResult(result);
    })
    .catch(err=>console.log(err));
}