<template>
                                   <tr>
                
                                    <td>
                
                                        <table>
                
                                            <tr class="question-table-row">
                
                                                <td class="question--table-title">
                
                                                    <h6 class="question--title">{{faq.title}}</h6>
                
                                                    <ul>
                                                        <li><span><img src="img/bank.svg" alt=""></span> {{faq.lang}}</li>
                                                        <li v-html='faq.group'></li>
                                                    </ul>
                
                                                </td>
                
                                                <td class="row">
                
                                                    <div class="review-table--ip">
                                                        <span><img src="img/bank.svg" alt=""></span>
                                                        <p>{{$moment(faq.createdAt).format('DD.MM.YY в HH:mm')}}</p>
                                                    </div>
                
                                                </td>
                
                                                <td class="middle">
                
                                                    <div class="switch switch-switcher">
                                                        <input type="radio" id="item-partner-state-off1" name="cur1" value="-1" checked>
                                                        <input type="radio" id="item-partner-state-on1" name="cur1" value="1">
                                                        <i></i>
                                                        <label for="item-partner-state-on1" class="label-on">Вкл.</label>
                                                        <label for="item-partner-state-off1" class="label-off">Выкл.</label>
                                                    </div>
                
                                                </td>
                
                
                                                <td class="big-middle">
                
                                                    <div class="list-currency--btn-group">
                
                                                        <div class="double-b"></div>
                
                                                        <nuxt-link :to="`/faq/${faq._id}`" class="btn btn-simple btn-simple--img">изменить</nuxt-link>
                                                        <button @click="$emit('delete',faq._id)" class="btn btn-simple cart-delete"></button>
                
                                                    </div>
                
                                                </td>
                
                                                <td class="small"><i @click="open=!open" class="fal fa-angle-down"></i></td>
                
                                            </tr>
                    
                                            <tr class="question-opinion"  :style="{display:open?'block':''}">
                                                <td colspan="5"  class="question-opinion--td">
                
                                                    <div class="question-opinion--info">
                
                                                        <i class="fal fa-question-circle"></i>
                
                                                        <p v-html="faq.content">
                                                       
                                                          </p>
                
                                                    </div>
                
                                                </td>
                                            </tr>
                
                                        </table>
                
                                    </td>
                
                
                
                                </tr>
</template>

<script>
    export default {
        props: ['faq'],
        data(){
            return{
                open:false,
            }
        }
    }
</script>

<style lang="scss">
    
</style>