<template>


        <td class="bg middle">
            <div class="ip">

                <span class="lang"><img src="img/sadness-face.svg" alt=""></span>
                <p> [{{network.counterCode}}]- {{network.ip}}</p>
                <span class="icon-laptop"></span>
            </div>
        </td>


</template>

<script>
    export default {
        props: ['network']
    }
</script>
