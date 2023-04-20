<template>
  <BaseCard :card-caption="'Опыт работы'" :color="'dark'">

    <!-- <div class="m-4"> -->

      <p class="small-p">2020-05 - по настоящее время</p>
      <h4>Индивидуальный предприниматель</h4>
      <p><a class="gold" href="https://umolab.ru" target="_blank">Umolab</a> - разработка микроконтроллеров -
        автотюннинг,
        моддинг ПК, IoT, Home Automation, программное
        обеспечение, поддержка бизнеса.</p>
      <p class="bottom-p">Новосибирск, Россия</p>

      <div class="space-4"></div>

      <p class="small-p">2006-06 - 2020-05</p>
      <h4>Руководитель департамента ИТ</h4>
      <p>АО «СУЭК» - поддержка инфраструктуры, servicedesk</p>
      <p class="bottom-p">Москва, Россия</p>
    <!-- </div> -->

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
