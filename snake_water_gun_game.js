// snake water and gun game 
//  s > w , s < g ,g < w 

let arr = ['S','W','G']

let r = Math.ceil(Math.random()*3)
 let s= arr[r-1];

 console.log(r,s);

let inp = 'W'
// prompt("Enter 'S' or 'W' or 'G'") 
if(inp == 'S' && r==2){
    console.log("Congratulations! You won,your snake won over computer's water."); 
}
else if(inp == 'S' && r==3){
    console.log("Sorry! You loss,your snake loss over computer's gun."); 
}
else if(inp == 'W' && r==1){
    console.log("Sorry! You loss,your water loss over computer's snake."); 
}
else if(inp == 'W' && r==3){
    console.log("Congratulations! You won,your water won over computer's gun."); 
}
else if(inp == 'G' && r==1){
    console.log("Congratulations! You won,your gun won over computer's snake."); 
}
else if(inp == 'G' && r==2){
    console.log("Sorry! You loss,your gun loss over computer's water."); 
}else{
    console.log("Match is tie.")
}
