<template>

  <BaseBlock 
    :section-name="'softskills'"
    :card-caption="skill['skill'].name"
    :icon="'fa-brands fa-ubuntu'"
    :color="color"
    :skill="skill"
  >
  
  <ul :class="{
    'light-text-ul': color==='light', 
    'dark-text-ul': color==='dark'
    }" v-for="user_skill in skill['user_skill'][0].list">
      <li>{{ user_skill.name }}</li>
    </ul>
  </BaseBlock>

</template>

<script>

import BaseBlock from './BaseBlock.vue';

export default {
  components: {BaseBlock},
  props: {
    skill: {},
    color: {
      type: String,
      default: 'light'
    }
  },

  mounted() {
    // console.log(this.skill)
  }
}

</script>

<style scoped>
  .dark-text-ul {
  color: #333;
}
</style>
