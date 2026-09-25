class employee{
    id;
    name;
    basicsalary;

    constructor(i,n,b){
        this.id = i;
        this.name = n;
        this.basicsalary = b;
    }
    calculatesalary(){
        return this.basicsalary;
    }
    
}
class manager extends employee{
    incentive;

    constructor(i,n,b,a){
        super(i,n,b);
        this.incentive = a;
    }
    calculatesalary(){
        return this.basicsalary + this.incentive;
    }
}
let e1 = new employee(129,"Nitin",200000);
let e2 = new manager(122,"naman",20000,2000);
console.log("employee salary:",e1.calculatesalary());
console.log("manager salary:",e2.calculatesalary());
