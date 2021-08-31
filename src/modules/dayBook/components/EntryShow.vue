<template>
  <div class="entry-title d-flex justify-content-between p-2">

    <span class="mx-2">
      <span class="text-muted">29</span> -
      <span class="text-muted">Agoto</span> - 
      <span class="text-muted">2021</span>
    </span>

    <div>
      <div class="btn btn-danger mx-2">
        Borrar <i class="fa fa-trash-alt"></i>
      </div>
      <div class="btn btn-primary mx-2">
        Subir foto <i class="fa fa-upload"></i>
      </div>
    </div>

  </div>
  
  <hr>

  <div class="d-flex flex-column px-3 h-75">
      <textarea 
        class="border-0 form-control"
        placeholder="¿Qué sucedió hoy?"
        ></textarea>
  </div>

  <Fab icon="fa fa-save"/>

  <img class="img-thumbnail" 
    src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
    alt=""
  >

</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'

export default {
  components: {
    Fab: defineAsyncComponent(() => import('./fab.vue'))
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
