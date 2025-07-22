// const marvel_heros = ["thor","Ironman","spiderman"]
// const dc_heros = ["superman","blue bettel","flash"]

// const allheros = marvel_heros.concat(dc_heros)

// console.log(allheros);

// // spread operator(for multiple values)

// const all_new_heros = [...marvel_heros,...dc_heros]

// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(another_array);
const real_AA = another_array.flat(Infinity)
console.log(real_AA);



// const real_another_array = another_array.flat(IIInfinity)

// console.log(real_another_array);

// to convert into array 

console.log(Array.from("HELLO"));
// console.log(Array.from(HELLO)

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2, score3));
console.log(Array.of("HELLO"));

