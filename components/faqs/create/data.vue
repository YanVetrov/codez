<template>
<div class="faq-create-wr">
<editor
:faq='{}'
:langs='langs'
:groups='groups'
@publish="$emit('publish',$event)"
/>
<div class="faq-sidebar">
    <archive/>
    <advices/>
</div>
</div>



</template>

<script>
    import editor from '../editor'
    import advices from './advices'
    import archive from './fastAccess'
    export default {
        components: { editor, advices, archive },
        props: ['faq', 'langs', 'groups'],
    }
</script>

<style lang='scss' scoped>
    .sidebar-width {
        height: auto;
    }
</style>
