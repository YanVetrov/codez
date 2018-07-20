<template>


    
        
            
                
                          <tr :ident="user._id">
            
                                <td>
            
                                    <span class="icon-company"><img src="img/bank.svg" alt=""></span>
            
                                </td>
            
                                <td>
                                    <p>{{user.name}}</p>
                                </td>
            
                                <td>
            
                                   <div class="correct-input">
            
                                       <label>
            
                                           <input type="text" placeholder="нет контакта" v-model='user.value' @blur="$emit('edit',user)">
            
                                           <span class="btn btn__correct"></span>
            
                                           <ul>
                                               <li>
                                                   <button class="btn btn__checked"></button>
                                               </li>
                                               <li>
                                                   <button class="btn btn__clean"></button>
                                               </li>
                                           </ul>
            
                                       </label>
            
            
                                   </div>
            
            
                                </td>
            
                                <td class="user-data">
            
                                    <div class="correct-input correcting">
            
                                        <label>
            
                                            <input type="text" placeholder="нет ссылки" v-model='user.link' @blur="$emit('edit',user)">
            
                                            <span class="btn btn__correct"></span>
            
                                            <ul>
                                                <li>
                                                    <button class="btn btn__checked"></button>
                                                </li>
                                                <li>
                                                    <button class="btn btn__clean"></button>
                                                </li>
                                            </ul>
            
                                        </label>
            
                                    </div>
            
                                </td>
            
                                <td>
                                    <p class="color green">25%</p>
                                </td>
            
                                <td class="dragg">
                                    <div class="table-btn-users">
                                        <a  class="btn btn-simple cart-delete" @click.prevent="$emit('ondelete',user._id)"></a>
                                    </div>
                                    <div class="double-b"></div>
                                </td>
                            </tr>

            
            
        
       



</template>

<script>
    export default {
        props: ['user'],
    }
</script>

<style lang='scss' scoped>
    .double-b {
	cursor: -webkit-grabbing;
}
    .ghost{
        opacity:0.9;
    }
</style>
