<template>

    <div>
        <DataInfo :data="profile" v-if="load || profile" @edit="editProfile($event)"></DataInfo>

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
                load: 'profile/getLoad',
                errorData: 'profile/getError',
                profile: 'profile/getData'
            })
        },
        methods: {
            ...mapActions({
                getProfile: 'profile/getProfile',
                editProfile: 'profile/editProfile'
            })
        },
        created(){
            this.getProfile()
        }
    }
</script>
