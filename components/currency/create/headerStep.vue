<template>
    <div class="create-currency-head">

        <ul class="create-currency-head--list">
            <li>
                <div class="create-currency-head--item">
                    <span :class="{complete:step>0,active:step ===0}">1</span>
                    <p>добавления валюты</p>
                </div>
            </li>
            <li>
                <div class="create-currency-head--item">
                    <span :class="{complete:step>1,active:step ===1}">2</span>
                    <p>Курс и резервы</p>
                </div>
            </li>
            <li>
                <div class="create-currency-head--item">
                    <span :class="{complete:step>2,active:step ===2}">3</span>
                    <p>настройка оплаты</p>
                </div>
            </li>
            <li>
                <div class="create-currency-head--item">
                    <span :class="{complete:step>3,active:step ===3}">4</span>
                    <p>прочие настройки</p>
                </div>
            </li>
        </ul>

        <ul class="create-currency-head--switch">

            <li><a href="#"><i class="fal fa-angle-left"></i></a></li>
            <li><a href="#"><i class="fal fa-angle-right"></i></a></li>

        </ul>

    </div>
</template>

<script>
    export default {
        props: {
            step: {type: Number, required: true}
        }
    }
</script>
