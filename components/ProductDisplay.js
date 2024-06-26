app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
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

                    <p>Shipping: {{ shipping }}</p>

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
                <review-list v-if="reviews.length" :reviews="reviews"></review-list>    <!-- instance du composant 'review-list' -->
                <review-form @review-submitted="addReview"></review-form>               <!-- instance du composant 'review-form' -->
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
            reviews: []
        }
    },
    methods: {
        addToCart () {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)   // émission d'un événement nommé 'add-to-cart' et l'identifiant du produit
        },
        updateImage (myIndexfSelectedVariant) {
            this.selectedVariant = myIndexfSelectedVariant
        },
        addReview (myReview) {
            this.reviews.push(myReview)     // enregistrement des données du formulaire
        }
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
        shipping () {
            if (this.premium) {
                return 'Free'
            }
            return '2.99 $'
        }
    }
})