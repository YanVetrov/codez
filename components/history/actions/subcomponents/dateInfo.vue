<template>
    <td class="small">

        <p class="time">{{$moment(date).format('HH:mm')}}</p>
        <span>{{$moment(date).format('DD.MM.YY')}}</span>

    </td>
</template>

<script>

    export default {
        props: ['date']
    }
</script>
