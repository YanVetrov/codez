<template>
    <div class="create-currency-main">

        <div class="create-currency-main--head">
            <div class="create-currency-main--head--container">
                <p>верификация</p>
                <ul>
                    <li>
                        <button class="btn"><i class="fal fa-plus-circle"></i> включить</button>
                    </li>
                    <li>
                        <button class="btn"><i class="fal fa-minus-circle"></i> выключить</button>
                    </li>
                </ul>
            </div>
        </div>

        <div class="create-currency-main--toodo">

            <div class="create-currency--course_wr bb">


            </div>

        </div>

        <div class="create-currency-main--foot flex-end">

            <button class="btn btn-blue">Сохранить</button>

        </div>

    </div>
</template>

<script>
    export default {
        props: ['data'],
        data() {
            return {}
        },

        methods: {}
    }
</script>
