<template>
    <button>
        <img :src="srcImg" alt="icon">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "Button",
        props: {
            srcImg: {
                type: String,
                default: () => "",
            }
        },
    }
</script>

<style>

</style>