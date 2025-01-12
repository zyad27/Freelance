const filterButtons = document.querySelectorAll(".my-btn")
const filterCards = document.querySelectorAll(".recipe-card")


filterButtons.forEach((btn) => {
    btn.addEventListener("click", ()=>{
        filterButtons.forEach(button => {
            button.classList.remove("active")
        })
        btn.classList.add("active")

        filterCards.forEach(card => {
            if((card.dataset.name === btn.dataset.name) || btn.dataset.name === "all"){
                card.classList.remove("d-none")
            }
            else {
                card.classList.add("d-none")
            }
        })
    })
})