const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 8 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 3 }, 
            ],
        }
    },
    methods: {
        addToCart () {
            this.cart += 1
        },
        updateImage (myIndexfSelectedVariant) {
            this.selectedVariant = myIndexfSelectedVariant
        },
    },
    computed: {
        title () {
            return this.brand + ' ' + this.product
        },
        image () {
            return this.variants[this.selectedVariant].image
        },
        inStock () {
            return this.variants[this.selectedVariant].quantity
        },
    }
})
