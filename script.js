alert("Welcome")

/* Question 1: First and Last Name */
let FirstName = "Rimsha";
let LastName ="Tahir";
console.log(FirstName+ " " +LastName);

/* Question 2: Arithmetic Operations */
let num1 =10;
let num2 =20;
let num3 =30;
console.log("Addition:",num1+num2+num3);
console.log("Subtration:",num1-num2-num3);
console.log("Multipication:",num1*num2*num3);
console.log("Division:",num1/num2/num3);

/* Question 3: Temperature Checker */
let Temperature=30;
if (Temperature<0){   
console.log("Freezing");}
else{
    console.log("Not Freezing");
}

/* Question 4: Age Category */
let Age=Number(prompt("Enter Age"))

if (Age>=0 && Age<=12){
    console.log("Child");
}
else if(Age>=13 && Age<=19){
    console.log("Teenager");
}
else if(Age>=20 && Age<=59){
    console.log("Adult");
}
else if(Age>=60){
    console.log("Senior Citizen");
}

/* Question 5: Electricity Bill Calculator */
let units=Number(prompt("Enter units"));
let bill;

if (units<=100) {
  bill= units*10;
      console.log("bill:Rs.", bill);
}
else if (units <= 200) {
    bill = (100 * 10) + ((units - 100) * 15);
    console.log("bill:Rs.", bill);  
} 

else {
    bill = (100 * 10) + (100 * 15) + ((units - 200) * 20);
        console.log("bill:Rs.", bill);
}
 /*  Question 6: Traffic Light */
 let color= "Yellow";
 if (color==="Red") {
    console.log("Stop"); 
 }
 else if (color==="Yellow"){
      console.log("Ready"); 
 }
 else if (color==="Green"){
      console.log("Go"); 
 }
 else{
    console.log("Invlaid Color");
 }

 /* Question 7: Pocket Money Checker */
  let Money= 600;
    if (Money>500) {
        console.log("You can buy a gift");}
    else {
            console.log("Save your money");
        }
        
/* Question 8: Free Delivery Checker */
let amount=2000;
if (amount>=2000 ){
    console.log("Free Delivery");
}
else{
      console.log("Delivery Charges Apply");
}


        
    
 
















