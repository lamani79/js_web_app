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
    copy_done();

    

  
};

copy_but.addEventListener('click',function(){

      let done = document.getElementById("done");
    console.log(done.style)
});


function copy_color(){

    let text_created = document.createElement("textarea");
    text_created.value = span.textContent;
    document.body.appendChild(text_created);
    text_created.select()
    document.execCommand('copy');
    text_created.remove();

};





function copy_done(){

    let copy_done_text = document.createElement("span");
    copy_done_text.setAttribute("id","done");
    let copy_done_text_style =  document.createElement("style");
    copy_done_text.innerHTML = `
    Copied!

    `;
    copy_done_text_style.innerHTML = `
    #done {
        backgroundColor: red;
        position: absolute;
        content: "copied";
        background-color: white;
        color: black;
        font-weight: bold;
        transition: opacity 0.3s, visibility 0.3s , top 0.3s;
        top: O;
        right: 0px;
        width: 100%;
        z-index: 1;
      }
      

    `;
    copy_but.appendChild(copy_done_text);
     document.head.appendChild(copy_done_text_style);
     var delayInMilliseconds = 2000; //1 second

    setTimeout(function() {
    copy_done_text.remove();
    copy_done_text_style.remove();
    }, delayInMilliseconds);
    

    
     
    };
    

  