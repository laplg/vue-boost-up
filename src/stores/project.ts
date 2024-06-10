import type { Project } from '@/api/api'
import { useApiClient } from '@/composables/useApiClient'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectStore = defineStore('project', () => {
  const apiClient = useApiClient()
  const projects = ref<Project[]>([])

  const refreshProjects = async () => {
    const newProjects = await apiClient.api.projectsList()
    projects.value = newProjects
  }

  return { projects, refreshProjects }
})
