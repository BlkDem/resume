<template>
  <BaseCard
    :card-caption="'Портфолио'"
    :color="'dark'"
    :icon="'fa-solid fa-briefcase'"
  >

    <div class="p-gradient my-2"><p class="small-p">Текущий рабочий проект</p></div>
    <h4>IoTman - Umolab Device Manager</h4>

    <a class="gold" href="https://iotman.blkdem.ru" target="_blank">
    <img src="../store/images/thumb/iotman1.png" class="thumb-img" alt="Iotman"></a>

    <p><a class="gold" href="https://iotman.blkdem.ru" target="_blank">IoTman</a> - регистрация, конфигурирование
      устройств,
      разрабатываемых компанией <a class="gold" href="https://umolab.ru" target="_blank">Umolab</a><br>
      Регистрация пользователей. Мониторинг и журналирование работы устройств.
    </p>

    <p> <strong> Бэкэнд: </strong> Laravel / PHP </p>
    <p> <strong> Фронтэнд: </strong> Vue / Bootstrap / Bootswatch Theming </p>

    <p> <strong>Роли:</strong> автор, архитектор, разработчик </p>

    <p class="bottom-p"><a class="gold" href="https://github.com/BlkDem/iotman-lav" target="_blank">
      Github
      </a>
    </p>

    <div class="space-4"></div>
    <h4>Приложения экосистемы Umolab Devices</h4>
    <div class="space-4"></div>

    <h5>3D конфигуратор - витрина</h5>
    <a class="gold" href="https://mycase.umolab.ru/" target="_blank">
    <img src="../store/images/thumb/mycase1.png" class="thumb-img" alt="3D conf"/></a>
    <p> Интернет магазин устройств Umolab Devices - дизайн устройства.</p>
    <p> Клиенту предлагается самому выбрать внешний вид устройства и сделать заказ.</p>
    <p> <strong>Стек:</strong> ModX / Fusion 360 / Blender / Verge3D / JS</p>

    <p> <strong>Роли:</strong> автор, 3D-дизайнер, разработчик </p>

    <!-- <p> <a href="https://mycase.umolab.ru/" class="gold" target="_blank">https://mycase.umolab.ru/</a></p> -->
    <p class="bottom-p">
      <a class="gold" href="https://mycase.umolab.ru/" target="_blank">
        mycase.umolab.ru
      </a>
    </p>


    <div class="w-100 h-160px">
      <h5>MQTT2MySQL Logger</h5>
      <a class="gold" href="https://github.com/BlkDem/iotman-logger" target="_blank">
      <img src="../store/images/thumb/mqtt.png" class="thumb-img" alt="MQTT2MySQL"/></a>
      <p> Принимаем данные сервиса MQTT, преобразовываем в нужный формат и записываем в БД. </p>
    </div>
    <p><strong>Стек:</strong> NodeJS </p>

    <p> <strong>Роли:</strong> автор, разработчик </p>

    <p class="bottom-p"><a class="gold" href="https://github.com/BlkDem/iotman-logger" target="_blank">
        Github
      </a>
    </p>

    <div class="w-100 h-160px">
      <h5>u-emu</h5>
      <a class="gold" href="https://github.com/BlkDem/u-desktop" target="_blank">
      <img src="../store/images/thumb/u-emu.png" class="thumb-img" alt="u-emu"/></a>
      <p> Эмулятор контроллеров Umolab Devices. Инструмент тестирования экосистемы, её сервисов, проверки устойчивости и стабильности. </p>
    </div>
    <p><strong>Стек:</strong> Vue / ElectronJS </p>

    <p> <strong>Роли:</strong> автор, разработчик </p>

    <p class="bottom-p"><a class="gold" href="https://github.com/BlkDem/iotman-logger" target="_blank">
        Github
      </a>
    </p>



    <!-- <h5>Shop</h5>
    <p> Интернет магазин устройств Umolab Devices - бэкэнд</p>
    <p> NodeJS / Express / MySQL - MVC</p>
    <p class="bottom-p">
      <a class="gold" href="https://github.com/BlkDem/umolab-shop-backend" target="_blank">
        Github
      </a>
    </p> -->

    <div class="p-gradient my-2"><p class="small-p">Это резюме</p></div>
    <h4>Резюме - Пятков Максим</h4>
    <p>NuxtJS / SSR</p>
    <p> <strong>Роли:</strong> автор, разработчик </p>

    <p class="bottom-p">
      <a class="gold" href="https://github.com/BlkDem/resume" target="_blank">
        Github
      </a>
    </p>

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

.thumb-img {
  width: 200px;
  height: auto;
  margin-right: 8px;
  float: left;
  border: 2px solid gold;
  border-radius: 8px;
  padding: 2px;
}

.h-160px {
  height: 160px;
}

</style>
