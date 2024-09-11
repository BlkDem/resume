<template>
  <div class="image-preview-panel">
    <img
      :src="image"
      class="image-preview"
      :class="{ hide: show === false }"
      @click="imageClick"
    />
  </div>
</template>

<script>
export default {
  props: {
    image: [],
    show: false,
  },

  methods: {
    imageClick() {
      this.$emit("clearIndex");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/App.scss";

$image-height: 220px;

div {
  position: relative;
  height: 100%;
  width: 100%;
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    border: 4px solid $gold-main;
    border-radius: 16px;
  }
}

.hide {
  display: none;
}
</style>
