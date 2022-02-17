


//// 
document.addEventListener("DOMContentLoaded", () => {
   const elem =  document.querySelector("div")

   if (localStorage.getItem("time")){
       elem.innerText = localStorage.getItem("time")
   } else{
       elem.innerText = "25:00"
   }
   elem.innerText = "25 : 00"
   const startButton = document.getElementById("start")
   let intervalID = 0
   startButton.addEventListener("click", () => {
       startTimer(intervalID)})
   const pauseButton = document.getElementById("pause")
   pauseButton.addEventListener("click",() => {
       clearInterval(intervalID)
       intervalID = 0
   })
   const resetButton = document.getElementById("reset")
   resetButton.addEventListener("click", () => {
    clearInterval(intervalID)
    intervalID = 0
    elem.innerHTML = "25:00"
       
   } )
   
})



function myTimer(){
    const elem =  document.querySelector("div")
        let current = elem.innerText.split(":")
        let seconds = Number(current[1])
        let minutes = Number(current[0])
        if(minutes===0 && seconds ===0){
            return 0
        }
        if(seconds === 0) {
         seconds = 59
         minutes--
        } else {
            seconds--
        }
      
     seconds = convertTime(seconds)
     minutes = convertTime(minutes)
     
     let currentTime = `${minutes} : ${seconds}`
     localStorage.setItem("time", currentTime)
        elem.innerText = currentTime
    
}


function convertTime (num){
    if (num < 10){
        return `0${num}`
    } else {
        return String(num)
    }
}

function startTimer (ii) {
    if (ii < 1){
        ii = setInterval(myTimer,1000)}

}