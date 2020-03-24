<template>
  <div>
    <main class="l-main">
      <AppNavigation />
      <nuxt />
    </main>
  </div>
</template>

<script>
import AppNavigation from '~/components/AppNavigation'

export default {
  components: {
    AppNavigation
  }
}
</script>
<style></style>
