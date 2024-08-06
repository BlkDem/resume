<template>

  <div class="container">
    <b-row class="row-right-border">
      <b-col sm="3" md="4" class="bg-dark">
        <slot name="left">

        </slot>
      </b-col>

      <b-col sm="9" md="8">

        <slot name="right">

        </slot>

      </b-col>
    </b-row>
    <slot name="footer">

    </slot>

  </div>

</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 1400)
    })
  }
}
</script>
