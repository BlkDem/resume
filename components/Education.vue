<template>
  <BaseCard :card-caption="'Образование'" :color="'dark'">

    <div class="m-4">

      <p class="small-p">сентябрь 2000 - декабрь 2004</p>
      <h4>Новосибирский Государственный Технический
          Университет</h4>
      <p> Инженер-программист, специальность: "Программное
          обеспечение вычислительной техники и
          автоматизированных систем"</p>
      <p class="bottom-p">Факультет Автоматики и Вычислительной техники</p>

      <div class="space-4"></div>

      <p class="small-p">сентябрь 1998 - май 1999</p>
      <h4>Сибирский Государственный Индустриальный Университет</h4>
      <!-- <p>АО «СУЭК» - поддержка инфраструктуры, servicedesk</p> -->
      <p class="bottom-p">Электромеханические технологии/электромеханика</p>
    </div>

  </BaseCard>

</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
  components: {BaseCard}
}

</script>

</style>
