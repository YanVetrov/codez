<template>


        <td class="bg middle">
            <div class="ip">

                <span class="lang">
                    <flag-icon :iso="network.counterCode"/>
                </span>
                <p> {{network.ip}}</p>
                <i class="fal fa-location-arrow"></i>
            </div>
        </td>


</template>

<script>
    import FlagIcon from "@/components/_utils/flag"

    export default {
        components:{FlagIcon},
        props: ['network']
    }
</script>
