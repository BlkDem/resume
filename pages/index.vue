<template>

  <MasterLayer>

    <template v-slot:left>

      <Logo />

      <div class="media-hide">

        <!-- <h2 class="skills"> Prof Skills</h2>

        <Software />

        <Hardware /> -->

        <h2 class="skills"> Soft Skills</h2>

        <SoftSkills :color="'light'"/>

        <SoftTeam :color="'light'"/>



      </div>

    </template>

    <template v-slot:right>

      <MainHead />

      <Intro />

      <Money />

      <MainStack />

      <ArchTags />

      <Education />

      <Experience />

      <Languages />

      <!-- <LastTimes /> -->

      <Portfolio />

      <!-- <AnyProjects /> -->

      <div class="space-4"></div>

      <div class="media-show">
        <!-- <h2 class="skills"> Soft Skills</h2> -->
        <SoftSkills :color="'dark'"/>
        <SoftTeam :color="'dark'"/>
      </div>

    </template>

    <template v-slot:footer >
      <Footer />

      <!-- <TagCloud /> -->
    </template>

  </MasterLayer>

</template>

<script setup>
import MasterLayer from '../layers/MasterLayer.vue';
import Logo from '../components/Logo.vue'
// import Software from '../components/DevSkills.vue'
import SoftSkills from '../components/SoftManagement.vue'
import SoftTeam from '../components/SoftTeam.vue'
// import Hardware from '../components/HardSkills.vue'
import MainHead from '../components/MainHead.vue'
import Experience from '../components/Experience.vue';
import MainStack from '../components/MainStack.vue';
import ArchTags from '../components/ArchTags.vue';
import Education from '../components/Education.vue';
import Languages from '../components/Languages.vue';
import Portfolio from '../components/Portfolio.vue';
import Intro from '../components/Intro.vue';
// import AnyProjects from '../components/Any.vue';
import Money from '../components/Money.vue';
// import LastTimes from '../components/LastTimes.vue';
// import TagCloud from '../components/TagCloud.vue';
import Footer from '../components/Footer.vue';

import { onMounted } from 'vue';

async function postData(url = '', data = {}) {

  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });

  return await response.json();

}

onMounted(() => {

  console.log(process.env.CV_RELEASE);

  const clientData = {};
  clientData['client_userAgent'] = navigator.userAgent;
  clientData['client_fingerprint'] = $nuxt.$fingerprint;
  clientData['client_language'] = navigator.language;
  clientData['client_time'] = new Date();
  clientData['client_timeLocale'] = new Date().toLocaleString();
  clientData['client_timezone'] = Intl.DateTimeFormat().resolvedOptions().timeZone;


  const stat_request = process.env.STAT_HOST + process.env.STAT_REQUEST;

  console.log(`Statistics Server request: ${stat_request}`);

  postData(stat_request, { 'instance': 'cv.blkdem.ru', 'blob': clientData })
    .then((data) => {
      console.log(data); // JSON data parsed by `response.json()` call
    });

})

</script>

<style lang="scss">

@import "../scss/App.scss";

</style>
