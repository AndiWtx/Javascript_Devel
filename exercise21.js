const password = 'Hi';
let conditionA= password.length >= 4;
let conditionB= password.length <= 6;

if(conditionA && conditionB){
  console.log("Password length is correct");
}else {
  console.log("Password not valid");
}
