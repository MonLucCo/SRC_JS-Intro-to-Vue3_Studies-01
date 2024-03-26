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
        },
        // Challenge
        removeCart (myIdToRemove) {
            const indexToRemove = this.cart.indexOf(myIdToRemove)

            if (indexToRemove > -1) {
                this.cart.splice(indexToRemove, 1)
            }
        }
        // Challenge
    },
})
