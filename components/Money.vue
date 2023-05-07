<template>
  <BaseCard
    :card-caption="'Зарплатные ожидания'"
    :color="'dark'"
    :icon="'fa-solid fa-sack-dollar'"
  >
      <p>200 000 ₽ / 2 500 $ на руки</p>

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
