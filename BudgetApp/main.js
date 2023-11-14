const balanceEl         = document.querySelector(".balanca .value");
const incomeTotalEl     = document.querySelector(".income-total");
const outcomeTotalEl    = document.querySelector(".expense-total");
const incomeEl          = document.querySelector("#income-tracker");
const expenseEl         = document.querySelector("#expense-tracker");
const allEl             = document.querySelector("#all");
const incomeList        = document.querySelector("#income-tracker .list");
const expenseList       = document.querySelector("#expense-tracker .list");
const allList           = document.querySelector("#all .list");
const lists             = document.querySelectorAll(".list");

//Tabs
const expenseBtn        = document.querySelector(".tab1");
const incomeBtn         = document.querySelector(".tab2");
const allBtn            = document.querySelector(".tab3");

// Input Btns
const addExpense        = document.querySelector('.add-expense');
const expenseTitle      = document.querySelector("#expense-title-input")
const expenseAmount     = document.querySelector('#expense-amount-input');

const addIncome         = document.querySelector('.add-income');
const incomeTitle       = document.querySelector("#income-title-input")
const incomeAmount      = document.querySelector('#income-amount-input');

//Necessary variables
let ENTRY_LIST = [];
let balance = 0;
let amount  = 0;
let outcome = 0;

let [deleteIcon, editIcon] = ['fas fa-trash', 'far fa-edit'];
let income,expense;

//Expense Btn Event listener
expenseBtn.addEventListener("click",function () {
    show(expenseEl);
    hide([incomeEl,allList]);
    active(expenseBtn);
    inactive([incomeBtn,allBtn])    
})

//income Btn Event listener
incomeBtn.addEventListener("click",function () {
    show(incomeEl);
    hide([expenseEl,allList]);
    active(incomeBtn);
    inactive([expenseBtn,allBtn])    
})


//All Btn Event listener
allBtn.addEventListener("click",function () {
    show(allList);
    hide([incomeEl,expenseEl]);
    active(allBtn);
    inactive([incomeBtn,expenseBtn])    
})

//addExpense Event Listener
addExpense.addEventListener('click', budgetOut)

//addIncome Event Listener
addIncome.addEventListener('click',budgetIn);

//addExpense/addIncome Enter Key event listener
document.addEventListener('keypress', function (e) {
    if (e.key !== 'Enter') return;
    budgetOut(e);
    budgetIn(e)    
    
}) 

//BudgetOut
function budgetOut(e) {
    e.preventDefault()
    if (!expenseTitle.value || !expenseAmount.value) return;
    let expense = {
        type: 'expense',
        title: expenseTitle.value,
        amount: Number(expenseAmount.value),
        
    }
    ENTRY_LIST.push(expense)
   
    updateUI();
    clearInput([expenseTitle, expenseAmount]);
}

//budgetIn function
function budgetIn(e) {
    e.preventDefault();
    if (!incomeTitle.value || !incomeAmount.value) return;

    let income = {
        type: 'income',
        title: incomeTitle.value,
        amount: parseFloat(incomeAmount.value),
    }
    ENTRY_LIST.push(income)
    updateUI();
    clearInput([incomeTitle, incomeAmount]);
    
}

//updateUI function
function updateUI() { 
    balance = calculateBalance(income, outcome);
    income = calculateTotal("income",ENTRY_LIST)
    expense = calculateTotal("expense",ENTRY_LIST)

    console.log([balance, income, outcome])
    
}





// ClearInput function

function clearInput(inputs) {
    inputs.forEach(function (input) {
        input.value = '';       
    })
    
}

//calculateTotal function
function calculateTotal(type,list) {
    let sum = 0;
    list.forEach(function (entry) {
        if(entry.type === type ){
            sum += entry.amount
        }       
    });
    return sum;    
}

// calculate function
function calculateBalance(income, outcome) {
    return income - outcome;
    
}



//show function
function show(element) {
    element.classList.remove("hide");
    
}

//hide function
function hide(elements) {
    elements.forEach(function (element) {
        element.classList.add('hide')
        
    });    
}

//active Function
function active(element) {
    element.classList.add("active");    
}

//inactive Function
function inactive(elements) {
    elements.forEach(function (element) {
        element.classList.remove("active")              
    })    
}

