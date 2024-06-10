<script setup lang="ts">
import TaskList from '@/components/Task/TaskList.vue'
import { useProjectStore } from '@/stores/project'
import { useTaskStore } from '@/stores/task'
import { mdiPlus, mdiFormatListChecks } from '@mdi/js'
import { computed, onMounted } from 'vue'
import { ref } from 'vue'

const taskStore = useTaskStore()
const projectStore = useProjectStore()

const todaysTasks = computed(() => taskStore.todaysTasks.filter((task) => !task.completed))
const addingTask = ref(false)

const refreshTasks = async () => {
  addingTask.value = false
  await projectStore.refreshProjects()
  await taskStore.refreshTodaysTasks()
}

const onTasksUpdated = async () => {
  await refreshTasks()
}

onMounted(async () => {
  await refreshTasks()
})
</script>

<template>
  <div class="max-w-screen-md mx-auto">
    <v-empty-state
      v-if="todaysTasks.length <= 0 && !addingTask"
      title="What do you need to get done today?"
      text="By default, tasks added here will be due today. Click + to add a task."
      :icon="mdiFormatListChecks"
    >
      <template v-slot:actions>
        <v-btn color="primary" :prepend-icon="mdiPlus" text="Add task" @click="addingTask = true" />
      </template>
    </v-empty-state>

    <TaskList
      :tasks="todaysTasks"
      :show-add-task="addingTask"
      @updated="onTasksUpdated"
      show-project
    ></TaskList>
  </div>
</template>
