<template>
    <div class='white-box' @click="viewDetailsClicked">
        <div class="head line">
            <div> №</div>
            <div class='lay'>{{$t('fn')}} {{$t('ln')}}</div>
            <div class='lay'>{{$t('email')}}</div>
            <div class='lay'>{{$t('balance')}}</div>
        </div>
        <div class='info line'>
            <div class='lay'>
                <div class='av'></div>
            </div>
            <div class='lay'>
                {{el.first_name}} {{el.last_name}}
            </div>
            <div class='lay'>{{el.email}}</div>
            <div class='lay'>{{el.balance}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['el'],
        methods: {
            viewDetailsClicked() {
                this.$emit("viewDetails", this.el ,);

            },

        }
    }

</script>

<style scoped>

</style>