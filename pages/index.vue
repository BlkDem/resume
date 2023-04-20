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

body {
  font-family: 'Montserrat', 'Arial', 'Sans Serif';
  font-size: 1rem;
  color: #333;
}

a{
  display: inline-block;
  text-decoration: none;
  color: $link-color;
  /* color: gold;
  transition: transform .2s; */
  transition: 0.3s;
}

a:hover {
  /* text-shadow: 1px 1px 1px #333; */
  transform: scale(1.05);
  text-decoration: none;
  color: $link-hover;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  /* text-transform: uppercase; */
  font-weight: 900;
  margin-top: 1rem;
}

h2 {
  font-size: 2rem;
  color: gold;
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 1rem;
}

h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  /* margin-left: 1rem;
  margin-right: 1rem;*/
  border-bottom: 1px solid grey;
  padding-bottom: 8px;
}

h4 {
  color: #333;
  font-size: 1.1rem;
  font-weight: 700;
}

h5 {
  color: #333;
  font-size: 0.9rem;
  font-weight: 700;
}

ul {
  list-style: circle;
  color: #eee;
}

.skills {
  text-align: center;
  margin-bottom: 2rem;
}

.skills-panel {
  margin-bottom: 3rem;
}

.gold {
  color: gold;
}

.space-4 {
  margin-top: 2rem;
}

.small-p {
  font-size: 0.8rem;
  font-style: italic;
  color: #555;
  margin: 0 8px;
}

.right-p {
  text-align: end;
  margin-bottom: auto;
}

.bottom-p {
  text-align: right;
  font-style: italic;
  font-size: 0.8rem;
}

.row-right-border {
  border-right: 8px solid #333;
}

.flex-right {
  display: flex;
  justify-content: flex-end;
}


@media only screen and (min-width: 320px) and (max-width: 480px) {
    .media-hide {
      display: none;
    }

    .media-text-center {
      text-align: center;
    }

    .flex-right {
      justify-content: center;
    }
}

</style>
