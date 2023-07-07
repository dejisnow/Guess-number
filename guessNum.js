window.onload=()=>{
let display= document.querySelector(".display")
    let input =
    document.getElementById("input")
    let btn = document.querySelector(".btn")
    let box = document.querySelector(".box")
    let notification= document.querySelector(".notification")
    let trails = document.querySelector(".trials")
    
    let score = document.querySelector(".score")
    let highestScore = document.querySelector(".highestScore")
    
    
let guessCount = 3;
let scores = 0;

 var num = Math.floor(Math.random() * 9)+ 1
 var randomNum = Math.floor(Math.random() * 8)+ 1

trails.innerHTML = `${guessCount}`
  display.innerHTML =`<h2> Guess a number <= ${num + randomNum } </h2>`
    
    btn.addEventListener("click",function btnEvent(){
         trails.innerHTML = `${guessCount}`
          
        var value = parseInt(input.value)
        console.log(num)
        if(value === num){
        scores+=100
        score.innerHTML = `${scores}`
        notification.style.display = "block"
        notification.style.color = "green"
       
        notification.innerHTML = "You guessed it 👏🎉🎉!!"
       input.disabled = true;
            trails.innerHTML = "0"
            btn.removeEventListener("click",btnEvent)
     
        }else{
         notification.style.display = "block"
        notification.style.color = "red"
        
        guessCount--
    if(guessCount > 0 ){
        notification.innerHTML = `<samp>Failed guess🥲 <br> you have ${guessCount} guesses left!! </samp>` }
        else{
            notification.style.display = "none"
            box.style.color = "red"
            box.innerHTML = "GAME OVER !!"
            input.value = ""
            input.disabled = true;
            trails.innerHTML = "0"
            btn.removeEventListener("click",btnEvent)
        }
        
            
        }
        
        input.value = ""
        
    })
            }
                            
