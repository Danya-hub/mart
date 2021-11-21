<template>
    <ul>
        <li v-for="obj in content" :key="obj.name">
            <img v-if="withImg" :src="obj.img" :alt="obj.name">
            <a href="#" class="prod">{{ obj.value }}</a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "List",
        props: {
            content: {
                type: Array,
                default: () => [],
            },
            withImg: {
                type: Boolean,
                default: () => false,
            }
        }
    }
</script>

<style>

</style>