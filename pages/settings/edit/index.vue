<template>
    <div class="white-box">
        <label>Partner edit</label>
        <br>
        <label>Title:</label>
        <input type="text" class="form-control form-control-line" placeholder="..." v-model="title">
        <label>link:</label>
        <input type="text" class="form-control form-control-line" placeholder="..." v-model="link">
    </div>

</template>

<script>
    export default {
        data() {
            return {
                title: '',
                link: '',
                id: this.$route.params.id,

            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>