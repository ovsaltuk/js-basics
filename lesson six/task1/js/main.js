let catalog = {
    container: '.products',
    cart: '.cart-block',
    products: [
        {id: 1, title: 'Keyboard', price: 340, quantity: 1},
        {id: 2, title: 'Mouse', price: 140, quantity: 1},
        {id: 3, title: 'Notebook', price: 14000, quantity: 1},
        {id: 4, title: 'Gamepad', price: 2500, quantity: 1},
    ],
    defaultImg: 'https://placehold.it/200x150',
    render(){
        let block = document.querySelector(this.container);
        for (let product of this.products){
            block.insertAdjacentHTML('beforeend', this.getMarkup(product));
        }

    },

    getMarkup(product){
        return `<div class="product-item">
                    <img src="${this.defaultImg}" alt="">
                    <div class="desc">
                        <h3>${product.title}</h3>
                        <p>${product.price} руб</p>
                        <button class="buy-btn" data-id="${product.id}">Купить</button>
                    </div>
                </div>`
    },
};


let cart = {
    total: {},
    container: '.cart-block',
    products: [],
    calcTotal(){
        let sum = 0,
            items = 0;
        for (let product of this.products){
            sum += product.price * product.quantity;
            items += product.quantity;
        }
        this.total = {sum: sum, items: items};
    },
    render(){
        let block = document.querySelector(this.container);
        if(!this.products.length){
            block.textContent = 'Корзина пуста';
            return
        }
        for (let product of this.products){
            block.insertAdjacentHTML('beforeend', this.getMarkup(product));
        }
        this.renderTotal(block);

    },
    renderTotal(block){
        this.calcTotal();
        block.insertAdjacentHTML('beforeend', `<p class="total">В корзине ${this.total.items} товаров на сумму ${this.total.sum} рублей</p>`)
    },

    getMarkup(product){
        return `<div class="cart-item">
                    <h4>${product.title}</h4>
                    <p>${product.quantity} шт</p>
                    <p>${product.price * product.quantity} руб</p>
                    <button class="del-btn">&times;</button>
                </div>`
    },

    cleanCart(){
        let cart = document.querySelector(this.container);
        while (cart.hasChildNodes()) {
            cart.removeChild(cart.firstChild);
        }
    },

};

catalog.render();
cart.render();
