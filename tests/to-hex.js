let hex=[...Array(16)].map((a,b)=>b.toString(16)); //?

let A=hex.map(a=>parseInt(a,16)); //?
let B=hex.map(a=>Number('0x'+a)); //?
let C=hex.map(a=>+('0x'+a));      //?



"00AACCFF".match(/\w{2}/g).map(b=>+('0x'+b)); //?
"0ACF".split('').map(b=>+('0x'+b+b)); //?
[..."0ACF"].map(b=>+`0x${b+b}`) //?
