<template>
    <tr>

        <date-info :date="date"/>

        <td class="small-ico">

             <span class="icon-company img-border" style="background: #c14700;color: #fff;">
                <i class="fal fa-book"/>
            </span>
        </td>

        <td class="bg bg-ar">

            <div class="df">

                <p class="name">Правило<i class="fal fa-angle-right"></i></p>
                <p v-if="method === 'admin/rule/create'"> Администратор опубликовал правило: {{response.title}}</p>
                <p v-else-if="method === 'admin/rule/edit'"> Администратор отредактировал правило: {{response.title}}</p>
                <p v-else-if="method === 'admin/rule/delete'"> Администратор удалил правило: {{response.rules.title}}</p>
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