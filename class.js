let person = {
    name:"nitin",
    age:20,
    branch:"aiml",
    about:function(){
        return this.name +" "+this.age+" "+this.branch;
    },
     my: function(){
        console.log("my name is nitin and i am learning javascript")

    }

};
//to access function
console.log(person.about());

//to call fuction
person.my();

//to access only keys
console.log(Object.keys(person));

//to access only values
console.log(Object.values(person));

//to access both
console.log(Object.entries(person));

//to add another property in object
person.certificates = "ML";
console.log(person);

//to update propert in object
person.name = "Nitin kumar";
console.log(person);

//object destructuring
const{name,age} = person;
console.log(name,age);

//using loop to print keys
for(let keys of Object.keys(person)){
    console.log(keys);
}
//using loop to print values
for(let values of Object.values(person)){
    console.log(values);
}
//using to print both 
for(let entries of Object.entries(person)){
    console.log(entries);
}