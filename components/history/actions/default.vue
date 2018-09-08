<template>

    <tr>

        <date-info :date="date"/>

        <td class="small-ico">

            <span class="icon-company img-border"></span>

        </td>

        <td class="bg bg-ar">

            <div class="df">

                <p class="name">{{method}} <i class="fal fa-angle-right"></i></p>
                <p>
                    Params:
                    <br>
                    {{JSON.stringify(param)}}
                    Response:
                    <br>
                    {{JSON.stringify(response)}}
                </p>
            </div>

        </td>
        <userInfo :user="user" />
        <ip-info :network="network"/>

    </tr>
</template>

<script>
    import ipInfo from './subcomponents/ipInfo.vue';
    import userInfo from './subcomponents/userInfo.vue';
    import dateInfo from './subcomponents/dateInfo.vue';

    export default {
        components: {userInfo, dateInfo,ipInfo},
        props: ['method', 'date', 'response', 'param', 'network', 'user'],

    }
</script>

<style scoped>

</style>