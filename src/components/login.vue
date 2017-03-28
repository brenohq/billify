<template lang="html">
  <form v-on:submit.prevent="login">
    <span class="md-display-1">Login</span></br>
    </br>
    <md-input-container>
      <md-icon>mail
        <md-tooltip>Digite seu email!</md-tooltip>
      </md-icon>
      <label>Email</label>
      <md-input type="email" v-model="credentials.email" required>{{ credentials.email }}</md-input>
    </md-input-container>
  
    <md-input-container md-has-password>
      <md-icon>lock
        <md-tooltip>Digite sua senha!</md-tooltip>
      </md-icon>
      <label>Password</label>
      <md-input type="password" v-model="credentials.password" required>{{ credentials.password }}</md-input>
    </md-input-container>
  
    </br>
    <div class="md-warn">
      <md-ink-ripple v-if="credentials.error" /> {{ error }}
    </div>
    </br>
  
    <md-button type="submit" class="md-raised md-primary">Login</md-button>
  </form>
</template>

<script>
  import Vue from 'vue';
  import bus from '../utils/events/bus.js'
  
  export default {
    name: 'LoginForm',
  
    data: () => ({
      credentials: {
        email: '',
        password: ''
      },
      error: ''
    }),
  
    computed: {
  
    },
  
    methods: {
      login() {
        var data = {
          email: this.credentials.email,
          password: this.credentials.password
        }
  
        if (data.email && data.password) {
          Vue.http.post('http://localhost:3000/users/auth', data).then((res) => {
            if (res.body.success) {
              var token = res.body.token;
              bus.$emit('userLogin', token);
              this.$router.push('/person');
              return true;
            } else {
              console.log(res.body);
              this.error = res.body.message;
            }
          }, (err) => {
            console.log(err)
            this.error = err;
          });
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
