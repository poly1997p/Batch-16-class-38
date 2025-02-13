let flower= ['rose', 'lily', 'tulip', 'orcid', 'jesmine'];

for (let i=0; i<5; i++){
    console.log(flower[i]);
}

//for in loop

let person={
    name:'ali',
    age: 28,
    country: 'Bangladesh',
}
for(let i in person){
    console.log(person[i])
}

//even & odd

let numbers=[12,34,65,78,97,80];
for(let i=0; i<numbers.length; i++){

if(numbers[i]%2==0){
    console.log(numbers[i]+'=this is even numbers');

}
else{
    console.log(numbers[i]+'=this is odd numbers');
}
}

//positive & negative

let numbrs=[12,34,65,78,97,80,-23,56,-87];
for(let i=0; i<numbrs.length; i++){

    if(numbrs[i]>0){
        console.log(numbrs[i]+'=this is positive numbers');
    }
    else{
        console.log(numbrs[i]+'=this is negative numbers');
    }
}

//age

let age=[67,89,12,78,35,19,18];

for(let i=0; i<age.length; i++){
    if(age[i]>=18){
        console.log(age[i]+'=You are eligible to vote');
    }
    else{
        console.log(age[i]+='you are not eligible to vote');
    }
}

//leap year

let year= [2005, 2015, 2025, 2023, 2021];

for(let i=0; i<year.length; i++){
    if((year[i]%4==0 && year[i] % 100 !== 0) || (year[i] % 400 === 0)){
        console.log(year[i]+'= leap year');
    }
    else{
        console.log(year[i]+'= not a leap year');
    }
}

