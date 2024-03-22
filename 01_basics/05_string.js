const name = "AcidPws"
const repoCount = 6

//concatinating
// console.log(name + " has " + repoCount + " github Repositories ");

// string interpolation using placeholders(``)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gamename = new String("Cyberpunk 2077")

console.log(gamename[0]);
console.log(gamename.__proto__);

//string methods
console.log(gamename.length);
console.log(gamename.toUpperCase());   //doesnt change original value bcuz it is a stack value
console.log(gamename.charAt(5));
console.log(gamename.indexOf('2'));


//substring
const gamename_updated = gamename.substring(0,7)
console.log(gamename_updated);

//slice
const gamename_updated2 = gamename.slice(-8,12)
console.log(gamename_updated2);

//trim , works on white spaces for eleminating spaces
const animename = "    Attack On Titan    "
console.log(animename);
console.log(animename.trim());

//replace
const url = "https://github.com/Acid%20Pws"  //if there is a space in a browser it is converted into %20 by browser
console.log(url.replace('%20','-'));      //like https://github.com/Acid%20Pws if there is a space between Acid and Pws

//includes
console.log(url.includes('git'));

//split
console.log(gamename.split(' '));


