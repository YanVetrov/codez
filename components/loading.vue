<template>
    <div class="preloader" :class="{'page-wrapper':type === 'page'}" v-if="(loading || status_load !==true)">
        <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
        </svg>
    </div>
</template>

<script>
    export default {
        props: {
            type: {type: String, default: "page"},
            status_load: {type: Boolean, default: true},
        },
        data() {
            return {
                loading: false,

            }
        },
        methods: {
            start() {
                this.loading = true
            },
            finish() {
                this.loading = false
            }
        }
    }
</script>

<style scoped>


    .preloader {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: auto;
        height: auto;
        background: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding-top: 200px;
        font-size: 30px;
        font-family: sans-serif;
        z-index: 999;
    }

    .preloader:before {
        content: '';
        display: block;
        padding-top: 0;
    }

    .preloader.page-wrapper {
        position: fixed;
        margin-top: 0 !important;
    }
</style>
