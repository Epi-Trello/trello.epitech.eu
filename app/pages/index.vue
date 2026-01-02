<script setup lang="ts">
import BoardsView from '~/components/board/BoardsView.vue'
import TemplatesView from '~/components/board/TemplatesView.vue'
import HomeView from '~/components/board/HomeView.vue'

definePageMeta({
  auth: false
})

const activeTab = ref<'tableaux' | 'modeles' | 'accueil'>('tableaux')

watch(activeTab, (newTab) => {
  console.log('Active tab changed to:', newTab)
}, { immediate: true })
</script>

<template>
  <div class="flex h-screen flex-col bg-slate-900 text-white">
    <BoardHeader />

    <div class="flex flex-1 overflow-hidden">
      <BoardSidebar
        :active-tab="activeTab"
        @update:activeTab="(value) => { activeTab = value; console.log('Received:', value) }"
      />

      <div class="flex flex-1 flex-col overflow-hidden">
        <BoardsView
          v-if="activeTab === 'tableaux'"
          :key="'tableaux'"
        />
        <TemplatesView
          v-else-if="activeTab === 'modeles'"
          :key="'modeles'"
        />
        <HomeView
          v-else-if="activeTab === 'accueil'"
          :key="'accueil'"
        />
      </div>
    </div>
  </div>
</template>
