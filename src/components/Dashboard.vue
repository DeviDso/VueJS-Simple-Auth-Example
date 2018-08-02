<template>
  <div>
     <h1>{{welcome}}</h1>
     {{ companyList}}
     <br>
     <button type="button" @click="logout()">Logout</button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Dashboard',
  data () {
    return {
      welcome: 'Welcome to our dashboard!',
      companyList: []
    }
},
mounted(){
    var app = this

    this.axios.get('company/list').then( res => {
        console.log(res)
        app.companyList = res.data.payload
    }).catch( err => {
        console.log(err)
    })
},
methods:{
    logout(){
        localStorage.setItem('token', '')
        localStorage.setItem('token-exp', '')

        this.$router.push('/')
    }
}
}
</script>
