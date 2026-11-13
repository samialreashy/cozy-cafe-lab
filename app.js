let mainTitleEl=document.querySelector("#main-title")
mainTitleEl.textContent="Welcome to the Cozy Cafe"
let highlightTitleEls=document.querySelectorAll(".highlight-title")
let PaEl=document.querySelector("#quote-of-the-day")
let imgId=document.querySelector("#main-photo")

highlightTitleEls.forEach((item)=>{
  console.log(item.textContent)
  item.style.fontStyle="italic"
})

PaEl.textContent="A little coffee, a little conversation."
PaEl.classList.add("featured")


console.log(imgId.getAttribute("src"))
imgId.setAttribute("src","./assets/berry-cake.jpg")
imgId.setAttribute('alt',"A berry cake served at the cafe")