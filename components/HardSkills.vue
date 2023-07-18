<template>
  <BaseBlock
    :section-name="'hardware'"
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
  </BaseBlock>
</template>

<script>
import BaseBlock from './BaseBlock.vue';

export default {
  components: {BaseBlock}
}

</script>

<style>
</style>
