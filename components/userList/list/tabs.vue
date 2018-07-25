<template>
    <div class="users-list-toodo-main--top">
        <h3 class="title">Список Пользователей</h3>

        <ul class="text-center">
            <li><span class="users-active-info">Все типы</span></li>
            <li v-for='li in data' @click='$emit("ontab",1)' :key='li.id'><span>{{li.name}}</span></li>
        </ul>
    </div>
</template>

<script>

    export default {
        props: ['data']
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
