<template>

    <div class="new-mail-button">
        <div @click="$emit('create')" class="circle"><i class="fas fa-envelope"></i></div>
    </div>
</template>

<script>
    export default {
        name: "MailNewMailButton",
    }
</script>

<style scoped>


    .new-mail-button{
        z-index: 20;
        padding: 40px;
        position: absolute;
        right: 0;
        bottom: 0;
    }

    .circle{
        display: flex;
        font-size: 1.75rem;
        justify-content: center;
        align-items: center;
        background-color: #03a9f4;
        border-radius: 100px;
        width: 70px;
        height: 70px;
    }
    .circle:hover{
        cursor: pointer;
        transform: scale(1.1);
    }

</style>