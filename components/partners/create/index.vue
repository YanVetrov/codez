<template>

    <div>
        <DataInfo :data="info" v-if="load && info" @oncreate='createPartner($event)'></DataInfo>

        <WaitInfo :errorData="errorData" v-else></WaitInfo>
    </div>
</template>

<script>
    import DataInfo from "./data.vue";
    import WaitInfo from "./loader.vue";
    import { mapGetters, mapActions } from 'vuex';
    export default {
        components: {DataInfo, WaitInfo},
        data() {
            return {

            }
        },
         computed: {
            ...mapGetters({
                info: 'partners/getData',
                load: 'partners/getLoad',
                errorData: 'partners/getError',
            })

        },
        methods: {
            ...mapActions({
                getPartnersAll:'partners/getPartnersAll',
                createPartner:'partners/createPartner',
                deletePartner:'partners/deletePartner',
                editPartner:'partners/editPartner'
            })
        },
        
        
    }
</script>
