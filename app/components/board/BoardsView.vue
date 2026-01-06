<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

interface Board {
  id: string
  title: string
  cover: string
  isPrivate: boolean
  members: string[]
  memberCount: number
}

const boards = ref<Board[]>([
  {
    id: 'example-1',
    title: 'Exemple de tableau',
    cover: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
    isPrivate: true,
    members: ['MB', 'AP'],
    memberCount: 2
  }
])
const isModalOpen = ref(false)
const isLoading = ref(false)

const formSchema = z.object({
  name: z.string().min(1, 'Le nom est requis').max(255, 'Le nom est trop long'),
  description: z.string().max(500, 'La description est trop longue').optional()
})

type FormSchema = z.output<typeof formSchema>

const formState = reactive<Partial<FormSchema>>({
  name: '',
  description: ''
})

// Couleurs prédéfinies pour les covers
const coverGradients: string[] = [
  'linear-gradient(135deg, #8b5cf6, #6366f1)',
  'linear-gradient(135deg, #d97706, #f59e0b)',
  'linear-gradient(135deg, #0ea5e9, #3b82f6)',
  'linear-gradient(135deg, #1e293b, #334155)',
  'linear-gradient(135deg, #10b981, #14b8a6)',
  'linear-gradient(135deg, #ec4899, #f472b6)',
  'linear-gradient(135deg, #f59e0b, #f97316)',
  'linear-gradient(135deg, #6366f1, #8b5cf6)'
]

function getRandomCover(): string {
  const index = Math.floor(Math.random() * coverGradients.length)
  const gradient = coverGradients[index]
  return gradient ?? coverGradients[0]!
}

async function onSubmit(event: FormSubmitEvent<FormSchema>) {
  isLoading.value = true
  try {
    const response = await $fetch('/api/boards', {
      method: 'POST',
      body: {
        name: event.data.name
      }
    })

    // Ajouter le nouveau board à la liste
    const newBoard: Board = {
      id: response.id,
      title: response.name,
      cover: getRandomCover(),
      isPrivate: true,
      members: [],
      memberCount: 1
    }

    boards.value.push(newBoard)
    isModalOpen.value = false
    formState.name = ''
    formState.description = ''

    useToast().add({
      title: 'Succès',
      description: 'Tableau créé avec succès',
      color: 'success'
    })
  } catch (error: any) {
    useToast().add({
      title: 'Erreur',
      description: error.data?.message || 'Erreur lors de la création du tableau',
      color: 'error'
    })
  } finally {
    isLoading.value = false
  }
}

function openCreateModal() {
  isModalOpen.value = true
}
</script>

<template>
  <main class="flex-1 overflow-y-auto bg-slate-900 p-6">
    <div class="mx-auto max-w-7xl">
      <div class="mb-6 flex items-center gap-2">
        <UIcon name="i-hugeicons-user-group" class="h-4 w-4 text-slate-400" />
        <h2 class="text-lg font-semibold text-white">
          Vos tableaux
        </h2>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <!-- Bouton créer un tableau -->
        

        <!-- Liste des tableaux -->
        <UCard
          v-for="board in boards"
          :key="board.id"
          class="group relative overflow-hidden cursor-pointer transition hover:-translate-y-1 bg-slate-800/50 ring-1 ring-slate-800"
          :ui="{ body: 'p-0', header: 'p-0' }"
        >
          <!-- Cover du tableau -->
          <div
            class="h-28 w-full"
            :style="{ background: board.cover }"
          />

          <!-- Contenu de la carte -->
          <div class="p-4">
            <h3 class="mb-2 text-sm font-semibold text-white">
              {{ board.title }}
            </h3>
            <div class="flex items-center justify-between">
              <p class="text-xs text-slate-400">
                {{ board.isPrivate ? 'Privé' : 'Public' }} • {{ board.memberCount }} membre{{ board.memberCount > 1 ? 's' : '' }}
              </p>
              <div class="flex -space-x-2">
                <UAvatar
                  v-for="member in board.members.slice(0, 3)"
                  :key="member"
                  :alt="member"
                  size="xs"
                  class="bg-slate-700 ring-2 ring-slate-800"
                >
                  <span class="text-[10px] font-semibold text-white">{{ member }}</span>
                </UAvatar>
              </div>
            </div>
          </div>

          <!-- Footer avec statut -->
          <div class="flex items-center justify-between border-t border-slate-800 px-4 py-2">
            <div class="flex items-center gap-1.5 text-xs text-slate-400">
              <span class="h-2 w-2 rounded-full bg-emerald-400" />
              Actif
            </div>
            <UButton
              icon="i-hugeicons-menu-vertical-01"
              color="neutral"
              variant="ghost"
              size="xs"
              class="opacity-0 transition group-hover:opacity-100"
              aria-label="Options"
            />
          </div>
        </UCard>

        <!-- Bouton créer un tableau -->
        <UCard
          class="group flex min-h-[200px] cursor-pointer items-center justify-center border-2 border-dashed border-slate-700 bg-slate-800/30 transition hover:border-sky-500 hover:bg-slate-800/50"
          :ui="{ body: 'p-0', header: 'p-0' }"
          @click="openCreateModal"
        >
          <div class="flex flex-col items-center gap-3">
            <UButton
              icon="i-hugeicons-plus"
              color="primary"
              variant="soft"
              size="lg"
              square
            />
            <p class="text-sm font-semibold text-slate-300">
              Créer un tableau
            </p>
          </div>
        </UCard>
      </div>
    </div>
  </main>
</template>

