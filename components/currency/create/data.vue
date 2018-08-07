<template>
    <div class="create-currency">


        <header-step :step="step" @setStep="setStep"/>

        <div class="create-currency-block">


            <step0
                    :step="step"
                    @next="$parent.step0($event)"
                    @back="$parent.setBackStep(step-1)"
            />


            <step1 v-if="step <= 1"
                   :step="step"
                   @next="$parent.step1($event)"
                   @back="$parent.setBackStep(step-1)"
            />
            <step2 v-if="step === 2"
                   :step="step"
                   @next="$parent.step2($event)"
                   @back="$parent.setBackStep(step-1)"
            />
            <step3 v-if="step === 3"
                   :step="step"
                   @next="$parent.step3($event)"
                   @back="$parent.setBackStep(step-1)"
            />

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
        components: {headerStep, step0, step1, step2, step3},
        // model:{},
        props: {
            step: {type: Number, required: true},
            // general

        },
        data() {
            return {
                name:'',
                type:'',
                xml:'',
            }
        },
        methods:{
          setStep(step){
              this.$parent.setBackStep(step)
          }
        }
    }
</script>
