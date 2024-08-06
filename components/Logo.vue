<template>
  <div name="logo" class="logo-panel">
    <img :src="profile?.image" class="logo-img" alt="">
  </div>
</template>

<script>
export default {
  props: {
    profile: {},
  },

}

</script>

<style lang="scss" scoped>

@import "../scss/App.scss";

$image-height: 220px;
.logo-panel {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    .logo-img {
      width: $image-height;
      height: $image-height;
      border: 4px solid $gold-main;
      border-radius: 50%;
      margin: 16px 16px;
  }
}

</style>
