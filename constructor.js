'use strict';

const foodArray = [];


function Foods(foodName, type, price) {
    this.foodName = foodName;
    this.type = type;
    this.price = price;


    foodArray.push(this);
};


let i = 1000;
Foods.prototype.foodID = function() {
    this.foodID = i;
    i ++
}


const bodyEl  = document.getElementsByTagName('body');




let formEl = document.getElementById('form');

if(formEl != null) {
    formEl.addEventListener('submit', handleSubmit);

}



function handleSubmit(event) {
    //event.preventDefault();
    console.log(event);

    let name = event.target.name.value;
    let selectt = event.target.select.value;
    let price = event.target.price.value;
    //console.log(name,selectt, price);

    if(selectt == 1) {
        selectt = "Fruit and Vegetables";
    }else if(selectt == 2) {
        selectt = "Starchy Food";
    }else if(selectt == 3) {
        selectt = "Diary";
    }else if(selectt == 4) {
        selectt = "Protein";
    }else if(selectt == 5) {
        selectt = "Fat";
    }
    //console.log(name,selectt, price);


    let newItem = new Foods(name, selectt, price);
    newItem.foodID();


    saveData(foodArray);

}




function saveData(data) {
    let stringObj = JSON.stringify(data);
    localStorage.setItem('item', stringObj);
    //getData();
    //render(getData);
    
}





