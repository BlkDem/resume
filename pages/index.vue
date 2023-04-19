<template>
  <MasterLayer>
    <template v-slot:left>
      <Logo />
    </template>
    <template v-slot:right>
      2
    </template>
  </MasterLayer>
</template>

<script>
import MasterLayer from '../layers/MasterLayer.vue';
import Logo from '../components/Logo.vue'

export default {
    name: "IndexPage",
    components: { MasterLayer, Logo }
}
</script>
