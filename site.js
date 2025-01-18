var presentationText = document.getElementById("presentation-text");
var presentationTitle = document.getElementById("presentation-title");
var slideNumber = 1
function changeText(){
if(slideNumber===1){
    presentationText.textContent="Desenvolver aplicativos personalizados que inspirem, simplifiquem e impulsionem o sucesso dos nossos clientes, oferecendo excelência em tecnologia e design."
    presentationTitle.textContent="Missão"
}
else if(slideNumber===2){
    presentationText.textContent="Ser reconhecida como a principal parceira no desenvolvimento de soluções digitais que moldam o futuro dos negócios."
    presentationTitle.textContent="Visão"
}
else if(slideNumber===3){
    presentationText.textContent="Prezamos pela inovação, excelência, ética e sustentabilidade, sempre trabalhando em parceria com nossos clientes para criar soluções impactantes e de alta qualidade."
    presentationTitle.textContent="Valores"
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
    