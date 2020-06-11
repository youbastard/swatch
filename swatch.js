/**
 * SWATCH - reorder the tiles to complete the swatch
 * author: nicholas ortenzio
 * inspired by the game "i love hue"
 **/
// TODO - add win state (in title bar?)
// TODO - add selected state for rectangle
// TODO - add fixed state for rectangle
// DOM ELEMENTS 
// y=svg
// z=status
// map function
A='map';
// hex to dec conversion
// +(0x+b) will cast a hex value b to a decimal
B=a=>[...a][A](b=>+('0x'+b+b));
// fill cells array with 36 objects
C=[];while(C.push({})<36);
// inner html
D='innerHTML';
// for element a, use key/value pair b to set attributes
E=(a,b)=>{for(c in b)a.setAttribute(c,b[c])};
// is sorted test
F=a=>a.every((b,c)=>b.i==c);
// bilinear interpolation
G=(x,y,q,r,s,t)=>(1-y)*((1-x)*q+x*r)+y*((1-x)*s+x*t);
// swap indexs
H=(a,b)=>[a.i,b.i]=[b.i,a.i];
// I=has init flag, J=moves made, K=current level
I=J=K=0;
// shuffle with fixed positions
// TODO - i can improve this somehow
L=a=>(b=C.filter(c=>!c.f)[A](c=>c.i).sort(_=>Math.random()-.5),C[A](c=>c.f||(c.i=b.pop())));
// get level rgb data
M=a=>Z[A](b=>B(b.substr(K,4)));
// set status
N=_=>z[D]=`Level:${K+1} Moves:${J++}`;
// redraw board - update status then update all rectangles then update x & y
O=_=>(N(),C[A](({i},b)=>E(y.childNodes[b],{i,x:X(i),y:Y(i)})));
// initialize level data
Q=z=>{
  // array used for holding cells to be swapped
  // reset swap array
  P=[];
  // clear existing elements
  // TODO - does this need to happen? 
  // init the rects once and then just update the color later
  y[D]='';
  // reset moves counter
  J=0;
  // for every cell
  C[A]((a,b)=>{
    a.i=b;
    // the regex /^[3]*[50]/ will only match the corners of the board [1,5,30,35]
    // im proud of myself for that
    a.f=/^[3]*[50]/.test(b);
    // set the color
    a.fill=`rgb(${M()[A](c=>G(X(b)/5,Y(b)/5,...c))})`;
    // create a svg rect 
    let r=document.createElementNS('http://www.w3.org/2000/svg','rect');
    // set the attributes
    E(r,{height:1,width:1,x:X(b),y:Y(b),...a});
    // add onclick handler
    r.onclick=e=>{
      // if a fixed item was clicked or the game has not yet init
      if (a.f||!I)return zzfx();
      // play click sound
      zzfx(1);
      // if 2 items are in the swap, do swap, clear swap, redraw board, play sound effect
      if (P.push(a)==2)H(...P),P=[],O(),zzfx(2);
      // if sorted, start next Level
      F(C)&&Q(++K)
    };
    // append rect to svg
    y.appendChild(r);
  });
  // wait 1 seconds, shuffle array elements, call draw function  set is init
  setTimeout(_=>{L();O();I=1},1e3);
}
// index to x location
X=i=>i%6;
// index to y location
Y=i=>i/6|0;
// 10 levels of data
Z=['F1F032E875E64D','53FDF273F1FA6E','438ECA16368A1D'];
// start game
Q()