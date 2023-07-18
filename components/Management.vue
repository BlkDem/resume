<template>

  <BaseBlock
    :section-name="'stack'"
    :card-caption="'Stack'"
    :icon="'fa-solid fa-user-tie'"
  >
    <ul>
      <li>Vue.js/Nuxt.js</li>
      <li>Laravel/PHP</li>
      <li>Node.js/Express</li>
      <li>REST API</li>
      <li>LINUX</li>
    </ul>
  </BaseBlock>
</template>

<script>

import BaseBlock from './BaseBlock.vue';
export default {
  components: {BaseBlock}
}

</script>

<style>
</style>
