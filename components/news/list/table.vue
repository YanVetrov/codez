<template>


    
        
                      
                    <ul class="catalog-news-list">
                
                        <li v-for="post in news" :key="post._id">
                
                            <div class="catalog-news-item">
                
                                <div class="catalog-news-item--top">
                
                                    <img src="img/bestChange.jpg" alt="binance">
                
                                    <a href="/"><i class="fal fa-chevron-square-right"></i> платежные системы</a>
                
                                    <p>{{post.title}}</p>
                
                                </div>
                
                                <div class="catalog-news-item--main__wr">
                
                                    <div class="catalog-news-item--main">
                
                                        <p class="catalog-news-item--txt">{{post.content}} </p>
                                        <nuxt-link :to="`/news/view/${post.link}`">Читать новость &rarr;</nuxt-link>
                
                                    </div>
                
                                    <div class="catalog-news-item__user-block">
                
                                        <div class="catalog-news-item__user-photo">
                                            <img src="img/sadness-face.svg" alt="user">
                                        </div>
                
                                        <div class="catalog-news-item__user-info">
                                            <p class="name">Илья Новиков</p>
                                            <span>{{$moment(post.createdAt).format('DD.MM.YY в HH.mm')}}</span>
                                        </div>
                
                                        <div class="catalog-news-item__user-date">
                                            <i class="fal fa-eye"></i>
                                            <span>{{post.score}}</span>
                                        </div>
                
                                    </div>
                
                                    <div class="btn-group">
                                        <nuxt-link :to="`/news/edit/${post._id}`" class="btn btn-simple--img btn-simple btn-settings">изменить</nuxt-link>
                                        <button @click="$emit('delete',post._id)" class="btn btn-simple--img btn-simple cart-delete">Удалить</button>
                                    </div>
                
                                </div>
                
                            </div>
                
                        </li>
                    </ul>
            
            
        
       



</template>

<script>
import tableItem from './tableItem';
    export default {
        props: ['news'],
        components:{tableItem}
        
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
