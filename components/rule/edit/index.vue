<template>

    <div>
        <DataInfo 
        :data='rule'
        v-if="load"
        @publish="editRule($event)"
        @delete="deleteRule($event)"
        >
        </DataInfo>
        
        <WaitInfo :errorData="errorData" v-else></WaitInfo>
    </div>
</template>

<script>
    import DataInfo from "./data.vue";
    import WaitInfo from "./loader.vue";
    import { mapGetters } from 'vuex';
    import { mapActions, mapMutations } from 'vuex';
    export default {
        components: { DataInfo, WaitInfo },
        data() {
            return {
                lang: this.$root.$i18n.locale,
                search: '',
                sort: Number,
            }
        },
        computed: {
            ...mapGetters({
                info: 'rules/getData',
                load: 'rules/getLoad',
                rule:'rules/getRule',
                errorData: 'rules/getError',
                load: 'rules/getLoad'
            })
        },
        methods: {
            ...mapActions({
                editRule: 'rules/editRule',
                getRule: 'rules/getRule',
                deleteRule: 'rules/deleteRule'
            })
        },

        mounted() {
            this.getRule(this.$route.params.id)
        },
    }
</script>
