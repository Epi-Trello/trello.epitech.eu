<script setup lang="ts">
const userMenuItems = [
  [{
    label: 'Profil',
    icon: 'i-hugeicons-user-circle',
    click: () => {
      // TODO: Naviguer vers la page profil
      console.log('Profil')
    }
  }, {
    label: 'Paramètres',
    icon: 'i-hugeicons-settings-01',
    click: () => {
      // TODO: Naviguer vers la page paramètres
      console.log('Paramètres')
    }
  }, {
    label: 'Se déconnecter',
    icon: 'i-hugeicons-logout-01',
    click: () => {
      navigateTo('/login')
    }
  }]
]

const isMenuOpen = ref(false)

// Fermer le menu quand on clique ailleurs
onMounted(() => {
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (isMenuOpen.value && !target.closest('.user-menu-container')) {
      isMenuOpen.value = false
    }
  }
  document.addEventListener('click', handleClickOutside)
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>

<template>
  <header class="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-6 py-3">
    <div class="flex items-center gap-4">
      <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-lg font-bold text-white">
        E
      </div>
      <div>
        <h1 class="text-lg font-semibold text-white">
          Espace de travail Trello
        </h1>
      </div>
      <button
        type="button"
        class="rounded p-1.5 text-slate-400 transition hover:bg-slate-800 hover:text-white"
        aria-label="Modifier"
      >
        <svg
          class="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      </button>
      <div class="flex items-center gap-1.5 rounded-lg border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-300">
        <svg
          class="h-3.5 w-3.5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clip-rule="evenodd"
          />
        </svg>
        Privé
      </div>
    </div>

    <div class="flex items-center gap-3">
      <div class="relative">
        <input
          type="text"
          placeholder="Rechercher"
          class="w-64 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 pl-10 text-sm text-white placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
        >
        <svg
          class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <button
        type="button"
        class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        Créer
      </button>
      <button
        type="button"
        class="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
        aria-label="Notifications"
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
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </button>
      <button
        type="button"
        class="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
        aria-label="Aide"
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
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <div class="relative user-menu-container">
        <button
          type="button"
          class="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-xs font-semibold text-white transition hover:bg-orange-600 cursor-pointer"
          @click.stop="isMenuOpen = !isMenuOpen"
        >
          MB
        </button>

        <Transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <div
            v-if="isMenuOpen"
            class="absolute right-0 top-full z-50 mt-2 w-48 rounded-lg border border-slate-700 bg-slate-800 shadow-xl"
          >
          <div class="py-1">
            <button
              type="button"
              class="flex w-full items-center gap-3 px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-700 hover:text-white"
              @click="isMenuOpen = false; console.log('Profil')"
            >
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Profil
            </button>
            <button
              type="button"
              class="flex w-full items-center gap-3 px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-700 hover:text-white"
              @click="isMenuOpen = false; console.log('Paramètres')"
            >
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Paramètres
            </button>
            <div class="my-1 border-t border-slate-700" />
            <button
              type="button"
              class="flex w-full items-center gap-3 px-4 py-2 text-sm text-red-400 transition hover:bg-slate-700 hover:text-red-300"
              @click="isMenuOpen = false; navigateTo('/login')"
            >
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Se déconnecter
            </button>
          </div>
          </div>
        </Transition>
      </div>
    </div>
  </header>
</template>

