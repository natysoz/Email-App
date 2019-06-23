<template>
    <section class="mail-card-container overflow">
        <section class="mail-card-container width">
            <div class="mail-title">
                <h1>{{selectedMail.subject}}</h1>
            </div>
            <div class="mail-item-card">
                <div class="mail-card-head">
                    <div>{{ selectedMail.name}}</div>
                    <div>{{ selectedMail.sentfrom}}</div>
                    <div>{{ selectedMail.sendAt}}</div>
                </div>

                <div class="mail-card-body">
                    <p>{{ selectedMail.body}}</p>
                </div>

                <div class="mail-card-controller">
                    <div class="btn"><i class="fas fa-reply "></i></div>
                    <div class="btn"><i class="fas fa-arrow-right "></i></div>

                    <div class="btn last"><i class="fas fa-trash btn"></i></div>
                </div>
            </div>
            <div :key="replay.name" v-for="replay in selectedMail.replays">
                <div>{{replay}}</div>
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
        grid-template-columns: repeat(3, 1fr);

        width: 95%;
        height: 30%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.18);

    }

    .mail-item-card {
        background-color: #424242;
        width: 95%;
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