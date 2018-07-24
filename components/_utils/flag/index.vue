<template>
    <span v-if="iso"
          class="flag-icon"
          :class="flagIconClass"
          :title="title || iso">
    </span>
</template>
<script>
    import './flag.css'

    export default {
        props: {
            iso: {type: String, default: null},
            title: {type: String, default: null},
            squared: {type: Boolean, default: false},
        },
        computed: {
            flagIconClass() {
                return 'flag-icon-' + this.iso.toLowerCase();
            }
        }
    }
</script>flag.vue'