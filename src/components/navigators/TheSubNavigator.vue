<template>
    <nav class="subnav-container emails-container light">

        <router-link to="/dashboard/settings/" active-class="active">
            <div class="section ripple">Settings</div>
        </router-link>

        <router-link to="/dashboard/mail/inbox/" active-class="active">
            <div class="section ripple">Mail</div>
        </router-link>

        <router-link to="/dashboard/todo/" active-class="active">
            <div class="section ripple">Todo</div>
        </router-link>
    </nav>
</template>

<script>
    export default {
        name: "Subnav",
    }
</script>

<style scoped >

    a {
        text-decoration: none;
    }

    .section {
        display: flex;
        font-family: Barlow,sans-serif;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: #ececec;
    }

    .subnav-container {
        font-size: 1.3rem;
        width: 100%;
        justify-items: center;
        height: 8vh;
        -webkit-box-align: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #03a9f4;
    }

    .subnav-container > *:hover {
        cursor: pointer;
        color: white;
        background-color: #ffffff1a;

    }

    .subnav-container > * {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 8vh;
        width: 100%;
    }

    .emails-container {
        display: grid;
        grid-template-columns:0.85fr 2.3fr 1fr 0 7fr;
        grid-gap: 0;
    }

</style>