let header = document.querySelector(".header_container");

let lastScrollTop = 0;


window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || this.document.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.classList.add('hidden_header');
  } else {
    header.classList.remove('hidden_header');
  }
  lastScrollTop = scrollTop;
})
