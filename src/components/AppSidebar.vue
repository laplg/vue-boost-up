<script setup lang="ts">
import { useApiClient } from '@/composables/useApiClient'
import { useAuthStore } from '@/stores/auth'
import { useProjectStore } from '@/stores/project'
import CreateProjectView from '@/components/Project/CreateProjectForm.vue'
import CreateTaskView from '@/components/Task/CreateTaskForm.vue'
import {
  mdiChevronDown,
  mdiCalendar,
  mdiPlusCircle,
  mdiPlus,
  mdiDotsHorizontal,
  mdiDelete,
  mdiInbox
} from '@mdi/js'
import { ref } from 'vue'
import { computed } from 'vue'
import { onMounted } from 'vue'
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const apiClient = useApiClient()
const auth = useAuthStore()
const projectStore = useProjectStore()
const router = useRouter()
const route = useRoute()

const selectedPath = ref(route.path)

const openedGroups = ref(['Projects'])

watch(
  () => route.path,
  () => {
    selectedPath.value = route.path
  }
)

const onNavSelect = ({ id }: { id: unknown }) => {
  router.push(id as string)
}

const deleteProject = async (id: number) => {
  await apiClient.api.projectsDelete(id)
  await projectStore.refreshProjects()
}

onMounted(async () => {
  await projectStore.refreshProjects()
})

const projects = computed(() => projectStore.projects.filter((project) => !project.defaultInbox))
</script>

<template>
  <v-navigation-drawer v-if="auth.authenticated">
    <v-list>
      <v-list-item>
        <div class="inline-block space-x-2 p-2 cursor-pointer">
          <v-avatar size="x-small" :image="auth.credentials?.photo" />
          <span class="text-sm align-middle">
            {{ auth.credentials?.name.givenName }}
            <v-icon :icon="mdiChevronDown" size="x-small" />
          </span>
        </div>
        <v-menu activator="parent">
          <v-list density="compact">
            <v-list-item class="cursor-pointer">
              <v-list-item-title>Log out</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list
      :selected="[selectedPath]"
      select-strategy="leaf"
      open-strategy="multiple"
      mandatory
      density="compact"
      color="primary"
      nav
      @click:select="onNavSelect"
      v-model:opened="openedGroups"
    >
      <v-list-item
        class="cursor-pointer"
        :prepend-icon="mdiPlusCircle"
        base-color="primary"
        title="Add task"
      >
        <v-dialog activator="parent" class="max-w-screen-md">
          <template v-slot:default="{ isActive }">
            <CreateTaskView
              variant="elevated"
              @cancelled="isActive.value = false"
              @submitted="isActive.value = false"
            />
          </template>
        </v-dialog>
      </v-list-item>
      <v-list-item :prepend-icon="mdiInbox" title="Inbox" value="/inbox"> </v-list-item>
      <v-list-item :prepend-icon="mdiCalendar" title="Today" value="/today"> </v-list-item>
      <v-list-group value="Projects">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Projects"> </v-list-item>
        </template>
        <v-list-item class="cursor-pointer" title="Add project" :prepend-icon="mdiPlus">
          <v-dialog activator="parent" class="max-w-screen-sm">
            <template v-slot:default="{ isActive }">
              <CreateProjectView
                @cancelled="isActive.value = false"
                @submitted="isActive.value = false"
              />
            </template>
          </v-dialog>
        </v-list-item>
        <v-list-item
          v-for="project of projects"
          :key="project.id"
          :title="project.name"
          :value="`/projects/${project.id}`"
        >
          <template v-slot:append>
            <v-btn density="compact" variant="plain" :icon="mdiDotsHorizontal" @click.stop>
              <v-icon :icon="mdiDotsHorizontal"> </v-icon>
              <v-menu activator="parent">
                <v-list>
                  <v-list-item
                    base-color="error"
                    :prepend-icon="mdiDelete"
                    @click="deleteProject(project.id!)"
                    >Delete</v-list-item
                  >
                </v-list>
              </v-menu>
            </v-btn>
          </template>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>
