<template>
<div class="faq-create-wr">
<editor
:faq='data.faq'
:langs='data.langs'
:groups='data.groups'
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
        components:{editor,advices,archive},
        props: ['data'],
    }
</script>

<style lang='scss' scoped>
    .sidebar-width {
        height:auto;
    }
</style>
