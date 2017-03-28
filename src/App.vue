<template>
  <div id="app">
    <md-toolbar>
      <md-button class="md-icon button" v-on:click.native="toggleSideNav">
        <md-icon>menu</md-icon>
      </md-button>
      <h1 class="md-title">{{ title }}</h1>
    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSideNav">
  
      <md-toolbar class="md-medium">
        <div class="md-toolbar-container">
          <h2 class="md-title">Menu</h2>
        </div>
      </md-toolbar>
  
      <md-list>
        <md-list-item v-if="!isLoggedIn">
          <router-link to="/">Login</router-link>
        </md-list-item>
        <md-list-item v-if="isLoggedIn">
          <router-link to="/" @click.native="logout">Sair</router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>
  
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import bus from './utils/events/bus.js'
  
  export default {
    name: 'App',
  
    data() {
      return {
        title: 'Billify App',
        isLoggedIn: false,
        token: ''
      }
    },
  
    methods: {
      toggleSideNav() {
        this.$refs.leftSideNav.toggle()
      },
      closeSidenav() {
        this.$refs.leftSideNav.close();
      },
      logout() {
        this.isLoggedIn = false;
        this.token = '';
  
        this.closeSidenav();
      }
    },
  
    mounted() {
      bus.$on('userLogin', (token) => {
        this.isLoggedIn = true;
        this.token = token;
      });
    }
  }
</script>

<style>
  
</style>
