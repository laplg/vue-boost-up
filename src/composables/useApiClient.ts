import { Api } from '@/api/api'

export function useApiClient() {
  const apiClient = new Api({ baseUrl: process.env.VITE_API_URL })
}
