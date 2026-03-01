// dot notation, bracket notation, optional chining

const friends = {
  name: "jamal",
  profession: "chef",
  live: "malaysia",
  salary: "80000",
};
// console.log(friends.live);
// console.log(friends[name]);
const job = friends["profession"];
// console.log(job);

const family = {
  father: {
    name: "Mr.X",
    job: "googling",
    age: "70",
  },
  mother: {
    name: "Mrs.x",
    job: "homemaker",
    age: "50",
  },
  siblings: "two",
  address: {
    village: "hosnabad",
    thana: "rajbari sadar",
    district: "rajbari",
    post: "7700",
  },
};

console.log(family.address.post?.road?.passageNo);
console.log(family["father"]);
