<template>
  <BaseCard
    :card-caption="'Опыт работы'"
    :color="'dark'"
    :icon="'fa-solid fa-person-digging'"
  >

      <div class="p-gradient my-2"><p class="small-p">2018-05 - now</p></div>
      <h4>Инженер-разработчик (Fullstack)</h4>
      <p>Компания <a class="gold" href="https://umolab.ru" target="_blank">"Umolab"</a></p>
        <ul class="font-primary-color">
          <li>
            Разработка программного обеспечения
          </li>
          <li>
            IoT, Home Automation
          </li>
        </ul>
      <p class="bottom-p">Новосибирск, Россия</p>

      <div class="space-4"></div>

      <div class="p-gradient my-2"><p class="small-p">2006-06 - 2020-05</p></div>

      <h4>Руководитель ИТ департамента</h4>
      <p><a href="https://www.suek.ru" target="_blank" class="gold">АО «СУЭК»</a> - энергетическая корпорация - поддержка инфраструктуры, servicedesk</p>
      <p class="bottom-p">Москва, Россия</p>

  </BaseCard>

</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
  components: { BaseCard }
}

</script>

<style>
</style>
