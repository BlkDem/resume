<template>

  <BaseCard
    :card-caption="'Software'"
    :icon="'fa-brands fa-ubuntu'"
  >
    <ul>
      <li>VueJS / NuxtJS</li>
      <li>Laravel / PHP</li>
      <li>NodeJS / Express</li>
      <li>REST API</li>
      <li>LINUX</li>
    </ul>
  </BaseCard>

</template>

<script>

import BaseCard from './BaseCard.vue';
export default {
  comments: {BaseCard}
}

</script>

<style>
</style>
