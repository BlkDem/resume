<template>
  <footer class="background-gradient print-hide">
    {{ footer }}
  </footer>
</template>

</template>

<script>
export default {
  props: {
    footer: {},
  },
}

</script>
<style lang="scss" scoped>
@import "../scss/App.scss";
.background-gradient {
  background: $white-color;
  background: -moz-linear-gradient(90deg, $white-color 0%, $gold-light 50%, $white-color 100%);
  background: -webkit-linear-gradient(90deg, $white-color 0%, $gold-light 50%, $white-color 100%);
  background: linear-gradient(90deg, $white-color 0%, $gold-light 50%, $white-color 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ffffff",GradientType=1);
}

  @media print {
    .print-hide {
      display: none;
    }
  }


</style>
