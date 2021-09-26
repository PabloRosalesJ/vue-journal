<template>
  <nav class="navbar bg-primary">

    <a href="/" class="navbar-brand text-white">
      <img 
        src="@/assets/logo.png" 
        alt="Vue logo"
        height="24"
        class="d-inline-block align-text-top mx-2">
        {{getUserName}}
    </a>

    <div class="d-flex">
      <button class="btn btn-outline-info mx-2" @click="singOut">
        <i class="fa fa-sign-out-alt"></i>
      </button>
    </div>

  </nav>
</template>

<script>
import useAuth from '../../auth/composables/useAuth'
import { useRouter } from 'vue-router';
export default {
  setup() {

    const route = useRouter()
    const {getUserName, logout} = useAuth()

    const singOut = () => {
      logout()
      route.push({ name:'login' })
    }

    return {
      getUserName,

      singOut
    }
  },
}
</script>

