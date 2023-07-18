<template>
  <BaseBlock
    :section-name="'langs'"
    :card-caption="'Языки'"
    :color="'dark'"
    :icon="'fa-solid fa-language'"
  >

    <article name="langs">
      <p>Русский, English (B1)</p>
    </article>

    <div class="space-4"></div>

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
