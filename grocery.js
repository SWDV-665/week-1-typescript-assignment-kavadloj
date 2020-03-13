var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, foodGroup) {
        this.name = name;
        this.quantity = quantity;
        this.foodGroup = foodGroup;
    }
    return Grocery;
}());
function printList(item) {
    return "Name: " + item.name + ", Quantity: " + item.quantity + ", Food group: " + item.foodGroup;
}
var milk = new Grocery("Milk", 3, "Dairy");
var bread = new Grocery("Bread", 6, "Grain");
var eggs = new Grocery("Eggs", 11, "Protein");
var shoppingList = [milk, bread, eggs];
for (var _i = 0, shoppingList_1 = shoppingList; _i < shoppingList_1.length; _i++) {
    var item = shoppingList_1[_i];
    document.body.innerText += printList(item);
    var lineBreak = document.createElement("BR");
    document.body.appendChild(lineBreak);
}
