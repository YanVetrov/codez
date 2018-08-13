<template>
                        <li>
                
                            <div class="list-partner-item">
                
                                <div class="list-partner-item--top">
                                    <span>01</span>
                                    <img :src="$rest.fsPath+imageSrc" alt="binance">
                                </div>
                
                                <div class="list-partner-item--main">
                
                                    <p class="list-partner-item--tittle">{{title}}</p>
                                    <p class="list-partner-item--info">Добавьте описание для ссылки</p>
                                    <a href="/">{{link}}</a>
                                </div>
                
                                <div class="list-partner-item--bot">
                
                                    <div class="switch switch-switcher">
                                        <input type="radio" id="item-partner-state-off" name="item1" :value="-1" checked>
                                        <input type="radio" id="item-partner-state-on" name="item1"  :value="1">
                                        <i></i>
                                        <label for="item-partner-state-on" class="label-on" >Включено</label>
                                        <label for="item-partner-state-off" class="label-off" >Отключен</label>
                                    </div>
                
                
                                    <div class="list-partner-item--bot__">
                
                                        <div class="partner-setting">
                                            <button><i class="fal fa-sliders-h"></i></button>
                                        </div>
                
                                        <div class="partner-del">
                                            <button @click="$emit('delete', _id)"><i class="fal fa-trash-alt"></i></button>
                                        </div>
                
                                    </div>
                
                                </div>
                
                            </div>
                
                        </li>


</template>

<script>
    export default {
        props: {
            _id: { type: String, required: true },
            title: { type: String, required: true },
            link: { type: String, required: false },
            imageSrc: { type: String, required: true },
        },
    }
</script>

<style lang='scss' scoped>
</style>
