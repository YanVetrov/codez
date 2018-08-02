<template>
    <div style="width: 100%;min-height: 70px">
        <loader type="block" :status_load="false" v-if="!errorData"/>
        <div v-else>{{errorData.message}}</div>
    </div>
</template>

<script>
    import loader from '../loading.vue'
    export default {
        props: ['errorData'],
        components:{loader}
    }


</script>