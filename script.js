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
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
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
        return super.toString() + `, Expiration Date: ${this.expirationDate}`;
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
            return productFound.toString();
        else
            return null;
    }

    // return all the store products by name
    productNames(){
        let productNames = '';
        for (const product of this.inventory){
            productNames += `${product.name}, `;
        }
        return productNames;
    }
}

// 3 more products, 5 total including the previous 2
let paperTowel = new ProductProperties('Paper Towel', 12.50, 5);
let facialTissue = new ProductProperties('Facial Tissue', 11.75, 7);
let bathroomTissue = new ProductProperties('Bathroom Tissue', 18.25, 8);

// Store products in myStore
let myStore = new Store([milk, tofu, paperTowel, facialTissue, bathroomTissue]);

// print products by name
console.log('Products in the store: ' + myStore.productNames());

// before discount
console.log(`total store Inventory value before discount: ${myStore.getInventoryValue()}`);

// apply discount
ProductProperties.applyDiscount(myStore.inventory, 0.15);

// after discount
console.log(`total store Inventory value after discount: ${myStore.getInventoryValue().toFixed(2)}`);

// find tofu in the store
console.log('looking for tofu ' + myStore.findProductByName('Tofu'));

// add eggs to the store
let eggs = new ProductProperties('Eggs', 6.50, 2);
myStore.addProduct(eggs);

// print products after adding eggs
console.log('Products in the store after adding eggs: ' + myStore.productNames());
