<template>

  <div class="container">
    <div v-show="loading" class="preloader">
      <b-spinner style="width: 3rem; height: 3rem;" variant="warning" label="Loading..."></b-spinner>
    </div>

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
  data() {
    return{ 
      loading: true,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => {
          this.loading = false
          this.$nuxt.$loading.finish()
        }, 1400)
    })
  }
}
</script>

<style scoped lang="scss">

@import "../scss/App.scss";

.preloader {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 999999;
    display: flex;
    align-items: center;
    justify-content: center;  
    background: $white-color;
    transition: all 0.5s;
    opacity: 1;
}
.preloader-remove {
    opacity: 0;
    z-index: -10;
}
</style>