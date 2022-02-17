
// //// после опр времени срабаьывает 1 раз
// // setTimeout(() => {console.log("hi")}, 3000)
// setTimeout(doSomeThing, 3000)
// function doSomeThing (){
//     console.log("hi")
// }


// //// после опр времени повторяет действие
// setInterval(doSomeThing, 1000)
// function doSomeThing (){
//     const elem = document.querySelector("div")
//     let num = Number(elem.innerText)
//     num++
//     elem.innerText = num
// }

////
document.addEventListener("DOMContentLoaded", () => {
    const myDiv = document.querySelector("div")
    if (!localStorage.getItem("number")){
        localStorage.setItem("number", 0)
    }
    myDiv.innerText = localStorage.getItem("number")
    setInterval(() => {
        num = Number(myDiv.innerText)
        num++
        localStorage.setItem("number", num)
        myDiv.innerText = num
    }, 1000)
    
})

//// 
document.addEventListener("DOMContentLoaded", () => {
   const elem =  document.querySelector("div")
   elem.innerText = "25 : 00"
   const startButton = document.getElementById("start")
   let intervalID = 0
   startButton.addEventListener("click", () => {
       if (intervalID < 1){
       intervalID = setInterval(myTimer,1000)}})
   const pauseButton = document.getElementById("pause")
   pauseButton.addEventListener("click",() => {
       clearInterval(intervalID)
       intervalID = 0
   })
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
     
        elem.innerText = `${minutes} : ${seconds}`
    
}


function convertTime (num){
    if (num < 10){
        return `0${num}`
    } else {
        return String(num)
    }
}

