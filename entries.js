//keys, values, entries, seal, freeze
const school = { class: "4", location: "rajbari", fee: "900" };
console.log(school);
const keys = Object.keys(school);
const value = Object.values(school);
const entries = Object.entries(school);
const seal = Object.seal(school);
const freeze = Object.freeze(school);
console.log(keys);
// delete school.fee;
console.log(school);
