<template>
    <td class="small">

        <p class="time">{{$moment(date).format('DD MMM')}}</p>
        <span>{{$moment(date).format('YYYY, HH:mm')}}</span>

    </td>
</template>

<script>

    export default {
        props: ['date']
    }
</script>
