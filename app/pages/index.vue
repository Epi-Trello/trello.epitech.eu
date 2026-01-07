<script setup lang="ts">
definePageMeta({
  auth: false
})

// Rediriger vers /tableaux par défaut
onMounted(() => {
  navigateTo('/tableaux')
})
</script>

<template>
  <div />
</template>
