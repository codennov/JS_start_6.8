const consolelog = document.querySelector('#consoleLog');

consolelog.addEventListener('click', ()=>  {
    alert('Служит для вывода инфорации на консоль');
})

const alertText = document.querySelector('#alert');

alertText.addEventListener('click', () => {
    alert('Cлужит для вывода предупреждения в всплывающем окне');
})

const promtW = document.querySelector('#promt');

promtW.addEventListener('click', () => {
    
   prompt('Появляется Диалоговое окно\nВведите ваш текст', 'Диалоговое окно');
}) 
