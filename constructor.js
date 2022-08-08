'use strict';

const foodArray = [];


function Foods(foodName, type, price) {
    this.foodName = foodName;
    this.type = type;
    this.price = price;


    foodArray.push(this);
};


let i = 1000;
Foods.prototype.foodID = function () {
    this.foodID = i;
    i ++
}







