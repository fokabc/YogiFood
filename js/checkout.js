// Валидация и обработка ввода номера телефона
function enforcePhoneFormat() {
    const phoneInput = document.getElementById("phone");
    
    // Устанавливаем начальное значение, если поле пустое
    if (!phoneInput.value.startsWith("+7")) {
        phoneInput.value = "+7";
    }

    // Ограничиваем длину до 12 символов (1 символ для "+" и 11 для номера)
    if (phoneInput.value.length > 12) {
        phoneInput.value = phoneInput.value.slice(0, 12);
    }
}

function confirmOrder() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const street = document.getElementById("street").value.trim();
    const house = document.getElementById("house").value.trim();
    const apartment = document.getElementById("apartment").value.trim();
    const floor = document.getElementById("floor").value.trim();
    const comment = document.getElementById("comment").value.trim();

    // Валидация имени
    if (name === "") {
        alert("Пожалуйста, введите ваше имя.");
        return;
    }

    // Валидация номера телефона
    const phoneRegex = /^\+7\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Пожалуйста, введите корректный номер телефона в формате +7XXXXXXXXXX.");
        return;
    }

    // Валидация улицы
    if (street === "") {
        alert("Пожалуйста, введите название улицы.");
        return;
    }

    // Валидация дома (до 5 символов)
    const houseRegex = /^[a-zA-Z0-9]{1,5}$/;
    if (!houseRegex.test(house)) {
        alert("Пожалуйста, введите номер дома (до 5 символов).");
        return;
    }

    // Валидация номера квартиры (только цифры, до 3 символов)
    if (!/^\d{1,3}$/.test(apartment)) {
        alert("Пожалуйста, введите корректный номер квартиры (до 3 цифр).");
        return;
    }

    // Валидация этажа (только цифры, до 2 символов)
    if (!/^\d{1,2}$/.test(floor)) {
        alert("Пожалуйста, введите корректный этаж (до 2 цифр).");
        return;
    }

    // Если все поля валидны, подтверждаем заказ
    alert("Заказ подтвержден!");
    // Здесь можно добавить код для отправки данных на сервер или дальнейшую обработку
}

// Функция для скрытия клавиатуры при нажатии на пустое место
document.addEventListener('click', function(event) {
    // Проверяем, кликнул ли пользователь вне поля ввода или текстового поля
    if (!event.target.closest('input') && !event.target.closest('textarea')) {
        document.activeElement.blur();
    }
});
