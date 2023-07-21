<template>

  <BaseBlock
    :section-name="'money'"
    :card-caption="'Зарплатные ожидания'"
    :color="'dark'"
    :icon="'fa-solid fa-sack-dollar'">

    <div class="money m-2"><strong>150 000 ₽ <span class="gold">/</span> 2 000 $ <span class="gold">/</span> 50 000 ₺</strong></div>
    <ul class="font-primary-color">
      <!-- <li>
        <strong>150 000 ₽ <span class="gold">/</span> 2 000 $ <span class="gold">/</span> 50 000 ₺</strong>
      </li> -->
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

<style scoped lang="scss">
.money {
  font-size: 1.2rem;
  font-weight: 700;
}

@media only screen and (min-width: 200px) and (max-width: 768px) {
  .money {
    text-align: center;
  }
}
</style>
