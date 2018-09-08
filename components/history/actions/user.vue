<template>
    <tr>

        <date-info :date="date"/>

        <td class="small-ico">

            <span class="icon-company img-border" style="background: #4d548d;color: #fff;">
                <i class="fal fa-user-edit"  v-if="method === 'admin/users/profile/edit'"/>
            </span>

        </td>

        <td class="bg bg-ar">

            <div class="df">

                <p class="name">Пользователи <i class="fal fa-angle-right"></i></p>
                <p v-if="method === 'admin/users/profile/edit'">
                    Администратор отредактировал данные о пользователе:
                    {{param.userId}}
                </p>
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