<template>
<div class="faq-create-wr">
<editor
:rules='{}'
@publish="$emit('publish',$event)"
/>

</div>



</template>

<script>
    import editor from '../editor'

    export default {
        components:{editor},
        props: ['data'],
    }
</script>

<style lang='scss' scoped>
    .sidebar-width {
        height:auto;
    }
</style>
