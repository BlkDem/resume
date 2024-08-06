<template>

  <header>

    <b-row class="space-bottom-8">
      <b-col md="6" class="media-text-center">
        <h1 class="w-100 p-2">
          {{ profile?.name }}
        </h1>
        <!-- <p class="mx-2">Software Engineer</p> -->
        <!-- <p class="mx-2 pt-2" @dblclick="HideLink" :class="{'js-hidelink': isHideLink}">
          <a class="gold" href="/pdf/CV_PyatkovM.pdf">
            <font-awesome-icon icon="fa-solid fa-file-pdf" size="2xl" />
            Save PDF
          </a>
        </p> -->
      </b-col>
      <b-col md="6" class="p-4 font-2x">
          <div class="social-align-right">
            <a class="gold social-space" v-for="social in profile?.social" 
              :href="social?.link" 
              target="_blank" v-b-tooltip.hover
              :title="social?.description">
              <font-awesome-icon :icon="social?.icon" size="2xl" />
            </a>
          </div>
        <!-- <div class="icon-social">
          <div class="mx-1">
            <a class="gold" href="/pdf/CV_PyatkovM.pdf" target="_blank" v-b-tooltip.hover
              title="Save PDF">
            <font-awesome-icon icon="fa-solid fa-file-pdf" size="2xl" />
          </a>
          </div>
          <div class="mx-1">
            <a class="gold" href="https://github.com/BlkDem" target="_blank" v-b-tooltip.hover
              title="https://github.com/BlkDem">
              <font-awesome-icon icon="fa-brands fa-square-github" size="2xl" />
            </a>
          </div>
          <div class="mx-1">
            <a class="gold" href="mailto:blkdem@blkdem.ru" target="_blank" v-b-tooltip.hover title="blkdem@blkdem.ru">
              <font-awesome-icon icon="fa-solid fa-square-envelope" size="2xl" />
            </a>
          </div>
          <div class="mx-1">
            <a class="gold" href="https://wa.me/79039073355" target="_blank" v-b-tooltip.hover
              title="+7 903 907-3355 / +90 501 082-0257">
              <font-awesome-icon icon="fa-brands fa-square-whatsapp" size="2xl" />
            </a>
          </div>
          <div class="mx-1">
            <a class="gold" href="https://t.me/Umolab1" target="_blank" v-b-tooltip.hover title="https://t.me/Umolab1">
              <font-awesome-icon icon="fa-brands fa-telegram" size="2xl" />
            </a>
          </div>
          <div class="mx-1">
            <a class="gold"
              href="https://www.google.com/maps/place/36%C2%B053'43.7%22N+30%C2%B042'14.0%22E/@36.895482,30.7013021,17z/data=!3m1!4b1!4m4!3m3!8m2!3d36.895482!4d30.703877"
              target="_blank" v-b-tooltip.hover title="Antalya, Turkey">
              <font-awesome-icon icon="fa-solid fa-location-crosshairs" size="2xl" />
            </a>
          </div>
        </div> -->
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
  }
}

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
  color: #333;
  margin-top: 16px;
  text-align: right;
}

.sub-sign {
  font-size: 1rem;
  margin-top: -14px;
  text-align: right;
}

@media only screen and (min-width: 200px) and (max-width: 768px) {
  .my-phone, .sub-sign {
    text-align: center;
  }
}

</style>
