<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>
  <Fab 
    @on:click="newEntry"
  />
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'

export default {
  components:{
    Fab: defineAsyncComponent(() => import(/* webpackChunkName: "fab" */ '../components/Fab.vue'))
  },
  methods: {
    newEntry(){
      this.$router.push({ name: 'entry', params:{ id: 'new' } })
    }
  },
}
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>