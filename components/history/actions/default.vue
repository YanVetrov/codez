<template>
    <div>
        <div class="timeline-heading">
            <h4 class="timeline-title">{{method}}</h4>
            <p>
                <dateInfo :date="date"/>
            </p>
            <p>
                <userInfo :user="user" :network="network"/>
            </p>
        </div>
        <div class="timeline-body">
            <p>
                Params:
                <br>
                {{JSON.stringify(param)}}
            </p>
        </div>
    </div>
</template>

<script>
    import userInfo from './subcomponents/userInfo.vue';
    import dateInfo from './subcomponents/dateInfo.vue';

    export default {
        components: {userInfo, dateInfo},
        props: ['method', 'date', 'response', 'param', 'network', 'user'],

    }
</script>

<style scoped>

</style>