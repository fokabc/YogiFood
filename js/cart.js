// Инициализация корзины как пустого массива или загрузка из localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Функция добавления товара в корзину
function addToCart(itemName, itemPrice) {
    // Проверяем, есть ли уже товар в корзине
    const existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
        // Если товар уже есть, увеличиваем его количество
        existingItem.quantity += 1;
    } else {
        // Если товара нет в корзине, добавляем его
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }

    // Сохраняем корзину в localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Обновляем отображение корзины
    updateCartDisplay();
    alert(`${itemName} добавлен в корзину!`);
}

// Функция для обновления отображения корзины
function updateCartDisplay() {
    const cartContainer = document.querySelector(".cart-list");
    if (!cartContainer) return;

    // Очищаем текущее содержимое корзины
    cartContainer.innerHTML = "<h2>Ваши товары</h2>";

    // Переменная для хранения общей стоимости
    let totalPrice = 0;

    // Создаем элементы для каждого товара в корзине
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        const itemElement = document.createElement("p");
        itemElement.textContent = `${item.name} - ${item.price} ₽ x ${item.quantity} = ${itemTotal} ₽`;
        cartContainer.appendChild(itemElement);
    });

    // Отображаем общую стоимость
    const totalElement = document.createElement("p");
    totalElement.classList.add("total-price");
    totalElement.textContent = `Общая стоимость: ${totalPrice} ₽`;
    cartContainer.appendChild(totalElement);

    // Добавляем кнопки "Перейти к подтверждению" и "Назад"
    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Перейти к подтверждению";
    confirmButton.classList.add("confirm-button");
    confirmButton.onclick = () => window.location.href = "checkout.html";

    const backButton = document.createElement("button");
    backButton.textContent = "Назад";
    backButton.classList.add("back-button");
    backButton.onclick = () => window.location.href = "products.html";

    cartContainer.appendChild(confirmButton);
    cartContainer.appendChild(backButton);
}

// Функция для отображения корзины на странице корзины
function displayCart() {
    const cartContainer = document.querySelector(".cart-list");
    if (!cartContainer) return;

    cartContainer.innerHTML = "<h2>Ваши товары</h2>";

    let totalPrice = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        const itemElement = document.createElement("p");
        itemElement.textContent = `${item.name} - ${item.price} ₽ x ${item.quantity} = ${itemTotal} ₽`;
        cartContainer.appendChild(itemElement);
    });

    const totalElement = document.createElement("p");
    totalElement.classList.add("total-price");
    totalElement.textContent = `Общая стоимость: ${totalPrice} ₽`;
    cartContainer.appendChild(totalElement);

    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Перейти к подтверждению";
    confirmButton.classList.add("confirm-button");
    confirmButton.onclick = () => window.location.href = "checkout.html";

    const backButton = document.createElement("button");
    backButton.textContent = "Назад";
    backButton.classList.add("back-button");
    backButton.onclick = () => window.location.href = "products.html";

    cartContainer.appendChild(confirmButton);
    cartContainer.appendChild(backButton);
}

// Вызываем displayCart при загрузке страницы корзины
document.addEventListener("DOMContentLoaded", displayCart);
