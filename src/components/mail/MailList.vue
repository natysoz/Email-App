<template>

    <div class="preview-mails emails-container">
        <div class="mail-container">
            <div v-for="mail in this.mails" :key="mail._id">
            <mail-item-preview v-bind:mail="mail"></mail-item-preview>
            </div>

        </div>
    </div>

</template>

<script>
    import mailItemPreview from './MailListItem'
    export default {
        name: "mail-preview",
        props:["mails"],
        components:{mailItemPreview},
    }
</script>


<style scoped>
    ::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }

    .emails-container {
        font-size: 1.8rem;
        overflow: auto;
        background-color: #424242;
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);


    }
    .emails-container > * {
        align-self: center;
        justify-self: center;
    }


    .mail-container {
        position: relative;
        width: 100%;

    }
</style>