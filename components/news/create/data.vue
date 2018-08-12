<template>
<div class="new-create-wr">
<editor
:data='{}'
:langs='langs'
@publish="$emit('publish',$event)"
/>
<div class="new-sidebar">
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
        props: ['data','langs'],
    }
</script>

<style lang='scss' scoped>
    .sidebar-width {
        height:auto;
    }
</style>
