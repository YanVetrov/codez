<template>
                       <tr>
                
                                    <td>
                
                                        <p>{{order._id}}</p>
                
                
                                    </td>
                
                                    <td>
                
                                        <span class="fal fa-company"><img src="img/bank.svg" alt=""></span>
                
                                        <div class="company">
                                            <p class="name-company">{{order.outer.bank}}</p>
                                            <p><span>0000 0000 0000 0000</span></p>
                                        </div>
                
                                        <span class="bord"></span>
                
                                    </td>
                
                                    <td>
                
                                        <p class="color green">{{order.outer.sum}}</p>
                                        <p><span>RUB</span></p>
                
                
                                    </td>
                
                                    <td class="ref">
                                        <p><a href="/" class="refresh">refresh</a></p>
                                    </td>
                
                                    <td>
                
                                        <span class="fal fa-company"><img src="img/bank.svg" alt=""></span>
                
                                        <div class="company">
                                            <p class="name-company">{{order.inner.bank}}</p>
                                            <p><span>38 098 772 09 78</span></p>
                                        </div>
                
                                        <div class="bord"></div>
                
                                    </td>
                
                                    <td>
                
                                        <p class="color green">{{order.inner.sum}}</p>
                                        <p><span>RUB</span></p>
                
                                    </td>
                
                                    <td>
                
                                        <p>{{$moment(order.date).format('DD.MM.YY в HH.mm')}}</p>
                                        
                
                                    </td>
                
                                    <td>
                
                                        <div class="table-btn-orders">
                                            <a @click="$emit('choose', order)" class="btn btn-simple btn-simple--img">ВЫБРАНА</a>
                                        </div>
                
                                    </td>
                                </tr>

</template>

<script>
    export default {
        props: ['order'],
    }
</script>

<style lang='scss' scoped>
</style>
