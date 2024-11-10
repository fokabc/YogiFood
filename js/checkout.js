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

// Функция для отображения ошибки под полем
function displayError(message, fieldId) {
    const field = document.getElementById(fieldId);
    let errorElement = document.getElementById(`${fieldId}-error`);

    // Если элемента ошибки нет, создаем его
    if (!errorElement) {
        errorElement = document.createElement("div");
        errorElement.id = `${fieldId}-error`;
        errorElement.className = "error-message";
        field.parentNode.insertBefore(errorElement, field.nextSibling);
    }

    errorElement.textContent = message;
    field.classList.add("input-error");
}

// Функция для очистки ошибок
function clearError(fieldId) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    if (errorElement) {
        errorElement.textContent = "";
    }
    document.getElementById(fieldId).classList.remove("input-error");
}

function confirmOrder() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const street = document.getElementById("street").value.trim();
    const house = document.getElementById("house").value.trim();
    const apartment = document.getElementById("apartment").value.trim();
    const floor = document.getElementById("floor").value.trim();

    let hasError = false;

    // Валидация имени
    if (name === "") {
        displayError("Пожалуйста, введите ваше имя.", "name");
        hasError = true;
    } else {
        clearError("name");
    }

    // Валидация номера телефона
    const phoneRegex = /^\+7\d{10}$/;
    if (!phoneRegex.test(phone)) {
        displayError("Введите номер телефона в формате +7XXXXXXXXXX.", "phone");
        hasError = true;
    } else {
        clearError("phone");
    }

    // Валидация улицы
    if (street === "") {
        displayError("Введите название улицы.", "street");
        hasError = true;
    } else {
        clearError("street");
    }

    // Валидация дома (до 5 символов)
    const houseRegex = /^[a-zA-Z0-9]{1,5}$/;
    if (!houseRegex.test(house)) {
        displayError("Введите номер дома (до 5 символов).", "house");
        hasError = true;
    } else {
        clearError("house");
    }

    // Валидация номера квартиры (только положительные числа, до 3 символов)
    if (!/^\d{1,3}$/.test(apartment)) {
        displayError("Введите корректный номер квартиры (до 3 цифр).", "apartment");
        hasError = true;
    } else {
        clearError("apartment");
    }

    // Валидация этажа (только положительные числа, до 2 символов)
    if (!/^\d{1,2}$/.test(floor)) {
        displayError("Введите корректный этаж (до 2 цифр).", "floor");
        hasError = true;
    } else {
        clearError("floor");
    }

    // Если есть ошибки, не продолжаем обработку
    if (hasError) return;

    // Если все поля валидны, подтверждаем заказ
    alert("Заказ подтвержден!");
}

// Функция для скрытия клавиатуры при нажатии на пустое место
document.addEventListener("click", function(event) {
    if (!event.target.closest("input") && !event.target.closest("textarea")) {
        document.activeElement.blur();
    }
});
