//oops 
//what is class: class is template where we diclare data members,fuctions etc.
//object:reference variable

class student{
    //non-parameterize constructor

    /*constructor(){
        console.log("hello world");
    }*/
   static name = "nitin";

    //parameterize constructor
    constructor(name){
        this.name = name;
        console.log(this.name);
    }
    //normal constructorf
    /*info(){
        console.log("student information");
        console.log(this.name);
    }*/
    //static method
    static display(){
        console.log(this.name);
    }

};
//let s1 = new student();
let s2 = new student("nitin");
//s2.info();
student.display();