<template>
  <main class="flex-1 overflow-y-auto bg-slate-900 p-6">
    <div class="mx-auto max-w-4xl">
      <div class="mb-8">
        <h2 class="mb-2 text-2xl font-semibold text-white">
          Bienvenue sur TaskFlow
        </h2>
        <p class="text-slate-400">
          Gérez vos projets efficacement avec notre système de tableaux Kanban
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <UCard class="bg-slate-800/50">
          <template #header>
            <h3 class="text-lg font-semibold text-white">
              Derniers tableaux
            </h3>
          </template>
          <p class="text-slate-400">
            Aucun tableau récent pour le moment
          </p>
        </UCard>

        <UCard class="bg-slate-800/50">
          <template #header>
            <h3 class="text-lg font-semibold text-white">
              Activité récente
            </h3>
          </template>
          <p class="text-slate-400">
            Aucune activité récente
          </p>
        </UCard>
      </div>
    </div>
  </main>
</template>

