<template>
  <BaseBlock
    :section-name="'about'"
    :card-caption="'Обо мне'"
    :color="'dark'"
    :icon="'fa-solid fa-envelope-open-text'"
  >
    <article name="intro">
      <header>
        <h4>Привет!</h4>
      </header>
      <p>Меня зовут Максим, и я ищу работу на позицию
        <span class="selected-text">Fullstack Laravel / Vue</span> либо
        <span class="selected-text">Frontend Vue</span> разработчика. Удалённо.
      </p>
      <p>Буду рад помочь в решении задач любой сложности.</p>

    </article>

    <div class="space-4"></div>

  </BaseBlock>

</template>

<script>
import BaseBlock from './BaseBlock.vue';

export default {
  components: {BaseBlock}
}

</script>

<style>
</style>
