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




let tableEl = document.createElement('table');
    bodyEl[0].appendChild(tableEl);
    let tableRow = document.createElement('tr');
    tableEl.appendChild(tableRow);

    let tableHeader1 = document.createElement('th');
    tableHeader1.textContent = "Id";
    tableRow.appendChild(tableHeader1);
    tableHeader1.style.border = '1px solid #ddd';
    tableHeader1.style.padding = '8px';

    let tableHeader2 = document.createElement('th');
    tableHeader2.textContent = "name";
    tableRow.appendChild(tableHeader2);
    tableHeader2.style.border = '1px solid #ddd';
    tableHeader2.style.padding = '8px';

    let tableHeader3 = document.createElement('th');
    tableHeader3.textContent = "type";
    tableRow.appendChild(tableHeader3);
    tableHeader3.style.border = '1px solid #ddd';
    tableHeader3.style.padding = '8px';

    let tableHeader4 = document.createElement('th');
    tableHeader4.textContent = "price";
    tableRow.appendChild(tableHeader4);
    tableHeader4.style.border = '1px solid #ddd';
    tableHeader4.style.padding = '8px';



    tableEl.style.fontFamily = 'Arial, Helvetica, sans-serif';
    tableEl.style.fontFamily = 'Ibarra Real Nova, serif';
    tableEl.style.fontFamily = 'Mouse Memoirs, sans-serif';
    tableEl.style.borderCollapse = 'collapse';
    tableEl.style.width= '70%';
    tableEl.style.margin = '30px 260px'

    tableRow.style.border = '1px solid #ddd';
    tableRow.style.padding = '8px';


Foods.prototype.render = function() {
  
        let tableRow2 = document.createElement('tr');
        tableEl.appendChild(tableRow2);

        tableRow2.style.border = '1px solid #ddd';
        tableRow2.style.padding = '8px';
        

        let tableData = document.createElement('td');
        tableData.textContent = `${this.foodID}`;
        tableRow2.appendChild(tableData);
        tableData.style.border = '1px solid #ddd';
        tableData.style.padding = '8px';

        let tableData2 = document.createElement('td');
        tableData2.textContent = `${this.foodName}`;
        tableRow2.appendChild(tableData2);
        tableData2.style.border = '1px solid #ddd';
        tableData2.style.padding = '8px';

        let tableData3 = document.createElement('td');
        tableData3.textContent = `${this.type}`;
        tableRow2.appendChild(tableData3);
        tableData3.style.border = '1px solid #ddd';
        tableData3.style.padding = '8px';

        let tableData4 = document.createElement('th');
        tableData4.textContent = `${this.price} JD`;
        tableRow2.appendChild(tableData4);
        tableData4.style.border = '1px solid #ddd';
        tableData4.style.padding = '8px';



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



    
    //newItem.render();


    saveData(newItem);

}




    





function saveData(data) {
    let stringObj = JSON.stringify(data);
    localStorage.setItem('item', stringObj);

    getData();
    
}

let j = 0;

function getData() {
    
    let retreveData = localStorage.getItem('item');
    let dataArray = JSON.parse(retreveData);

    console.log(dataArray);

    if(dataArray != null) {
        for(let i = 0; i <dataArray.length; i ++) {
            new Foods(dataArray[i].foodName, dataArray[i].type, dataArray[i].price);
            dataArray[i].foodID();
            
            //dataArray[i].render();

        }

        // let newLsItem = new Foods(dataArray.foodName, dataArray.type, dataArray.price);

        // newLsItem.foodID();
        
        // newLsItem.render();   

        //foodArray.push(newLsItem)

        
    }

    
    //localStorage.clear();
    for(let i = j; i < foodArray.length; i ++) {
        foodArray[i].render();
        j++;
    }
    
    
}

//getData();