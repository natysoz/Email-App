<template>
    <div class="no-mail-container">
        <div><i class="icon fas fa-envelope-open-text"></i></div>
        <div class="mail-viewer">
            Please select an email
        </div>
    </div>
</template>

<script>
    export default {
        name: "noMails"
    }
</script>

<style scoped>
    .icon{
        font-size: 2.6rem;
    }

    .no-mail-container{
        font-size: 1.25rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 28vw;
        width: 70%;
        height: 82vh;
        background-color: rgba(74, 77, 75, 0);
    }

</style>