<template lang="html">
  <form>
    <span class="md-display-1">Login</span></br></br>
    <md-input-container>
      <md-icon>mail
        <md-tooltip>Digite seu email!</md-tooltip>
      </md-icon>
      <label>Email</label>
      <md-input type="email" v-model="email" required>{{ email }}</md-input>
    </md-input-container>
  
    <md-input-container md-has-password>
      <md-icon>lock
        <md-tooltip>Digite sua senha!</md-tooltip>
      </md-icon>
      <label>Password</label>
      <md-input type="password" v-model="password" required>{{ password }}</md-input>
    </md-input-container>
  
    </br></br><md-button type="submit" class="md-raised md-primary" @click.native="login">Login</md-button>
  </form>
</template>

<script>
  import Vue from 'vue';
  
  export default {
    data: () => ({
      email: '',
      password: ''
    }),
  
    computed: {
  
    },
  
    methods: {
      login() {
        var data = {
          email: this.email,
          password: this.password
        }
  
        if (data.email && data.password) {
          Vue.http.post('http://localhost:3000/users/auth', data).then((res) => {
            if (res.body) {
              console.log(res.body);
            }
          }, (err) => {
            console.log(err)
          });
        } else {
          // Deve preencher os campos!
        }
      }
    }
  }
</script>

<style>
  form {
    margin-top: 150px;
    margin-right: 100px;
    margin-left: 100px;
    margin-bottom: 150px;
    text-align: center;
  }
</style>
