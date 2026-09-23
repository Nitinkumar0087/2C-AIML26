class bankAccount{
    AccountNo;
    HolderName;
    Balance;

    constructor(A,H,B){
        this.AccountNO = A;
        this.HolderName = H;
        this.Balance = B;
    }
    deposit(money){
        console.log("Enter Amount");
        this.Balance += money;
        console.log(money);

    }
    withdraw(money){
        if(money > this.withdraw){
            console.log("Insufficient balance");
        } else{
            console.log(money);
            this.Balance -= money
            console.log("Yes allowed");
        }
    }
    display(){
        console.log("Amount:",this.Balance);
        console.log("Holder Name:",this.HolderName);
        console.log("Balance:",this.Balance);
    }
    static info(){
        console.log("ABC BANK");
        console.log("GHAZIABAD");
    }
};
let s1 = new bankAccount(129,"Nitin",1000);
s1.deposit(200);
s1.withdraw(800);
s1.display();
bankAccount.info();