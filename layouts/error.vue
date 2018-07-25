<template>

    <section id="wrapper" class="error-page">
        <div class="error-box">
            <div class="error-body text-center">
                <h1 class="text-info" style="color: red;font-size: 7em;">{{error.statusCode}}</h1>
                <h3 class="text-uppercase">{{error.message}}</h3>
                <nuxt-link to="/dashboard"
                           class="btn btn-info btn-rounded waves-effect waves-light m-b-40"
                >Back to home
                </nuxt-link>
            </div>
        </div>
    </section>

</template>

<script>
    export default {
        props: ['error'],

    }
</script>