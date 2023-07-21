<template>
  <BaseBlock
    :section-name="'mystack'"
    :card-caption="'Основной стэк'"
    :color="'dark'"
    :icon="'fa-solid fa-kitchen-set'"
  >

  <b-row>
    <b-col md="6">
      <!-- <h4>Основной стэк</h4> -->
      <ul class="font-primary-color">
        <li>
          VueJS (Vue-router, Vuex) / NuxtJS / NodeJS
        </li>
        <li>
          PHP / Laravel (REST API) / MySQL
        </li>
        <!-- <li>
          MySQL
        </li> -->
        <li>
          HTML / CSS / SCSS / SASS
        </li>
        <li>
          Bootstrap / Vuetify / Bulma
        </li>
      </ul>
    </b-col>
      <!-- <p>, VueJS/NuxtJS, NodeJS, MySQL, HTML/CSS/JS</p> -->
    <b-col md="6">
      <!-- <h4>Дополнительно</h4> -->
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
          Linux
        </li>
      </ul>
    </b-col>
  </b-row>

      <!-- <div class="space-4"></div>
      <div class="row">
        <div class="col-6">
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
        </div>
         <p>Windows Server, Ubuntu, CentOS</p>

        <div class="col-6">
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

        </div>
      </div> -->




  </BaseBlock>

</template>

<script>
import BaseBlock from './BaseBlock.vue';

export default {
  components: {BaseBlock}
}

</script>

<style lang="scss" scoped>
// @import "../scss/App.scss";

// .font-primary-color {
//   color: $primary-color;
// }

</style>
