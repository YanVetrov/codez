<template>
    <div>
        <small class="text-muted">
            <i class="fa fa-user"></i>
            {{user.last_name}}
            {{user.first_name}}
            ({{user.email}}) -
            [{{network.counterCode}}] {{network.ip}}
        </small>
    </div>
</template>

<script>
    export default {
        props: ['user', 'network']
    }
</script>
