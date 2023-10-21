<template>
    <div v-if="username">
        <div class="chat">
            <h2>Чат</h2>
            <div class="text" v-for='message in messages' :key="message.id">
                {{message.user}}: {{message.text}}
            </div>
            <div v-show="emptyMsg" class="empty">Текущих сообщений нет</div>
        </div>

        <input v-model='newMessage' placeholder="Введите сообщение"/>
        <button @click="sendMessage">Отправить</button>
        <button @click="delMessage">Удалить</button>
    </div>

    <div v-else>
        для авторизации порейти по <router-link :to='{name: "Home"}'>ссылке</router-link>
    </div>
</template>

<script>
export default{
    name: 'ChatComp',
    data(){
        return{
            messages: [],
            newMessage: '',
            emptyMsg: true,
            username: localStorage.getItem('username')
        }
    },
    computed(){
        localStorage.setItem('username', this.$route.query.usename)
    },
    methods: {
        sendMessage(){
            if(this.newMessage !== ''){
                this.emptyMsg = false
                this.messages.push({id: new Date().getTime(), text: this.newMessage, user: this.username})
                this.saveChatRecords(),
                this.newMessage = ''
            } else {
                alert('Введите сообщение')
            }
        },
        saveChatRecords(){
            const records = this.messages
            localStorage.setItem('messages_${this.username}', JSON.stringify(records))
        },
        loadChatRecords(){
            const records = JSON.parse(localStorage.getItem('messages_${this.username}'))
            if(records){
                this.messages = records
                this.emptyMsg = false
            }
        },
        delMessage(){
            this.messages = []
            localStorage.removeItem('messages_${this.username}', JSON.stringify(this.messages))
            this.emptyMsg = true
        }

    },
    created(){
        this.loadChatRecords()
    }

}
</script>