<template>

    <BaseBlock
      :section-name="'experience'"
      :card-caption="'Опыт работы'"
      :color="'dark'"
      :icon="'fa-solid fa-person-digging'">

      <article name="fullstack">
        <div class="p-gradient my-2">
          <time class="small-p">2018-05 - now</time>
        </div>
        <h4>Инженер-разработчик (Fullstack)</h4>
        <p>Компания <a class="gold" href="https://umolab.ru" target="_blank">"Umolab"</a></p>
        <ul class="font-primary-color">
          <li>
            Разработка программного обеспечения
          </li>
          <li>
            Производство электронного оборудоания
          </li>
        </ul>
        <p class="bottom-p">Новосибирск, Россия</p>

      </article>

      <div class="space-4"></div>

      <article name="dit">
        <div class="p-gradient my-2">
          <time class="small-p">2006-06 - 2020-05</time>
        </div>

        <h4>Руководитель ИТ департамента</h4>
        <p><a href="https://www.suek.ru" target="_blank" class="gold">АО «СУЭК»</a> - энергетическая корпорация. </p>
        <!-- <ul>
          <li>Поддержка инфраструктуры</li>
          <li>Внедрение и сопровождение ПО</li>
          <li>Планирование, бюджетирование</li>
          <li>Servicedesk</li>
        </ul> -->

        <p class="bottom-p">Москва, Россия</p>
      </article>

    </BaseBlock>

</template>

<script>
import BaseBlock from './BaseBlock.vue';

export default {
  components: { BaseBlock }
}

</script>
