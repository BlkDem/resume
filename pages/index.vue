<template>
  <MasterLayer>

    <template v-slot:left>

      <Logo />

      <div class="media-hide">

        <h2 class="skills"> Prof Skills</h2>

        <Software />

        <Hardware />

        <h2 class="skills"> Soft Skills</h2>

        <SoftSkills />

        <SoftTeam />



      </div>

    </template>

    <template v-slot:right>

      <MainHead />

      <Intro />

      <Money />

      <ExperienceDetail />

      <Education />

      <Experience />

      <Languages />

      <Portfolio />

      <AnyProjects />

      <!-- <TagCloud /> -->

    </template>

    <template v-slot:bottom >
      <Footer />

      <TagCloud />
    </template>

  </MasterLayer>


</template>

<script>
import MasterLayer from '../layers/MasterLayer.vue';
import Logo from '../components/Logo.vue'
import Software from '../components/DevSkills.vue'
import SoftSkills from '../components/SoftManagement.vue'
import SoftTeam from '../components/SoftTeam.vue'
import Hardware from '../components/HardSkills.vue'
import MainHead from '../components/MainHead.vue'
import Experience from '../components/Experience.vue';
import ExperienceDetail from '../components/ExperienceDetail.vue';
import Education from '../components/Education.vue';
import Languages from '../components/Languages.vue';
import Portfolio from '../components/Portfolio.vue';
import Intro from '../components/Intro.vue';
import AnyProjects from '../components/Any.vue';
import Money from '../components/Money.vue';
import TagCloud from '../components/TagCloud.vue';
import Footer from '../components/Footer.vue';

export default {
    name: "IndexPage",

    components: {
      MasterLayer,
      Logo,
      Software,
      Hardware,
      SoftSkills,
      SoftTeam,
      MainHead,
      Experience,
      ExperienceDetail,
      Education,
      Languages,
      Portfolio,
      Intro,
      AnyProjects,
      Money,
      TagCloud,
      Footer,
    }
}
</script>

<style lang="scss">

@import "../scss/App.scss";

</style>
