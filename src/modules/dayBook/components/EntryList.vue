<template>
  <div class="entry-list-container">

    <div class="px-2 pt-2 mb-2">
      <input 
        type="text"
        class="form-control" 
        placeholder="Buscar entrada"
      />
    </div>

    <div class="entry-scrollarea">
      <p v-for="item in 50" :key="item">
        <Entry />
      </p>
    </div>

  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'

export default {
  components:{
    Entry: defineAsyncComponent(()=>import('./Entry.vue'))
  }
}
</script>

<style lang="scss" scoped>
  .entry-list-container{
    border-right: 1px solid #5c5c5c5c;
    height: calc( 100vh - 56px );
  }

  .entry-scrollarea{
    height: calc( 100vh - 110px );
    overflow: scroll;
  }
</style>