class student{
    Name;
    rollno;
    marks;
    static count = 0;

    constructor(n,r,m){
        this.Name = n;
        this.rollno = r;
        this.marks = m;
        student.count++;

    }
    display(){
        console.log(this.Name);
        console.log(this.rollno);
        console.log(this.marks);
        if(this.marks >= 8){
            console.log("Pass");
        } else{
            console.log("fail");
        }

    }
};
let s1 = new student("nitin kumar",129,8.85);
let s2 = new student("nikit",125,8);
let s3 = new student("naman",122,8.5);
s1.display();
s2.display();
s3.display();

console.log("total student:",student.count);