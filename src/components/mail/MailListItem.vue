<template>

    <router-link @click.native="$emit('update',mail._id)"
                 :to="mail._id" tag="div" class="mail-logo"
                 :class="{ unread: !mail.isRead}">
        <div class="logo flex" :style="{background}">
            {{mail.name | first-char}}
        </div>
        <div class="mail-info">
            <div class="mail-title">{{mail.name }} <span class="date">{{dateComputed}}</span></div>
            <div>{{mail.subject | snipped}}</div>
        </div>
        <div class="delete-item"
             v-on:click.stop.prevent="$emit('delete',mail._id)">
            <i class="fas fa-trash btn"></i></div>
    </router-link>

</template>

<script>
    export default {
        name: "MailListItem",
        props: ["mail"],
        created() {
            this.itemWasRead = !this.mail.isRead;
        },
        data() {
            return {
                background: this.randomColor(),
                itemWasRead: '',
                date: '',
            }
        },
        computed: {
            dateComputed() {
                var date = new Date(this.mail.timestamp);
                var hour = date.getHours()
                var mins = date.getMinutes()
                var day = date.getDay()
                var month = date.getMonth()
                var year = date.getFullYear()
                return this.date = day + '/' + month + '/' + year + ' at ' + hour + ':' + mins;
            }
        },
        methods: {
            randomColor() {
                return 'hsla(' + (Math.random() * 360) + ', 50%, 60%, 10)';
            },
        },
    }
</script>

<style scoped>


    ul {
        list-style: none;
    }

    .date {
        align-self: end;
        color: #fbfffc;
        font-size: .8rem;
    }

    .delete-item {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
    }

    .delete-item:hover {
        color: #fbfffc;

    }

    .unread {
        background-color: #03a9f41c;
        font-weight: 900;
        color: #f6f6f6;
    }


    .emails-container > * {
        align-self: center;
        justify-self: center;
    }

    .logo {
        color: #ffffff;
        font-weight: 900;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background-color: white;
        justify-self: center;
        align-self: center;
    }

    .mail-container {
        position: relative;
        width: 100%;

    }

    .mail-logo {
        display: grid;
        padding: 10px 0px 10px 0;
        height: 90px;
        grid-template-columns: 1fr 3fr 0.35fr;
        grid-template-rows: 1fr;
    }

    .mail-logo:hover {
        cursor: pointer;
        background-color: #303030;
    }

    .mail-info {
        font-size: 1rem;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        grid-area: 1 / 2 / 2 / 3;
    }

    .mail-title {
        font-weight: bold;
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }
</style>