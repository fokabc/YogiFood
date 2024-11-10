<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Выбор товаров</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <h1>Товары магазина</h1>
    </header>

    <section class="product-list">
        <h2>Выберите товары</h2>
        <div class="product-cards">
            <!-- Пример товаров -->
            <div class="product-card">
                <span>Молоко 1л</span>
                <p>Цена: 50 ₽</p>
                <button onclick="addToCart('Молоко 1л', 50)">Добавить в корзину</button>
            </div>
            <div class="product-card">
                <span>Хлеб</span>
                <p>Цена: 30 ₽</p>
                <button onclick="addToCart('Хлеб', 30)">Добавить в корзину</button>
            </div>
        </div>
    </section>

    <script src="js/cart.js"></script>
</body>
</html>
