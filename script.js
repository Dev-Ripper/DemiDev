const allButtons = document.getElementsByTagName("button");
let bomb1;
let bomb2;
let count = 0;

for(let i = 0 ; i < allButtons.length; i++){
    
    do {
        bomb1 = Math.floor(Math.random()*25);
        bomb2 = Math.floor(Math.random()*25);
    } while (bomb1 === bomb2);

    allButtons[i].addEventListener("click", function(){

        if (i === bomb1 || i === bomb2) {

            allButtons[i].innerHTML = "💣";
            allButtons[i].style.backgroundColor = "red"
            setTimeout(() => {document.location.reload();},1000);
        } 
        
        else {

            allButtons[i].innerHTML ="1";
            allButtons[i].style.backgroundColor = "green";
            count ++;
        }
        
        if (count === 23) {
            alert("GG!!")
            setTimeout(() => {document.location.reload();},1000);
        }
    
    });
} 
console.log(bomb1, bomb2);
