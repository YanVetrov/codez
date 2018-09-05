<template>

    <div>
        <DataInfo 
        :langs='langs'
        :groups='groups'
        v-if="load"
        @publish="createFaq($event)"
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
                load: 'faq/getLoad',
                errorData: 'faq/getError'
            })
        },
        methods: {
            ...mapActions({
                createFaq: 'faq/createFaq',
                getLangsGroups: 'faq/getLangsGroups'
            })
        },

        created() {
            this.getLangsGroups();
        }

    }
</script>
