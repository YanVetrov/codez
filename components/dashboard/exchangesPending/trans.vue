<template>
            <div class="table">

            <table>

                <thead>
                <tr>
                    <td><span>ID</span></td>
                    <td>
                        <span>Date</span>
                    </td>
                    <td>
                        <span>Get</span>
                    </td>
                    <td>
                        <span>Give</span>
                    </td>
                    <td>
                        <span>{{$t('comission')}}</span>
                    </td>
                    <td>
                        <span>Occupation</span>
                    </td>
                    <td>
                        <span>State</span>
                    </td>
                    <td></td>
                </tr>
                </thead>

                <tbody>
                <tr v-for="tra in transactions" :key="tra.id">
                    <td>14</td>

                    <td>
                        <p>{{tra.date}}</p>
                        <p></p>
                    </td>

                    <td>

                        <span class="icon-company"><img :src="tra.inner.logo" alt=""></span>

                        <div class="company">
                            <p class="name-company">{{tra.inner.bank}}</p>
                            <p>{{tra.inner.sum}} <span>{{tra.inner.currency}}</span></p>
                        </div>

                    </td>

                    <td>

                        <span class="icon-company"><img :src="tra.outer.logo" alt=""></span>

                        <div class="company">
                            <p class="name-company">{{tra.outer.bank}}</p>
                            <p>{{tra.outer.sum}} <span></span></p>
                        </div>

                    </td>

                    <td>
                        <p>{{tra.outer.back}} <span></span></p>
                        <p>{{tra.inner.back}} <span></span></p>
                    </td>

                    <td>
                        <p>{{$t('total')}} <span></span></p>
                        <p>{{tra.inner.total}} <span></span></p>
                    </td>

                    <td>
                        <p>Выполнена <span class="arrow"></span></p>
                    </td>

                    <td>
                        
                        <buttons :id="tra.id"></buttons>
                        
                        
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
</template>

<script>
    import buttons from './buttons';
    export default {
        data(){
          return{
          }  
        },
        props:['transactions'],
        components:{
            buttons
        },
    }
</script>

<style lang='scss' scoped>

</style>
