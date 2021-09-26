<template>
  <h1 v-if="getStatus === 'authenticating'">{{ getStatus }}</h1>
  <router-view v-else/>
</template>

<script>
import useAuth from './modules/auth/composables/useAuth'

export default {
  setup() {

    const { getStatus, checkAuth } = useAuth()
    checkAuth()

    return {
      getStatus
    }
  },
}
</script>