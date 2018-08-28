<template>

<editor
:rules='data'
@publish="$emit('publish',$event)"
@delete="$emit('delete',$event)"
/>
              



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
