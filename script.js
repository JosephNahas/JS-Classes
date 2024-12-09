class ProductProperties{
    // Constructor
    constructor(name, price, quantity){
        this.name = name; // name of product
        this.price = price; // price of product
        this.quantity = quantity; // quantity of product
    }

    // Methods
    getTotalValue(){ 
        return this.price * this.quantity;
    }

    toString(){ // return a string including the product details
        return `Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`;
    }
}

class PerishableProductProperties extends ProductProperties{
    // Constructor
    constructor(name, price, quantity, expirationDate){
        super(name, price, quantity); // Call the parent constructor
        this.expirationDate = expirationDate; // expiration date of product
    }

    // Override toString
    toString(){
        super() + `, Expiration Date: ${this.expirationDate}`;
    }
}