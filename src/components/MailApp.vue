<template>

    <div>
        <div class="mail-app">
            <mail-navigator v-on:updateTab="updateTab"></mail-navigator>
            <mail-list :mails="filteredMails"></mail-list>
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
    import mailList from './mail/MailList'
    import mailNavigator from './mail/MailNavigator'
    import mailService from '../assets/js/utils/mail-services'

    export default {
        name: "mailApp",
        data() {
            return {
                search: '',
                selectedTab: this.$route.params.inbox,
                mails: [],
                unreadMails:0,
                spaceLeft:0,
            }
        },
        mounted() {
            this.selectedTab = this.$route.params.inbox;
            mailService.query()
                .then(mails=>{
                    this.mails = mails;
                });
        },
        computed: {
            filteredMails() {
                if(!this.mails) return ;
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
            unrealMailCount(){
                return 9;
            }
        },
        methods: {
            updateTab(tab) {
                if (!tab) return;
                this.selectedTab = tab;
            },
        },
        components: {
            mailNavigator,
            mailList,
        },
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