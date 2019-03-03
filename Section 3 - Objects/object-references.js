let myAccount = {
    name: 'Partha',
    expenses: 0,
    income: 0
};

let addExpense = function(account, amount){
    account.expenses += amount;
}

console.log(myAccount.expenses);
addExpense(myAccount, 15);
console.log(myAccount.expenses);
