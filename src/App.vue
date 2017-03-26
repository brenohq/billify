<template>
  <div class="phone-viewport">
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
        <md-list-item>
          <router-link to="/person">Perfil</router-link>
        </md-list-item>
        <md-list-item>
          <router-link to="/houses">Minhas Repúblicas</router-link>
        </md-list-item>
        <md-list-item>
          <router-link to="/bills">Minhas Contas</router-link>
        </md-list-item>
        <md-list-item>
          <router-link to="/logout">Sair</router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>
    
      <md-row>
        <router-view></router-view>
      </md-row>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        title: 'Billify App'
      }
    },
    methods: {
      toggleSideNav () {
        this.$refs.leftSideNav.toggle()
      }
    }
  }
</script>

<style>
  
</style>
