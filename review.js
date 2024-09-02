const arr = [1,2,3,4,2,3,4,5,5,6,7,8,9];
let sumo = 0;
let oddc =0 ;
const odd = arr.reduce((acc,val) =>{
    sumo+=val
    if(val%2==1){
      acc+val
      
      
    }
    return (acc/sumo)*arr.length+1;
},0 )


console.log(odd)

let sume =0;
const even = arr.reduce((acc,val) =>{
    sume+=val
    if(val%2==0){
      acc+val
      
    }
    return (acc/sume)*arr.length+1;
},0)
console.log(even);
