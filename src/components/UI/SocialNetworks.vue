<template>
    <ul ref="socialNetworks">
        <li v-for="obj in socNetWork" :key="obj.name">
            <a href="#" :id="obj.name">
                <img :src="obj.img" :alt="obj.name" @click="getSrc">
            </a>
        </li>
    </ul>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    export default {
        name: "SocialNetworks",
        computed: {
            ...mapGetters([
                "socNetWork"
            ])
        },
        methods: {
            getSrc(event) {
                console.log(event.target);
            }
        }
    }
</script>

<style>

</style>