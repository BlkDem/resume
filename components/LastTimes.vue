<template>

  <div class="mx-2">
    <h3 class="dark-color" v-b-toggle.collapse-1 variant="primary">
      <span class="gold">
        <font-awesome-icon :icon="'fa-solid fa-business-time'" /></span>
      Об опыте "прикладного" периода <span class="gold">
        <font-awesome-icon :icon="'fas fa-plus-square'" /></span>
    </h3>

    <!--
      Для тех, кто смотрит код ;)
    -->

    <b-collapse id="collapse-1" class="mt-2">
      <b-card>
        <h4>Ранее решаемые задачи</h4>
        <p>Мой коммерческий опыт программиста начался в 2000 году. Была автоматизирована система учета местного
          ТВ-провайдера.
          <strong>Delphi / BDE / Interbase</strong>
        </p>
        <p>В 2003 году была разработана и внедрена система мониторинга и диспетчеризации группы угольных предприятий.
          Этот программный комплекс стал темой дипломной работы. Распределенная система с тонкими клиентами. SOAP / CGI
          / Delphi</p>
        <h5>Еще немного из копилки</h5>
        <ul class="font-primary-color">
          <li>
            Агрегатор автосервисов, автосалонов, автомоек в г. Новосибирске - StoNet.ru. <strong>ASP.Net /
              MSSQL</strong>
            Окружающая экосистема в виде складских и прочих учетных программ, конвертеров данных и т.д. <strong>Delphi /
              MSSQL </strong>
          </li>
          <li>
            Набор инструментов для организации, автоматизации и оцифровки делопроизводства фонда социального
            страхования. Сетевой буфер обмена,
            генератор стандартных страниц личных дел. Конверторы данных из старых учетных систем. <strong>Delphi / BDE /
              ODBC</strong>
          </li>
          <li>
            Система автоматизации стоматологической клиники. Учет пациентов, график приемов, график работы,
            организация и хранение карточек пациентов. Распределенная система с сервером приложений. <strong>Delphi /
              SOAP / MSSQL</strong>
          </li>
          <li>
            Система обработки и консолидирования информации для импорта в учетную систему ГИБДД. <strong>Delphi / BDE /
              Oracle</strong>
          </li>
        </ul>

        <div class="space-4"></div>
      </b-card>
    </b-collapse>
    <div class="space-4"></div>
    <div class="space-4"></div>

  </div>

</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
  components: {BaseCard}
}

</script>

<style scoped>
h5 {
  font-size: 1rem;
}
</style>
