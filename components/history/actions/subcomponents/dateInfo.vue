<template>
    <td class="small">

        <p class="time">{{$moment(date).locale($t('moment-locale')).format('DD MMM')}}</p>
        <span>{{$moment(date).locale($t('moment-locale')).format('YYYY, HH:mm')}}</span>

    </td>
</template>

<script>

    export default {
        props: ['date']
    }
</script>
