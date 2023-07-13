<template>

  <BaseCard
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
