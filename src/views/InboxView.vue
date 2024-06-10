<script setup lang="ts">
import type { Task } from '@/api/api'
import TaskList from '@/components/Task/TaskList.vue'
import { useProjectStore } from '@/stores/project'
import { useTaskStore } from '@/stores/task'
import { mdiFormatListChecks, mdiPlus } from '@mdi/js'
import { watchEffect } from 'vue'
import { computed, onMounted, ref } from 'vue'

const projectStore = useProjectStore()
const taskStore = useTaskStore()

const inboxId = computed(() => projectStore.projects.find((project) => project.defaultInbox)?.id)
const tasks = ref<Task[]>([])
const addingTask = ref(false)

watchEffect(async () => {
  if (inboxId.value) {
    tasks.value = taskStore.tasks[inboxId.value].filter((task) => !task.completed) ?? []
  }
})

const onTasksUpdated = async () => {
  if (inboxId.value) {
    taskStore.refreshTasks(inboxId.value)
  }
}

onMounted(() => {
  projectStore.refreshProjects()
  if (inboxId.value) {
    taskStore.refreshTasks(inboxId.value)
  }
})
</script>

<template>
  <div class="max-w-screen-md mx-auto">
    <v-empty-state
      v-if="tasks.length <= 0 && !addingTask"
      title="Your peace of mind is priceless"
      text="Well done! All your tasks are organized in the right place."
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
      :project-id="inboxId"
      :show-add-task="addingTask"
      @updated="onTasksUpdated"
    ></TaskList>
  </div>
</template>
