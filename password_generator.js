// Password generator 
// should contain 1 lowercase, 1 uppercase and  special character


class password{
    constructor() {
        console.log("Welcome to password generator");
    }
    generatePassword(len){
        let chars = "abcdefghijklmnopqrstuvwxyz"
        let num = "1234567890"
        let special = "!@#$%^&*"
     if(len<3){
        console.log("Your password should atleast 3 character long.");
     }else{
        let i=0;
        let pass = ""
        while(i<len){
         pass +=chars[ Math.floor(Math.random()*chars.length)]
         i++;
         if(i==len) break;
         pass +=num[Math.floor(Math.random()*num.length)]
         i++;
         if(i==len) break;
         pass +=special[Math.floor(Math.random()*special.length)]
         i++;
        }
        // console.log(pass);
        return pass;
     }
    }
}

let p = new password()
let s = p.generatePassword(4)

console.log(s);
