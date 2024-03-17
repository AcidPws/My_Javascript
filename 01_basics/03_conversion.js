let marks = "56"

console.log(typeof marks);

let var_in_num = Number(marks);   //to number
console.log(typeof var_in_num) 

//conversion confusions
//1.
let unique = "45abc"               //not a pure number
let unique_num = Number(unique)    //will convert the whole into number
console.log(unique_num);           //but will show NaN(not a number) when printed 
//2.
let unique1 = null                 //not a pure number
let unique1_num = Number(unique1)  //will convert the whole into number
console.log(unique1_num);          //but will show 0 when printed 
//3.
let unique2 = undefined            //not a pure number
let unique2_num = Number(unique2)  //will convert the whole into number
console.log(unique2_num);          //but will show NaN when printed 
//4.
let unique3 = true                 //not a pure number
let unique3_num = Number(unique3)  //will convert the whole into number
console.log(unique3_num);          //but will show 1(0 for false) when printed 

//boolean
let isactive = 1
let boolean_isactive = Boolean(isactive)
console.log(boolean_isactive);

//for 1 = true , 0 = false
//for "" = false , "<anything>" = true

//string
let num = 98
let string_num = String(num)
console.log(string_num);
