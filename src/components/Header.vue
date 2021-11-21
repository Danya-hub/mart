<template>
    <header>
        <a href="#" class="logo">
            <img src="#" alt="logo">
        </a>
        <Button :srcImg="require('@/assets/svg/catalog.svg')"></Button>
        <List :content="navProd" :withImg="true"></List>
        <Search></Search>
        <ul class="links">
            <li>
                <a href="#">Оплата и доставка</a>
            </li>
            <li>
                <a href="#">Контакты</a>
            </li>
        </ul>
        <Lang></Lang>
        <SocialNetworks></SocialNetworks>
    </header>
</template>

<script>
    import {
        mapGetters
    } from "vuex";

    export default {
        name: "Header",
        computed: {
            ...mapGetters([
                "navProd",
            ])
        }
    }
</script>

<style>

</style>