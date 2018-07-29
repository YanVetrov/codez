<template>
    <div class="create-currency">


        <header-step :step="step"/>

        <div class="create-currency-block">


            <step0 :step="step" @saveStep0="saveStep0"/>


            <step1 v-if="step <= 1" :step="step"/>
            <step2 v-if="step === 2" :step="step"/>
            <step3 v-if="step === 3" :step="step"/>

        </div>

    </div>


</template>

<script>
    import headerStep from './headerStep';
    import step0 from './step/step-0';
    import step1 from './step/step-1';
    import step2 from './step/step-2';
    import step3 from './step/step-3';

    export default {
        components: {headerStep,step0,step1, step2, step3},
        props: ['data'],
        data() {
            return {
                step: 0
            }
        },

        methods: {
            saveStep0(){
                this.step = 1;
            }
        },

    }
</script>
