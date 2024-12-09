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
        return `Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}.`;
    }
}