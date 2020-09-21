var person1 = {
    name: 'Sergey',
    surname: 'Byryakov',
    fatherName: 'Andreevich'
};
var person2 = {
    name: 'Maksim',
    surname: 'Petrov',
    fatherName: 'Sergeevich'
};
var person =[
    {
        name: 'Artur',
        surname: 'Petrokas',
        fatherName: 'Valentinovich'
    }
    ];
person.push(person1, person2);


console.log (person)
for (var i = 0; i < person.length; i++) {
    console.log(person[i]);
};

for (var i = 0; i < person.length; i++) {
    console.log(`${person[i].name} ${person[i].surname}`);
};

for (var i = 0; i < person.length; i++) {
    person[i] ['fullName'] = `${person[i].name} ${person[i].surname} ${person[i].fatherName}`
    console.log(person[i].fullName);
};

var jsonPerson = JSON.stringify(person);
console.log(jsonPerson)


var jsonResponse = '{"name": "Grisha", "surname": "Pryanikov", "fatherName": "Maksimovich"}';

var jsonPerson = JSON.parse(jsonResponse);
person.push(jsonPerson);
console.log(person);


var str = "<table border='1'>"
for (let i=0;i<person.length;i++){
str += `<tr><td>${person[i].name}</td><td>${person[i].surname}</td><td>${person[i].fatherName}</td></tr>`
}
str += "</table>"

console.log(str)
document.write(str)


var a = parseInt(prompt('Enter number'));
var b = parseInt(prompt('Enter number'));
function avg2() {
return alert((a+b)/2);
}
avg2()


var a = Number(prompt('Enter number'));;
var b = Number(prompt('Enter number'));;
var c = Number(prompt('Enter number'));;
function sum3() {
return alert(a+b+c);
}
sum3()