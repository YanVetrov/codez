<template>
    <div style="width: 100%;min-height: 70px">
        <loading type="block" :status_load="false" v-if="!errorData"/>
        <div v-else>{{errorData.message}}</div>
    </div>
</template>

<script>
    import Loading from "~/components/loading";

    export default {
        components: {Loading},
        props: ['errorData']
    }


</script>