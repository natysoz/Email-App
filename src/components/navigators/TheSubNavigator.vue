<template>
    <nav class="subnav-container emails-container light">

        <router-link to="/dashboard/settings/" active-class="active">
            <div class="section ripple">Settings</div>
        </router-link>

        <router-link to="/dashboard/mail/inbox/" active-class="active">
            <div class="section ripple">Mail</div>
        </router-link>

        <router-link to="/dashboard/todo/" active-class="active">
            <div class="section ripple">Todo</div>
        </router-link>

            <label class="section">
                <input class="input-area" type="text" v-model="search" placeholder="Multi Search here"/>
            </label>

    </nav>
</template>

<script>
    export default {
        name: "Subnav",
        watch:{
          search:function(){
              this.$emit('filtered',this.search);
          }
        },
        data() {
            return {
                search: '',
            }
        },

    }
</script>

<style scoped>
    ::placeholder {
        font-family: 'Barlow', sans-serif;
        color: #f6f6f6;
        font-size: 1.1rem;
        line-height: 100%;
    }


    a {
        text-decoration: none;
    }

    .input-area{
        font-size: 1.3rem;
        color: white;
        padding-left: 20px;
        border: none;
        width: 200px;
        height: 90%;
        background-color: #03a9f4;
        transition: font-size 0.1s;
    }
    .input-area:hover{
        color: white;
        cursor: pointer;
    }

    .section {
        display: flex;
        font-family: Barlow, sans-serif;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: #ececec;
    }

    .subnav-container {
        font-size: 1.3rem;
        width: 100%;
        justify-items: center;
        height: 8vh;
        -webkit-box-align: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #03a9f4;
    }

    .subnav-container > *:hover {
        cursor: pointer;
        color: white;
        background-color: #ffffff1a;

    }

    .subnav-container > * {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 8vh;
        width: 100%;
    }

    .emails-container {
        display: grid;
        grid-template-columns: 1.005fr 2.679fr 1fr 1fr 7fr;
        grid-gap: 0;
    }

</style>