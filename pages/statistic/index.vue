<template>
                  <div class="row">
                    <div class="col-lg-12">
                        <div class="white-box">
                            <h3 class="box-title">Monthly Stat</h3>
                            <chartLine/>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="white-box">
                            <h3 class="box-title">Detail</h3>
                             <chartCol/>
                        </div>
                    </div>
                </div>
</template>

<script>

 import chartCol from '~/components/dashboard/chartCol.vue'
import chartLine from '~/components/dashboard/chartLine.vue'

    export default {
        components:{
            chartCol,
            chartLine
        }
    }
</script>

