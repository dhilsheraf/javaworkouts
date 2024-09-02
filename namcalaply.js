const obj = {
    firstName :"jango",
    lastName : "dilu",
   }

function name(hometown){
         console.log(this.firstName +" "+this.lastName+" "+hometown);
         }

name.call(obj,"Kallingal");

const name2 = {
    firstName : "Dhilsheraf",
    lastName : "Tendulkar"
}

//function borrowing
name.call(name2,"Malappuram")

//apply method
name.apply(obj,["Vadakkekad"])

//bind method

const binde = name.bind(obj, "attapadi");
binde();

