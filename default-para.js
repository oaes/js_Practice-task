// default parameter in function, where we can assign default value in function parameters

function add(num1, num2 = 10) {
  total = num1 + num2;
  console.log(total);
}
add(3);

function myName(nam1, nam2 = "Kuruni") {
  fullName = nam1 + nam2;
  console.log(fullName);
}
myName("oaes");
