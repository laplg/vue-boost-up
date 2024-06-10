<script setup lang="ts">
import type { Task } from '@/api/api'
import TaskItem from '@/components/Task/TaskItem.vue'
import CreateTaskView from '@/components/Task/CreateTaskForm.vue'
import { mdiPlus } from '@mdi/js'
import { ref } from 'vue'

const props = defineProps<{
  tasks: Task[]
  projectId?: number
  showProject?: boolean
  showAddTask?: boolean
}>()

const emit = defineEmits<{
  updated: []
}>()

const showAddTask = ref(props.showAddTask)

const onTaskAdded = () => {
  showAddTask.value = false
  emit('updated')
}
</script>

<template>
  <div>
    <template v-for="task of props.tasks" :key="task.id">
      <TaskItem
        :task="task"
        :show-project="props.showProject"
        @completed="emit('updated')"
        @deleted="emit('updated')"
      />
      <v-divider />
    </template>
    <v-btn
      v-if="!showAddTask"
      class="mt-2"
      color="primary"
      variant="text"
      :prepend-icon="mdiPlus"
      text="Add task"
      @click="showAddTask = true"
    ></v-btn>
    <CreateTaskView
      v-if="showAddTask"
      color="blue-grey-darken-4"
      :initial-project-id="props.projectId"
      @submitted="onTaskAdded"
      @cancelled="showAddTask = false"
    ></CreateTaskView>
  </div>
</template>
