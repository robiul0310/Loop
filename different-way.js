//  jodi aykhane (k) er man 30 er choto or soman hoy tahole condition er vithore dukhbe. abar (if) condition er vitore (30) er sob man k jodi 5 dhara vag korar por jader vagses 0 hoy segulo print koro.

// for(let k = 1; k <=30; k++){
//     if(k % 5 === 0){
//         console.log(k)
//     }
// }

// for(let l = 1; l <= 20; l++){
//     if(l % 3 === 0){
//         console.log(l)
//     }
// }

// aykhane sortho ta holo j (100) er modde joto gulo number ache, segulo k (3) dara vag korle vag ses 0 hobe and (5) dara vag korleo (0) asbe.
// for(let j = 1; j<= 100; j++){
//     if(j % 3 === 0 && j % 5 === 0){
//         console.log(j)
//     }
// }

// cive me the sum of numbers from 1 to 20 that are divisiable by 3
let total = 0;
for(let i = 1; i <= 20; i++){
    if(i % 3 ===0){
        console.log(i)
        total = total +i;
        
    }
}
console.log('total some number:', total)