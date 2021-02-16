let but = document.getElementById("generator_but");
let body = document.querySelector("body");
let hexa = "01234561BCDEF" //all hexa code can be in color code
let span = document.getElementById("hexa_color_text"); // the hexa color code span in html


but.addEventListener('click',change_background);
let color = "#"; // because all hexa color bigin with # symbole
let generated = 0; 


// fuction to generate random numbers
let color_generator = () => {return Math.floor(Math.random()*10);} 
// this function to change the backgournd of body and cange hexa color code text
function change_background(){

    for(x=0;x<6;x++){
        generated = hexa[color_generator()];
        color += generated;

    };
    body.style.backgroundColor = color;
    span.innerText = color;
    color = "#"; // reinitialize the value of color to '#'
  
};
