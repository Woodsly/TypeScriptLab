"use strict";
exports.__esModule = true;
;
var Mountains = [{ Name: "Kilimanjaro", Height: 19341 }, { Name: "Everest", Height: 29029 }, { Name: "Denali", Height: 20310 }];
function findNameOfTallestMountain(Mountains) {
    var tallest = "";
    var height = 0;
    for (var i = 0; i < Mountains.length; i++) {
        if (Mountains[i].Height > height) {
            height = Mountains[i].Height;
            tallest = Mountains[i].Name;
        }
    }
    return tallest;
}
var biggest = findNameOfTallestMountain(Mountains);
console.log(biggest);
;
var Products = [{ Name: "Rubik's cube", Price: 15.99 }, { Name: "Spearmint gum", Price: 1.99 }, { Name: "PC Mouse", Price: 49.99 }];
function calcAverageProductPrice(Products) {
    var totalPrice = 0;
    var numberOfItems = Products.length;
    for (var i = 0; i < Products.length; i++) {
        totalPrice += Products[i].Price;
    }
    var result = totalPrice / numberOfItems;
    return result;
}
var average = calcAverageProductPrice(Products);
console.log(average);
;
var Inventory = [
    { Product: { Name: "Motor", Price: 10.00 }, Quantity: 10 },
    { Product: { Name: "Sensor", Price: 12.50 }, Quantity: 4 },
    { Product: { Name: "LED", Price: 1.00 }, Quantity: 20 }
];
function calcInventoryValue(Items) {
    var totalValue = 0;
    for (var i = 0; i < Items.length; i++) {
        totalValue += Items[i].Product.Price * Items[i].Quantity;
    }
    return totalValue;
}
var totalResult = calcInventoryValue(Inventory);
console.log(totalResult);
