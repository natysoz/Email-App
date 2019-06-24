<template>
    <div class="mail-card-container width">
            <div class="mail-title">
                <h1>{{mailSubject}}</h1>
            </div>
            <div class="mail-item-card">
                <div class="mail-card-head">
                    <div class="logo flex">
                        {{mailFirstChar()}}
                    </div>
                    <div>{{ mail.name}}</div>
                    <div>{{ mail.sentfrom}}</div>
                    <div>{{dateComputed(mail.timestamp)}}</div>
                </div>
                <div class="mail-card-body">
                    <p>{{ mail.body}}</p>
                </div>
                <div class="mail-card-controller">
                    <div @click="togglePostMode" class="btn"><i class="fas fa-reply "></i></div>
                    <div @click="pushPost" v-if="postMode" class="btn"><i class="fas fa-arrow-right "></i></div>
                    <div v-if="postMode" class="input"><label class="input-clr"><input  v-model="message" placeholder="Whats on your mind?" type="text"></label></div>
                    <div v-if="mail.isImportant" class="btn last"><i class="far fa-heart"></i></div>
                    <div v-else class="btn last"><i class="fas fa-heart btn"></i></div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name: "MailViewerPost",
        props:['mail'],
        data(){return{
            currMail:{},
            firstChar:'',
            message:'',
            postMode:false,
        }},
        watch:{
          mail(){
              if(!this.mail.posts){
               this.currMail={subject:'Non',name:'Non',sentfrom:'Non',body:'Non',isImportant:true};
              } else this.currMail = this.mail;
          }
        },
        computed:{
            mailSubject(){
                if(!this.mail)return 'NON'
                else return this.mail.subject;
            },
        },
        methods:{
            pushPost(){
                this.$emit('pushPost',this.mail._id,this.message);
                this.postMode= false;
            },
            togglePostMode(){
                this.postMode= !this.postMode;
            },
            mailFirstChar() {
                if (!this.mail) return 'A';
                return this.firstChar = this.mail.name.charAt(0);
            },
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
    ::placeholder{
        color: #b5b5b5;
    }
    textarea:focus, input:focus{
        color: white;
        outline: none;
    }
    ::-webkit-scrollbar {
        width: 0;
        background: transparent; /* make scrollbar transparent */
    }

    .overflow {
        overflow: auto;
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
    .input{
        font-size: 1rem;
        width: 50%;
        background: #303030;
        border: none;
    }
    .input-clr{
        text-align: left;
        width: 90%;
    }
    input{
        width: 90%;
        background: #303030;
        color: #b5b5b5;
        border: none;
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