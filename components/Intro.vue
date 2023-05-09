<template>
  <BaseCard
    :card-caption="'Интро'"
    :color="'dark'"
    :icon="'fa-solid fa-envelope-open-text'"
  >

      <h4>Привет!</h4>
      <p>Меня зовут Максим, и я ищу работу на позицию middle fullstack разработчика Laravel / Vue.</p>
      <p>Буду рад помочь в решении задач любой сложности.</p>

      <div class="space-4"></div>

  </BaseCard>

</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
  components: {BaseCard}
}

</script>

<style>
</style>
