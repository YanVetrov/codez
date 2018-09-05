<template>

<editor
:faq='faq'
:langs='langs'
:groups='groups'
@publish="$emit('publish',$event)"
@delete="$emit('delete',$event)"
/>
              



</template>

<script>
    import editor from '../editor'
    export default {
        components: { editor },
        props: ['faq', 'langs', 'groups'],
    }
</script>

<style lang='scss' scoped>
    .sidebar-width {
        height: auto;
    }
</style>
