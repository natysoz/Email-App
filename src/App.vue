<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'app',
        data() {
            return {
                isModeSelected: true,
            }
        },
    }
</script>

<style>
    #app {
        color: #d5d5d5;
        font-family: 'Barlow ExtraLight', sans-serif;
        font-weight: 200;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    a {
        text-decoration: none;
    }

    .active{
        box-shadow:inset 0px -3px 0px 0px #cce8ff;
    }
    .active-mail-tab{
    background-color: #0288d1;
    }

    .flex {
        display: flex;
    }

    .flex-row {
        flex-direction: row;
    }

    .flex-col {
        flex-direction: column;
    }

    .justify {
        justify-items: center;
    }

    .space-around {
        justify-content: space-around;
    }

    .light {
        color: #ececec;
    }

    .grid {
        display: grid;
    }

    .ripple {
        background-position: center;
        transition: background 0.3s;
    }

    .ripple:hover {

        background: #ffffff1a radial-gradient(circle, transparent 1%, rgba(249, 255, 250, 0.1) 1%) center/15000%;
    }

    .ripple:active {
        background-color: #03a9f4;
        background-size: 100%;
        transition: background 0s;
    }

</style>
