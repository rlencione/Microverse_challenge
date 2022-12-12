function sockMerchant(n, ar) {
    let entry = 0;
    let count = 0;
    let size = ar.length;
    for(let i = 0; i < size; i++){
      entry = (ar[0]);
      ar.splice(0, 1);
   if(ar.includes(entry)){
       delete ar[0];
    count ++;
  } else {  
  }
  }
    return count;
  
}

}
let meias = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
console.log(meias);