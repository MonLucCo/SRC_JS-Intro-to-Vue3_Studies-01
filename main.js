const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart (myIdToAdd) {
            this.cart.push(myIdToAdd)
        }
    },
})
