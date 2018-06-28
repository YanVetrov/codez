<template>
    <small class="text-muted">
        <i class="fa fa-clock-o"></i>
        {{$moment(date).format('DD.MM.YY в HH:mm')}}
    </small>
</template>

<script>

    export default {
        props: ['date']
    }
</script>
