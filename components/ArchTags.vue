<template>
  <div class="arch-tags-group m-4">
    <h6><span class="tag tag-default">DRY</span></h6>
    <h6><span class="tag tag-default">KISS</span></h6>
    <h6><span class="tag tag-default">Ockham</span></h6>
    <!-- <h6><span class="tag tag-default">OOP</span></h6> -->
    <h6><span class="tag tag-default">SOLID</span></h6>
    <h6><span class="tag tag-default">YAGNI</span></h6>
    <h6><span class="tag tag-default">BDUF</span></h6>
    <h6><span class="tag tag-default">GRASP</span></h6>
    <h6><span class="tag tag-default">GOF</span></h6>
    <!-- <h5><span class="tag tag-default">Low coupling</span></h5>
    <h5><span class="tag tag-default">High cohesion</span></h5> -->
    <div class="space-4"></div>
  </div>
</template>

<style scoped lang="scss">
@import "../scss/vars";

h6 {
  font-size: 0.8rem;
  font-weight: 700;
}
.arch-tags-group {
  display: flex;
  flex-direction: row;
  row-gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 16px;

  .tag-default {
    background-color: $gold-light;
    color: $white-color;
    padding: 4px 8px;
    margin: 4px 4px;
    border-radius: 4px;
    text-transform: uppercase;
  }
}

</style>
