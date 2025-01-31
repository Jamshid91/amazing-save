const selects = document.querySelectorAll('.select-head');
const options = document.querySelectorAll('.option');

selects.forEach(select => {
    select.addEventListener('click', () => {
        select.parentElement.classList.toggle('showSelect')
    });
});

options.forEach(option => {
    option.addEventListener('click', () => {
        options.forEach(el => {
            el.classList.remove('active')
        })
        option.parentElement.previousElementSibling.children[0].textContent = option.textContent;
        option.parentElement.parentElement.classList.remove('showSelect')
        option.classList.add('active')
    });
});


document.addEventListener('click', (e)=> {
    selects.forEach(select => {
        select.parentElement.contains(e.target) || select.parentElement.classList.remove('showSelect')
    });
});