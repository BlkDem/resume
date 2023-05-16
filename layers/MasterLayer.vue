<template>

  <div class="container">
    <div class="row row-right-border">
    <div class="col-sm-3 col-md-4 bg-dark">
      <slot name="left">

      </slot>
    </div>
    <div  class="col-sm-9 col-md-8">
      <slot name="right">

      </slot>
    </div>
  </div>
  <div class="row">
    <slot name="bottom">

    </slot>
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>
