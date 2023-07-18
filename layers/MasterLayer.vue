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
    <slot name="footer">

    </slot>

  </div>

</template>
