//stack(primitive)makes a copy 

let myname = "AcidPws"
let anothername = myname
anothername = "my_javascript"

console.log(myname);
console.log(anothername);

//heap(non-primitive)changes made in the original

let user1 = {
    email : "user@google.com",
    upi : "user@ipnb"
}
let user2 = user1
user2.email = "kasturi@google.com"   //this change will be updated on the actual object

console.log(user1);   //both are same after change
console.log(user2);   