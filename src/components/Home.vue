<template>
    <div v-if="isAuthenticated">
       <div class="Helloy">Приветсвую вас, уважаемый <b>{{username}}</b></div>
        <div class="ESC">
        <button @click="logout">Выйти</button>
        </div>
    </div>

    <div v-else class="username">
        <label>Введите имя:</label>
        <input v-model="username">
        <button @click="login">Сохранить</button>
    </div>
</template>

<script>
export default{
    name: 'HomePage',
    data (){
        return {
            isAuthenticated: false,
            username: ''
        }
    },
    methods: {
        login(){
            if(this.username !== '') {
                this.isAuthenticated = true
                localStorage.setItem('isAuthenticated', true)
                localStorage.setItem('username', this.username)

                this.$router.push({
                    name: 'Chat',
                    query: { username: this.username}
                })
            } else {
                alert ('Напишите имя')
            }
        },
        logout(){
            this.isAuthenticated = false
            this.username = ''
            localStorage.removeItem('isAuthenticated')
            localStorage.removeItem('username')
        }
    },
    created(){
        if(localStorage.getItem('isAuthenticated')){
            this.isAuthenticated = true
            this.username =  localStorage.getItem('username')
        }
    }
}
</script>

<style>
.Helloy {
    font-family: Comic Sans MS, Comic Sans, cursive;
}
.ESC {
    font-family: Comic Sans MS, Comic Sans, cursive;
}
.username {
    font-family: Comic Sans MS, Comic Sans, cursive;
}

</style>