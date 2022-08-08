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


const bodyEl = document.getElementsByTagName('body');

// let j = 1;


let tableEl = document.createElement('table');
    bodyEl[0].appendChild(tableEl);
    let tableRow = document.createElement('tr');
    tableEl.appendChild(tableRow);

    let tableHeader1 = document.createElement('th');
    tableHeader1.textContent = "Id";
    tableRow.appendChild(tableHeader1);

    let tableHeader2 = document.createElement('th');
    tableHeader2.textContent = "name";
    tableRow.appendChild(tableHeader2);

    let tableHeader3 = document.createElement('th');
    tableHeader3.textContent = "type";
    tableRow.appendChild(tableHeader3);

    let tableHeader4 = document.createElement('th');
    tableHeader4.textContent = "price";
    tableRow.appendChild(tableHeader4);



Foods.prototype.render = function() {
  
        let tableRow2 = document.createElement('tr');
        tableEl.appendChild(tableRow2);

        let tableData = document.createElement('td');
        tableData.textContent = `${this.foodID}`;
        tableRow2.appendChild(tableData);

        let tableData2 = document.createElement('td');
        tableData2.textContent = `${this.foodName}`;
        tableRow2.appendChild(tableData2);

        let tableData3 = document.createElement('td');
        tableData3.textContent = `${this.type}`;
        tableRow2.appendChild(tableData3);

        let tableData4 = document.createElement('th');
        tableData4.textContent = `${this.price}`;
        tableRow2.appendChild(tableData4);


    

}



let formEl = document.getElementById('form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
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
    //console.log(foodArray);



    
    newItem.render();


}
