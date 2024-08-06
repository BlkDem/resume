<template>

  <MasterLayer>

    <template v-slot:left>

      <Logo  :profile="cvs?.profile"/>

      <div class="media-hide">

        <h2 class="skills"> Soft Skills</h2>

        <div v-for="skill in cvs?.skills">
          <Skill :color="'light'" :skill="skill"/>
        </div>

      </div>

    </template>

    <template v-slot:right>

      <MainHead :profile="cvs?.profile"/>

      <div v-for="article in cvs?.articles">
        <Article :article="article"/>
      </div>

      <div class="space-4"></div>

      <div class="media-show">
        <div v-for="skill in cvs?.skills">
          <Skill :color="'dark'" :skill="skill"/>
        </div>

      </div>

    </template>

    <template v-slot:footer >
      <Footer :footer="cvs?.version"/>

    </template>

  </MasterLayer>

</template>

<script setup>

import MasterLayer from '../layers/MasterLayer.vue';
import Logo from '../components/Logo.vue'
import Skill from '../components/Skill.vue'
import MainHead from '../components/MainHead.vue'
import Article from '../components/Article.vue';
import Footer from '../components/Footer.vue';


import { onMounted, watch, ref, reactive } from 'vue';

const cvs = ref({})

async function getCvData() {

  const url = process.env.DATA_ENDPOINT
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  });

  return await response.json();
}

async function sendStat() {

  const clientData = {};
  clientData['client_userAgent'] = navigator.userAgent;
  clientData['client_fingerprint'] = $nuxt.$fingerprint;
  clientData['client_language'] = navigator.language;
  clientData['client_time'] = new Date();
  clientData['client_timeLocale'] = new Date().toLocaleString();
  clientData['client_timezone'] = Intl.DateTimeFormat().resolvedOptions().timeZone;


  const stat_request = process.env.STAT_HOST + process.env.STAT_REQUEST;

  console.log(`Statistics Server request: ${stat_request}`);

  const response = await fetch(stat_request, {
    method: 'POST',
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({ 'instance': 'cv.blkdem.ru', 'blob': clientData })
  });

  return await response.json();

}


onMounted(async () => {

  console.log(process.env.CV_RELEASE);

  sendStat()
    .then((data) => {
      console.log(data);
    });

  cvs.value = await getCvData()
  .then((data) => {
      console.log(data.data.articles[0].article)
      return data.data
  })
  
})

</script>


<style lang="scss">

@import "../scss/App.scss";

</style>
