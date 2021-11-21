<template>
    <MainPage></MainPage>
</template>

<script lang="ts">
    import MainPage from "@/views/MainPage.vue";

    export default {
        components: {
            MainPage
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="css">
    @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600&display=swap");
    @import url("./style/colors.css");
    @import url("./style/variables.css");

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: "Raleway", sans-serif;
        letter-spacing: 1px;
        color: var(--black);
        border: none;
    }

    img {
        display: block;
        width: 100%;
        height: fit-content;
        object-fit: cover;
    }

    button {
        display: block;
        background: none;
        outline: none;
    }

    svg > * { /*<---- !!!  */
        fill: var(--black);
    }
</style>