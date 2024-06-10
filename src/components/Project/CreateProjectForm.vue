<script setup lang="ts">
import type { ProjectCreation } from '@/api/api'
import { ViewType } from '@/models/ViewType'
import { useApiClient } from '@/composables/useApiClient'
import { useProjectStore } from '@/stores/project'
import { ref } from 'vue'
import { mdiMenu, mdiViewDashboard } from '@mdi/js'

const apiClient = useApiClient()
const projectStore = useProjectStore()

const emit = defineEmits<{
  submitted: []
  cancelled: []
}>()

const loading = ref(false)

const newProject = ref<ProjectCreation>({ name: '', view: ViewType.Dashboard })

const submit = async () => {
  loading.value = true
  await apiClient.api.projectsUpdate(newProject.value)
  loading.value = false
  projectStore.refreshProjects()
  emit('submitted')
}
</script>

<template>
  <v-card>
    <v-card-title>Add project</v-card-title>
    <v-form @submit.prevent="submit">
      <v-card-text>
        <v-text-field
          v-model="newProject.name"
          label="Name"
          density="compact"
          variant="plain"
        ></v-text-field>
        <v-btn-toggle
          title="View type"
          v-model="newProject.view"
          variant="outlined"
          mandatory
          divided
        >
          <v-btn text="List" :value="ViewType.List" :prepend-icon="mdiMenu"></v-btn>
          <v-btn
            text="Dashboard"
            :value="ViewType.Dashboard"
            :prepend-icon="mdiViewDashboard"
          ></v-btn>
        </v-btn-toggle>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn type="button" text="Cancel" variant="tonal" @click="emit('cancelled')"></v-btn>
        <v-btn
          type="submit"
          :loading="loading"
          text="Add project"
          color="primary"
          variant="flat"
        ></v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
