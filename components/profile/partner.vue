<template>

                        
                        <div class="profile-main profile-main-step_1" >
                        
                            <div class="profile-main-step_1--top border">
                                <ul>
                                    <li>
                                        <div class="profile-main-step_1--top__item">
                                            <h5 class="profile-main-step_1--top__title text-center">Доступно для вывода:</h5>
                                            <div class="profile-main-step_1--top__center">
                                                <span><i class="fal fa-university"></i></span>
                                                <p><span>{{profile.affiliate.balance.usd}} $</span>
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
                                                <p><span>{{profile.affiliate.rate}} %</span>
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
                                                <p><span>{{profile.affiliate.totalReceived.usd}} $</span>
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
</template>

<script>
    export default {
        props:['profile']

    }
</script>

<style scoped>
    .border {
        overflow:visible;
    }
</style>