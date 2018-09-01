<template>

  <div class="profile-wr">


                <div class="profile">


                    
                    <div class="border sidebar-width profile-sidebar">
                    
                        <h5 class="title">Ваш ПРОФИЛЬ</h5>
                    
                        <div class="profile-sidebar--photo">
                    
                            <button>
                    
                                <strong><img src="img/sadness-face.svg" alt="photo"></strong>
                    
                                <p>
                                    <span>Загрузить<br> изображение </span>
                    
                                    <em>фотография  профиля</em>
                                </p>
                            </button>
                    
                        </div>
                    
                        <div class="profile-sidebar--ac">
                    
                            <ul>
                                <li>
                    
                                    <p class="profile-sidebar--panel-title"><i class="fal fa-id-card"></i> Пользователь</p>
                    
                                    <div class="profile-sidebar--panel-body">
                                        <label>
                                            <em>Фамилия</em>
                                            <p><input type="text" placeholder="Фамилия"><span class="btn btn__correct"></span></p>
                                        </label>
                                        <label>
                                            <em>Имя</em>
                                            <p><input type="text" placeholder="Имя"><span class="btn btn__correct"></span></p>
                                        </label>
                                        <label>
                                            <em>Отчество</em>
                                            <p><input type="text" placeholder="Отчество"><span class="btn btn__correct"></span></p>
                                        </label>
                                    </div>
                    
                                </li>
                                <li>
                                    <p class="profile-sidebar--panel-title"><i class="fal fa-shield-check"></i> Паспортные данные</p>
                    
                                    <div class="profile-sidebar--panel-body">
                                        <span class="error text-center">Error</span>
                                    </div>
                                </li>
                                <li>
                                    <p class="profile-sidebar--panel-title"><i class="fal fa-envelope"></i> Контактыне данные</p>
                                    <div class="profile-sidebar--panel-body">
                                        <span class="error text-center">Error</span>
                                    </div>
                                </li>
                                <li>
                                    <p class="profile-sidebar--panel-title"><i class="fal fa-key"></i> Смена пароля</p>
                                    <div class="profile-sidebar--panel-body">
                                        <span class="error text-center">Error</span>
                                    </div>
                                </li>
                            </ul>
                    
                        </div>
                    
                        <div class="profile-sidebar--bot">
                            <button class="btn btn-blue">Применить изменения</button>
                        </div>
                    
                    
                    </div>


                    <div class="profile-block">

                        
                        <div class="profile-main-head">
                            <ul class="text-center">
                                <li v-for="tab in tabs" @click="current=tab.component" :class="current==tab.component?'active':''" :key="tab.name"><span>{{tab.name}}</span></li>
                            </ul>
                        </div>
                        
                        <div class="profile-main profile-main-step_1" style="display: none;">
                        
                            <div class="profile-main-step_1--top border">
                                <ul>
                                    <li>
                                        <div class="profile-main-step_1--top__item">
                                            <h5 class="profile-main-step_1--top__title text-center">Доступно для вывода:</h5>
                                            <div class="profile-main-step_1--top__center">
                                                <span><i class="fal fa-university"></i></span>
                                                <p><span>204.36 $</span>
                                                    <em>сумма в usd</em>
                                                </p>
                                            </div>
                                            <button class="btn btn-blue">Вывести средства</button>
                                            <p class="text-center">
                                                <button class="btn__set"><i class="fal fa-cog"></i> Автовывод</button>
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="profile-main-step_1--top__item">
                                            <h5 class="profile-main-step_1--top__title text-center">МОЯ СТАВКА:</h5>
                                            <div class="profile-main-step_1--top__center">
                                                <span><i class="fal fa-donate"></i></span>
                                                <p><span>10 %</span>
                                                    <em>от прибыли</em>
                                                </p>
                                            </div>
                                            <button class="btn btn-blue">Увеличить ставку</button>
                                            <p class="text-center">
                                                <button class="btn__set"><i class="fal fa-info-circle"></i> подробнее</button>
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="profile-main-step_1--top__item">
                                            <h5 class="profile-main-step_1--top__title text-center">Выплачено:</h5>
                                            <div class="profile-main-step_1--top__center">
                                                <span><i class="fal fa-hand-holding-usd"></i></span>
                                                <p><span>1206.65 $</span>
                                                    <em>cумма в usd</em>
                                                </p>
                                            </div>
                                            <ul>
                                                <li>Операций: <span>320632</span></li>
                                                <li>Переходов: <span>320632</span></li>
                                                <li>Рефералов: <span>320632</span></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        
                            <div class="profile-main-step_1--bot">
                        
                                <div class="border profile-schedule">
                                    <h5 class="title">Партнерская активность</h5>
                                    <div></div>
                                </div>
                        
                                <div class="border sidebar-width">
                        
                                    <h5 class="title">ПАРТНЕРСКАЯ ПРИБЫЛЬ <i class="fal fa-history"></i></h5>
                        
                                    <div class="profile-main-partners-profit">
                                        <ul>
                                            <li>
                                                <div class="profile-main-partners-profit--item">
                                                    <div class="profile-main-partners-profit--bank">
                                                        <span><img src="img/bank.svg" alt=""></span>
                                                        <p>
                                                            <span class="color">26 000</span>
                                                            <em>RUB</em>
                                                        </p>
                                                    </div>
                                                    <div class="profile-main-partners-profit--ref"><a href=""><i class="fal fa-sync"></i></a></div>
                                                    <div class="profile-main-partners-profit--bank">
                                                        <span><img src="img/bank.svg" alt=""></span>
                                                        <p>
                                                            <span class="color">26 000</span>
                                                            <em>RUB</em>
                                                        </p>
                                                    </div>
                                                </div>
                        
                                                <div class="profile-main-partners-profit--bot">
                                                    <span>
                                                        <i class="fal fa-chart-line"></i>
                                                        Ваша прибыль:
                                                    </span>
                                                    <p>
                                                        <span>90 RUB</span>
                                                        <span>1.53 USD</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="profile-main-partners-profit--item">
                                                    <div class="profile-main-partners-profit--bank">
                                                        <span><img src="img/bank.svg" alt=""></span>
                                                        <p>
                                                            <span class="color">26 000</span>
                                                            <em>RUB</em>
                                                        </p>
                                                    </div>
                                                    <div class="profile-main-partners-profit--ref"><a href=""><i class="fal fa-sync"></i></a></div>
                                                    <div class="profile-main-partners-profit--bank">
                                                        <span><img src="img/bank.svg" alt=""></span>
                                                        <p>
                                                            <span class="color">26 000</span>
                                                            <em>RUB</em>
                                                        </p>
                                                    </div>
                                                </div>
                        
                                                <div class="profile-main-partners-profit--bot">
                                                    <span>
                                                        <i class="fal fa-chart-line"></i>
                                                        Ваша прибыль:
                                                    </span>
                                                    <p>
                                                        <span>90 RUB</span>
                                                        <span>1.53 USD</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="profile-main-partners-profit--item">
                                                    <div class="profile-main-partners-profit--bank">
                                                        <span><img src="img/bank.svg" alt=""></span>
                                                        <p>
                                                            <span class="color">26 000</span>
                                                            <em>RUB</em>
                                                        </p>
                                                    </div>
                                                    <div class="profile-main-partners-profit--ref"><a href=""><i class="fal fa-sync"></i></a></div>
                                                    <div class="profile-main-partners-profit--bank">
                                                        <span><img src="img/bank.svg" alt=""></span>
                                                        <p>
                                                            <span class="color">26 000</span>
                                                            <em>RUB</em>
                                                        </p>
                                                    </div>
                                                </div>
                        
                                                <div class="profile-main-partners-profit--bot">
                                                    <span>
                                                        <i class="fal fa-chart-line"></i>
                                                        Ваша прибыль:
                                                    </span>
                                                    <p>
                                                        <span>90 RUB</span>
                                                        <span>1.53 USD</span>
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                        
                            </div>
                        
                        </div>
                        
                       <component :is="current" :sidebar="false" />


                    </div>

                </div>

            </div>

</template>

<script>
    import histor from '~/components/history/all'
    import orders from '~/components/orders/list'
    import partners from '~/components/partners/list'
    export default {
        components: { histor, orders, partners },
        data() {
            return {
                tabs: [
                    { name: 'История', component: histor },
                    { name: 'Партнеры', component: partners },
                    { name: 'Обмены', component: orders }

                ],
                current: histor
            }
        }

    }
</script>
