<template>
    <div class="skills-panel">
      <h3 :class="{'light-color': color==='light', 'dark-color': color==='dark'}"><span
          class="gold">&#9931;</span>
        {{ cardCaption }}
      </h3>

      <slot> </slot>

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

</style>
