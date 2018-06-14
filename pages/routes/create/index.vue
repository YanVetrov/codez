<template>
    <div class="row">
        <div class="white-box" style="padding: 0;">
            <loading type="block" :status_load="status_load"/>
            <div class="component-valut">

                <div class="component-valut_wr">
                    <h4 class="component-valut_title">Verification state</h4>
                    <create/>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
    import Loading from "~/components/loading";
    import create from "~/components/transactions/create";

    export default {
        components: {Loading, create},
        data() {
            return {
                status_load: true,
            };
        },

    }

</script>

<style>

    .component-valut_wr {
        /* margin: 30px; */
        width: 100%;
        box-shadow: 0px 1px 2px 0 rgba(0, 0, 0, 0.11);
    }

    @media screen and (max-width: 768px) {
        .component-valut_wr {
            margin-left: 0;
            margin-right: 0;
        }
    }

    .component-valut_title {
        font-size: 1.5em;
        line-height: 2.29;
        background-color: #2cabe3;
        color: #ffffff;
        padding: 6px 30px;
        margin-bottom: 2.143em;
    }


</style>