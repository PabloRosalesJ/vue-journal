<template>
  <div class="entry-list-container">

    <div class="px-2 pt-2 mb-2">
      <input 
        type="text"
        class="form-control" 
        placeholder="Buscar entrada"
        v-model="term"
      />
    </div>

    <div class="mt d-flex flex-column">
      <button @click="$router.push({ name: 'entry', params:{ id: 'new' } })"
        class="btn btn-primary mx-3"
      >
        <i class="fa fa-plus-circle"></i>
        Nueva entrada
      </button>
    </div>

    <div class="entry-scrollarea">
      <p v-for="entry in entryesByTerm" :key="entry.id">
        <Entry :entry="entry" />
      </p>
    </div>

  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapGetters } from 'vuex' 

export default {
  components:{
    Entry: defineAsyncComponent(()=>import('./Entry.vue'))
  },
  computed: {
    ...mapGetters('journal', ['getEntryByTerm']),
    entryesByTerm(){
      return this.getEntryByTerm( this.term )
    }
  },
  data(){
    return {
      term: ''
    }
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