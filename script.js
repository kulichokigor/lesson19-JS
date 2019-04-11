"use strict";

//Завдання 1

function isNumberInRange(a){
    if( a > 0 && a < 10){
        console.log('true')
    } else{
        console.log('false')
    }
};

isNumberInRange(1);

//Завдання 2

function isEven(num){
    if(num%2==0){
        console.log('true')
    }else{
        console.log('false')
    }
};
isEven(5);

//Завдання 3

var value = +prompt('value?', '');
switch(value){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
};

//Завдання 4

function min( a, b ){
    if ( a > b ){
        return b;
    }else{
        return a;
    }
};
console.log(min(-4,15));






