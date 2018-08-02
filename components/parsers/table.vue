<template>
                  
                    <ul class="parser-list">
                
                       
                        <tableItem v-for="parser in data.parsers" :parser="parser" :key="parser.id" />
                        
                </ul>
</template>

<script>
    import tableItem from './tableItem';

    export default {
        props: ['data'],
        components: {tableItem}

    }
</script>

<style lang='scss' scoped>
    .parser-list{
        flex-wrap:wrap;
    }
</style>
