let menu={drinks:"cooldrinks",tiffen:"idly",lunch:"sambar rice",dinner:"chappaathi"};
for(let keys in menu){
    console.log(menu[keys]);
}
let subjects=["maths","computer science","physics","biology"];
for(let cls of subjects){
    console.log(cls);
}
for(let i=0;i<subjects.length;i++){
    console.log(subjects[i].length);
}
let mark = [ 80,50,60,40];

mark.forEach(myFunction);

function myFunction(item) {

    console.log(item);
}