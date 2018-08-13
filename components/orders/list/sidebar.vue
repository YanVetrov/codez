<template>
                                      
            <div class="sidebar-width border orders-sidebar">
                
                    <h5 class="title">УПРАВЛЕНИЕ ЗАЯВКОЙ ID <span>{{order.id || 0}}</span></h5>
                
                    <div class="orders-sidebar--bank">
                
                        <div class="orders-sidebar--bank__item">
                
                            <div class="orders-sidebar--bank__item--top">
                
                                <div class="orders-sidebar--bank__item--img">
                                    <p><img src="img/bank.svg" alt="bank"></p>
                                </div>
                
                                <div class="orders-sidebar--bank__item--info">
                                    <p class="bank-name">{{order.outer.bank || 0}}</p>
                                    <p class="orders-account"><span>Со счета:</span> 0000 0000 0000 0000</p>
                                </div>
                
                            </div>
                
                            <ul>
                                <li>
                                    <p>Отдает:</p>
                                    <span>{{order.outer.sum || 0}} <span>RUB</span></span>
                                </li>
                                <li>
                                    <p>По курсу:</p>
                                    <span>1 <span>USD</span></span>
                                </li>
                                <li>
                                    <p>Коммисия:</p>
                                    <span>{{order.outer.back || 0}} <span>USD</span></span>
                                </li>
                            </ul>
                        </div>
                
                        <div class="orders-sidebar--bank__item">
                
                            <div class="orders-sidebar--bank__item--top">
                
                                <div class="orders-sidebar--bank__item--img">
                                    <p><img src="img/bank.svg" alt="bank"></p>
                                </div>
                
                                <div class="orders-sidebar--bank__item--info">
                                    <p class="bank-name">{{order.inner.bank || 0}}</p>
                                    <p class="orders-account"><span>На счет:</span> 38 098 772 09 78</p>
                                </div>
                
                            </div>
                
                            <ul>
                                <li>
                                    <p>Отдает:</p>
                                    <span>{{order.inner.sum || 0}} <span>RUB</span></span>
                                </li>
                                <li>
                                    <p>По курсу:</p>
                                    <span>1 <span>USD</span></span>
                                </li>
                                <li>
                                    <p>Коммисия:</p>
                                    <span>{{order.inner.back || 0}} <span>USD</span></span>
                                </li>
                            </ul>
                        </div>
                
                    </div>
                
                    <div class="orders-sidebar--info">
                
                        <ul>
                            <li>
                                <span class="orders-sidebar--info__icon">
                                    <span class="icon-clock"></span>
                                    Дата и время
                                </span>
                
                                <span class="orders-sidebar--info__data"><span>{{$moment(order.date).format('DD.MM.YY в HH.mm') || 0}}</span></span>
                            </li>
                            <li>
                                <span class="orders-sidebar--info__icon">
                                    <span class="icon-economy-percentage-symbol-with-up-arrow"></span>
                                    Партнеру:
                                </span>
                
                                <span class="orders-sidebar--info__data"><span>90 RUB </span> <span class="grey">|</span> <span> 1.53 USD</span></span>
                            </li>
                            <li>
                                <span class="orders-sidebar--info__icon">
                                    <span class="icon-line-chart"></span>
                                    Ваша прибыль:
                                </span>
                
                                <span class="orders-sidebar--info__data"><span>90 RUB </span> <span class="grey">|</span> <span> 1.53 USD</span></span>
                            </li>
                        </ul>
                
                    </div>
                
                    <div class="orders-sidebar--user">
                        <div class="orders-sidebar--user__top">
                
                            <div class="orders-sidebar--bank__item--img">
                                <p><img src="img/sadness-face.svg" alt="face"></p>
                            </div>
                
                
                            <div class="orders-sidebar--user__name">
                                <p>Пупкин Владимер Николаивич</p>
                                <span>support@mail.ru</span>
                            </div>
                
                        </div>
                
                        <ul>
                            <li>
                                <span class="orders-sidebar--info__icon">
                                    <span class="icon-laptop"></span>
                                    Данные IP
                                </span>
                
                                <span class="orders-sidebar--info__data"><span>218.134.155.43</span></span>
                            </li>
                            <li>
                                <span class="orders-sidebar--info__icon">
                                    <span class="icon-profile"></span>
                                    User ID:
                                </span>
                
                                <span class="orders-sidebar--info__data"><span>ZIPD0WQ6G2SY3PMTNSA</span></span>
                            </li>
                            <li>
                                <span class="orders-sidebar--info__icon">
                                    <span class="icon-id-card"></span>
                                    ID партнера:
                                </span>
                
                                <span class="orders-sidebar--info__data"><span>370</span></span>
                            </li>
                        </ul>
                    </div>
                
                    <div class="orders-sidebar--group_btn">
                
                        <ul>
                            <li>
                                <button class="btn btn-simple btn-simple--img check-double">Проведина</button>
                            </li>
                            <li>
                                <button class="btn btn-simple btn-simple--img type-cur">Не оплачена</button>
                            </li>
                            <li>
                                <button class="btn btn-simple btn-simple--img refresh-h">Возврат</button>
                            </li>
                            <li>
                                <button class="btn btn-simple btn-simple--img cart-delete">В корзину</button>
                            </li>
                        </ul>
                
                    </div>
                
                </div>

</template>

<script>
    export default {
        props: ['order'],
    }
</script>

<style lang='scss' scoped>
</style>
