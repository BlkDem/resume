<template>
  <BaseCard :card-caption="'Навыки'" :color="'dark'">

    <div class="m-4">

      <h4>Основной стэк:</h4>
      <p>PHP/Laravel (REST API), VueJS/NuxtJS, NodeJS, MySQL, HTML/CSS/JS</p>

      <div class="space-4"></div>

      <h4>Контроллеры::</h4>
      <p>AVR, ESP - C/C++, Arduino IDE</p>

      <div class="space-4"></div>

      <h4>ОС:</h4>
      <p>Linux/Windows, администрирование, поддержка, серверы, разработка сервисов</p>

      <div class="space-4"></div>

    </div>

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
