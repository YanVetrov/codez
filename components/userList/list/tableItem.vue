<template>
    <tr>
        <td>
            <span class="icon-company"><img :src="$identicon.create(user._id)" alt=""></span>

            <div class="company">
                <p class="name-company">{{user.first_name}} {{user.last_name}} </p>
                <p>Online: {{$moment(user.lastActiveAt).fromNow()}}</p>
            </div>

        </td>

        <td>
            <p>{{user.email}}</p>
        </td>

        <td>

            <ul>
                <li>
                    <p class="color blue">{{user.exchangesTotal}}</p>
                    <p><span>Всего</span></p>
                </li>
                <li>
                    <p class="color green">{{user.exchangesSuccess}}</p>
                    <p><span>Успешно</span></p>
                </li>
            </ul>


        </td>

        <td class="user-data">
            <p>{{$moment(user.createdAt).format('DD MMM YYYY')}} </p>
            <p>{{$moment(user.createdAt).format('HH:mm')}}</p>
        </td>

        <td>
            <p class="color green">{{user.balance}} <span>USD</span></p>
            <p>Партнерские <span>{{user.partner}}</span></p>
        </td>

        <td>
            <div class="table-btn-users">
                <nuxt-link :to="'/admins/edit/'+user._id" class="btn btn-simple " style="padding-left: 40px">
                    <i class="fal fa-address-card"
                       style="margin-right: 5px;font-size: 16px;position: absolute; margin-left: -25px;"></i>
                    Профиль
                </nuxt-link>
            </div>
        </td>
    </tr>
</template>

<script>
    export default {
        props: ['user'],
    }
</script>

