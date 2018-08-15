<template>
                    <ul class="question-list">
                         <li>
                            <a @click="$emit('group','')">
                                <i class="fal fa-caret-square-right"> </i> 
                                Все
                            </a>
                            
                        </li>
                        <li v-for="group in groups" :key="group.id" v-if="lang == group.lang" >
                            <a @click="$emit('group',group.groupName)" :class="group.groupName==$parent.$parent.group?'active':''">
                                <i class="fal fa-caret-square-right"> </i> 
                                {{group.groupName}}
                            </a>
                            
                        </li>
                    </ul>
</template>

<script>
    export default {
        props: ['groups','lang']
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
