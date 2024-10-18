let ar=[1,2,3,4,5,6];
// let newar=ar.map((x)=>x*2)
//console.log(newar);
//let newar=ar.filter((x)=> x%2==0).map((x)=>x*3);
//console.log(newar);
//let a=newar.map((x)=>x*3)
//console.log(a);
//let newar=ar.reduce((x,y)=>x+y,0);


//let newar = ar.filter((x) => x % 2 == 0).map((x) => x * 3).reduce((x, y) => x + y, 0);
//console.log(newar);  

const students = [
    {
        name:"bob",
        score:64
    },
    {
        name:"alice",
        score:50
    },
    {
        name:"charlie",
        score:66
    },
    {
        name:"david",
        score:60
    }

];
let a = students
    .filter(student => student.score >= 50) 
    .map(student => student.score * 2)      
    .reduce((x, y) => x + y, 0);      
console.log(a);




