import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

interface AuthResponse {
  displayName: string
  email: string
  id: number
  jwt: string
  name: {
    familyName: string
    givenName: string
  }
  photo: string
}

export const useAuthStore = defineStore('auth', () => {
  const token = ref(sessionStorage.getItem('userToken'))
  const authenticated = computed(() => !!token.value)
  const userDataStorage = sessionStorage.getItem('userData')
  const credentials = ref<AuthResponse | null>(
    userDataStorage ? (JSON.parse(userDataStorage) as AuthResponse) : null
  )
  function authenticate(response: AuthResponse) {
    sessionStorage.setItem('userToken', response.jwt)
    sessionStorage.setItem('userData', JSON.stringify(response))
    token.value = response.jwt
    credentials.value = response
  }

  function logout() {
    sessionStorage.removeItem('userToken')
    token.value = null
  }

  return { token, authenticated, credentials, authenticate, logout }
})
