<template>
    <section class="header">
        <main-nav />
        <sub-nav v-on:filtered="test"/>
        <router-view v-bind:filter="filter"/>
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
        data(){
            return{
                filter:'',
            }
        },
        methods:{
            test(got){
              this.filter = got;
            },
        },
    }

</script>

<style scoped>

</style>