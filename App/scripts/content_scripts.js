console.log("executing content scripts");
//select body of the html page 
let body = document.querySelector("body");
// creating a button 
const curioBtn = document.createElement("button");
curioBtn.setAttribute("id","curioBtn");
curioBtn.textContent = "C";

curioBtn.addEventListener("click",setToggle);
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




