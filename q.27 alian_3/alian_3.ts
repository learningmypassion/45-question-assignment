//if the allian color is green print a message that player earned 5 points
//if the alian color is yellow the player earned 10 points
//if the alian color is red the player earned 15 points
let alian_color: string="green";


if(alian_color==='green'){
    console.log("version 1:player just earned 5 points!");    
    
}else if(alian_color==='yellow'){
    console.log("player earned 10 points!");    
}else if(alian_color==='red'){

    console.log("player earned 15 points!")
}else{
    console.log("please select right color")
}

//version 2 of same program
 alian_color="yellow";
 if(alian_color==='green'){
    console.log("player just earned 5 points!");    
    
}else if(alian_color==='yellow'){
    console.log("version 2: player earned 10 points!");    
}else if(alian_color==='red'){

    console.log("player earned 15 points!")
}else{
    console.log("please select right color")
}
//version 3 of same program
alian_color="red";
if(alian_color==='green'){
   console.log("player just earned 5 points!");    
   
}else if(alian_color==='yellow'){
   console.log("player earned 10 points!");    
}else if(alian_color==='red'){

   console.log("version 3:player earned 15 points!")
}else{
   console.log("please select right color")
}