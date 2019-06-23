<template>

    <div>
        <div class="mail-app">
            <mail-navigator :status="this.mailStatus" v-on:updateTab="updateTab" />
            <mail-list v-on:click.native="readingToggle" v-on:delete="requestDeleteMail" :mails="filteredMails" />
            <mail-new-button v-on:create="openNewMail" />
            <mail-compose v-on:send="sendMailAndClose" v-on:close="closeNewMail" v-if="createNewMailState"/>
            <router-view v-if="!createNewMailState"/>
            <mail-empty v-if="!createNewMailState && !readMode"/>
        </div>
    </div>

</template>

<script>
    import mailList from './mail/MailList'
    import mailCompose from './mail/MailNewCompose'
    import mailNewButton from './mail/MailNewMailButton'
    import mailNavigator from './mail/MailNavigator'
    import mailService from '../assets/js/utils/mail-services'
    import mailEmpty from './mail/MailViewerEmpty'

    export default {
        name: "mailApp",
        data() {
            return {
                search: '',
                selectedTab: this.$route.params.inbox,
                mails: [],
                mailStatus:{},
                unreadMails: 0,
                spaceLeft: 0,
                deletedMails:0,
                createNewMailState:false,
                readMode:false,
            }
        },
        created() {
            this.selectedTab = this.$route.params.inbox;
            mailService.query()
                .then(mails => {
                    this.mails = mails;
                    this.mailStatus = mailService.getMailStatus();
                });

        },
        computed: {
            filteredMails() {
                if (!this.mails) return;
                return this.mails.filter(mail => {
                    if (this.selectedTab === 'inbox' || this.selectedTab === 'all') {
                        if (!mail.isDeleted && !mail.isSent) return mail.isDone
                    } else if (this.selectedTab === 'important') {
                        if (!mail.isDeleted) return mail.isImportant
                    } else if (this.selectedTab === 'sent') {
                        if (!mail.isDeleted && !mail.isInbox) return mail.isSent
                    } else if (this.selectedTab === 'deleted') {
                        return mail.isDeleted
                    } else {
                        this.selectedTab = 'inbox';
                        this.$router.push('/dashboard/mail/inbox/');
                    }
                })
            },
        },
        methods: {
            requestDeleteMail(mailID){
                mailService.deleteMailByID(mailID)
                    .then(()=>{
                        mailService.query()
                            .then(mails => {
                                this.mails = mails;
                            });
                    })
            },
            readingToggle(){
                this.readMode=true;
            },
            openNewMail(){
                this.createNewMailState=true;
            },
            closeNewMail(){
                this.createNewMailState=false;
            },
            sendMailAndClose(mail){
                mailService.pushNewMail(mail);
                mailService.query()
                    .then(mails => {
                        this.mails = mails;
                        this.mailStatus = mailService.getMailStatus();
                        this.$router.push('/dashboard/mail/sent/');
                        this.selectedTab = 'sent';

                    });
                this.createNewMailState=false;
            },
            updateTab(tab) {
                if (!tab) return;
                this.selectedTab = tab;
                this.unreadMails = mailService.getUnreadMails();
                this.deletedMails = mailService.getDeletedMails();
            },
        },
        components: {mailNavigator, mailList, mailNewButton, mailCompose,mailEmpty},
    }
</script>

<style scoped>
    .mail-app {
        width: 100%;
        height: 82vh;
        display: grid;
        grid-template-columns: 0.75fr 2fr 7fr;
        grid-template-rows: 1fr;
    }


</style>