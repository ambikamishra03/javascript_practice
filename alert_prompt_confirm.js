// chapter 6 

// p1 
let runAgain = true

const canDrive = (n) => {
  return n >= 18 ? true : false
}
while (runAgain) {
  let n = prompt("Enter your age");
  n = Number.parseInt(n);
  if(n<0){
    console.error("Number can't be negative")
  }  
  else if (canDrive(n)) {
    alert("You can drive");
  } else {
    alert("You cannot drive");
  }
  runAgain = confirm("Do you want to see the prompt again?")

}

// p2 redirect to google if number is greater than 4
let num = prompt("Enter your age");
num = Number.parseInt(num);

if(num>4){
  location.href = "https://google.com"
}

// p3 change the background color
let color = prompt("Enter your age");

document.body.style.background = color
