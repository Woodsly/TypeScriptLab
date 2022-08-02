export{}

//#1
interface Mountain{
    Name: string;
    Height: number;
};

let Mountains: Mountain[] = [{Name: "Kilimanjaro", Height: 19341}, {Name: "Everest", Height: 29029}, {Name: "Denali", Height: 20310}];

function findNameOfTallestMountain(Mountains:Mountain[]):string{
    let tallest:string = "";
    let height:number = 0;
    for(let i:number = 0; i<Mountains.length; i++){
        if (Mountains[i].Height > height){
            height = Mountains[i].Height;
            tallest = Mountains[i].Name;
        }
    }
    return tallest;
}

let biggest:string = findNameOfTallestMountain(Mountains);
console.log(biggest);


//#2
interface Product{
    Name: string;
    Price: number;
};

let Products: Product[] = [{Name: "Rubik's cube", Price: 15.99}, {Name: "Spearmint gum", Price: 1.99}, {Name: "PC Mouse", Price: 49.99}];

function calcAverageProductPrice(Products:Product[]):number{
    let totalPrice:number = 0;
    let numberOfItems = Products.length;
    for(let i:number = 0; i<Products.length; i++){
        totalPrice += Products[i].Price;
    }
    let result:number = totalPrice/numberOfItems;
    return result;
}
let average:number = calcAverageProductPrice(Products);
console.log(average);


//#3
interface InventoryItem{
    Product: Product;
    Quantity: number;
};

let Inventory: InventoryItem[] = [
    {Product: {Name: "Motor", Price: 10.00}, Quantity: 10}, 
    {Product: {Name: "Sensor", Price: 12.50}, Quantity: 4}, 
    {Product: {Name: "LED", Price: 1.00}, Quantity: 20}
];

function calcInventoryValue(Items:InventoryItem[]):number{
    let totalValue:number = 0;
    for(let i:number = 0; i<Items.length; i++){
        totalValue += Items[i].Product.Price * Items[i].Quantity;
    }
    return totalValue;
}
let totalResult = calcInventoryValue(Inventory);
console.log(totalResult);