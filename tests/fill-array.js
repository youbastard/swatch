let x=4;

let A=[...Array(x)].map(e=>({}));   A; //?
let B=[];while(B.push({})<x);       B; //?