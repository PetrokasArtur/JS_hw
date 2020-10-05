
let link = prompt('Enter image link');
if (link.length < 10) {
    console.log('bolwe 10 simvolov');
}
if (link.indexOf(' ') > -1) {
    console.log('bez probelov');
}

let gradus = +prompt('Enter gradus');
let myImg = document.querySelector('#myimg');
myImg.setAttribute('src', link);
myImg.setAttribute('style', `transform: rotate(${gradus}deg); width: 100px;`);
for (let i = 0; i < 4; i++) {
    let newImg = document.createElement('img');
    document.body.append(newImg);
    newImg.setAttribute('src', link);
    newImg.setAttribute('style', `transform: rotate(${gradus*(i + 2)}deg); width: 100px;`);
}
if (isNaN(gradus)) {
    console.log('tolko chislo');
}









function removedId(id) {
    let d = document.querySelector("#" + id);
    console.log(d);
    if (d === null) {
      console.log("takogo tega net");
    } else {
      d.remove();
    }
  }
  removedId('myimg');






table = document.createElement('table');
for (i = 1; i < 10; i++) {
    row = document.createElement('tr');
    for (j = 1; j < 10; j++) {
        cell = document.createElement(i === 1 || j === 1 ? 'th' : 'td');
        cell.appendChild(document.createTextNode(i * j));
        row.appendChild(cell);
    }
    table.appendChild(row);
}
document.body.appendChild(table);


let LightOver = null;

table.onmouseover = function (event) {
  if (LightOver) return;
  let target = event.target.closest('td');
  if (!target) return;
  if (!table.contains(target)) return;
  LightOver = target;
  target.style.background = 'green';
};

table.onmouseout = function (event) {
    if (!LightOver) return;
    let lightOut = event.lightOut;
    while (lightOut) {
      if (lightOut == LightOver) return;
      lightOut = lightOut.parentNode;
    }
    LightOver.style.background = 'white';
    LightOver = null;
  };


document.querySelector('#btn').onclick = plus
function plus() {
    let first = Number(document.querySelector('#number_first').value);
        let second = Number(document.querySelector('#number_second').value);
        let sum = Number(first) + Number(second);
        document.querySelector('#result').innerHTML = sum;
}









function byField (field) {
    return function (a, b) {
    return a[field] > b[field] ? 1 : -1;
    };
    }
    let persons = [{
        name: 'Vasyan', age: 21
    }, {
        name: 'Kolyan', age: 22
    }, {
        name: 'Mashka', age: 17
    }];
    
    byField();
    
    persons.sort(byField('name'));
    persons.forEach(function(user) {
    console.log( user.name);
    });
    persons.sort(byField('age'));
    persons.forEach(function(user) {
    console.log( user.age);
    });



let space = [' hello darkness   my old   friend ', ' i\'ve come to   talk  with   you again    '];
let noSpace = space.map(function(item){
    return item.replace(/^\s+|\s+$|\s+(?=\s)/g,'');
});
console.log(noSpace);




Array.prototype.mfilter =  function (cb) {
    var filtered = [];
    for(let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) filtered.push(this[i]);
    }
    return filtered;
};
var returnedArr = [1,3,4,6,10,11,13,15,17].mfilter(function(element, index, arr) {
    return element < 15;
});
console.log(returnedArr);

