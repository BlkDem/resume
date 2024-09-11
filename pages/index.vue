<template>
  <MasterLayer>
    <template v-slot:left>
      <Logo :profile="cvs?.profile" />
      <ThemeSwitch />

      <div class="media-hide">
        <h2 class="skills">Soft Skills</h2>

        <div v-for="skill in cvs?.skills">
          <Skill :color="'light'" :skill="skill" />
        </div>
        {{ cardCaption }}
      </div>
    </template>

    <template v-slot:right>
      <MainHead :profile="cvs?.profile" />

      <div v-for="article in cvs?.articles">
        <Article :article="article" />
      </div>

      <div class="space-4"></div>

      <div class="media-show">
        <div v-for="skill in cvs?.skills">
          <Skill :color="'dark'" :skill="skill" />
        </div>
      </div>

      <div class="printable-skills">
        <section>
          <h3 style="color: var(--text-primary-color)">
            <span class="gold">
              <font-awesome-icon :icon="'fa-brands fa-ubuntu'" />
            </span>
            SOFT SKILLS
          </h3>
          <SkillInline :skill="skill" v-for="skill in cvs?.skills" />
        </section>
      </div>
    </template>

    <template v-slot:footer>
      <Footer :footer="cvs?.version" />
    </template>
  </MasterLayer>
</template>

<script setup>
import MasterLayer from "../layers/MasterLayer.vue";
import Logo from "../components/Logo.vue";
import Skill from "../components/Skill.vue";
import SkillInline from "../components/SkillInline.vue";
import MainHead from "../components/MainHead.vue";
import Article from "../components/Article.vue";
import Footer from "../components/Footer.vue";
import ThemeSwitch from "../components/ThemeSwitch.vue";

import { onMounted, watch, ref, reactive } from "vue";

const cvs = ref({});

async function getCvData() {
  const url = process.env.NUXT_ENV_DATA_ENDPOINT;
  const response = await fetch(url, {
    method: "GET",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });

  return await response.json();
}

async function sendStat() {
  const clientData = {};
  clientData["client_userAgent"] = navigator.userAgent;
  clientData["client_fingerprint"] = $nuxt.$fingerprint;
  clientData["client_language"] = navigator.language;
  clientData["client_time"] = new Date();
  clientData["client_timeLocale"] = new Date().toLocaleString();
  clientData["client_timezone"] =
    Intl.DateTimeFormat().resolvedOptions().timeZone;

  const stat_request =
    process.env.NUXT_ENV_STAT_HOST + process.env.NUXT_ENV_STAT_REQUEST;

  console.log(`Statistics Server request: ${stat_request}`);

  const response = await fetch(stat_request, {
    method: "POST",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ instance: "cv.blkdem.ru", blob: clientData }),
  });

  return await response.json();
}

onMounted(async () => {
  console.log("CV builder edition v" + process.env.NUXT_ENV_CV_RELEASE);

  sendStat().then((data) => {
    console.log(data);
  });

  cvs.value = await getCvData().then((data) => {
    console.log(data.data.articles[0].article);
    return data.data;
  });
});
</script>

<style lang="scss">
@import "../scss/App.scss";
/* Define styles for the default root window element */
:root {
  --background-color-primary: #fff;
  --background-color-secondary: $white-color;
  --background-color: $white-color;
  --accent-color: $white-silver;
  --text-primary-color: #333;
  --element-size: 4rem;
}

:root.dark-theme {
  --background-color-primary: #2f353b;
  --background-color-secondary: $white-silver;
  --background-color: $white-grey;
  --accent-color: $primary-color;
  --text-primary-color: #fff;
}

.printable-skills {
  display: none;
}

@media print {
  html,
  body,
  h4,
  h3,
  h2,
  h1,
  p,
  ol,
  ul,
  li {
    color: black !important;
    background-color: white !important;
  }

  .printable-skills {
    display: inline;
  }
}
</style>
