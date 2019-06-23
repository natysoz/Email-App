<template>
    <div class="home">
        <h1 class="title">NATYSUS 2.0</h1>
        <h2>Choose App to begin with...</h2>
        <div class="select-project">

            <router-link class="email-character" to="/dashboard/mail/inbox/">
                <mail-character/>
                <span class="replies">Click me im the best!</span>
                <span class="comment">Yheaaa!</span>
            </router-link>

            <router-link class="email-character" to="/dashboard/todo/">
                <todo-character/>
                <span class="replies">No No Click me!!</span>
                <span class="comment">Let's Go!</span>
            </router-link>


        </div>
    </div>
</template>

<script>

    import mailCharacter from '../components/elements/TheMailCharacter'
    import todoCharacter from '../components/elements/TheTodoCharacter'

    export default {
        name: 'home',
        components: {
            mailCharacter,
            todoCharacter
        },
    }
</script>

<style scoped>

    .title {
        color: #ffffff;
        font-size: 70px;
    }

    a {
        text-decoration: none;
        color: white;
    }

    .email-character .comment {
        display: none;
    }

    .email-character:hover .replies {
        display: none;
    }

    .email-character:hover .comment {
        display: inline;
    }

    .home {
        margin: 150px auto;
        color: rgba(255, 255, 255, 0.5);
        text-align: center;
        max-width: 1000px;
    }

    .select-project {
        font-size: 2rem;
        padding-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

</style>