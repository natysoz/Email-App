<template>

    <div class="emails-container">
        <router-link @click.native="$emit('updateTab','inbox')" class="nav-bar-btn ripple" to="/dashboard/mail/inbox/" active-class="active-mail-tab">
                <i class="fas fa-inbox nav-bar-icon"></i>
                Inbox <span class="unread">99</span>
        </router-link>

        <router-link @click.native="$emit('updateTab','important')" class="nav-bar-btn ripple" to="/dashboard/mail/important/" active-class="active-mail-tab">
            <i class="fas fa-heart nav-bar-icon"></i>
            Important
        </router-link>

        <router-link @click.native="$emit('updateTab','sent')" class="nav-bar-btn ripple" to="/dashboard/mail/sent/" active-class="active-mail-tab">
            <i class="fas fa-paper-plane nav-bar-icon"></i>
            Sent
        </router-link>

        <router-link @click.native="$emit('updateTab','deleted')" class="nav-bar-btn ripple" to="/dashboard/mail/deleted/" active-class="active-mail-tab">
            <i class="fas fa-trash nav-bar-icon"></i>
            Deleted<span class="unread">99</span>
        </router-link>

    </div>

</template>

<script>
    export default {
        name: "Sidebar",
        props:['unread','deleted'],

        created() {
            let lastPath = this.$route.params;
            this.$emit('updateTab',lastPath);
        },
        data(){
            return{
                mailStatus:this.status,
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
    }

    .emails-container {

        background-color: #03a9f4;

    }

    .emails-container > * {
        align-self: center;
        justify-self: center;
    }

    .emails-container > *:hover {
        cursor: pointer;
        background-color: #ffffff1a;
    }

    .nav-bar-btn {
        color: white;
        display: flex;
        font-size: 1.1rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 130px;
    }

    .nav-bar-icon {
        font-size: 1.65rem;
    }

    .unread{
        color: #ffffff;
    }

</style>