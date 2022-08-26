const container = document.querySelector(".card")
const thankyou = document.querySelector(".thank-you")
const submit = document.getElementById("submit-rating")
const goback = document.getElementById("go-back")
const buttons = document.querySelectorAll(".ball")
const actualrating = document.getElementById("rating")

submit.addEventListener("click", () => {
  container.style.display = "none"
  thankyou.classList.remove("hidden")

  buttons.forEach((rating) => {
    rating.addEventListener("click", () => {
      actualrating.innerHTML = rating.innerHTML
    })
  })
})

goback.addEventListener("click", () => {
  container.style.display = "block"
  thankyou.classList.add("hidden")
})