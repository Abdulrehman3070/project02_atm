// This somewhat complex TypeScript/Node.js project is a console-based application. When the system starts the user is prompted with a user id and user pin. After entering the details successfully, the ATM functionalities are unlocked. All the user data is generated randomly.
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
const myUserId = "abdul111";
const myPin = 1234;
let userIDAnswer = await inquirer.prompt([
    {
        name: "UserID",
        message: "Enter your UserID",
        type: "input",
    },
]);
let pinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        message: "Enter your pin",
        type: "password",
        mask: "*",
    },
]);
if (Number(pinAnswer.Pin) === myPin && userIDAnswer.UserID === myUserId) {
    console.log("Correct Pin Code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "Operation",
            message: "Please Select Option",
            type: "list",
            choices: ["withdraw", "Check Balance", "Exit"],
        },
    ]);
    console.log(operationAns.Operation);
    if (operationAns.Operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            console.log(`Your withdrawl amount is ${amountAns.amount}`);
            myBalance -= amountAns.amount;
            console.log(`Now Your Balance is ${myBalance}$`);
        }
        else {
            console.log(`Sorry, You dont have ${amountAns.amount}$ amount in your account`);
        }
    }
    else if (operationAns.Operation === "Check Balance") {
        console.log(`Your Balance is ${myBalance}$`);
    }
    else if (operationAns.Operation === "Exit") {
        console.log("Thank you for using our ATM service!");
    }
}
else if (userIDAnswer.UserID !== myUserId && pinAnswer.Pin !== myPin) {
    console.log("Incorrect UserID AND Pin");
}
else if (userIDAnswer.UserID !== myUserId) {
    console.log("Incorrect userId");
}
else if (Number(pinAnswer.Pin) !== myPin) {
    console.log("Incorrect Pin");
}
