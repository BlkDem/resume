<template>

  <div class="container">
    <div class="row">
    <div class="col-3 col-sm-3 col-md-3 col-lg-3 bg-dark">
      <slot name="left">

      </slot>
    </div>
    <div  class="col-9 col-sm-9 col-md-9 col-lg-9">
      <slot name="right">

      </slot>
    </div>
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
