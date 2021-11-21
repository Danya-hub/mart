<template>
    <ul ref="lang"></ul>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    export default {
        name: "Lang",
        computed: {
            ...mapGetters([
                "lang"
            ])
        },
        mounted() {
            this.lang.forEach(obj => this.$refs.lang.innerHTML += `
                    <li>
                        <span id="${obj.name}">${obj.value}</span>
                    </li>
                `
            );
        }
    }
</script>

<style>

</style>