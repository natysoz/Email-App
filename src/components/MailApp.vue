<template>
    <div>
        <div class="mail-app">
            <mail-navigator :mails="mails" v-on:updateTab="updateTab"/>
            <mail-list v-on:click.native="readingToggle"
                       v-on:delete="requestDeleteMail"
                       v-on:update="updateMailReadStatus"
                       :mails="filteredMails"/>
            <mail-new-button v-on:create="openNewMail"/>
            <mail-compose v-on:send="sendMailAndClose" v-on:close="closeNewMail" v-if="createNewMailState"/>
            <router-view v-bind:emails="mails"
                         v-on:deletePost="deletePost"
                         v-on:pushPost="pushPost"
                         v-if="!createNewMailState"/>
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
        props: ['filter'],
        watch: {
            filter(searchTerm) {
                this.search = searchTerm;
            },
        },
        data() {
            return {
                search: '',
                selectedTab: this.$route.params.inbox,
                mails: [],
                mailStatus: {},
                unreadMails: 5,
                spaceLeft: 0,
                deletedMails: 0,
                createNewMailState: false,
                readMode: false,
                filterArray: [],
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
                        if (!mail.isDeleted && !mail.isSent && mail.isDone) {
                            return this.checkSearchFilter(mail);
                        }
                    } else if (this.selectedTab === 'important') {
                        if (!mail.isDeleted && mail.isImportant) {
                            return this.checkSearchFilter(mail);
                        }
                    } else if (this.selectedTab === 'sent') {
                        if (!mail.isDeleted && !mail.isInbox && mail.isSent) {
                            return this.checkSearchFilter(mail);
                        }
                    } else if (this.selectedTab === 'deleted') {
                        if (mail.isDeleted) {
                            return this.checkSearchFilter(mail);
                        }
                    } else {
                        this.selectedTab = 'inbox';
                        this.$router.push('/dashboard/mail/inbox/');
                    }
                });
            },
        },
        methods: {
            pushPost(mailId,msg){
                mailService.pushPostByID(mailId,msg)
                    .then(() => {
                        mailService.query()
                            .then(mails => {
                                this.mails = mails;
                            });
                    })
            },
            deletePost(mailID, postID) {
                mailService.deletePostByID(mailID, postID)
                    .then(() => {
                        mailService.query()
                            .then(mails => {
                                this.mails = mails;
                            });
                    })
            },
            updateMailReadStatus(mailID) {
                mailService.updateMailStatus(mailID)
                    .then(() => {
                        mailService.query()
                            .then(mails => {
                                this.mails = mails;
                            });
                    })
            },
            requestDeleteMail(mailID) {
                mailService.deleteMailByID(mailID)
                    .then(() => {
                        mailService.query()
                            .then(mails => {
                                this.mails = mails;
                            });
                    })
            },
            checkSearchFilter(mail) {
                if (mail.subject.match(this.search) ||
                    mail.body.match(this.search) ||
                    mail.name.match(this.search)) {
                    return mail;
                }
            },
            readingToggle() {
                this.readMode = true;
            },
            openNewMail() {
                this.createNewMailState = true;
            },
            closeNewMail() {
                this.createNewMailState = false;
            },
            sendMailAndClose(mail) {
                mailService.pushNewMail(mail);
                mailService.query()
                    .then(mails => {
                        this.mails = mails;
                        this.mailStatus = mailService.getMailStatus();
                        this.$router.push('/dashboard/mail/sent/');
                        this.selectedTab = 'sent';

                    });
                this.createNewMailState = false;
            },
            updateTab(tab) {
                if (!tab) return;
                this.selectedTab = tab;
                this.unreadMails = mailService.getUnreadMails();
                this.deletedMails = mailService.getDeletedMails();
            },


        },
        components: {mailNavigator, mailList, mailNewButton, mailCompose, mailEmpty},
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