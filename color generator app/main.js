let but = document.getElementById("generator_but");
let body = document.querySelector("body");
let hexa = "01234561BCDEF" //all hexa code can be in color code
let span = document.getElementById("hexa_color_text"); // the hexa color code span in html
let copy_but = document.getElementById("copy");



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

copy_but.addEventListener('click',copy_color);

// these function copy color that user generate
function copy_color(){
    // I maeke all these because i can't 
    // copy thext from span 
    // so I create a input and make value = color hexa code
    // than copy it form the input 
    // last think I remove the input from the window
    let text_created = document.createElement("textarea");
    text_created.value = span.textContent;
    document.body.appendChild(text_created);
    text_created.select()
    document.execCommand('copy');
    text_created.remove();
    copy_done();

};
// this funciton  show message to user to 
// tell hime that copy has done done!!
function copy_done(){
    let overLayer = document.getElementById("overLayer")
    overLayer.style.zIndex = "1"
    overLayer.style.opacity = "1";
    // this function  make delay than remove 
    // copied layer
    var delayInMilliseconds = 500; //1 second

    setTimeout(function() { 
        overLayer.style.opacity = "0";
        overLayer.style.zIndex = "-1"

    }, delayInMilliseconds);
};  