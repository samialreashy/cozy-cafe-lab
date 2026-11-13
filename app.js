let mainTitleEl=document.querySelector("#main-title")
mainTitleEl.textContent="Welcome to the Cozy Cafe"
let highlightTitleEls=document.querySelectorAll(".highlight-title")

highlightTitleEls.forEach((item)=>{
  console.log(item.textContent)
  item.style.fontStyle="italic"
})
let PaEl=document.querySelector("#quote-of-the-day")
PaEl.textContent="A little coffee, a little conversation."
PaEl.classList.add("featured")

