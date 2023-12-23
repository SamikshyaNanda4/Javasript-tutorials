console.log('Hello Its Sam')
console.log('Curricullum Vitae')
//variables 
sam = 'whats up'
console.log(sam)
words = 'How are you doing today? Its really nice to see you bro .Hope You have a great day'
console.log(words)

//OPERATORS
food = Number(prompt('how much was the food'))
tipPercentage=Number(prompt('tip percentage?'))/100
console.log('Total Food Cost:',food)
tipAmount=food * tipPercentage
console.log('Tip Amount:',tipAmount)
totalAmount=food+tipAmount;
console.log('Total Amount:',totalAmount)
//user input

..........................................................

baby weather App
if it rains ---grab umbrella
if it doesnt rain --wear sunghlasses
let weather=prompt('whats the weather')
if(weather=='rain'){
  console.log('GRAB YOUR UMBRELLA')
}else{
  console.log('GO WEAR YOUR SUNGLASSES')
}

............................................................

call=Number(Math.ceil(Math.random()*3))
console.log(call)
if(call==1){
  console.log('STONE')
}else if(call==2){
  console.log('PAPER')
}else{(console.log('SCISSOR'))
     }
..............................................................


functions
function sayMyname(){
  console.log('My name is Sam')
   console.log('My name is Debi')
   console.log('My name is Rohan')
   console.log('My name is Sam')
}
sayMyname()
...................................................................

function myName(anything){
  console.log(anything)
}

  myName('SAM')



function greeting(name) {
  greet = 'Hi ' + name + ', Nice to meet you'
  console.log(greet)
}
greeting('Samikshya')


template literals ``
function greetme(name) {
  greet = `hi ${name},nice to meet you`
  console.log(greet)
}
greetme("Samikshya Nanda")
............................................................

function in which two numbers are taken as input
return concept also present
function sum(a,b){
  //return a + b
  return a + b
}
num1=sum(1,3)
console.log(num1)

...................................................................
function calculatetotal(food, tip){
tipPercentage=tip/100
tipAmount=food * tipPercentage
totalAmount  = sum(food,tipAmount)
return totalAmount
}
console.log(calculatetotal(300,20))
console.log('Tip Amount:',tipAmount)
console.log('Total Amount:',totalAmount)

................................................................

ES6 way of function

function calculateFoodTotal(food,tip){
const tipPercentage =tip/100
 const tipAmount=food * tipPercentage
const total=sum(food,tipAmount)
return total
}
console.log (calculateFoodTotal(300,15))ś

function sum(a,b){
  return a + b
}
Arrow Function  => with explicit return 
const sumArrow=(a,b)=>{
  return a + b
// // }
// //arrow function with implicit return 
// //for implicit return remove squigglies 
// // const sum1=(a,b) => a + b
// // console.log(sum1(10,40))

// //   TODO: create a function that console logs the result of any of the above operations.
// // */
// /* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

function add(a,b){
  //Add function here
  return a + b
}
console.log(add(45,45))

function sub(c,d){
  //Subtract function here
  return c - d
}
console.log((sub(45,45))

function div(e,f){
  //Divide function here
  return e / f
}
console.log((div(45,45))

function mul(g,h){
  //Multiply function here
  return g * h
}
console.log((mul(45,45))

console.log('hello from the SUM exercise:)
/* 
  TODO: create a function that console logs the result of any of the above operations.
*/
arrays ..........................................................
const groceries =['banana','Orange', 'apple','guava']
// console.log(groceries)
// console.log(groceries[2,3])
//This is called Indexing that you grab one of the index
groceries.push('Mango')
// console.log(groceries[4])
// console.log(groceries)
groceries.push('blueberries','pomegranate','strawberries')
// console.log(groceries)
// console.log(groceries[6])
// console.log(groceries[7])
// slice method
// ..................................
console.log(groceries)
console.log(groceries.slice(2,8))
//start from 0 inclusive and upto 8 not including 9 .i.e the last number is not included in the slice list
//i.e 0-6 means actually 0 to 5th index
console.log(groceries.slice(6,8))
//array methdo(slice,push) and now (indexof,lenght)
// console.log(groceries.indexOf('Orange'))
// console.log(groceries.indexOf('strawberries'))
// console.log(groceries.indexOf('banana'))
// console.log(groceries.indexOf('guava'))
// console.log(groceries.indexOf('pomegranate'))
// console.log(groceries.indexOf('blueberries'))
// console.log(groceries.indexOf('Mango'))
console.log(groceries.length)

// // ...........................................................

OBJECTS {}

Objects are a type of variabe, quite similar to Arrays but they have something called key-value pairs 

our object in this case is Leonardo Decaprio

OBJECTS has couple of properties

const person = {
name:'Leonardo',
  shirt:'White',
  coat:'Black',
  movie:'Titanic'
}
  //non bracket notation or dot notation access
  console.log(person.name)
console.log(person.shirt)
console.log(person.coat)
console.log(person.movie)
//bracket notation 
console.log(person['name'])
console.log(person['coat'])
console.log(person['shirt'])
console.log(person['movie'])


//Assign objects
person.phone='77188123434'
console.log(person['phone'])
//console.log entire person
console.log(person) 
//asign objects with bracket notation
person['location'] = 'USA'
console.log(person['location'])
console.log(person)

my work on qazi
const person={
  name:'Qazi',
  shirt:'black',
  origin:'Indian'
}
console.log(person['origin'])
console.log(person['shirt'])
console.log(person['name'])
 // non bracket notation
console.log(person.name)
console.log(person.shirt
           )
console.log(person.origin)
person['mic']='boya'
person.channel='CleverProgrammer'
console.log(person)

...........................................................
ES6 arrow function having 2 arguments having object and template literally
const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
    assets: 100000,
    liabilities: 50000,
    networth: function() {
      return this.assets - this.liabilities
    }
  }

  const intro = `Hi my name is ${person.name} and color of my shirt is ${person.shirt} and my asset is ${person.assets} $ and my liabilities are ${person.liabilities}$ .So my networth is ${person.networth()} USD`
  return intro
}
console.log(introducer('Leonardo', 'White .'))

METHOD
A method is a property containing a function definition .
................................................................
for loops
const food = ['candy' ,'mushroom' ,'rice' ,'icecream','mohito', 'pizza']
console.log(food[0])
console.log(food[1])
console.log(food[2])
console.log(food[3])
console.log(food[4])
console.log(food[5])

for(let i=0;i<food.length; i++) {
  console.log(i,food[i])
}

for (const allfood of food) {
  console.log(allfood)
}
sum up all numbers in an array
let result=[]
const numbers=[1,2,3,4,5,6,7,8,9,10]
for(let i=0;i<numbers.length;i++){
  console.log(numbers[i]*2)
}
.........................................................
using function and psuhing results after let command is used and returning
const square = (numbers)=>{
    let result=[]
  for (const d of numbers){
    // console.log(d*2)
    result.push(d**2)
  
    
  }
  return result
  }
console.log(square([1,2,3,4,5,6]))
const lettercounter = (phrase) => {
  

  let result=0;
  for(const letter in phrase){
    console.log (Number(letter)+1)
    const result = Number(letter) + 1
  }
  return {result :phrase.length}
 return {result :result }
}
const phrase =prompt('write your phrase')
console.log(lettercounter(phrase))
const sumArray =(numbers) =>{
  let result = 0;
  for(const value of numbers){
    result = Number(value) + Number(result)
    
  }
    return result
  
}
let number =prompt('Input your values')
console.log(sumArray(number))

....................................................................
max value finder 
const max  = (number) =>{
  let result = number[0]
  loop
  for (const max of number){
  if(max > result){
    result=max
  }
  }
  return {result}
}
console.log(max([1,44,22,11,33,345,12,444,334,2242,243231,1441344,131313]))

const frequency =(phrase)=>{
  let freq={}
  // 'haha'
  //frequency ('haha')=>{'h':2,'a':2}
  for(const letter of phrase){
   //check if letter exist in frequency
    //if exist ,increment by 1 otherwise set value to 1
    if(letter in freq){
      freq[letter]=freq[letter]+1
    }else {
      freq[letter]=1
    }
  }
  return freq
}
console.log(frequency('haha'))

// incremental operators
// // ++ .-- ,+=
//wordFrequency('lol what is lol')=> lol occurs twice nad what1 and is one time .
const wordFrequency=(phrase)=>{
  // let frequency={}
  const words=phrase.split(' ')
  return frequency(words)
  for (const word of words){
    console.log(word)
    if (word in frequency){
      frequency[word]+=1
  } else {
    frequency[word] = 1
   }
  }
  console.log(words)
  
  // return frequency
} 
const userinp=prompt('write your sentence')
console.log(wordFrequency(userinp))

....................................................................
  //higher order functions
  // map
  // filter
  // reduce
//map array method

  const double =(numbers) =>{
    let result = []
    for (const number of numbers){

      result.push(number*2)
    }
    return result
  }
const doubleMap = (numbers) => {
  return numbers.map(number => number*2)
}

// console.log(doubleMap([1,4,55]))
const filter =(numbers ,greaterThan) =>{
  let result =[]
  for (const number of numbers){
    if (number > greaterThan){
      result.push(number)
    }
 }
  return result
}

console.log(filter([1,2,3,6,7],3))

//filters returns an array rather than map that gives values only
.
