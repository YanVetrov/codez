<template>
                    
                    <div class="question--row">
                
                        
                        <div class="search-block border">
                            <ul>
                        
                                <li class="search-block--input">
                                    <div>
                                        <button><span class="fal fa-search"></span></button>
                                        <input type="search" placeholder="Поиск по списку" @input="$emit('search',$event.target.value)">
                                    </div>
                                </li>
                        
                                <li class="search-block--select">
                                    <div>
                        
                                        <span class="fal fa-filter"></span>
                        
                                        <div class="search-block--select__">
                                            <select v-model="selected" @change='$emit("sort",selected)'>
                                                <option value="1" selected="true">Сначала новые</option>
                                                <option value="-1">Сначала старые</option>
                                            </select>
                                        </div>
                        
                                    </div>
                                </li>
                        
                            </ul>
                        </div>
                
                        <div class="faq-main-selects--lang border">
                
                            <div class="border-shadow">
                
                                <span class="fal fa-earth"></span>
                
                                <div class="languages">
                
                                    <select @change="$emit('lang',$event.target.value.split('-')[0])">
                                        <option v-for="opt in langs" :key="opt.lang" :selected="lang==opt.lang?true:false">{{opt.lang}}-{{opt.name}}</option>
                                    </select>
                
                                </div>
                                <span class="ar fal fa-drop-down"></span>
                
                
                            </div>
                        </div>
                
                    </div>
</template>

<script>
    export default {
        props: ['ph','langs','lang'],
        data(){
            return{
                selected:'',
            }
        },
    }
</script>

<style lang='scss' scoped>
</style>
