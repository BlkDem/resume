<template>
  <BaseCard
    :card-caption="'Прочие работы'"
    :color="'dark'"
    :icon="'fa-solid fa-briefcase'"
  >

    <h5>Городской проект - gis3d.ru</h5>
    <a class="gold" href="https://gis3d.ru" target="_blank">
    <img src="../store/images/thumb/gis3d.png" class="thumb-img" alt="gis3d.ru"/></a>
    <p> Геоинформационная система. Город снимается мультиротором (квадрокоптером) с заданной высоты.
      Создаются панорамы, логически связываются. Наносятся информационные метки.
      Добавляется мультимедийный контент.</p>
    <p> <strong>Роли:</strong> автор, архитектор, разработчик </p>
    <p><strong>Стек: </strong> ModX / Pano2VR / JS </p>

    <p class="bottom-p"><a class="gold" href="https://gis3d.ru" target="_blank">
        https://gis3d.ru
      </a>
    </p>

    <h5>Кофейный автомат - coffeemat.vercel.app</h5>
    <a class="gold" href="https://coffeemat.vercel.app" target="_blank">
    <img src="../store/images/thumb/coffeemat.png" class="thumb-img" alt="gis3d.ru"/></a>
    <p>Кофейный автомат - вебинтерфейс + эмулятор.</p>
    <p> <strong>Роли:</strong> разработчик </p>
    <p><strong>Стек: </strong> Vue / TS </p>

    <p class="bottom-p"><a class="gold" href="https://github.com/BlkDem/coffeemat" target="_blank">
        https://github.com/BlkDem/coffeemat
      </a>
    </p>

    <div class="space-4"></div>
    <h5>Магазин поставщика промышленного оборудования - rus-mine.com</h5>
    <a class="gold" href="https://rus-mine.com" target="_blank">
    <img src="../store/images/thumb/rm.png" class="thumb-img" alt="rus-mine.com"/></a>
    <p><strong>Стек: </strong> Ocstore / PHP / CSS </p>
    <p> <strong>Роли:</strong> дизайнер, разработчик </p>

    <p class="bottom-p"><a class="gold" href="https://rus-mine.com" target="_blank">
        https://rus-mine.com
      </a>
    </p>

    <div class="space-4"></div>
    <h5>Фитнес-клуб - glclub.ru</h5>
    <a class="gold" href="https://glclub.ru" target="_blank">
    <img src="../store/images/thumb/gl.png" class="thumb-img" alt="MQTT2MySQL"/></a>
    <p><strong>Стек: </strong> ModX / Bootstrap / Fusion 360 / Sketchfab </p>

    <p> <strong>Роли:</strong> автор, дизайнер, разработчик </p>

    <p class="bottom-p"><a class="gold" href="https://glclub.ru" target="_blank">
        https://glclub.ru
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
