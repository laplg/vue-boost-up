import { Api } from '@/api/api'
import { useAuthStore } from '@/stores/auth'

export function useApiClient() {
  const auth = useAuthStore()
  const apiClient = new Api({
    baseUrl: import.meta.env.VITE_API_URL,
    baseApiParams: { headers: { Authorization: `Bearer ${auth.token}` } }
  })

  return apiClient
}
