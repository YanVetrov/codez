<template>
     <div class="dashboard-reserve-general" :class=' show? "open-reserve" : "" '>
            <div class="dashboard-reserve-general-block" @click.self='$parent.modalState=false'>
                <div class="dashboard-reserve-general-wr text-center">
                    <p class="close-reserve" @click='$parent.modalState=false'>&otimes;</p>
                    <div class="dashboard-reserve-general--item">

                        <p><img :src="data.img" alt=""></p>

                        <div>
                            <p>Обший резерв:</p>
                            <strong>{{data.amount.total}}</strong><span>{{data.amount.type}}</span>
                        </div>

                    </div>
                    <div class="dashboard-reserve-general--all">

                        <p>дополнительные резевры:</p>

                        <ul>
                            <li v-for='opt in data.additional' :key='opt.id'>
                                <p><span>{{opt.name}}</span> {{opt.total}} {{opt.type}}</p>
                            </li>
                        </ul>

                    </div>
                    <div class="dashboard-reserve-general--total">
                        <p>Итоговая сумма:</p>
                        <strong>{{data.end.total}}</strong><span>{{data.end.type}}</span>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        props: ['data','show']
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
