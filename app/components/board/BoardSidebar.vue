<script setup lang="ts">
defineProps<{
  activeTab: 'tableaux' | 'modeles' | 'accueil'
}>()

const emit = defineEmits<{
  'update:activeTab': [value: 'tableaux' | 'modeles' | 'accueil']
}>()

function setActiveTab(tab: 'tableaux' | 'modeles' | 'accueil') {
  emit('update:activeTab', tab)
  console.log('Tab changed to:', tab)
}
</script>

<template>
  <aside class="w-64 border-r border-slate-800 bg-slate-900 p-4">
    <div class="mb-6 flex items-center gap-2 px-2">
      <div class="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-sky-500 to-indigo-600 text-sm font-bold text-white">
        TF
      </div>
      <span class="text-lg font-semibold">TaskFlow</span>
    </div>

    <nav class="space-y-1">
      <button
        type="button"
        :class="[
          'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition',
          activeTab === 'tableaux'
            ? 'bg-slate-800 text-white'
            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
        ]"
        @click="setActiveTab('tableaux')"
      >
        <svg
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
          />
        </svg>
        Tableaux
      </button>
      <button
        type="button"
        :class="[
          'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition',
          activeTab === 'modeles'
            ? 'bg-slate-800 text-white'
            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
        ]"
        @click="setActiveTab('modeles')"
      >
        <svg
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v9a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 13a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z"
          />
        </svg>
        Modèles
      </button>
      <button
        type="button"
        :class="[
          'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition',
          activeTab === 'accueil'
            ? 'bg-slate-800 text-white'
            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
        ]"
        @click="setActiveTab('accueil')"
      >
        <svg
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        Accueil
      </button>
    </nav>

    <div class="mt-8">
      <p class="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
        Espaces de travail
      </p>
      <div class="flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-2.5">
        <div class="flex h-8 w-8 items-center justify-center rounded bg-emerald-500 text-sm font-bold text-white">
          E
        </div>
        <div class="flex-1">
          <p class="text-sm font-semibold text-white">
            Espace de travail Trello
          </p>
        </div>
        <svg
          class="h-4 w-4 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  </aside>
</template>

