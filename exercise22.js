let primitive = 56;

switch(typeof(primitive)) {
  case "number":
    console.log("It's a number");
    break;
  case "string":
    console.log("It's a string");
    break;
  case "boolean":
    console.log("It's a boolean");
  break;
  default:
  console.log("I don't know what it is");
}