let product = {
    p_id : 101,
    p_name : "shirt",
    p_price : 200,
    p_quantity : 3,

    cost : function(){
        return this.p_price * this.p_quantity;
    },
    update_quantity:function(new_quantity){
        this.p_quantity = new_quantity;
    },
    display:function(){
        console.log("Product id:" + this.p_id);
        console.log("Product name:" + this.p_name);
        console.log("product price:" + this.p_price);
        console.log("Product quantity:") + this.p_quantity;
        console.log("cost:" + product.cost());
    }
};

//calling cost function
product.cost();

//calling update quantity
product.update_quantity(5);

//calling cost function after updating quantity
product.cost();

//display funtion
product.display();

//printing keys
console.log(Object.keys(product));

//printing values
console.log(Object.values(product));

//printing both
console.log(Object.entries(product));