<template>

  <BaseBlock
    :section-name="'devskills'"
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
  </BaseBlock>

</template>

<script>

import BaseBlock from './BaseBlock.vue';
export default {
  comments: {BaseBlock}
}

</script>

<style>
</style>
