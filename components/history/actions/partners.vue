<template>
    <tr>

        <date-info :date="date"/>

        <td class="small-ico">

             <span class="icon-company img-border" style="background: #005bc1;color: #fff;">
                <i class="fal fa-handshake-alt"/>
            </span>
        </td>

        <td class="bg bg-ar">

            <div class="df">

                <p class="name">Партнерский блок<i class="fal fa-angle-right"></i></p>
                <p  v-if="method === 'admin/partners-block/create'"> Администратор добавил партнера {{param.title}}</p>
                <p  v-else-if="method === 'admin/partners-block/delete'"> Администратор удалил партнера {{param.title}}</p>
                <p v-else>{{method}}</p>

            </div>

        </td>

        <userInfo :user="user"/>
        <ip-info :network="network"/>

    </tr>
</template>

<script>
    import ipInfo from './subcomponents/ipInfo.vue';
    import userInfo from './subcomponents/userInfo.vue';
    import dateInfo from './subcomponents/dateInfo.vue';

    export default {
        components: {userInfo, dateInfo, ipInfo},
        props: ['method', 'date', 'response', 'param', 'network', 'user'],

    }
</script>

<style scoped>

</style>