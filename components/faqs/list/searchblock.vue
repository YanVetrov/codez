<template>
                    
                    <div class="question--row">
                
                        
                        <div class="search-block border">
                            <ul>
                        
                                <li class="search-block--input">
                                    <div>
                                        <button><span class="icon-search"></span></button>
                                        <input type="search" placeholder="Поиск по списку" @input="$emit('search',$event.target.value)">
                                    </div>
                                </li>
                        
                                <li class="search-block--select">
                                    <div>
                        
                                        <span class="icon-filter"></span>
                        
                                        <div class="search-block--select__">
                                            <select>
                                                <option>Сначала новые</option>
                                                <option>По имени  A-Z</option>
                                            </select>
                                        </div>
                        
                                    </div>
                                </li>
                        
                            </ul>
                        </div>
                
                        <div class="faq-main-selects--lang border">
                
                            <div class="border-shadow">
                
                                <span class="icon-earth"></span>
                
                                <div class="languages">
                
                                    <select @change="$emit('lang',$event.target.value.split('-')[0])">
                                        <option v-for="opt in langs" :key="opt.lang">{{opt.lang}}-{{opt.name}}</option>
                                    </select>
                
                                </div>
                                <span class="ar icon-drop-down"></span>
                
                
                            </div>
                        </div>
                
                    </div>
</template>

<script>
    export default {
        props: ['ph','langs'],
        methods:{
            check(e){
                console.log(e)
            }
        }
    }
</script>

<style lang='scss' scoped>
</style>
