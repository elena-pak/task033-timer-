document.addEventListener("DOMContentLoaded", () => {
   const elem =  document.querySelector("div")
   elem.innerText = 60
   setInterval(() => {
       let current = Number(elem.innerText)
       current--
       elem.innerText = current
   }, 1000)
})