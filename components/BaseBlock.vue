<template>
  <section :name="sectionName">
    <header>
      <h3
        :class="{
          'light-color': color === 'light',
          'dark-color': color === 'dark',
        }"
        class="printable"
      >
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
      default: "section",
    },

    cardCaption: {
      type: String,
      default: "Caption",
    },

    color: {
      type: String,
      default: "#eee",
    },

    isDark: {
      type: Boolean,
      default: false,
    },

    icon: {
      type: String,
      default: "fa-brands fa-ubuntu",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/vars";

.light-color {
  // color: var(--background-color-primary);
}

.dark-color {
  color: var(--text-primary-color);
}

.card-item-image {
  height: auto;
  width: 36px;
  margin-bottom: 4px;
}

@media print {
  .printable {
    margin: 0 !important;
  }
}
</style>
