<template>


    <div>
        
            
            <div class="users-list-toodo-main border">
            
                <div class="users-list-toodo-main--top">
                    <h3 class="title">Список Пользователей</h3>
            
                    <ul class="text-center">
                        <li><span class="users-active-info">Все типы</span></li>
                        <li><span>Активные</span></li>
                        <li><span>Не подтвержденный</span></li>
                        <li><span>Заблокированы</span></li>
                    </ul>
                </div>
            
                
                <div class="search-block border">
                    <ul>
                
                        <li class="search-block--input">
                            <div>
                                <button><span class="icon-search"></span></button>
                                <input type="search" placeholder="Поиск по списку">
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
            
            
                <div class="table">
            
                    <table>
            
                        <thead>
                            <tr>
                                <td>
                                    <span>Пользователь</span>
            
                                    <ul>
                                        <li><a href="/">up</a></li>
                                        <li><a href="/">down</a></li>
                                    </ul>
            
                                </td>
                                <td>
                                    <span>E-mail</span>
            
                                    <ul>
                                        <li><a href="/">up</a></li>
                                        <li><a href="/">down</a></li>
                                    </ul>
            
                                </td>
                                <td>
                                    <span>обменЫ</span>
            
                                    <ul>
                                        <li><a href="/">up</a></li>
                                        <li><a href="/">down</a></li>
                                    </ul>
            
                                </td>
                                <td>
                                    <span>Регистрация</span>
            
                                    <ul>
                                        <li><a href="/">up</a></li>
                                        <li><a href="/">down</a></li>
                                    </ul>
            
                                </td>
                                <td>
                                    <span>Баланс</span>
            
                                    <ul>
                                        <li><a href="/">up</a></li>
                                        <li><a href="/">down</a></li>
                                    </ul>
            
                                </td>
                                <td></td>
                            </tr>
                        </thead>
            
                        <tbody>
                            <tr v-for='user in data' :key='user.id'>
            
                                <td>
            
                                    <span class="icon-company"><img src="~/assets/img/bank.svg" alt=""></span>
            
                                    <div class="company">
                                        <p class="name-company">{{user.first_name}} {{user.last_name}} </p>
                                        <p>Был вчера в <span>10:35</span></p>
                                    </div>
            
                                </td>
            
                                <td>
                                    <p>{{user.email}}</p>
                                </td>
            
                                <td>
            
                                    <ul>
                                        <li>
                                            <p class="color blue">{{user.exchangesTotal}}</p>
                                            <p><span>Всего</span></p>
                                        </li>
                                        <li>
                                            <p class="color green">{{user.exchangesSuccess}}</p>
                                            <p><span>Успешно</span></p>
                                        </li>
                                    </ul>
            
            
                                </td>
            
                                <td class="user-data">
                                    <p>{{user.createdAt.split('T')[0]}} </p>
                                    <p>в 14:25 ч</p>
                                </td>
            
                                <td>
                                    <p class="color green">{{user.balance}} <span>USD</span></p>
                                    <p>Партнерские <span>{{user.partner}}</span></p>
                                </td>
            
                                <td>
                                    <div class="table-btn-users">
                                        <a href="/" class="btn btn-simple btn-simple--img"><span class="icon-edit-profile"></span>Профиль</a>
                                    </div>
                                </td>
                            </tr>
            
                            <tr class="dashboard-wait--no-proposal">
                                <td colspan="6">Нет заявок</td>
                            </tr>
                        </tbody>
            
                    </table>
            
                </div>
            
                
                <pagination           
                :currentPage="page.current_page"
                :totalPages="page.total_page"
                @page-changed="$parent.getUserAdmin"/>
            
            </div>
        
            
            
        
        </div>



</template>

<script>
import pagination from '~/components/pagination'
    export default {
        props: ['data','page'],
        components:{pagination}
        
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
