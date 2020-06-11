let x='abcdefghijklmnopqrstuvwxyz'.split('');
let a=b=3;

let A=x.slice(2*a,2*a+8); //?
let B=x.slice(b*=2,b+8);  //?
// after switch to 3 val hex colors
let C=x.slice(2,a+4); //?