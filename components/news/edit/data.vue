<template>
<div class="new-create-wr">
<editor
:data='data'
:langs='langs'
@publish="$emit('publish',$event)"
@delete="$emit('delete',$event)"
/>
              
<div class="new-sidebar">
    <archive/>
    <advices/>
</div>
</div>

</template>

<script>
    import editor from '../editor'
    import archive from '../create/fastAccess'
    import advices from '../create/advices'
    export default {
        components: { editor, advices, archive },
        props: ['data', 'langs'],
    }
</script>

<style lang='scss' scoped>
    .sidebar-width {
        height: auto;
    }
</style>
