<template>

    <div>
        <DataInfo 
        :data='info'
        v-if="load"
        @publish="createRules($event)"
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
                createRules:'rules/createRules'
            })
        },
    }
</script>
