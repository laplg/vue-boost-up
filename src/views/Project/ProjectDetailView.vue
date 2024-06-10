<script setup lang="ts">
import type { Task } from '@/api/api'
import TaskList from '@/components/Task/TaskList.vue'
import { useProjectStore } from '@/stores/project'
import { useTaskStore } from '@/stores/task'
import { mdiFormatListChecks, mdiPlus } from '@mdi/js'
import { onMounted, ref } from 'vue'
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const taskStore = useTaskStore()
const projectStore = useProjectStore()
const route = useRoute()
const projectId = parseInt(route.params.id as string)
const tasks = ref<Task[]>([])
const addingTask = ref(false)

watchEffect(async () => {
  tasks.value = taskStore.tasks[projectId].filter((task) => !task.completed) ?? []
})

const onTasksUpdated = async () => {
  taskStore.refreshTasks(projectId)
}

onMounted(() => {
  projectStore.refreshProjects()
  taskStore.refreshTasks(projectId)
})
</script>
<template>
  <div class="max-w-screen-md mx-auto">
    <v-empty-state
      v-if="tasks.length <= 0 && !addingTask"
      title="Start small (or dream big)..."
      text="Add your tasks to get started with your project."
      :icon="mdiFormatListChecks"
    >
      <template v-slot:actions>
        <v-btn
          color="primary"
          :prepend-icon="mdiPlus"
          text="Add task"
          @click="addingTask = true"
        /> </template
    ></v-empty-state>

    <TaskList
      v-else
      :tasks="tasks"
      :show-add-task="addingTask"
      :project-id="projectId"
      @updated="onTasksUpdated"
    ></TaskList>
  </div>
</template>
