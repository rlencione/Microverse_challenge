

let dw = 0; 
let valley = 0;

function countingValleys(steps, char){
  for(let i = 0; i < steps; i++){
    
  if(char[i] == "D"){
    dw --;
  } else {
    if(dw == -1){
      valley++;
    }
    dw++;
}
  }
  return valley;
}
let vale = countingValleys(8, "UDDDUDUU");
console.log(vale);

/*let a = 10;
let b = 5;
let c = a - b;

console.log(c);*/












