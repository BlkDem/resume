<template>

  <BaseBlock
    :section-name="'teamplayer'"
    :card-caption="'Team player'"
    :icon="'fa-brands fa-ubuntu'"
    :color="color"
  >
  <ul :class="{'light-text-ul': color==='light', 'dark-text-ul': color==='dark'}">

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
  components: {BaseBlock},
  props: {
    color: {
      type: String,
      default: 'light'
    }
  }
}

</script>

<style>
</style>
