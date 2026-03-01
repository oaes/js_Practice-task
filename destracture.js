// destructing array and objects

const name = ["akash", "saad"];
const [name1, name2, name3 = "bablu"] = [...name];
console.log(name1, name2, name3);

const {
  name: phoneName,
  from,
  price,
  camera,
  battery,
} = {
  name: "iqoo z9s",
  from: "china",
  price: "30,000",
  camera: "50mp",
  battery: "5500",
};
console.log(phoneName, price, camera, battery, from);
