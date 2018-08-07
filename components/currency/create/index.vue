<template>
    <div>
        <DataInfo
                :step="step"

        />

        <!--<WaitInfo :errorData="errorData" v-if="errorData"/>-->
    </div>
</template>

<script>
    import DataInfo from "./data.vue";
    import WaitInfo from "./loader.vue";

    export default {
        components: {DataInfo, WaitInfo},
        data() {
            return {
                step: 0
            }
        },
        methods: {
            setBackStep(step) {
                if (this.step > step)
                    this.step = step;
            },
            step0() {
                this.step = 1;
            },
            step1() {
                this.step = 2;
            },
            step2() {
                this.step = 3;
            },
            step3() {
                this.step = 4;
            },
        }
    }
</script>
