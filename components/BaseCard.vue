<template>
  <div class="m-2">
    <div class="skills-panel">
      <div class="mb-4">
        <h3 :class="{'light-color': color==='light', 'dark-color': color==='dark'}">
          <img src="../store/images/list.png" class="card-item-image" alt="">
          <!-- <span class="gold">&#9931;</span> -->
          {{ cardCaption }}
        </h3>
      </div>

      <slot> </slot>

    </div>
  </div>
</template>

<script>

export default {
  props: {
    cardCaption: {
      type: String,
      default: 'Caption'
    },

    color: {
      type: String,
      default: '#eee'
    }
  }
}

</script>

<style>

.light-color {
  color: #ccc;
}

.dark-color {
  color: #333;
}

.card-item-image {
  height: auto;
  width: 36px;
  margin-bottom: 4px;
}

</style>
