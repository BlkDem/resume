<template>

  <BaseBlock
    :section-name="'money'"
    :card-caption="'Зарплатные ожидания'"
    :color="'dark'"
    :icon="'fa-solid fa-sack-dollar'">

    <ul class="font-primary-color">
      <li>
        150 000 - 250 000 ₽ / 2 000 - 3 000 $ / 50 000 - 80 000 ₺
      </li>
      <li>
        Зарплата возможна в криптовалюте
      </li>
      <li>
        Любая форма трудоустройства
      </li>
    </ul>

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
