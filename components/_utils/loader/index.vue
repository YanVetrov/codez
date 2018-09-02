<template>
    <div class="lds-css ng-scope" :class="{'page-wrapper':type === 'page'}" v-if="(loading || status_load !==true)">
        <div style="width:100%;height:100%" class="lds-eclipse">
            <div></div>
        </div>
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
        created() {
            this.$root.$on('loading', state => this.loading = state)
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

    @keyframes lds-eclipse {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        50% {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @-webkit-keyframes lds-eclipse {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        50% {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    .lds-eclipse {
        position: relative;

    }
    .lds-css.ng-scope{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .lds-eclipse div {
        position: absolute;
        -webkit-animation: lds-eclipse 0.9s linear infinite;
        animation: lds-eclipse 0.9s linear infinite;
        width: 160px;
        height: 160px;
        top: 20px;
        left: 20px;
        border-radius: 50%;
        box-shadow: 0 4px 0 0 #1089fe;
        -webkit-transform-origin: 80px 82px;
        transform-origin: 80px 82px;
    }

    .lds-eclipse {
        width: 200px !important;
        height: 200px !important;
        -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
        transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
    }
</style>
