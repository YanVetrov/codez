<template>



    <div class="faq-main--group-btn">
        <button class="btn btn-simple del" v-if='canDelete' @click="$emit('delete')">Удалить</button>

        <div class="faq-main--group-btn__">
            <button class="btn btn-simple">В архив</button>
            <button class="btn btn-blue" @click='$emit("publish")'>Опубликовать</button>
        </div>
    </div>
              



</template>

<script>
    export default {
        props:['canDelete']
    }
</script>

<style lang='scss' scoped>
    .sidebar-width {
        height:auto;
    }
</style>
