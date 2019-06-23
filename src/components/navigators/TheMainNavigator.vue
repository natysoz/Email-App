<template>
    <nav class="subnav-container emails-container light">
        <div class="burger"><div class="nav-bar-btn"><i class="fas fa-bars"></i></div></div>
        <div class="section">{{sectionTitle}}</div>
        <div ></div>
        <div class="nav-bar-btn"><i class="fas fa-adjust"></i></div>
        <div class="nav-bar-btn"><i class="fas fa-th"></i></div>
        <div class="nav-bar-btn"><i class="fas fa-bell"></i></div>
    </nav>
</template>

<script>
    export default {
        name: "Navigator",
        prop: [],
        data() {
            return {
                section: 'mail'
            }
        },
        computed:{
            sectionTitle(){
                return this.section = (this.$route.params.inbox).toUpperCase();
            }
        }
    }
</script>

<style scoped>

    .subnav-container {
        font-size: 1.3rem;
        width: 100%;
        justify-items: center;
        height: 10vh;
        -webkit-box-align: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #424242;

    }

    .subnav-container > *:hover {
        cursor: pointer;
        color: white;
    }

    .subnav-container:first-child {

    }

    .subnav-container > * {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nav-bar-btn {
        display: flex;
        justify-content: center;
        width: 61px;
        height: 57px;
        border-radius: 100px;
        align-items: center;
        transition: background-color 300ms ease-out;
    }

    .nav-bar-btn:hover {
        background-color: white;
        background-color: #ffffff1a;
    }
    .section{
        justify-self: start;
    }
    .emails-container {
        display: grid;
        grid-template-columns: 1fr 20fr 1fr 1fr 1fr 1fr;
    }


</style>