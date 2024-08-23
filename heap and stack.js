// stack(primitive) and heap(non-primitive)

let myname="kapilphogat"
let anothername=myname

anothername="aryanphogat"
console.log(myname);
console.log(anothername);

let userone = {
    email: "hero@gmail.com",
    upiid: "user@ybl"
}

let usertwo=userone

usertwo.email="abhishek@gmail.com"
console.log(userone);
console.log(usertwo);