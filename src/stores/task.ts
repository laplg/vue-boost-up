import type { Task } from '@/api/api'
import { useApiClient } from '@/composables/useApiClient'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTaskStore = defineStore('task', () => {
  const apiClient = useApiClient()

  const todaysTasks = ref<Task[]>([])

  const tasks = ref<Record<number, Task[]>>([])

  const refreshTasks = async (projectId: number) => {
    const tasksFromApi = await apiClient.api.projectsTaskDetail(projectId)

    tasks.value[projectId] = tasksFromApi
  }

  const refreshTodaysTasks = async () => {
    const tasks = await apiClient.api.viewTodayList()

    todaysTasks.value = tasks
  }

  return { tasks, refreshTasks, todaysTasks, refreshTodaysTasks }
})
