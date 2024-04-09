import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.89,
    GBP: 0.79,
    INR: 75.0,
    PKR: 280.0,
};
let user_Answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter from currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "to",
        type: "list",
        message: "Enter TO currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount ",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
]);
let fromAmount = currency[user_Answer.from]; //exchanged rate
let toAmount = currency[user_Answer.to]; //exchanged rate
let amount = user_Answer.amount;
let baseAmount = amount / fromAmount; // base amount
let convertAmount = baseAmount * toAmount;
console.log(convertAmount);
// more simply
// let userfromCurrency = user_Answer.from             //(instead of line 36)
// let usertoCurrency = user_Answer.to                 //(instead of line 37)
// let fromamount = currency[user_Answer.from];   // (instead of line 38)
// let toamount = currency[user_Answer.to];        //(instead of line 38)
