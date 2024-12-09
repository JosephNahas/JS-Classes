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
        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;
    }

    static applyDiscount(products, discount){
        
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

// Two instances of perishable products properties
let milk = new PerishableProductProperties('Milk', 7.50, 9, '2024-12-26');
let tofu = new PerishableProductProperties('Tofu', 4.75, 5, '2025-01-16');