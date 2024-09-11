<template>
  <p style="display: inline">
    <span v-for="user_skill in skill['user_skill'][0].list">
      {{ user_skill.name }} |
    </span>
  </p>
</template>

<script>
export default {
  props: {
    skill: {},
  },
};
</script>

<style scoped></style>
