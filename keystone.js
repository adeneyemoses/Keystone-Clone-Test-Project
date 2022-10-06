/*console.log('Hello world!!');
var firstName, lastName, age;
firstName = prompt('what is your first name?');
lastName = prompt('what is your last name?');
age = prompt('How old are you?');
if(age >=13 && age <20){
    console.log(firstName + ' ' + lastName + ' is a teenager.');
}else if(age >=20){
    console.log(firstName + ' ' + lastName + ' is an adult.');
}else{
    console.log(firstName + ' ' + lastName + ' is a small kid.');
}



var heightJohn, heightMark, heightMary, ageJohn, ageMark, ageMary;
heightJohn = 172; heightMark = 164; heightMary = 160;
ageJohn = 15; ageMark = 19; ageMary = 17;
scoreJohn = heightJohn + 5 * ageJohn;
scoreMark = heightMark + 5 * ageMark;
scoreMary = heightMary + 5 * ageMary;
if(scoreJohn > scoreMark && scoreJohn > scoreMary){
    console.log('John is the winner with the score' + ' ' + scoreJohn);
} else if(scoreMark > scoreJohn && scoreMark > scoreMary){
    console.log('Mark is the winner with the score' + ' ' + scoreMark);
} else if(scoreMary > scoreJohn && scoreMary > scoreMark){
    console.log('Mary is the winner with the score' + ' ' + scoreMary);
} else{
    console.log('It is a  draw between them.');
}function calculateAge(yearOfBirth){
    var age = (2022 - yearOfBirth);
    return age;
}
var ageJohn  = calculateAge(1990);
var ageMoses = calculateAge(1998);

function yearsUntilRetirement(name, yearOfBirth){
    var age = calculateAge(yearOfBirth);
    retirement = 65 - age;
    console.log(retirement);
}
yearsUntilRetirement('Ade', 1989);
yearsUntilRetirement('John', 1999);
yearsUntilRetirement('Moses', 1976);

function calculateAge(name, yearOfBirth){
    var age = 2022 - yearOfBirth;
    var yearsUntilRetirement = 65 - age;
    console.log(name + ' will retire in ' + yearsUntilRetirement + ' years time.')
}
calculateAge('Moses', 1998);
calculateAge('Adebo', 2000);

function yearsUntilRetirement(name, yearOfBirth){
    var age = 2020 - yearOfBirth;
    var retirement = 65 - age;
    console.log(name + ' will retire in ' + retirement + ' years time.');
}
yearsUntilRetirement('John', 2002);
yearsUntilRetirement('Moses', 1998);
yearsUntilRetirement('Tolu', 1997);
var firstName = 'John';
var age = 9;
age <=13 ? console.log(firstName + ' is a kid.'):
console.log(firstName + 'is a teenager.')
var firstName = 'John';
var age = 15;
switch (true){
    case age <= 12 :
        console.log(firstName + ' is a kid.');
        break;
    case age >12 && age <= 19 :
        console.log(firstName + ' is a teenager.');
        break;
    default:
        console.log(firstName + ' is an adult.');
}
var johnAverageScore, mikeAverageScore, maryAverageScore;
johnAverageScore = (89 + 120 + 103)/3;
mikeAverageScore = (116 + 94 + 123)/3;
maryAverageScore = (97 + 134 + 105)/3;
if (johnAverageScore > mikeAverageScore && johnAverageScore > maryAverageScore){
    console.log('John is the winner with the point ' + johnAverageScore);
}else if(mikeAverageScore > johnAverageScore && mikeAverageScore > maryAverageScore){
    console.log('Mike is the winner with the point ' + mikeAverageScore);
}else if(maryAverageScore > johnAverageScore && maryAverageScore > mikeAverageScore){
    console.log('Mary is the winner with the point ' + maryAverageScore);
}

var johnAverageScore = (99 + 195 + 103)/3;
var markAverageScore = (116 + 94 + 123)/3;
var maryAverageScore = (97 + 134 + 105)/3;
if(johnAverageScore > markAverageScore && johnAverageScore > maryAverageScore){
    console.log('John is the winner with the point ' + johnAverageScore);
}else if(markAverageScore > johnAverageScore && markAverageScore > maryAverageScore){
    console.log('Mark is the winner with the point ' + markAverageScore);
}else if(maryAverageScore > johnAverageScore && maryAverageScore > markAverageScore){
    console.log('Mary is the winner with the  point ' + maryAverageScore);
}else{
    console.log('it is a draw');
}
var myInfo = ['Adeneye', 'Moses', '25', false];
myInfo.push('blue');
myInfo.unshift('Mr');
console.log(myInfo);
//functions and methods
var myInfo = {
    firstName: 'Moses',
    lastName: 'Adeneye',
    age:25,
    yearOfBirth: 1998,
    job:'designer',
    height:1.65,
    color: ['white', 'black', 'green', 'purple'],
    yearOfretirement: function() {
        return 65 - this.age;
    }
}
//console.log(myInfo.color[1]);
//console.log(myInfo.yearOfretirement());
console.log(myInfo);
var whatDoYouDo = function(name, job){
    switch(job) {
        case 'teacher':
            console.log(name + ' is a teacher.');
            break;
        case 'designer':
            console.log(name + ' is a designer.');
            break;
        case 'lawyer':
            console.log(name + ' defends the citizens in the court.');
            break;
        case 'driver':
            console.log(name + ' is a driver.');
            break;
        default:
            console.log(name + ' does something else.');
    }
}
console.log(whatDoYouDo('Moses', 'designer'));
console.log(whatDoYouDo('Tolu', 'teacher'));
console.log(whatDoYouDo('Tunmise', 'UI/UX'));
//Loops and Iteration
for (var i = 0; i <= 10; i++){
    console.log(i);
}
var family = ['Moses', 'Tolu', 'Dimeji', 'Funmilayo', 'Funke'];
for (var i = family.length - 1; i >= 0; i--){
    console.log(family[i]);
}
var family = ['Moses', 'Tolu', 'Dimeji', 'Funmilayo', 'Funke'];
var i = 0;
while (i < family.length){
    console.log(family[i]);
    i++;
}
var family = ['Moses', 'Tolu', 'Dimeji', 'Funmilayo', 'Funke'];
for (var i = 0; i < family.length; i++){
    console.log(family[i]);
    if(i === 2){
        break;
    }
}
//challenge
var yearOfBirth = [1997, 1998, 1999, 2006];
var age = [];
for(var i = 0; i < yearOfBirth.length; i++){
    age[i] = 2022 - yearOfBirth[i];
}
for(i = 0; i < age.length; i++){
    if(age[i] < 18){
        console.log('person ' + (i + 1) + ' is a teenager');
    }else{
        console.log('person ' + (i + 1) + ' is an adult'); 
    }
}
console.log(age);
var yearOfBirth = [1997, 1998, 1999, 2006];
var printFullAge = function(yearOfBirth){
    var age = [];
    var fullAge = [];
    for(var i = 0; i < yearOfBirth.length; i++){
        age[i] = 2022 - yearOfBirth[i];
    }
    for(i = 0; i < age.length; i++){
        if(age[i] < 18){
            console.log('person ' + (i + 1) + ' is a teenager');
            fullAge[i] = false;
        }else{
            console.log('person ' + (i + 1) + ' is an adult'); 
            fullAge[i] = true;
        }
    }
    return fullAge;
}
var full_1 = printFullAge(yearOfBirth);
console.log(full_1);


var resturantBill = {
    name:'John',
    bills:[124, 48, 268, 180, 42],
    calcTips: function(){
this.tips = [];
        this.finalValue = [];
        for(var i = 0; i < this.bills.length; i++){
            var percentage;
            if(this.bills[i] < 50){
                percentage = 0.2;
            }else if (this.bills[i] >= 50 && this.bills[i] < 200){
                percentage = 0.15;
            }else{
                percentage = 0.1;
            }
            this.tips[i] = percentage * this.bills[i];
            this.finalValue[i] = this.tips[i] + this.bills[i];
        }
    }
}
resturantBill.calcTips();
console.log(resturantBill);

var resturantBill = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValue = [];
        for(var i = 0; i < this.bills.length; i++){
            var percentage = [];
            if(this.bills.length < 50){
                percentage = 0.2;
            }else if(this.bills[i] >= 50 && this.bills[i] < 200){
                percentage = 0.15;
            }else{
                percentage = 0.1
            }
            this.tips[i] = this.bills[i] * percentage;
            this.finalValue[i] = this.bills[i] + this.bills[i] * percentage;
        }
    }
}
resturantBill.calcTips();
console.log(resturantBill);
//console.log(resturantBill.tips);
//console.log(resturantBill.finalValue);

var mark = {
    fullName: 'Mark Smith',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValue = [];
        for(var i = 0; i < this.bills.length; i++){
            var percentage = [];
            if(this.bills.length < 100){
                percentage = 0.2;
            }else if(this.bills[i] >= 100 && this.bills[i] < 300){
                percentage = 0.15;
            }else{
                percentage = 0.25;
            }
            this.tips[i] = this.bills[i] * percentage;
            this.finalValue[i] = this.bills[i] + this.bills[i] * percentage;
        }
    }
}
mark.calcTips();
console.log(mark);

var averageTips = function(tips){
    var sum = 0;
    for(var i = 0; i <tips.length; i++){
        sum = sum + tips[i];
    }
    return sum / tips.length;
}
resturantBill.averageScore = averageTips(resturantBill.tips);
console.log(resturantBill.fullName + ' is the winner with the score ' + resturantBill.averageTips);


//Correction
var john = {
    fullName: 'James Bond',
    age: 25,
    bills : [124, 48, 268, 180, 42],
    calcTips : function(){
        this.tips = [];
        this.finalValue = [];
        for(var i = 0; i < this.bills.length; i++){
            var percentage;
            if(this.bills < 50){
                percentage = 0.2;
            }else if(this.bills >= 50 && this.bills < 200){
                percentage = 0.15;
            }else{
                percentage = 0.1;
            }
            this.tips[i] = percentage * this.bills[i];
        this.finalValue[i] = this.bills[i] * percentage + this.bills[i];
        }
    }

}

//this is for Mark.
var mark = {
    fullName: 'Mark Bond',
    age: 25,
    bills : [77, 475, 110, 45],
    calcTips : function(){
        this.tips = [];
        this.finalValue = [];
        for(var i = 0; i < this.bills.length; i++){
            var percentage;
            if(this.bills < 100){
                percentage = 0.2;
            }else if(this.bills >= 100 && this.bills < 300){
                percentage = 0.15;
            }else{
                percentage = 0.25;
            }
            this.tips[i] = percentage * this.bills[i];
        this.finalValue[i] = this.bills[i] * percentage + this.bills[i];
        }
    }

}

var calcAverageTips = function(tips){
    var sum = 0;
    for(i = 0; i < tips.length; i++){
        sum = sum + tips[i];
    }
    return sum / tips.length;
}
mark.calcTips();
john.calcTips();
john.averagetip = calcAverageTips(john.tips);
mark.averageTip = calcAverageTips(mark.tips);
console.log(john, mark);
if(john.averageTip > mark.averageTip){
    console.log(john.fullName + ' has a greater amount of ' + john.averageTip);
}else {
    console.log(mark.fullName + ' has a greater amount of ' + mark.averageTip);
}
console.log('my name is Moses');

//calling a function
var foo = function(myYear){
    var newAge = 2022 - myYear;
    console.log(newAge);
}
foo(1988);




function gender(name){
    var response = prompt('do you have breast?');
    if(response === 'yes'){
        console.log(name + ' is a female');
    }else{
        console.log(name + ' is a male');
    }
}
gender('Moses');


//console.log(this);
var John = {
    name:'John',
    age:15,
    isMarried:false,
    calculateAge:function(){
        console.log(this);

        function inner(){
            console.log(this);
        }
        inner();
    }
}
John.calculateAge();
console.log(this);


var Mike = {
    name:'Mike',
    age:15,
    isMarried:true,
};
Mike.calculateAge = John.calculateAge;
Mike.calculateAge();
var dice = Math.round(Math.random()*6)+1;
console.log(dice);*/