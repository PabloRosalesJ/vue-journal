<template>
  <div class="entry-title d-flex justify-content-between p-2">

    <span class="mx-2">
      <span class="text-muted text-sm">{{ day }} <strong>{{ month }}</strong> {{ yearDay }}</span>
    </span>

    <div>
      <button v-if="entry.id" @click="onDeleteEntry"
        class="btn btn-danger mx-2"
      >
        Borrar <i class="fa fa-trash-alt"></i>
      </button>

      <input 
        @change="loadImage"
        v-show="false"
        ref="imgSelector" 
        type="file"
        accept="image/png, image/jpeg"
      >
      
      <button 
        @click="onSelectImage"
        class="btn btn-primary mx-2"
      >
        Subir foto <i class="fa fa-upload"></i>
      </button>
    </div>

  </div>
  
  <hr>

  <div class="d-flex flex-column px-3 h-75">
      <textarea 
        class="border-0 form-control"
        placeholder="¿Qué sucedió hoy?"
        v-model="entry.text"
      ></textarea>
  </div>

  <Fab @on:click="saveEntry" icon="fa fa-save"/>

  <img 
    v-if="entry.picture && !localImage"
    :src="entry.picture" 
    class="img-thumbnail" 
    alt="image"
  >

  <img 
    v-if="localImage"
    :src="localImage" 
    class="img-thumbnail" 
    alt="image"
  >

</template>

<script>

import Swal from 'sweetalert2'
import getDate from '../helpers/getDate'
import { mapGetters, mapActions } from 'vuex'
import { defineAsyncComponent } from '@vue/runtime-core'

import uploadImage from '@/helpers/uploadImage'

export default {
  components: {
    Fab: defineAsyncComponent(() => import('../components/fab.vue'))
  },

  props: {
    id: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      entry: null,
      localImage: null,
      file: null,
    }
  },

  methods:{
    ...mapActions('journal', ['updateEntries', 'createEntries', 'deleteEntry']),
    loadEntry(){
      
      let entry;

      if (this.id === 'new') {
        entry = {
          text: '',
          date: new Date().getTime()
        }
      } else {
        entry = this.getEntryById( this.id )
        if( !entry ) this.$router.push({ name: 'no-entry' })
      }


      this.entry = entry
    },

    async saveEntry(){

      new Swal({
        title: 'Espere por favor',
        allowOutsideClick: false
      })

      Swal.showLoading()

      const picture = await uploadImage(this.file)
      this.entry.picture = picture

      if ( this.entry.id ) {
        
        this.updateEntries( this.entry )
      } else{
        
        const id = await this.createEntries( this.entry )
        this.$router.push({ name: 'entry', params: {id} })
      }

      this.file = null
      Swal.fire('Guardado', 'Entrada guardada exitosamente', 'success')
    },

    async onDeleteEntry(){

      const { isConfirmed } = await Swal.fire({
        icon: 'question',
        title: '¿Está seguro?',
        text: 'Una vez borrado, no se podrá recuperar',
        showDenyButton: true,
        confirmButtonText: 'Si, estoy seguro'
      })

      if ( isConfirmed ) {

        new Swal({
          title: 'Espere por favor',
          allowOutsideClick: false
        })

        Swal.showLoading()

        await this.deleteEntry(this.entry.id)
        this.$router.push({ name: 'no-entry' })

        Swal.fire('Eliminado', '', 'success')
      }


    },

    loadImage( event ){
      const file = event.target.files[0]

      if ( !file ) {
        
        this.file = null
        this.localImage = null
        return
      }

      this.file = file

      const fr = new FileReader()
      fr.onload = () => this.localImage = fr.result
      fr.readAsDataURL( file )

    },

    onSelectImage(){
      this.$refs.imgSelector.click()
    }
  },

  computed:{
    ...mapGetters('journal', ['getEntryById']),
    day(){
      const { day } = getDate(this.entry.date)
      return day
    },
    month(){
      const { month } = getDate(this.entry.date)
      return month
    },
    yearDay(){
      const { yearDay } = getDate(this.entry.date)
      return yearDay
    },
  },

  created(){
    this.loadEntry()
  },

  watch: {
      id() {
          this.loadEntry()
      }
  }
}
</script>

<style lang="scss" scoped>
textarea{
  height: 70%;

  &:focus {
    outline: none;
  }
}

img{
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
