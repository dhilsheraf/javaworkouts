let arr = [1,2,3,4,5,6,7,8,9,110];

let object = {
      name : "Jango",
      age : 18,
      place : "vadakkekad"
}

for(i in object){
    console.log(object); //object and array
    
}
for(i of arr){    //array value will get
    console.log(i);
    
}