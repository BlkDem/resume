<template>
  <footer class="background-gradient">
    BlkDem &copy;2023
    <!-- <p><a href="https://github.com/BlkDem/resume" target="_blank">https://github.com/BlkDem/resume</a></p> -->
  </footer>
</template>

<style lang="scss" scoped>
@import "../scss/App.scss";
.background-gradient {
  background: $white-color;
  background: -moz-linear-gradient(90deg, $white-color 0%, $gold-light 50%, $white-color 100%);
  background: -webkit-linear-gradient(90deg, $white-color 0%, $gold-light 50%, $white-color 100%);
  background: linear-gradient(90deg, $white-color 0%, $gold-light 50%, $white-color 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ffffff",GradientType=1);
}

</style>
