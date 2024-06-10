<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
</script>

<template>
  <v-layout class="flex flex-col min-w-screen min-h-screen">
    <AppSidebar></AppSidebar>

    <v-main class="flex-grow">
      <AppHeader></AppHeader>
      <div class="bg-slate-100 w-full h-full py-8 px-16">
        <slot></slot>
      </div>
    </v-main>
  </v-layout>
</template>
