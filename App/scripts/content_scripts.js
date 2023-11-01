console.log("executing content scripts");
//select body of the html page 
let body = document.querySelector("body");
// creating a button 
const curioBtn = document.createElement("button");
curioBtn.setAttribute("id","curioBtn");
curioBtn.textContent = "C";

curioBtn.addEventListener("click",GetSpeech);
// adding to dom
document.body.appendChild(curioBtn);



//set toggle function
function setToggle(){
    if(curioBtn.hasAttribute("toggle")===false){
        curioBtn.setAttribute("toggle",true);
        console.log("i am listening");

        }else{
        curioBtn.removeAttribute("toggle");
        console.log("not listening now");
        }
}


// speech recognition 
function GetSpeech(){
    const SpeechRecognition =  window.SpeechRecognition || window.webkitSpeechRecognition;
   
    let recognition = new SpeechRecognition();
    recognition.onstart = () =>{
        setToggle();
    }

    recognition.onspeechend = () => {
        recognition.stop();
        setToggle();
    }

    recognition.onresult = (result) => {
        let vocalInput = result.results[0][0].transcript;
        const myPopup = new Popup({
            id: "Curio",
            title: "Here Is What You Said : ",
            content:vocalInput,
        });
        myPopup.show();
         console.log("Here is what you said \n",vocalInput);
    }

    recognition.start();

}








