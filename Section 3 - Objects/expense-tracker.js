let addIncome = function(account, amount){
    account.balance += amount;
    account.earnings += amount;
};

let addExpense = function(account, amount){
    if(amount > account.balance){
        console.log('invalid expenditure!!');
        return;
    }
    account.balance -= amount;
    account.expenses += amount;
};

let getSummary = function(account){
    console.log(`This account has ${account.balance}\$ left. Total spendings have been ${account.expenses}\$ and total earnings have been ${account.earnings}\$`)
};

let resetAccount = function(account){
    account.balance = 0;
    account.earnings = 0;
    account.expenses = 0;
};

account = {
    balance: 0,
    earnings: 0,
    expenses: 0
};

getSummary(account, 2.5);
addIncome(account, 2.5);
addExpense(account, 12.5);
addIncome(account, 2.5);
getSummary(account, 2.5);
resetAccount(account, 2.5);
getSummary(account, 2.5);