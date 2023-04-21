<template>
  <BaseCard
    :card-caption="'Образование'"
    :color="'dark'"
    :icon="'fa-solid fa-user-graduate'"
  >

    <!-- <div class="m-2"> -->

      <div class="p-gradient my-2"><p class="small-p">2004 г.</p></div>
      <h4>Новосибирский Государственный Технический
          Университет</h4>
      <p> Инженер-программист, специальность: "Программное
          обеспечение вычислительной техники и
          автоматизированных систем"</p>
      <p class="bottom-p">Факультет Автоматики и Вычислительной техники</p>


  </BaseCard>

</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
  components: {BaseCard}
}

</script>

</style>
