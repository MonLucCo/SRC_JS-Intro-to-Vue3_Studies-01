app.component('product-display', {
   template:
   /*html*/
   `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img v-bind:src="image">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>
                <div
                    class="color-circle"
                    v-for="(variant, index) in variants"
                    :key="variant.id"
                    @mouseover="updateImage(index)"
                    :style="{ backgroundColor: variant.color }">
                </div>
                <button
                    class="button"
                    :class="{ disabledButton: !inStock }"
                    :disabled="!inStock"
                    @click="addToCart">
                    Add to Cart
                </button>
            </div>
        </div>
   </div>`,
   data() {
    return {
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