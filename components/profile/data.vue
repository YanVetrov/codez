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
                    
                                    <p class="profile-sidebar--panel-title__panel-active"><i class="fal fa-id-card"></i> Пользователь</p>
                    
                                    <div class="profile-sidebar--panel-body">
                                        <label>
                                            <em></em>
                                            <p><input type="text" placeholder="Фамилия" v-model="profile.last_name"><span class="btn btn__correct"></span></p>
                                        </label>
                                        <label>
                                            <em>Имя</em>
                                            <p><input type="text" placeholder="Имя" v-model="profile.first_name"><span class="btn btn__correct"></span></p>
                                        </label>
                                        <label>
                                            <em>Отчество</em>
                                            <p><input type="text" placeholder="Отчество"><span class="btn btn__correct"></span></p>
                                        </label>
                                    </div>
                    
                                </li>
                                <li>
                                    <p class="profile-sidebar--panel-title__panel-active"><i class="fal fa-shield-check"></i> Действия</p>
                    
                                    <div class="profile-sidebar--panel-body">
                                        <button class="btn btn-blue" style="padding:5px;margin:5px" :style="profile.active?'':disabled" >Заблокировать</button>
                                        <button class="btn btn-blue" style="padding:5px;margin:5px" :style="profile.active?disabled:''">Разблокировать</button>
                                        <button class="btn btn-blue" style="padding:5px;margin:5px">Войти в личный кабинет</button>
                                    </div>
                                </li>
                                <li>
                                    <p class="profile-sidebar--panel-title__panel-active"><i class="fal fa-envelope"></i> Контактыне данные</p>
                                    <div class="profile-sidebar--panel-body">
                                                                              
                                                                               
                                        <label>
                                            <em>Email</em>
                                            <p><input type="text" placeholder="xxxx@domain.com" v-model="profile.email"><span class="btn btn__correct"></span></p>
                                        </label>                             
                                        <label>
                                            <em>Телефон</em>
                                            <p><input type="text" placeholder="+555 555 55 55" v-model="profile.phone"><span class="btn btn__correct"></span></p>
                                        </label>
                                    
                                    </div>
                                </li>
                                <li>
                                    <p class="profile-sidebar--panel-title__panel-active"><i class="fal fa-key"></i> Смена пароля</p>
                                    <div class="profile-sidebar--panel-body">
                                      <label>
                                            <em>Старый пароль</em>
                                            <p><input type="text" placeholder="********" v-model="password.old"><span class="btn btn__correct"></span></p>
                                        </label> 
                                           <label>
                                            <em>Новый пароль</em>
                                            <p><input type="text" placeholder="*********" v-model="password.new"><span class="btn btn__correct"></span></p>
                                        </label>
                                       <label>
                                            <em>Повторите новый пароль</em>
                                            <p><input type="text" placeholder="*********" v-model="password.new_repeat"><span class="btn btn__correct"></span></p>
                                        </label> 
                                        <button class="btn btn-blue" style="padding:5px">Сменить пароль</button>
                                    </div>
                                </li>
                            </ul>
                    
                        </div>
                    
                        <div class="profile-sidebar--bot">
                            <button class="btn btn-blue" @click="$emit('edit',profile)">Применить изменения</button>
                        </div>
                    
                    
                    </div>


                    <div class="profile-block">

                        
                        <div class="profile-main-head">
                            <ul class="text-center">
                                <li v-for="tab in tabs" @click="current=tab.component" :class="current==tab.component?'active':''" :key="tab.name"><span>{{tab.name}}</span></li>
                            </ul>
                        </div>
                        
                        <partner :profile="profile" v-if="current==tabs[1].component"/>
                        
                       <component :style="{marginTop:current==tabs[1].component?'375px':'55px'}" :is="current" :sidebar="false" />


                    </div>

                </div>

            </div>

</template>

<script>
    import histor from '~/components/history/all'
    import orders from '~/components/orders/list'
    import partners from '~/components/partners/list'
    import partner from './partner'
    export default {
        components: { histor, orders, partners, partner },
        props: ['data'],
        data() {
            return {
                tabs: [
                    { name: 'История', component: histor },
                    { name: 'Партнеры', component: partners },
                    { name: 'Обмены', component: orders }

                ],
                disabled: {
                    opacity: 0.3,
                    cursor: 'not-allowed'
                },
                profile: {},
                current: histor,
                password: {}
            }
        },
        watch: {
            data() {
                this.profile = this.data
            }
        }

    }
</script>
