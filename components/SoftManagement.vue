<template>

  <BaseBlock
    :section-name="'softskills'"
    :card-caption="'Self-management'"
    :icon="'fa-brands fa-ubuntu'"
  >
  <ul class="light-text-ul">
      <li>Работоспособность</li>
      <li>Самомотивация</li>
      <li>Постановка целей</li>
      <li>Многозадачность</li>
      <li>Планирование</li>
      <li>Тайм-менеджмент</li>
      <li>Самообучение</li>
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
