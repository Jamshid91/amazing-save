const menu = document.querySelector('.menu'),
      menuBtn = document.querySelector('.menu-btn'),
      search = document.querySelector('.search-inp'),
      search_clear = document.querySelector('.search-clear'),
      body = document.querySelector('body');


menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('clickedMenu')
    menu.classList.toggle('d-none');
    body.classList.toggle('bodyStopScroll');
});

search.addEventListener('input', () => {
  if(search.value.length >= 2) {
    search.parentElement.classList.add('searchInp')
  } else {
    search.parentElement.classList.remove('searchInp')
  }
});

search_clear.addEventListener('click', () => {
  search_clear.previousElementSibling.value = ''
  search_clear.parentElement.classList.remove('searchInp');
})


