<template>

    <div class="compose-container">
        <form class="new-form">
            <h1>Compose new Email</h1>

            <div>To</div>
            <input class="input-box" v-model="to" type="text" placeholder="to" maxlength="18">

            <div>Subject</div>
            <input class="input-box" v-model="subject" type="text" placeholder="Subject" maxlength="40">

            <div>Your thoughts</div>
            <textarea ref="inputFocus" class="text-area" v-model="message" placeholder="Your thoughts" autofocus></textarea>
        </form>

        <div class="flex-row">
            <div @click="close" class="btn flex">Cancel</div>
            <div @click="send" class="btn flex">Send</div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "MailNewCompose",
        methods:{

            send(){
                this.$emit('send',{
                    name:this.to,
                    subject:this.subject,
                    body:this.message,});
            },
            close(){
                this.$emit('close',);
            }
        },


        data(){
            return{
                to:'',
                subject:'',
                message:'',
            }
        },
    }

</script>

<style scoped>
    textarea {
        resize: none;
    }
    .input-box{
        text-indent: 10px;
        font-size: 1.05rem;
        cursor: auto;
        color: white;
        border: none;
        height:40px;
        background-color: #262626;
    }

    h1{
    }

    .flex{
        margin: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .flex-row{
        display: flex;
        flex-direction: row;
    }

    .btn{
        color: #fff;
        font-size: 1.5rem;
        width: 90vw;
        max-width: 150px;
        height: 6vh;
        background-color: #03a9f4;
        border: none;
        -webkit-animation: slide-up2 1.3s ease;
        animation: slide-up2 1.3s ease;
        -webkit-transition: all 0.055s;
        transition: all 0.15s;
    }
    .btn:hover{
        cursor: pointer;
        transform: scale(1.05);
    }
    .new-form{
        margin-top: 20px;
        width: 80%;
        display: flex;
        flex-direction: column;
    }
    .new-form >*{
        margin-top: 10px;
    }
    .text-area{
        text-indent: 10px;
        width: 100%;
        font-size: 1.2rem;
        cursor: auto;
        color: white;
        border: none;
        height:150px;
        background-color: #262626;
    }
    .compose-container{
        margin: 10px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        height: 60vh;
        background-color: #424242;
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2),
        0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.12);
    }

</style>