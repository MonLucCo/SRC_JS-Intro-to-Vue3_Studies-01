app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
        /*html*/
        `<div class="review-container">
            <h3>Reviews:</h3>
            <ul>
                <li v-for="(myReview, index) in reviews" :key="index">
                    {{ myReview.name }} gave this {{ myReview.rating }} star{{ myReview.rating > 1 ? "s" : "" }} <br>
                    {{ myReview.review }}
                    <!-- Challenge -->
                    <br>
                    Recommended: {{ myReview.recommend }}
                    <!-- Challenge -->
                </li>
            </ul>
        </div>
        `,

})

