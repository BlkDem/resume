<template>

<template>
  <BaseCard
    :card-caption="'Software'"
    :icon="'fa-brands fa-ubuntu'"
  >
  <ul>
      <li>Laravel/PHP</li>
      <li>Node.js/Express</li>
      <li>Vue.js/Nuxt.js</li>
      <li>REST API</li>
      <li>LINUX</li>
    </ul>
  </BaseCard>
</template>

</template>

<script>

import BaseCard from './BaseCard.vue';
export default {
  comments: {BaseCard}
}

</script>

<style>
</style>
