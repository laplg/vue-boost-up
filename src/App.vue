<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <MainLayout>
      <RouterView />
    </MainLayout>
  </v-app>
</template>
