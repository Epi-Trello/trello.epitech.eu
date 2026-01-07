<template>
  <main class="flex-1 overflow-y-auto bg-slate-900 p-6">
    <div class="mx-auto max-w-7xl">
      <div class="mb-6 flex items-center gap-2">
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
            d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v9a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 13a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z"
          />
        </svg>
        <h2 class="text-lg font-semibold text-white">
          Modèles de tableaux
        </h2>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <UCard
          v-for="template in templates"
          :key="template.id"
          class="group cursor-pointer bg-slate-800/50 transition hover:bg-slate-800/70"
        >
          <div class="mb-3 h-32 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600" />
          <h3 class="mb-1 text-sm font-semibold text-white">
            {{ template.name }}
          </h3>
          <p class="text-xs text-slate-400">
            {{ template.description }}
          </p>
        </UCard>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const templates = ref([
  {
    id: '1',
    name: 'Gestion de projet',
    description: 'Template pour suivre vos projets'
  },
  {
    id: '2',
    name: 'Scrum',
    description: 'Template adapté pour les sprints'
  },
  {
    id: '3',
    name: 'Suivi des bugs',
    description: 'Template pour tracker les bugs'
  }
])
</script>

