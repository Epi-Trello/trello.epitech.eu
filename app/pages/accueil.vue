<script setup lang="ts">
import HomeView from '~/components/board/HomeView.vue'

definePageMeta({
  auth: false
})
</script>

<template>
  <div class="flex h-screen flex-col bg-slate-900 text-white">
    <BoardHeader />

    <div class="flex flex-1 overflow-hidden">
      <BoardSidebar />

      <div class="flex flex-1 flex-col overflow-hidden">
        <HomeView />
      </div>
    </div>
  </div>
</template>

