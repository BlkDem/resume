<template>
  <MasterLayer>
    <template v-slot:left>

      <Logo />

      <div class="media-hide">

        <h2 class="skills">Skills</h2>

        <SoftSkills />

        <HardSkills />

      </div>

    </template>
    <template v-slot:right>

      <MainHead />

      <Intro />

      <ExperienceDetail />

      <Education />

      <Experience />

      <Languages />

      <Portfolio />

    </template>
  </MasterLayer>
</template>

<script>
import MasterLayer from '../layers/MasterLayer.vue';
import Logo from '../components/Logo.vue'
import SoftSkills from '../components/SoftSkills.vue'
import HardSkills from '../components/HardSkills.vue'
import MainHead from '../components/MainHead.vue'
import Experience from '../components/Experience.vue';
import ExperienceDetail from '../components/ExperienceDetail.vue';
import Education from '../components/Education.vue';
import Languages from '../components/Languages.vue';
import Portfolio from '../components/Portfolio.vue';
import Intro from '../components/Intro.vue';

export default {
    name: "IndexPage",
    components: {
    MasterLayer,
    Logo,
    SoftSkills,
    HardSkills,
    MainHead,
    Experience,
    ExperienceDetail,
    Education,
    Languages,
    Portfolio,
    Intro,
}
}
</script>

<style lang="scss">

@import "../scss/App.scss";

</style>
