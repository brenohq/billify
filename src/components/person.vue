<template lang="html">
  <md-card>
    <md-card-media-cover md-text-scrim>
      <md-card-media md-ratio="16:9">
        <img src="../assets/logo.png">
      </md-card-media>
  
      <md-card-area>
        <md-card-header>
          <div class="md-title">{{ id }}</div>
          <div class="md-subhead">{{ name }}</div>
        </md-card-header>
  
        <md-card-actions>
          <md-button @click.native="getUserName">Clique Aqui!</md-button>
        </md-card-actions>
  
      </md-card-area>
  
    </md-card-media-cover>
  </md-card>
</template>

<script>

  export default {
    data() {
      return {
        id: 0,
        name: 'Breno'
      }
    },
    computed: {
      now() {
        return Date.now()
      }
    },
    methods: {
      increment: function() {
        return this.id++
      },
      getUserName: () => {
      }
    }
  }
</script>

<style>
  
</style>
