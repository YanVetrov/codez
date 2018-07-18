<template>


    
        
            
           
            
                
                <div class="search-block border">
                    <ul>
                
                        <li class="search-block--input">
                            
                            
                            <div>
                                <button><span class="icon-search"></span></button>
                                <input type="search"  @input='$emit("onenter", $event.target.value)' :placeholder="ph">
                            </div>
                            
                            
                        </li>
                
                        <li class="search-block--select">
                            <div>
                
                                <span class="icon-filter" @click="_.random(20)"></span>
                
                                <div class="search-block--select__">
                                    <select>
                                        <option @click='$emit("onselect",1)'>Сначала новые</option>
                                        <option @click='$emit("onselect",-1)'>Сначала старые</option>
                                    </select>
                                </div>
                
                            </div>
                        </li>
                
                    </ul>
                </div>
            
            
               


</template>

<script>
    export default {
        props: ['ph','classes'],
        
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
