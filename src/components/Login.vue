<template>
    <div>
        <div v-if="error">
            <h3 style="color: red">{{ errorMsg }}</h3>
        </div>
         <form @submit.prevent="login">
             <label>Username</label>
             <input type="text" v-model="user.user_name" required>
             <label>Password</label>
             <input type="password" v-model="user.password" required>
             <br><br>
             <button type="submit">LOGIN</button>
         </form>
    </div>
</template>

<script>
/* eslint-disable */

export default {
    name: 'Login',
    data () {
        return {
            user:{
                user_name: 'admin',
                password: 'yoo5Iche'
            },
            error: false,
            errorMsg: ''
        }
    },
    methods:{
        login(){
            var app = this

            this.axios.post('auth', app.user).then( res => {
                localStorage.setItem('token', res.data.payload.token)
                localStorage.setItem('token-exp', res.data.payload.exp)
                console.log('Token: ' + localStorage.getItem('token'))
                console.log('Token expiry date: ' + localStorage.getItem('token-exp'))
                this.$router.push('/dashboard')
            }).catch( err => {
                var app = this

                app.errorMsg = err.response.data.error.message
                app.error = true
                console.log(err)
            })
        }
    }
}
</script>
