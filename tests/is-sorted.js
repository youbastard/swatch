let t = [{i:0},{i:1},{i:2},{i:3},{i:4}];
let f = [{i:0},{i:4},{i:3},{i:1},{i:2}];

let At=t.every((b,c,d)=>!c||d[c-1].i<=b.i); //?
let Af=f.every((b,c,d)=>!c||d[c-1].i<=b.i); //? 

let Bt=t.every((a,i)=>a.i>i); //?
let Bf=f.every((a,i)=>a.i>i); //?

let Ct=t.every((a,i)=>a.i==i); //?
let Cf=f.every((a,i)=>a.i==i); //?

let Dt=t.every(({i},j)=>j==i); //?
let Df=f.every(({i},j)=>j==i); //?