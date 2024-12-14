const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","blue bettel","flash"]

// const allheros = marvel_heros.concat(dc_heros)

// console.log(allheros);

// spread operator(for multiple values)

const all_new_heros = [...marvel_heros,...dc_heros]

// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7[4,5]]]

const real_another_array = another_array.flat(IIInfinity)

console.log(real_another_array);
