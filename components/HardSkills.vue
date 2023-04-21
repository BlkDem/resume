<template>
  <BaseCard
    :card-caption="'Hardware'"
    :icon="'fa-solid fa-microchip'"
  >
    <ul>
      <li>ESP</li>
      <li>AVR</li>
      <li>IoT</li>
      <li>Sensors</li>
      <li>Controllers</li>
      <li>Automation</li>
    </ul>
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
