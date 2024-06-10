<script setup lang="ts">
import { ref, watch } from 'vue'
import { mdiFlag } from '@mdi/js'
import { useApiClient } from '@/composables/useApiClient'
import { type Project, type TaskCreation } from '@/api/api'
import { onMounted } from 'vue'
import { useProjectStore } from '@/stores/project'
import { priorities } from '@/models/priorities'

const projectStore = useProjectStore()

const props = defineProps<{
  initialProjectId?: number
  variant?: NonNullable<'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'>
  color?: string
}>()

const variant = props.variant ?? 'outlined'

const emit = defineEmits<{
  submitted: []
  cancelled: []
}>()

const newTask = ref<TaskCreation>({
  title: '',
  description: '',
  dueDate: '',
  priority: priorities.at(-1)!.value,
  projectId: props.initialProjectId ?? 0
})

const dueDate = ref(new Date())
const loading = ref(false)

watch(
  dueDate,
  () => {
    newTask.value.dueDate = dueDate.value.toString()
  },
  { immediate: true }
)

const apiClient = useApiClient()
const projects = ref<Project[]>([])

const submit = async () => {
  loading.value = true
  await apiClient.api.projectsTasksUpdate(newTask.value.projectId!, newTask.value)
  loading.value = false
  emit('submitted')
}

onMounted(async () => {
  await projectStore.refreshProjects()
  projects.value = projectStore.projects
  if (projects.value.length > 0 && props.initialProjectId === undefined) {
    newTask.value.projectId = projects.value[0].id!
  }
})
</script>

<template>
  <v-card :variant="variant" :color="props.color">
    <v-form @submit.prevent="submit">
      <v-card-text>
        <v-text-field
          label="Task name"
          placeholder="Task name"
          v-model="newTask.title"
          variant="plain"
          density="compact"
        ></v-text-field>
        <v-text-field
          label="Task description"
          placeholder="Task description"
          v-model="newTask.description"
          variant="plain"
          density="compact"
        ></v-text-field>
        <div class="grid grid-cols-4 gap-2">
          <v-date-input
            color="primary"
            label="Due date"
            placeholder="Due date"
            v-model="dueDate"
            variant="outlined"
            density="compact"
          />
          <v-select
            :items="priorities"
            v-model="newTask.priority"
            label="Priority"
            placeholder="Priority"
            variant="outlined"
            density="compact"
          >
            <template v-slot:item="{ item, props }">
              <v-list-item :title="item.title" v-bind="props">
                <template v-slot:prepend>
                  <v-icon :icon="mdiFlag" :color="item.raw.color" />
                </template>
              </v-list-item>
            </template>

            <template v-slot:selection="{ item }">
              <div class="flex flex-row gap-2">
                <span>
                  <v-icon :icon="mdiFlag" :color="item.raw.color" />
                  {{ item.title }}
                </span>
              </div>
            </template>
          </v-select>
        </div>
      </v-card-text>
      <v-divider color="blue-grey-darken-4"></v-divider>
      <v-card-actions>
        <v-select
          :items="projects"
          v-model="newTask.projectId"
          item-value="id"
          item-title="name"
          variant="outlined"
          density="compact"
          hide-details
          max-width="10rem"
        ></v-select>
        <v-spacer></v-spacer>
        <v-btn type="button" text="Cancel" variant="tonal" @click="emit('cancelled')"></v-btn>
        <v-btn
          type="submit"
          :loading="loading"
          text="Add task"
          color="primary"
          variant="flat"
        ></v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
