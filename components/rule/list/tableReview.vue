<template>
                                <tr class="review-tr">
                                <td></td>
                                <td colspan="5"  class="review-table--td">
                
                                    <div class="review-table--info">
                
                                        <p>
                                           {{text}}
                                           </p>
                
                                        <button class="btn btns__group btn-publish">Опубликовано</button>
                                        <button class="btn btns__group btn-block">Заблокирован</button>
                                        <button class="btn btns__group btn-not-confirm">Не потвержден</button>
                
                                    </div>
                
                                </td>
                            </tr>
</template>

<script>
    export default {
        props: ['text'],
    }
</script>

<style lang="scss">
    
</style>