<template>
   <li>
                
                            <div class="parser-item">
                
                                <div class="parser-item--top">
                
                                    <img :src="$rest.fsPath+parser.conf.logo" alt="binance">
                
                                    <ul class="parser-item--top__btn-group">
                                        <li v-if="parser.conf.config">
                                            <button class="btn btn-simple--img btn__parser--act btn__parser active-green">Active</button>
                                        </li>
                                        <li v-else>
                                            <button class="btn btn-simple--img btn__parser--inr btn__parser active-red">Inert</button>
                                        </li>
                                    </ul>
                
                                </div>
                
                                <div class="parser-item--main">
                
                                    <p class="parser-item--tittle text-center">{{parser.name}}</p>
                                    <p class="parser-item--tittle__sub text-center">{{parser.title}}</p>
                                    <ul class="parser-item--main-list">
                                        <li>
                                            <div class="parser-item--main-list-act">
                                                <span>Активных курсов</span>
                                                <p class="color">{{parser.countRates}}</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="parser-item--main-list-ref">
                                                <div>
                                                    <span>Обновление:</span>
                                                    <p>{{$moment(parser.lastUpdateAt).format('DD.MM.YY в HH:mm')}}</p>
                                                </div>
                                                <span class="icon-refresh-history"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                
                                <div class="text-center parser-item__bot">
                                    <button class="btn btn-simple">Больше курсов</button>
                                </div>
                
                            </div>
                
                        </li>
</template>

<script>
    export default {
        props: ['parser'],
    }
</script>

<style lang="scss">
    
</style>