// Массив для хранения товаров в корзине
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Функция для отображения количества товаров в корзине на значке
function updateCartCount() {
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

// Добавление товара в корзину
function addToCart(name, price) {
    const existingProduct = cart.find(item => item.name === name);

    if (existingProduct) {
        existingProduct.quantity += 1; // Увеличиваем количество, если товар уже в корзине
    } else {
        cart.push({ name, price, quantity: 1 }); // Добавляем новый товар с количеством 1
    }

    alert(`${name} добавлен в корзину.`);
    localStorage.setItem('cart', JSON.stringify(cart)); // Сохраняем корзину в localStorage
    updateCartCount(); // Обновляем количество товаров на значке корзины
}

// Загрузка товаров в корзине и отображение их на странице cart.html
function loadCart() {
    let cartItems = document.getElementById('cart-items');
    let total = 0;
    cartItems.innerHTML = ''; // Очищаем список перед отображением

    cart.forEach(item => {
        total += item.price * item.quantity; // Считаем стоимость с учетом количества
        let itemElement = document.createElement('p');
        itemElement.textContent = `${item.name} - ${item.price} ₽ x ${item.quantity} = ${item.price * item.quantity} ₽`;
        cartItems.appendChild(itemElement);
    });

    document.getElementById('total-price').textContent = `Общая стоимость: ${total} ₽`;
    updateCartCount(); // Обновляем количество товаров на значке корзины
}

// Переход к подтверждению заказа
function proceedToCheckout() {
    window.location.href = "checkout.html";
}

// Функция для кнопки "Назад"
function goBack() {
    window.history.back();
}

// При загрузке страницы cart.html, загрузить корзину
if (document.getElementById('cart-items')) {
    document.addEventListener('DOMContentLoaded', loadCart);
}

// Обновляем значок корзины при загрузке страницы
if (document.getElementById('cart-count')) {
    document.addEventListener('DOMContentLoaded', updateCartCount);
}
