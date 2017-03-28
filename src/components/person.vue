<template lang="html">
  <md-tabs md-centered>
    <md-tab md-label="Perfil" md-icon="perm_identity">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
    </md-tab>
  
    <md-tab md-label="Contas" md-icon="attach_money">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
    </md-tab>
  
    <md-tab md-label="Minha Casa" md-icon="home">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
    </md-tab>
  
    <md-tab md-label="Configurações" md-icon="settings">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
    </md-tab>
  </md-tabs>
</template>

<script>
  export default {
    name: 'Person',
  
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
      getUserName: () => {}
    }
  }
</script>

<style>
  
</style>
