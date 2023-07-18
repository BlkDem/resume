<template>

    <BaseBlock
      :section-name="'education'"
      :card-caption="'Образование'"
      :color="'dark'"
      :icon="'fa-solid fa-user-graduate'">

      <div class="p-gradient my-2">
        <time class="small-p">2004 г.</time>
      </div>
      <h4>Новосибирский Государственный Технический
        Университет</h4>
      <p> Инженер-программист, специальность: "Программное
        обеспечение вычислительной техники и
        автоматизированных систем"</p>
      <p class="bottom-p">Факультет Автоматики и Вычислительной техники</p>

    </BaseBlock>

</template>

<script>
import BaseBlock from './BaseBlock.vue';

export default {
  components: {BaseBlock}
}

</script>

