<template>
    <div>
        <ul>
            <li>
                <p class="dashboard-top--img"><img src="~/assets/img/users-dash-red.png" alt=""></p>

                <div class="dashboard-top__progress">

                    <div class="dashboard-top__progress--item">

                        <p class="dashboard-top__progress--name">{{$t('clients')}}</p>

                        <p class="dashboard-top__progress--line">
                            <span class="red"></span>
                        </p>

                    </div>

                </div>

                <p class="dashboard-top--count">
                    <span><animate-number :from="data.newClients.total" :to="data.newClients.total"></animate-number></span>
                </p>

            </li>
            <li>
                <p class="dashboard-top--img"><img src="~/assets/img/refresh-dash-top.png" alt=""></p>

                <div class="dashboard-top__progress">

                    <div class="dashboard-top__progress--item">

                        <p class="dashboard-top__progress--name">{{$t('exchanges')}}</p>

                        <p class="dashboard-top__progress--line">
                            <span class="light-green"></span>
                        </p>

                    </div>

                </div>

                <p class="dashboard-top--count">
                    <span><animate-number :from="data.newProjects.total" :to="data.newProjects.total"></animate-number></span>
                </p>

            </li>
            <li>
                <p class="dashboard-top--img"><img src="~/assets/img/users-dash-green.png" alt=""></p>

                <div class="dashboard-top__progress">

                    <div class="dashboard-top__progress--item">

                        <p class="dashboard-top__progress--name">{{$t('online')}}</p>

                        <p class="dashboard-top__progress--line">
                            <span class="green"></span>
                        </p>

                    </div>

                </div>

                <p class="dashboard-top--count">
                    <span><animate-number :from="data.openProjects.total" :to="data.openProjects.total"></animate-number></span>
                </p>

            </li>
            <li class="dashboard-top__calendar">

                <div class="dashboard-top__calendar-item">

                <span class="dashboard-top__calendar--icon">
                    <img src="~/assets/img/calendar-new.png" alt="">
                </span>

                    <p class="dashboard-top__calendar--date">

                        <span>20 Июня 2018</span>

                    </p>

                    <div class="dashboard-top__calendar--popup border">

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto in incidunt ut.
                            Accusamus
                            aspernatur debitis eius eligendi explicabo fugit inventore, itaque, libero maiores mollitia
                            possimus quas similique vitae? Ex, rem.</p>

                    </div>


                </div>

            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "data",
        props: ['data']
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
