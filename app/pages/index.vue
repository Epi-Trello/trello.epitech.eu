<script setup lang="ts">
definePageMeta({
  auth: false
})
</script>

<template>
  <main class="page">
    <section class="hero">
      <p class="eyebrow">Bienvenue</p>
      <h1>Gérez vos projets en toute simplicité</h1>
      <p class="lead">
        Une interface claire pour suivre vos tâches, collaborer avec votre équipe et
        garder une vue d&apos;ensemble sur vos priorités.
      </p>
      <div class="cta">
        <NuxtLink to="/login" class="btn primary">Se connecter</NuxtLink>
        <button type="button" class="btn ghost">Découvrir</button>
      </div>
    </section>

    <section class="grid">
      <article class="card">
        <div class="icon">📌</div>
        <h2>Organisation</h2>
        <p>Classez vos tâches, définissez des échéances et restez aligné.</p>
      </article>
      <article class="card">
        <div class="icon">🤝</div>
        <h2>Collaboration</h2>
        <p>Partagez l&apos;avancement avec votre équipe et évitez les surprises.</p>
      </article>
      <article class="card">
        <div class="icon">📈</div>
        <h2>Suivi</h2>
        <p>Gardez un œil sur les indicateurs clés et mesurez vos progrès.</p>
      </article>
    </section>
  </main>
</template>

<style scoped>
:root {
  color-scheme: light;
}

.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 4rem 1.5rem 5rem;
  max-width: 1100px;
  margin: 0 auto;
  color: #0f172a;
}

.hero {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
  color: #0ea5e9;
  font-size: 0.9rem;
}

h1 {
  font-size: clamp(2.25rem, 4vw, 3rem);
  line-height: 1.15;
  margin: 0;
  color: #0b1430;
}

.lead {
  font-size: 1.05rem;
  max-width: 680px;
  color: #334155;
  margin: 0;
}

.cta {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.9rem 1.2rem;
  border-radius: 0.75rem;
  border: 1px solid #0ea5e9;
  font-weight: 700;
  cursor: pointer;
  transition: transform 120ms ease, box-shadow 120ms ease, background 120ms ease;
  text-decoration: none;
  min-width: 150px;
}

.btn.primary {
  background: linear-gradient(135deg, #0ea5e9, #2563eb);
  color: #fff;
  box-shadow: 0 12px 35px rgba(14, 165, 233, 0.25);
}

.btn.ghost {
  background: #fff;
  color: #0ea5e9;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn:active {
  transform: translateY(0);
}

.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  padding: 1.25rem;
  display: grid;
  gap: 0.5rem;
  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.05);
}

.icon {
  font-size: 1.8rem;
}

.card h2 {
  margin: 0;
  font-size: 1.2rem;
  color: #0b1430;
}

.card p {
  margin: 0;
  color: #475569;
}

@media (max-width: 640px) {
  .page {
    padding: 3rem 1rem 4rem;
    gap: 2.5rem;
  }

  .btn {
    width: 100%;
  }
}
</style>
