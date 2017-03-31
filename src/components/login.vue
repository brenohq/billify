<template lang="html">
  <md-layout md-align="center" md-gutter>
    <md-layout md-align="center" class="flexbox-container" md-flex-xsmall="80" md-flex-small="70" md-flex-medium="55" md-flex-large="40">
  
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
  
        <md-button type="submit" class="md-raised md-primary">Login</md-button>
      </form>
  
    </md-layout>
  </md-layout>
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
    width: 100%;
    text-align: center;
  }
  
  .flexbox-container {
    height: 90vh;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
  }
</style>
