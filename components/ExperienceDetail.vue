<template>
  <BaseCard
    :card-caption="'Навыки'"
    :color="'dark'"
    :icon="'fa-solid fa-kitchen-set'"
  >

      <h4>Основной стэк</h4>
      <ul class="font-primary-color">
        <li>
          PHP / Laravel (REST API)
        </li>
        <li>
          VueJS / NuxtJS, NodeJS
        </li>
        <li>
          MySQL, etc.
        </li>
        <li>
          HTML / CSS / JavaScript / jQuery
        </li>
      </ul>
      <!-- <p>, VueJS/NuxtJS, NodeJS, MySQL, HTML/CSS/JS</p> -->

      <h4>Дополнительно</h4>
      <ul class="font-primary-color">
        <li>
          Git
        </li>
        <li>
          Docker
        </li>
        <li>
          Postman
        </li>
        <li>
          Bootstrap
        </li>
        <li>
          Mosquitto
        </li>
        <li>
          Memcached
        </li>
      </ul>

      <!-- <p>Git, Docker, Postman, Bootstrap, Mosquitto, Memcached</p> -->

      <div class="space-4"></div>

      <!-- <h4>Контроллеры</h4>
      <p>AVR, ESP - C/C++, Arduino IDE</p>

      <div class="space-4"></div> -->

      <h4>ОС</h4>
      <p>Linux/Windows, администрирование, поддержка, серверы, сервисы на базе systemd, supervisor, forever</p>
      <ul class="font-primary-color">
        <li>
          Windows Server
        </li>
        <li>
          Ubuntu
        </li>
        <li>
          CentOS
        </li>
      </ul>

      <!-- <p>Windows Server, Ubuntu, CentOS</p> -->

      <h4>Виртуализация</h4>
      <p>Установка, настройка, конфигурирование сервисов</p>
      <ul class="font-primary-color">
        <li>
          VPS/VDS
        </li>
        <li>
          Hyper-V
        </li>
      </ul>


      <div class="space-4"></div>

  </BaseCard>

</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
  components: {BaseCard}
}

</script>

<style lang="scss" scoped>
@import "../scss/App.scss";

.font-primary-color {
  color: $primary-color;
}

</style>
