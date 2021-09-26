<template>
  <span class="login100-form-title p-b-41">
    Ingresar
  </span>
  <form @submit.prevent="register"
    class="login100-form validate-form p-b-33 p-t-5"
  >

    <div class="wrap-input100 validate-input" data-validate = "Username">
      <input v-model="userForm.username" class="input100" type="text" placeholder="Username" required>
      <span class="focus-input100" data-placeholder="&#xe82a;"></span>
    </div>

    <div class="wrap-input100 validate-input" data-validate = "Correo">
      <input v-model="userForm.email" class="input100" type="email" placeholder="Correo" required>
      <span class="focus-input100" data-placeholder="&#xe818;"></span>
    </div>

    <div class="wrap-input100 validate-input" data-validate="Password">
      <input v-model="userForm.password" class="input100" type="password" placeholder="Contraseña" required>
      <span class="focus-input100" data-placeholder="&#xe80f;"></span>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <button class="login100-form-btn" type="submit">
        Registrarse
      </button>

    </div>

    <div class="container-login100-form-btn m-t-32">
        <router-link :to="{ name: 'login' }">¿Ya tienes una cuenta?</router-link>
    </div>
  </form> 
</template>

<script>
import { ref } from 'vue'
import useAuth from '../composables/useAuth'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

export default {
  setup(){
    
    const router = useRouter()
    const { createUser } = useAuth()

    const userForm = ref({
      username: '',
      email: '',
      password: '',
    })

    return {
      userForm,

      register: async () => {
        
        const { ok, message } = await createUser( userForm.value )

        if ( !ok ) return Swal.fire('Error', message, 'error')

        router.push({ name: 'no-entry' })

      }
    }

  }
}
</script>

<style>

</style>