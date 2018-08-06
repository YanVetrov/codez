<template>
    <div class="orders-wr list-contact-wr">
        <list/>
        <create/>
    </div>
</template>

<script>
    import list from '~/components/contacts/list';
    import create from '~/components/contacts/create'

    export default {
        components: {
            list,
            create
        }
    }
</script>

