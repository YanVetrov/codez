<template>

    <div>
        <DataInfo/>

        <!--<WaitInfo :errorData="errorData" v-if="errorData"/>-->
    </div>
</template>

<script>
    import DataInfo from "./data.vue";
    import WaitInfo from "./loader.vue";

    export default {
        components: {DataInfo, WaitInfo},
        data() {
            return {
            }
        },
        methods: {
        }
    }
</script>
