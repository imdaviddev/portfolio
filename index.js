document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".toggle-menu")
    const toggleBtn = document.querySelector('.toggle-btn');

    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle("open")
        toggleBtn.classList.toggle("open")
    })
})