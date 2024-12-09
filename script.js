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
        for (const product of products){ // for each product
            product.price -= (discount * product.price); // reduce product price by the discount percentage of the price
        }
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

class Store{
    //constructor
    constructor(inventory){
        this.inventory = inventory; // inventory array of products and perishable products
    }

    // methods
    addProduct(product){
        this.inventory.push(product); // add a product to the inventory
    }

    getInventoryValue(){
        let totalValue = 0;
        for (const product of this.inventory){
            totalValue += product.getTotalValue(); // add up the value of all items in inventory
        }
        return totalValue;
    }

    findProductByName(name){
        // Try to find product in inventory and return it, if not found return null
        const productFound = this.inventory.find((product) => product.name == name);
        if (productFound)
            return productFound;
        else
            return null;
    }
}

let paperTowel = new ProductProperties('Paper Towel', 12.50, 5);
let facialTissue = new ProductProperties('Facial Tissue', 11.75, 7);
let bathroomTissue = new ProductProperties('Bathroom Tissue', 18.25, 8);