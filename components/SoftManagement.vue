<template>

  <BaseBlock
    :section-name="'softskills'"
    :card-caption="'Self-management'"
    :icon="'fa-brands fa-ubuntu'"
    :color="color"
  >
  <ul :class="{'light-text-ul': color==='light', 'dark-text-ul': color==='dark'}">
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
  components: {BaseBlock},
  props: {
    color: {
      type: String,
      default: 'light'
    }
  }
}

</script>

<style scoped>
.dark-text-ul {
  color: #333;
}
</style>
