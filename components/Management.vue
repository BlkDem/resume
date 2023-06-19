<template>

  <BaseCard
    :card-caption="'Management'"
    :icon="'fa-solid fa-user-tie'"
  >
    <ul>
      <li>Vue.js/Nuxt.js</li>
      <li>Laravel/PHP</li>
      <li>Node.js/Express</li>
      <li>REST API</li>
      <li>LINUX</li>
    </ul>
  </BaseCard>
</template>

<script>

import BaseCard from './BaseCard.vue';
export default {
  components: {BaseCard}
}

</script>

<style>
</style>
