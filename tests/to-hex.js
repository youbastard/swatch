let hex=[...Array(16)].map((a,b)=>b.toString(16)); //?

let A=hex.map(a=>parseInt(a,16)); //?
let B=hex.map(a=>Number('0x'+a)); //?
let C=hex.map(a=>+('0x'+a));      //?