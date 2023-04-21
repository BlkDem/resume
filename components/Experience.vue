<template>
  <BaseCard
    :card-caption="'Опыт работы'"
    :color="'dark'"
    :icon="'fa-solid fa-person-digging'"
  >

    <!-- <div class="m-4"> -->

      <!-- <p class="small-p">2020-05 - по настоящее время</p> -->
      <div class="p-gradient my-2"><p class="small-p">2020-05 - now</p></div>
      <h4>Индивидуальный предприниматель</h4>
      <p><a class="gold" href="https://umolab.ru" target="_blank">Umolab</a> - разработка электронных устройств на базе микроконтроллеров.
        Автотюннинг, моддинг ПК, IoT, Home Automation</p>
      <p class="bottom-p">Новосибирск, Россия</p>

      <div class="space-4"></div>

      <!-- <p class="small-p">2006-06 - 2020-05</p> -->
      <div class="p-gradient my-2"><p class="small-p">2006-06 - 2020-05</p></div>

      <h4>Руководитель ИТ департамента</h4>
      <p><a href="https://www.suek.ru" target="_blank" class="gold">АО «СУЭК»</a> - поддержка инфраструктуры, servicedesk</p>
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
