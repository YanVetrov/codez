<template>
    <tr>

        <date-info :date="date"/>

        <td class="small-ico">


             <span class="icon-company img-border" style="background: #a700c1;color: #fff;">
                <i class="fal fa-newspaper"/>
            </span>
        </td>

        <td class="bg bg-ar">

            <div class="df">

                <p class="name">Новость<i class="fal fa-angle-right"></i></p>
                <p v-if="method === 'admin/news/create'">Администратор опубликовал новость: "{{response.title}}"</p>
                <p v-else-if="method === 'admin/news/edit'">Администратор отредактировал данные новости: "{{param.title}}"</p>
                <p v-else-if="method === 'admin/news/delete'">Администратор удалил новость: "{{response.news.title}}"</p>
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
        props: ['method', 'date', 'response', 'param', 'network', 'user',],

    }
</script>

<style scoped>

</style>