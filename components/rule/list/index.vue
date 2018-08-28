<template>
<div class="question-wr">

        <DataInfo :data="info"   v-if="load && info"></DataInfo>

        <WaitInfo :errorData="errorData" v-else></WaitInfo>
    </div>

</template>
<style lang='scss' scoped>
</style>
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
                errorData: 'rules/getError',
                load: 'rules/getLoad'
            })
        },
        methods: {
            ...mapActions({
                getTitleRules: 'rules/getTitleRules',
                deleteRule: 'rules/deleteRule'
            })
        },
        watch: {
            search() {
                return this.getTitleRules({ lang: this.lang, search: this.search, sortBy: { createdAt: +this.sort } })
            },
            sort() {
                return this.getTitleRules({ lang: this.lang, search: this.search, sortBy: { createdAt: +this.sort } })
            }
        },

        mounted() {
            this.getTitleRules({ lang: this.lang, search: this.search, sortBy: { createdAt: +this.sort } });
        },
    }
</script>
