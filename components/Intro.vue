<template>
  <BaseCard
    :card-caption="'Обо мне'"
    :color="'dark'"
    :icon="'fa-solid fa-envelope-open-text'"
  >

      <h4>Привет!</h4>
      <p>Меня зовут Максим, и я ищу работу на позицию
        <span class="selected-text">Fullstack Laravel / Vue</span> либо
        <span class="selected-text">Frontend Vue</span> разработчика. Удалённо.
      </p>
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
