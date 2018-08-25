<template>


                        <div class="search-block border">
                            <ul>
                
                                <li class="search-block--input">
                                    <div>
                                        <button><span class="fal fa-search"></span></button>
                                        <input type="search" placeholder="Поиск по IP" @input="$emit('search',$event.target.value)">
                                    </div>
                                </li>
                
                                <li class="search-block--select">
                                    <div>
                
                                        <span class="fal fa-filter"></span>
                
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



</template>

<script>
    export default {
    }
</script>

<style lang='scss' scoped>

</style>
