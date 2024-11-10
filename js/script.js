document.getElementById('search-input').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const storeCards = document.querySelectorAll('.store-card');

    storeCards.forEach(card => {
        const storeName = card.querySelector('span').textContent.toLowerCase();
        if (storeName.includes(searchQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
