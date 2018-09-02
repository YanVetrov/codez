<template>
    <div class="review-top">
        <h3 class="title">list review</h3>

        <ul class="review-top__list">
            <li v-for='li in tabs' @click='$emit("ontab",li.key)' :key='li.key'><span>{{li.name}}</span></li>
        </ul>
    </div>
</template>

<script>

    export default {
        props: {
            tabs: {type: Array, required: true}
        }
    }
</script>
