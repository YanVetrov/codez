<template>
<div class="question-wr">

        <DataInfo :data="info" :langs="langs" :groups="groups" :page='{total_page,current_page}' v-if="load && info"></DataInfo>

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
                group: '',
                sort: Number,
            }
        },
        computed: {
            ...mapGetters({
                info: 'faq/getData',
                load: 'faq/getLoad',
                langs: 'faq/getLangs',
                groups: 'faq/getGroups',
                errorData: 'faq/getError',
                total_page: 'faq/getTotalPages',
                current_page: 'faq/getCurrentPage',
                load: 'faq/getLoad'
            })
        },
        methods: {
            ...mapActions({
                getFaqFull: 'faq/getFaqFull',
                deleteFaq: 'faq/deleteFaq'
            })
        },
        watch: {
            search() {
                return this.getFaqFull({ lang: this.lang, search: this.search, group: this.group, sortBy: { createdAt: +this.sort } })
            },
            lang() {
                return this.getFaqFull({ lang: this.lang, search: this.search, group: this.group, sortBy: { createdAt: +this.sort } })
            },
            group() {
                return this.getFaqFull({ lang: this.lang, search: this.search, group: this.group, sortBy: { createdAt: +this.sort } })
            },
            sort() {
                return this.getFaqFull({ lang: this.lang, search: this.search, group: this.group, sortBy: { createdAt: +this.sort } })
            }
        },

        mounted() {
            this.getFaqFull({ lang: this.lang, search: this.search, group: this.group, sortBy: { createdAt: +this.sort } });
        },
    }
</script>
