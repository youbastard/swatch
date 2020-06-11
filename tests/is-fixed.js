let cells = [...Array(36)].map((a,b)=>b);

let A=i=>[30,35,0,5,].includes(i);
let B=i=>/(^|[^12])[50]/.test(i);
let C=i=>/^[3]*[50]/.test(i);

let a = cells.filter(A); //?
let b = cells.filter(B); //?
let c = cells.filter(C); //?
