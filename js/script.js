window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.list'),
    menuItem = document.querySelectorAll('.list_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('list_active');
        })
    })
})