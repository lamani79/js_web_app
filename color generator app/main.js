let but = document.getElementById("generator_but");
let body = document.querySelector("body");
let hexa = "01234561BCDEF"
let span = document.getElementById("hexa_color_text");


 but.addEventListener('click',change_background);
// function change_background(){
//     color_list.forEach(function(color){
//         body.style.backgroundColor = color;
//         console.log("Done");
//     });
    
// };
let cont = 0;
let color = "#";
let generated = 0;



let color_generator = () => {return Math.floor(Math.random()*10);}

function change_background(){

    for(x=0;x<6;x++){
        generated = hexa[color_generator()];
        color += generated;

    };
    body.style.backgroundColor = color;
    span.innerText = color;
    color = "#";
  
};
