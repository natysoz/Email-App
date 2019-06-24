<template>
    <section class="mail-card-container overflow">

        <mail-viewer-subject v-bind:mail="currMail"
                             v-on:pushPost="pushPost"/>
        <mail-viewer-posts v-bind:posts="currPosts" v-on:deletePost="deleteThePost" />

    </section>
</template>


<script>
    import mailViewerSubject from './MailViewerSubject'
    import mailViewerPosts from './MailViewerPosts'

    export default {
        name: "mailViewer",
        props:["emails"],
        data() {
            return {
                mails: [],
                posts:[],
                mailListItemId: this.$route.params.id,
                noMailSelected: false,
                selectedMail: {},
            }
        },
        methods:{
            deleteThePost(postId){
                this.$emit('deletePost',this.selectedMail._id,postId)
            },
            pushPost(mailId,msg){
                this.$emit('pushPost',mailId,msg)
            },
        },

        created() {
            this.mails = this.emails;
            this.selectedMail = this.mails.find(mail => mail._id === this.mailListItemId);
            if(this.selectedMail) this.posts = this.selectedMail.posts;
        },
        computed: {
            currMail(){
                if(!this.selectedMail) return {subject:'Non',name:'Non',sentfrom:'Non',body:'Non',isImportant:true};
                else return this.selectedMail;
            },
            currPosts(){
                if(!this.selectedMail) return [];
                else return this.selectedMail.posts;
            },
        },
        watch: {
            emails:{
                deep: true,
                immediate: true,
                handler(){
                    this.mails = this.emails;
                    this.selectedMail = this.mails.find(mail => mail._id === this.mailListItemId);
                }
            },

            '$route'() {
                this.mailListItemId = this.$route.params.id;
                this.selectedMail = this.mails.find(mail => mail._id === this.mailListItemId);
                if(this.selectedMail) this.posts = this.selectedMail.posts;
            },

        },

        components:{
            mailViewerSubject,
            mailViewerPosts,
        }
    }
</script>

<style scoped>

    ::-webkit-scrollbar {
        width: 0;
        background: transparent; /* make scrollbar transparent */
    }

    .overflow {
        overflow: auto;
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


    .mail-card-controller:not(.btn) > .btn:hover {
        cursor: pointer;
        font-size: 1.3rem;
        background-color: #ffffff1a;
    }


    .mail-card-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        margin: 0 auto;
    }

    .mail-item-card > * {
        margin: 20px;

    }


</style>