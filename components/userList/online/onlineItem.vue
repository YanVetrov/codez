<template>

    <li>
        <p class="flag">
            <flag-icon :iso="isoCountry"/>
        </p>

        <p class="ip">IP {{ip}}</p>

        <span class="device"><span class="icon-laptop"></span></span>

        <div class="active-change">
            <p class="active-change__">{{actionText}}</p>

        </div>
    </li>

</template>

<script>
    import FlagIcon from "@/components/_utils/flag.vue"

    export default {
        props: ['actionText', 'ip', 'isoCountry'],
        components: {FlagIcon}
    }
</script>

<style lang='scss' scoped>
    /*@import "dashboard/dashboard-top";*/
</style>
