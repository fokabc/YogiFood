let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    alert(`${name} добавлен в корзину.`);
    localStorage.setItem('cart', JSON.stringify(cart)); // Сохранение в localStorage
}

function loadCart() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cart-items');
    let total = 0;
    cartItems.innerHTML = ''; // Очистить перед добавлением новых элементов

    cart.forEach(item => {
        total += item.price;
        let itemElement = document.createElement('p');
        itemElement.textContent = `${item.name} - ${item.price} ₽`;
        cartItems.appendChild(itemElement);
    });

    document.getElementById('total-price').textContent = `Общая стоимость: ${total} ₽`;
}

function proceedToCheckout() {
    window.location.href = "checkout.html";
}

// При загрузке страницы cart.html, загрузить корзину
if (document.getElementById('cart-items')) {
    document.addEventListener('DOMContentLoaded', loadCart);
}
