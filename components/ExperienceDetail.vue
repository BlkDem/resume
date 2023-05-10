<template>
  <BaseCard
    :card-caption="'Навыки'"
    :color="'dark'"
    :icon="'fa-solid fa-kitchen-set'"
  >

      <h4>Основной стэк</h4>
      <p>PHP/Laravel (REST API), VueJS/NuxtJS, NodeJS, MySQL, HTML/CSS/JS</p>

      <h4>Дополнительно</h4>
      <p>Git, Docker, Postman, Bootstrap, Mosquitto, Memcached</p>

      <div class="space-4"></div>

      <!-- <h4>Контроллеры</h4>
      <p>AVR, ESP - C/C++, Arduino IDE</p>

      <div class="space-4"></div> -->

      <h4>ОС</h4>
      <p>Linux/Windows, администрирование, поддержка, серверы, сервисы на базе systemd, supervisor, forever</p>
      <p>Windows Server, Ubuntu, CentOS</p>

      <h4>Виртуализация</h4>
      <p>VPS/VDS, Hyper-V - установка, настройка, конфигурирование сервисов</p>

      <div class="space-4"></div>

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
