<template>

    <div>
        <DataInfo 
        :faq='info'
        :langs='langs'
        :groups='groups'
        v-if="load"
        @publish="editFaq($event)"
        @delete="deleteFaq($event)"
        >
        </DataInfo>
        
        <WaitInfo :errorData="errorData" v-else></WaitInfo>
    </div>
</template>

<script>
    import DataInfo from "./data.vue";
    import WaitInfo from "./loader.vue";
    import { mapGetters, mapActions } from 'vuex';
    export default {
        components: { DataInfo, WaitInfo },
        data() {
            return {}
        },
        computed: {
            ...mapGetters({
                groups: 'faq/getGroups',
                langs: 'faq/getLangs',
                info: 'faq/getOneFaq',
                load: 'faq/getLoad',
                errorData: 'faq/getError'
            })
        },
        methods: {
            ...mapActions({
                getOneFaq: 'faq/getOneFaq',
                editFaq: 'faq/editFaq',
                deleteFaq: 'faq/deleteFaq'
            })
        },

        created() {
            this.getOneFaq(this.$route.params.id);
        }

    }
</script>
