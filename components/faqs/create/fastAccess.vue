<template>

                    <div class="sidebar-width border fast-access-block">
                        <h5 class="title">Быстрый доступ</h5>
                
                        <div class="fast-access-block--list">
                
                            <ul>
                                <li v-for="list in data" :key="list._id">
                                    <div class="fast-access">
                                        <div class="fast-access-item">
                                            <p>Сокрашенный текст вопросов</p>
                                            <span>16.03.15 в архиве</span>
                                        </div>
                
                                        <div class="fast-access--icon">
                                            <span class="icon-check-green"></span>
                                        </div>
                
                                    </div>
                                </li>
                                
                            </ul>
                
                        </div>
                    </div>
                    
                    
                



</template>

<script>
    export default {
        props: ['data'],
    }
</script>

<style lang='scss' scoped>
</style>
