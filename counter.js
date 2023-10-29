

// Получаем текущее значение счетчика из localStorage
let count = localStorage.getItem('count');

// Если значение не определено, то устанавливаем его равным 0
if (!count) {
  count = 0;
}

// Увеличиваем значение счетчика на 1
count++;

// Сохраняем новое значение счетчика в localStorage
localStorage.setItem('count', count);

// Выводим значение счетчика на страницу
document.write(<p>Количество посещений: ${count}</p>);
