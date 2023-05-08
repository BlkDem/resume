<template>
  <BaseCard
    :card-caption="'Прочие работы'"
    :color="'dark'"
    :icon="'fa-solid fa-briefcase'"
  >

    <h5>Городской проект - gis3d.ru</h5>
    <p> Геоинформационная система. Город снимается мультиротором (квадрокоптером) с заданной высоты.
      Создаются панорамы, логически и географически связываются. Наносятся информационные метки.
      Добавляется мультимедийный контент.</p>
    <p> ModX / Pano2VR / JS </p>
    <p class="bottom-p"><a class="gold" href="https://gis3d.ru" target="_blank">
        gis3d.ru
      </a>
    </p>

    <div class="space-4"></div>
    <h5>Магазин поставщика промышленного оборудования - rus-mine.com</h5>
    <p> Ocstore / PHP / CSS </p>
    <p class="bottom-p"><a class="gold" href="https://rus-mine.com" target="_blank">
        rus-mine.com
      </a>
    </p>

    <div class="space-4"></div>
    <h5>Фитнес-клуб - glclub.ru</h5>
    <p> ModX / Bootstrap / Fusion 360 / Sketchfab </p>
    <p class="bottom-p"><a class="gold" href="https://glclub.ru" target="_blank">
        glclub.ru
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
