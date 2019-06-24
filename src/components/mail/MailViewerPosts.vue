<template>
    <div class="mail-card-container width">

        <div v-if="!posts.length">There are no more Posts...</div>

        <div v-for="post in posts" :key="post._id" v-bind:post="post" class="container">
            <div class="mail-title">
                <h1>{{post.subject}}</h1>
            </div>
            <div class="mail-item-card">
                <div class="mail-card-head">
                    <div class="replay-logo flex">{{post.name |first-char}}</div>
                    <div>{{ post.name}}</div>
                    <div>{{ post.sentfrom}}</div>
                    <div>{{dateComputed(post.timestamp)}}</div>
                </div>

                <div class="mail-card-body">
                    <p class="re"> RE: <span class="body-text">{{ post.body}}</span></p>
                </div>

                <div class="mail-card-controller">
                    <div @click="$emit('deletePost',post._id)" class="btn last"><i
                            class="fas fa-trash btn"></i></div>
                </div>

            </div>
        </div>


    </div>

</template>

<script>
    export default {
        name: "MailViewerPost",
        props: ['posts'],
        methods:{
            dateComputed(time) {
                var date = new Date(time);
                var hour = date.getHours()
                var min = date.getMinutes()
                var day = date.getDate()
                var month = date.getMonth()+1
                var year = date.getFullYear()
                return date = day + '/' + month + '/' + year + ' at ' + hour + ':' + min;
            }
        }
    }
</script>

<style scoped>

    ::-webkit-scrollbar {
        width: 0;
        background: transparent; /* make scrollbar transparent */
    }

    .re{
        color: white;
        font-weight: 900;
        font-size: 1.05rem;
    }
    .body-text{
        color: #e2e2e2;
        font-weight: 500;
        font-size: 1.0rem;
    }
    .overflow {
        overflow: auto;
    }

    .container{
        width: 100%;
        animation: slide-up 0.3s ease-out;
    }
    
    @keyframes slide-up {
        0% {
            opacity: 0;
            transform: translateY(30px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .width {
        width: 90%;
    }

    .mail-card-controller {
        display: flex;
        align-items: center;
        justify-items: center;
        height: 55px;
        transition: font-size 0.2s ease-out;
    }

    .mail-card-controller > * {
        border-radius: 100px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 65px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
    }

    .replay-logo {
        justify-self: start;
        color: #ffffff;
        margin-left: 22px;
        font-weight: 900;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background-color: rgb(102, 204, 187);
        align-self: center;
    }

    .logo {
        justify-self: start;
        color: #ffffff;
        margin-left: 22px;
        font-weight: 900;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background-color: rgb(119, 102, 204);
        align-self: center;
    }

    .last {
        margin-left: auto;
    }

    .mail-card-controller:not(.btn) > .btn:hover {
        cursor: pointer;
        font-size: 1.3rem;
        background-color: #ffffff1a;
    }


    .mail-card-container {
        display: flex;
        margin-bottom:10px ;
        flex-direction: column;
        align-items: center;
    }

    .mail-title {
        align-self: start;
        margin-left: 35px;
    }

    .mail-card-head {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(4, 1fr);
        width: 95%;
        height: 30%;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.18);

    }

    .mail-item-card {
        width: 100%;
        background-color: #424242;
        display: flex;
        flex-direction: column;
        word-wrap: break-word;
        justify-content: space-between;
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2),
        0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.12);
    }

    .mail-item-card > * {
        margin: 20px;

    }
</style>

