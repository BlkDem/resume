<template>

  <section :name="sectionName">
      <header>
        <h3 :class="{'light-color': color==='light', 'dark-color': color==='dark'}">
          <span class="gold">
            <font-awesome-icon :icon="icon" />
          </span>
          {{ cardCaption }}
        </h3>
      </header>

      <main>
        <slot> </slot>

      </main>
  </section>

</template>

<script>

export default {
  props: {
    sectionName: {
      type: String,
      default: 'section'
    },

    cardCaption: {
      type: String,
      default: 'Caption'
    },

    color: {
      type: String,
      default: '#eee'
    },

    isDark: {
      type: Boolean,
      default: false
    },

    icon: {
      type: String,
      default: 'fa-brands fa-ubuntu'
    }
  }
}

</script>

<style>

.light-color {
  color: #fff;
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
