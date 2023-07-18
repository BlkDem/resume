<template>

  <BaseBlock
    :section-name="'teamplayer'"
    :card-caption="'Team player'"
    :icon="'fa-brands fa-ubuntu'"
  >
  <ul class="light-text-ul">

      <li>Ответственность за результат</li>
      <li>Целеустремленность</li>
      <li>Готовность помочь</li>
      <li>Позитивность</li>
      <li>Высокий EQ</li>
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
