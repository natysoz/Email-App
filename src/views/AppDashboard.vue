<template>
    <section class="header">
        <main-nav></main-nav>
        <sub-nav></sub-nav>
        <router-view></router-view>
    </section>
</template>

<script>
    //Dashboard hold the Static Headers
    import mainNav from '../components/navigators/TheMainNavigator'
    import subNav from '../components/navigators/TheSubNavigator'

    export default {
        name: "dashboard",
        components:{
            mainNav,
            subNav,
        },
    }

</script>

<style scoped>

</style>