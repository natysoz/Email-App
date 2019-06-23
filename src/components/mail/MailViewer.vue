<template>
    <section class="mail-card-container overflow">
        <section class="mail-card-container width">
            <div class="mail-title">
                <h1>{{selectedMail.subject}}</h1>
            </div>
            <div class="mail-item-card">
                <div class="mail-card-head">
                        <div class="logo flex" :style="{background}">
                            {{selectedMail.name | first-char}}
                        </div>
                    <div>{{ selectedMail.name}}</div>
                    <div>{{ selectedMail.sentfrom}}</div>
                    <div>{{ dateComputed(selectedMail.timestamp)}}</div>
                </div>

                <div class="mail-card-body">
                    <p>{{ selectedMail.body}}</p>
                </div>

                <div class="mail-card-controller">
                    <div class="btn"><i class="fas fa-reply "></i></div>
                    <div class="btn"><i class="fas fa-arrow-right "></i></div>
                </div>
            </div>
            <div :key="replay.name" v-for="replay in selectedMail.replays">
                <div class="mail-title">
                    <h1>{{replay.subject}}</h1>
                </div>
                <div class="mail-item-card">
                    <div class="mail-card-head">
                        <div class="replay-logo flex" :style="{background}">
                            {{replay.name | first-char}}
                        </div>
                        <div>{{ replay.name}}</div>
                        <div>{{ replay.sentfrom}}</div>
                        <div>{{ dateComputed(replay.timestamp)}}</div>
                    </div>

                    <div class="mail-card-body">
                        <p>{{ replay.body}}</p>
                    </div>

                    <div class="mail-card-controller">
                        <div class="btn"><i class="fas fa-reply "></i></div>
                        <div class="btn"><i class="fas fa-arrow-right "></i></div>

                        <div class="btn last"><i class="fas fa-trash btn"></i></div>
                    </div>
                </div>
            </div>

        </section>
    </section>
</template>

<script>
    import mailService from '../../assets/js/utils/mail-services'

    export default {
        name: "mailViewer",
        watch: {
            '$route'() {
                this.mailListItemId = this.$route.params.id;
                this.selectedMail = this.mails.find(mail => mail._id === this.mailListItemId);
            }
        },
        mounted() {
            mailService.query()
                .then(mails => {
                    this.mails = mails;
                    this.selectedMail = this.mails.find(mail => mail._id === this.mailListItemId);
                });
        },
        methods:{
            dateComputed(time) {
                var date = new Date(time);
                var hour = date.getHours()
                var mins = date.getMinutes()
                var day = date.getDay()
                var month = date.getMonth()
                var year = date.getFullYear()
                return this.date = day + '/' + month + '/' + year + ' at ' + hour + ':' + mins;
            }
        },
        data() {
            return {
                mails: [],
                mailListItemId: this.$route.params.id,
                noMailSelected: false,
                selectedMail: {},
            }
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
    .replay-logo{
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

    .logo{
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
        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    }

    .mail-item-card > * {
        margin: 20px;

    }


</style>