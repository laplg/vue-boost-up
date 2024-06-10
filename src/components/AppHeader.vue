<script setup lang="ts">
import { useApiClient } from '@/composables/useApiClient'
import { useAuthStore } from '@/stores/auth'
import { mdiGoogle } from '@mdi/js'
import { onMounted, onUnmounted, ref } from 'vue'

const auth = useAuthStore()
const apiClient = useApiClient()

const logout = () => {
  auth.logout()
}

const loginPopup = ref<Window | null>(null)

const loginUrl = `${import.meta.env.VITE_API_URL}/auth/google`
const login = () => {
  loginPopup.value = window.open(
    loginUrl,
    '_blank',
    'location=yes,height=570,width=520,scrollbars=yes,status=yes'
  )
}

const messageHandler = (event: MessageEvent) => {
  if (event.origin !== import.meta.env.VITE_API_URL) return

  loginPopup.value?.close()
  loginPopup.value = null

  auth.authenticate(event.data)
}

onMounted(async () => {
  if (auth.token) {
    try {
      await apiClient.api.usersValidateList()
    } catch (err) {
      auth.logout()
    }
  }
  window.addEventListener('message', messageHandler, false)
})

onUnmounted(() => {
  window.removeEventListener('message', messageHandler, false)
})
</script>

<template>
  <v-app-bar>
    <!-- <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template> -->

    <v-app-bar-title>Todo App</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn
      v-if="!auth.authenticated"
      :prepend-icon="mdiGoogle"
      text="Log in with Google"
      variant="flat"
      color="primary"
      @click="login"
    ></v-btn>
    <v-btn v-else variant="text" @click="logout">Log out</v-btn>
  </v-app-bar>
</template>
