<template>
  <div class="row space-bottom-8">
    <div class="col-md-6">
      <h1 class="w-100 p-2">
        Максим Пятков
      </h1>
      <p class="mx-2 media-text-center">Hardware&Software Engineer</p>
      <p class="mx-2 media-text-center pt-2">
        <a class="gold" href="/pdf/CV_PyatkovM.pdf">
          <!-- <i class="fa-regular fa-file-pdf"></i> -->
          <font-awesome-icon icon="fa-solid fa-file-pdf" size="2xl" />
          Save PDF
        </a>
      </p>
    </div>
    <div class="col-md-6 p-4 font-2x">
      <div class="icon-social">
        <div class="mx-1">
          <a class="gold" href="https://github.com/BlkDem" target="_blank" v-b-tooltip.hover
            title="https://github.com/BlkDem">
            <font-awesome-icon icon="fa-brands fa-square-github" size="2xl" />
          </a>
        </div>
        <div class="mx-1">
          <a class="gold" href="https://linkedin.com/in/blkdem" target="_blank" v-b-tooltip.hover
            title="https://linkedin.com/in/blkdem">
            <font-awesome-icon icon="fa-brands fa-linkedin" size="2xl" />
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
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.font-900 {
  font-weight: 900;
}

.head-ul {
  list-style: none;
}

.font-2x {
  font-size: 1.2rem;
}

.icon-social {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

</style>
