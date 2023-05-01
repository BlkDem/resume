<template>

  <BaseCard
    :card-caption="'Team player'"
    :icon="'fa-brands fa-ubuntu'"
  >
  <ul>

      <li>Ответственность за результат</li>
      <li>Целеустремленность (уровень John Wick)</li>
      <li>Готовность помочь</li>
      <li>Позитивность</li>
      <li>Высокий EQ</li>
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
