// chapter 11
// object oriented programming in js 
// complex numbers

class complex{
    constructor(real,imaginary){
        this.real = real
        this.imaginary = imaginary
    }

    add (num) {
   this.real += num.real
 this.imaginary += num.imaginary
   return new complex(this.real,this.imaginary);
    }

    get real() {
        return this._real
    }
    get imaginary() {
        return this._imaginary
    }
    set real(newReal) {
        this._real =newReal
    }
    set imaginary(newImaginary) {
        this._imaginary =newImaginary
    }
}


let a= new complex(2,4)
let b= new complex(1,3)

let sum = a.add(b)
a.real=5
a.imaginary =2
// console.log(a.real);
// console.log(a);
console.log(`${sum.real}+${sum.imaginary}i`);





// create class human and student (extends human) and override its methods

class Human {
    constructor(name) {
        this.name = name
        console.log(this.name + " is nice.");
    }
    walk() {
        console.log(this.name + " can walk.")
    }
    speak() {
        console.log(this.name + " can speak.")
    }
}

class student extends Human {
    
    walk() {
        console.log(this.name + " can walk fast.")
    }
    learn() {
        console.log(this.name + " is learning.")
    }
}

let st = new student("Ambika")

// st.walk();
// st.speak();
// st.learn();

// console.log(st instanceof Human);