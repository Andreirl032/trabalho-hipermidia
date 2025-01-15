var presentationText = document.getElementById("presentation-text");
var slideNumber = 1
function changeText(){
if(slideNumber===1){
    presentationText.textContent="Texto"
}
else if(slideNumber===2){
    presentationText.textContent="Texto2"
}
else if(slideNumber===3){
    presentationText.textContent="Texto3"
}
}

function decreaseSlideNumber(){
    console.log("oie")
    if(slideNumber===3 || slideNumber===2){
        slideNumber-=1;
    } else if(slideNumber===1){
        slideNumber=3;
    } else{
        slideNumber=1;
    }
    changeText();
}
    function increaseSlideNumber(){
        if(slideNumber===1 || slideNumber===2){
            slideNumber+=1;
        } else if(slideNumber===3){
            slideNumber=1;
        } else{
            slideNumber=1;
        }
        changeText();
    }
    