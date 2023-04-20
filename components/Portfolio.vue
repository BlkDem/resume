<template>
  <BaseCard :card-caption="'Портфолио'" :color="'dark'">

    <p class="small-p">Текущий рабочий проект</p>
    <h4>IoTman - Umolab Device Manager</h4>
    <p><a class="gold" href="https://iotman.blkdem.ru" target="_blank">IoTman</a> - регистрация, конфигурирование
      устройств,
      разрабатываемых компанией <a class="gold" href="https://umolab.ru" target="_blank">Umolab</a><br>
      Регистрация пользователей. Мониторинг и журналирование работы устройств.
    </p>
    <p> <strong>Бэкэнд:</strong> Laravel 9.5 / PHP 8.2 </p>
    <p> <strong>Фронтэнд:</strong> Vue 3.2 / Bootstrap / Bootswatch Theming </p>

    <p class="bottom-p"><a class="gold" href="https://github.com/BlkDem/iotman-lav" target="_blank">
        https://github.com/BlkDem/iotman-lav
      </a>
    </p>

    <h4>Приложения экосистемы Umolab Devices</h4>
    <div class="space-4"></div>
    <h5>MQTT2MySQL Logger</h5>
    <p> Принимаем, преобразовываем в нужный формат данные из MQTT и пишем в базу </p>
    <p> NodeJS </p>
    <p class="bottom-p"><a class="gold" href="https://github.com/BlkDem/iotman-logger" target="_blank">
        https://github.com/BlkDem/iotman-logger
      </a>
    </p>

    <h5>Shop</h5>
    <p> Интернет магазин устройств Umolab Devices - бэкэнд</p>
    <p> NodeJS / Express / MySQL </p>
    <p class="bottom-p">
      <a class="gold" href="https://github.com/BlkDem/umolab-shop-backend" target="_blank">
        https://github.com/BlkDem/umolab-shop-backend
      </a>
    </p>

    <p class="small-p">Это резюме</p>
    <h4>Резюме - Пятков Максим</h4>
    <p>NuxtJS</p>
    <p class="bottom-p">
      <a class="gold" href="https://github.com/BlkDem/resume" target="_blank">
        https://github.com/BlkDem/resume
      </a>
    </p>


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
