class Grocery {
    constructor(public name: string, public quantity: number, public foodGroup: string) {
    }
}

interface Item {
    name: string;
    quantity: number;
    foodGroup: string;
}

function printList(item: Item) {
    return "Name: " + item.name + ", Quantity: " + item.quantity + ", Food group: " + item.foodGroup;
}

let milk = new Grocery("Milk", 3, "Dairy");
let bread = new Grocery("Bread", 6, "Grain");
let eggs = new Grocery("Eggs", 11, "Protein");

let shoppingList = [milk, bread, eggs];

for (let item of shoppingList) {
    document.body.innerText += printList(item);
    var lineBreak = document.createElement("BR");
    document.body.appendChild(lineBreak);}