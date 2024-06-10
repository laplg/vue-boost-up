<script setup lang="ts">
import type { Project, Task } from '@/api/api'
import { useApiClient } from '@/composables/useApiClient'
import { priorities } from '@/models/priorities'
import { useProjectStore } from '@/stores/project'
import { mdiDelete, mdiDotsHorizontal, mdiInbox, mdiPound } from '@mdi/js'
import { watchEffect } from 'vue'
import { ref } from 'vue'

const apiClient = useApiClient()
const projectStore = useProjectStore()

const props = defineProps<{
  task: Task
  showProject?: boolean
  disabled?: boolean
}>()

const project = ref<Project | undefined>(undefined)

const findProjectById = (id: number) => {
  return projectStore.projects.find((project) => project.id === id)
}

watchEffect(() => {
  project.value = findProjectById(props.task.projectId!)
})

const completionStatus = ref(props.task.completed ?? false)

const emit = defineEmits<{
  completed: []
  deleted: []
}>()

const updateCompletionStatus = async (status: boolean | null) => {
  if (status) {
    await completeTask()
  }
}

const completeTask = async () => {
  await apiClient.api.projectsTasksCompleteCreate(props.task.projectId!, props.task.id!)
  emit('completed')
}

const deleteTask = async () => {
  await apiClient.api.projectsTasksDelete(props.task.projectId!, props.task.id!)
  emit('deleted')
}

const getColorOfPriority = (priorityValue: number) => {
  return priorities.find((priority) => priority.value === priorityValue)?.color
}
</script>

<template>
  <div class="flex flex-row gap-2 px-4 py-2 items-start">
    <v-checkbox
      v-model="completionStatus"
      density="compact"
      :base-color="getColorOfPriority(task.priority!)"
      :color="getColorOfPriority(task.priority!)"
      hide-details
      @update:model-value="updateCompletionStatus"
      :disabled="props.disabled"
    ></v-checkbox>
    <div class="flex flex-col flex-grow">
      <div class="">
        {{ props.task.title }}
      </div>
      <div class="text-sm text-grey-darken-2">
        {{ props.task.description }}
      </div>
      <div v-if="showProject" class="text-sm text-grey-darken-2 self-end justify-self-end">
        {{ project?.name ?? '' }}
        <v-icon :icon="project?.defaultInbox ? mdiInbox : mdiPound" size="small"></v-icon>
      </div>
    </div>

    <v-btn density="compact" variant="plain" :icon="mdiDotsHorizontal" :disabled="props.disabled">
      <v-icon :icon="mdiDotsHorizontal" />
      <v-menu activator="parent">
        <v-list :selectable="false" :activatable="false" density="compact">
          <v-list-item
            :prepend-icon="mdiDelete"
            title="Delete"
            base-color="error"
            @click="deleteTask"
          ></v-list-item>
        </v-list>
      </v-menu>
    </v-btn>
  </div>
</template>
