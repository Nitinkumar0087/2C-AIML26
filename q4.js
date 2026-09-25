class product{
    productId;
    productName;
    productPrice;

    constructor(I,N,P){
        this.productId = I;
        this.productName = N;
        this.productPrice = P;
    }
    getDiscountPrice(x){
        console.log("Final Price After Discount:");
        return this.productPrice - x;
    }
    display(){
        console.log("Product Id:",this.productId);
        console.log("Product Name:",this.productName);
        console.log("Product Price:",this.productPrice);
    }
    static comparePrice(p1,p2){
        if(p1.productPrice > p2.productPrice){
            console.log("It has higher price:",p1.productName);
        } else if(p1.productPrice < p2.productPrice){
            console.log("It has higher price:",p2.productName);
        } else{
            console.log("Both has same price");
        }
    }
}
class electronics extends product{
    warranty;

    constructor(I,N,P,W){
        super(I,N,P);
        this.warranty = W;
    }
    displaywarrenty(){
        super.display();
        console.log("It has 2 years of warrenty");
    }
}
let p1 = new product(1,"iron",250);
let p2 = new electronics(2,"microwave",300);

//dicount
console.log(p1.getDiscountPrice(50));

//compare
product.comparePrice(p1,p2);

//display
console.log(p1.display());
console.log(p2.display());

