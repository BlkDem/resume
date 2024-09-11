<template>
  <header>
    <b-row class="space-bottom-8">
      <b-col md="6" class="media-text-center">
        <h1 class="w-100 p-2">
          {{ profile?.name }}
        </h1>
      </b-col>
      <b-col md="6" class="p-4 font-2x">
        <div class="social-align-right print-hide">
          <a
            class="gold social-space"
            v-for="social in profile?.social"
            :href="social?.link"
            target="_blank"
            v-b-tooltip.hover
            :title="social?.description"
          >
            <font-awesome-icon :icon="social?.icon" size="2xl" />
          </a>
        </div>
        <div class="w-100">
          <p class="my-phone">{{ profile?.phone }}</p>
          <p class="sub-sign">{{ profile?.phone_description }}</p>
        </div>
      </b-col>
    </b-row>
  </header>
</template>

<script>
export default {
  props: {
    profile: {},
  },

  mounted() {
    // console.log(profile)
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/App.scss";
.font-2x {
  font-size: 1.2rem;
}

.icon-social {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.social-space {
  margin-right: 4px;
}

.social-align-right {
  text-align: right;
}

.js-hidelink {
  display: none;
}

.my-phone {
  font-weight: 700;
  font-size: 1.5rem;
  border-bottom: 2px solid $gold-light;
  margin-top: 16px;
  text-align: right;
}

.sub-sign {
  font-size: 1rem;
  margin-top: -14px;
  text-align: right;
}

@media only screen and (min-width: 200px) and (max-width: 768px) {
  .my-phone,
  .sub-sign,
  .social-align-right {
    text-align: center;
  }
}

@media print {
  .space-bottom-8 {
    margin: 0 !important;
    padding: 0 !important;
  }
  .print-hide {
    display: none;
  }
}
</style>
