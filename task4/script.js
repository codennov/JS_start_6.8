const Link = document.querySelector('#link');

Link.addEventListener('click', (event) => {
   
   let text = prompt('Введите свой текст');
   Link.textContent = text;
   event.preventDefault();
   console.log('отмена сработала');
})

