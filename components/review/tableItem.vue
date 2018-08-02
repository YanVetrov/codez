<template>
   <tr>
                
                                <td>
                                    <p>15023</p>
                                </td>
                
                                <td>
                
                                    <span class="icon-company"><img src="img/bank.svg" alt=""></span>
                
                                    <div class="company">
                                        <p class="name-company">{{user.name}}</p>
                                        <p>{{user.email}}</p>
                                    </div>
                
                                </td>
                
                                <td>
                
                                    <p>{{$moment(user.createdAt).format('DD.MM.YY в HH:mm')}}</p>
                
                
                                </td>
                
                                <td>
                
                                    <p>{{user.author}}</p>
                
                                </td>
                
                                <td>
                                    <div class="review-table--ip">
                                        <span><img src="img/bank.svg" alt=""></span>
                                        <p>{{user.ip || '218.134.155.43' }}</p>
                                    </div>
                                </td>
                
                                <td>
                                    <div class="table-btn-group">
                                        <button class="btn btn-simple btn-simple--img">Потвердить</button>
                                        <button class="btn btn-simple cart-delete" @click="$emit('delete',user._id)"></button>
                                    </div>
                                </td>
                            </tr>
</template>

<script>
    export default {
        props: ['user'],
    }
</script>

<style lang="scss">
    
</style>