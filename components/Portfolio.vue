<template>
  <BaseBlock :section-name="'portfolio'" :card-caption="'Портфолио'" :color="'dark'" :icon="'fa-solid fa-briefcase'">

    <article name="currentProject">
      <div class="p-gradient my-2">
        <p class="small-p">Текущий рабочий проект</p>
      </div>
      <h4>Umolab QRM (Quick Response Manufacturing)</h4>


      <a class="gold" href="https://iotman.blkdem.ru" target="_blank">
        <img src="../store/images/thumb/iotman1_400.png" class="thumb-img" alt="Iotman">
      </a>

      <p>
        <h6>Производство</h6>
        <ul>
          <li>Работа с каталогом производимой продукции</li>
          <li>Ввод в эксплуатацию производимого оборудования и компонентов</li>
          <li>QRM - POLCA</li>
        </ul>
        <h6>Торговля</h6>
        <ul>
          <li>Регистрация продукции на витрине</li>
          <li>Установка цен на производимую продукцию</li>
        </ul>
        <h6>Безопасность</h6>
        <ul>
          <li>Регистрация пользователей</li>
          <li>Определение ролей и разрешений</li>
          <li>Блокировка таблиц и записей</li>
        </ul>
        <h6>Управление оборудованием</h6>
        <ul>
          <li>Регистрация оборудования в инфраструктуре</li>
          <li>Мониторинг работы устройств</li>
        </ul>
      </p>

      <blockquote>
        <p> <strong> Бэкэнд: </strong> Laravel <br />
          <strong> Фронтэнд: </strong> Vue (Vuex, Vue-router) / Bootstrap <br />
          <strong>Роли:</strong> архитектор, разработчик </p>
      </blockquote>
      <p class="bottom-p"><a class="gold" href="https://github.com/BlkDem/iotman-lav" target="_blank">
          https://github.com/BlkDem/iotman-lav
        </a>
      </p>

      <p class="bottom-p"><a class="gold" href="https://iotman.blkdem.ru" target="_blank">
          https://iotman.blkdem.ru
        </a>
      </p>

    </article>

    <div class="space-4"></div>

    <div class="p-gradient my-2">
      <p class="small-p">Другие работы</p>
    </div>

    <h4>Приложения экосистемы Umolab</h4>
    <div class="space-4"></div>

    <article name="view3d">

      <h5>
        <!-- <i class="fa-solid fa-compact-disc"></i> -->
        <span class="gold"><font-awesome-icon icon="fa-solid fa-compact-disc" /></span>
        3D конфигуратор - витрина
      </h5>
      <a class="gold" href="https://mycase.umolab.ru/" target="_blank">
        <img src="../store/images/thumb/mycase1_400.png" class="thumb-img" alt="3D conf" /></a>
      <p> Витрина корпусов из акрила и пластика с облачными контроллерами Umolab Devices</p>
      <p> Клиенту предлагается самому выбрать дизайн для заказа.</p>
      <blockquote>
        <p>
          <strong>Стэк:</strong> ModX / Fusion 360 / Blender / Verge3D / JS <br />
          <strong>Роли:</strong> 3D-дизайнер, разработчик
        </p>
      </blockquote>
      <p class="bottom-p">
        <a class="gold" href="https://mycase.umolab.ru/" target="_blank">
          https://mycase.umolab.ru
        </a>
      </p>

    </article>

    <article name="supertod">

      <h5>
        <span class="gold"><font-awesome-icon icon="fa-solid fa-compact-disc" /></span>
        Supertod.ru
      </h5>
      <a class="gold" href="https://supertod.ru/" target="_blank">
        <img src="../store/images/thumb/st_400.png" class="thumb-img" alt="3D conf" /></a>
      <p> Промо страница интернет магазина устройств Umolab Group</p>
      <blockquote>
        <p> <strong>Стэк:</strong> Nuxt (SSG)<br />
          <strong>Роли:</strong> разработчик
        </p>
      </blockquote>
      <p class="bottom-p">
        <a class="gold" href="https://github.com/BlkDem/supertod2" target="_blank">
          https://github.com/BlkDem/supertod2
        </a>
      </p>

      <p class="bottom-p">
        <a class="gold" href="https://supertod.ru" target="_blank">
          Промо: https://supertod.ru
        </a>
      </p>

      <p class="bottom-p">
        <a class="gold" href="https://umolab-devices.com" target="_blank">
          Магазин: https://umolab-devices.com
        </a>
      </p>
    </article>
    <!-- <div class="w-100 h-160px">
      <h5>u-device-front</h5>
      <a class="gold" href="https://github.com/BlkDem/u-device-front" target="_blank">
      <img src="../store/images/thumb/udc_s1.png" class="thumb-img" alt="u-device-front"/></a>
      <p> Web-интерфейс для сонтроллеров Umolab Devices серии "Standart". Управление зонами освещения, сохранение пресетов.</p>
    </div>
    <p><strong>Платформа:</strong> ESP 82xx <br/>
    <strong>Стэк:</strong> Vue / Bulma (CSS) </p>

    <p> <strong>Роли:</strong> автор, разработчик </p>

    <p class="bottom-p"><a class="gold" href="https://github.com/BlkDem/u-device-front" target="_blank">
        https://github.com/BlkDem/u-device-front
      </a>
    </p>
  -->
    <article name="mqtt2mysql">
      <div class="w-100 h-160px">
        <h5>
          <span class="gold"><font-awesome-icon icon="fa-solid fa-compact-disc" /></span>
          MQTT2MySQL
        </h5>
        <a class="gold" href="https://github.com/BlkDem/iotman-logger" target="_blank">
          <img src="../store/images/thumb/mqtt_400.png" class="thumb-img" alt="MQTT2MySQL" />
        </a>
        <p> Журналирование работы устройств Umolab. Мост MQTT -> MySQL </p>
      </div>
      <blockquote>
        <p><strong>Стэк:</strong> NodeJS / Forever<br />
          <strong>Роли:</strong> автор, разработчик
        </p>
      </blockquote>
      <p class="bottom-p"><a class="gold" href="https://github.com/BlkDem/iotman-logger" target="_blank">
          https://github.com/BlkDem/iotman-logger
        </a>
      </p>
    </article>
    <article>
      <div class="w-100 h-160px">
        <h5>
          <span class="gold"><font-awesome-icon icon="fa-solid fa-compact-disc" /></span>
          u-emu
        </h5>
        <a class="gold" href="https://u-desktop.umolab.ru/" target="_blank">
          <img src="../store/images/thumb/u-emu_400.png" class="thumb-img" alt="u-emu" /></a>
        <p> Эмулятор контроллеров Umolab Devices. Инструмент тестирования экосистемы, её сервисов, проверки устойчивости
          и стабильности. </p>
      </div>
      <blockquote>
        <p><strong>Стэк:</strong> Vue / ElectronJS <br />
          <strong>Роли:</strong> автор, разработчик
        </p>
      </blockquote>
      <p class="bottom-p"><a class="gold" href="https://github.com/BlkDem/u-desktop" target="_blank">
          https://github.com/BlkDem/u-desktop
        </a>
      </p>
      <p class="bottom-p"><a class="gold" href="https://u-desktop.umolab.ru/" target="_blank">
          https://u-desktop.umolab.ru/
        </a>
      </p>
    </article>

  </BaseBlock>

</template>

<script>
import BaseBlock from './BaseBlock.vue';

export default {
  components: {BaseBlock}
}

</script>

<style lang="scss" scoped>
@import "../scss/App.scss";

h5 {
  margin-top: 64px;
  border-bottom: 1px solid gold;
  padding-bottom: 8px;
}
.thumb-img {
  width: 400px;
  height: auto;
  margin-top: 8px;
  // margin-right: 8px;
  /* float: left; */
  border: 1px solid gold;
  border-radius: 8px;
  padding: 4px;
}

.bottom-p {
  margin: 8px 0px;
}

@media only screen and (min-width: 200px) and (max-width: 768px) {
  .thumb-img {
    width: 100%;
    // height: auto;
  }
}


</style>
