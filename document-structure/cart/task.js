const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');
const cart = document.querySelector('.cart');

function updateCartVisibility() {
    cart.style.display = cartProducts.children.length > 0 ? 'block' : 'none';
}

products.forEach(product => {
    const quantityValue = product.querySelector('.product__quantity-value');
    const decButton = product.querySelector('.product__quantity-control_dec');
    const incButton = product.querySelector('.product__quantity-control_inc');
    const addButton = product.querySelector('.product__add');

    decButton.addEventListener('click', () => {
        let value = parseInt(quantityValue.textContent);
        if (value > 1) {
            quantityValue.textContent = value - 1;
        }
    });

    incButton.addEventListener('click', () => {
        let value = parseInt(quantityValue.textContent);
        quantityValue.textContent = value + 1;
    });

    addButton.addEventListener('click', () => {
        const productId = product.dataset.id;
        const productImg = product.querySelector('.product__image').src;
        const quantity = parseInt(quantityValue.textContent);

        let cartProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
        
        if (cartProduct) {
            const countElement = cartProduct.querySelector('.cart__product-count');
            countElement.textContent = parseInt(countElement.textContent) + quantity;
        } else {
            const cartProductElement = document.createElement('div');
            cartProductElement.classList.add('cart__product');
            cartProductElement.dataset.id = productId;
            cartProductElement.innerHTML = `
                <img class="cart__product-image" src="${productImg}">
                <div class="cart__product-count">${quantity}</div>
                <button class="cart__product-remove">Удалить</button>
            `;
            cartProducts.appendChild(cartProductElement);

            const removeButton = cartProductElement.querySelector('.cart__product-remove');
            removeButton.addEventListener('click', () => {
                cartProductElement.remove();
                updateCartVisibility();
            });
        }

        updateCartVisibility();
        quantityValue.textContent = '1';
    });
});

updateCartVisibility();