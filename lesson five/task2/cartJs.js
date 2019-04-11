let cart = {
    cartArr: [
        {
            name: 'productOne',
            price: 40,
            count: 2
        },
        {
            name: 'productTwo',
            price: 100,
            count: 1
        },
        {
            name: 'productThree',
            price: 50,
            count: 4
        }
    ],


    isEmpty: function () {
        let container = document.querySelector('.cart');
        if(this.cartArr.length === 0){
            let textEmptyCart = document.createElement('p');
            textEmptyCart.classList.add('textEmptyCart');
            textEmptyCart.textContent = 'Корзина пуста';
            container.appendChild(textEmptyCart);

            return;
        };
    },

    getProductCount: function(){
        let productCount = 0;
        for (let count of this.cartArr){
            productCount += count.count;
        }
        return productCount;
    },

    getSum: function(){
        let cartSum = 0;
        for (let sum of this.cartArr){
            cartSum += (sum.count * sum.price);
        }
        return cartSum;
    },


    renderCart: function () {
        this.isEmpty();
        let container = document.querySelector('.cart');

        let count = document.createElement('p');
        count.classList.add('cartCount');
        count.textContent = `Товаров в корзине: ${this.getProductCount()}`;
        container.appendChild(count);


        let sum = document.createElement('p');
        sum.classList.add('cartSum');
        sum.textContent = `на сумму: ${this.getSum()} рублей`;
        container.appendChild(sum);
    },



};