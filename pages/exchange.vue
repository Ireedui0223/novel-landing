<template>
  <div class="py-12">
    <v-row>
      <v-col cols="12" md="6">
        <div>
          <img
            src="@/public/images/takhia/image-2.jpg"
            width="100%"
            style="aspect-ratio: 1/1; border-radius: 20px; object-fit: cover"
          />
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div>
          <h3 class="gradient-text text-h3 mb-4">
            "МОНГОЛЫН САНХУУГИЙН БИРЖ" ХХК
          </h3>

          <p class="text-white text-h6 mb-3">
            "Монголын Санхуугийн Бирж" ХХК нь 2017 онд бизнесийн санхуугийн
            зевлех уйлчилгээний чиглэлээр үүсгэн байгуулагдсан бөгөөд Монгол
            улсын Санхүүгийн зах зээлийг хөгжүүлэх зорилгоор үйл ажиллагаагаа
            амжилттай явуулж буй олон жилийн туршлагатай, олны танил нэр хүнд
            бухий 35 орчим аж ахуйн нэгж, компанийн санхуугийн зевлех
            уйлчилгээний чиглэлээр ажиллаж байна.
          </p>
          <v-btn
            href="tel:97677181616"
            color="primary"
            rounded
            class="mt-8 text-h5 px-8 text-center"
            height="44px"
          >
            7718 1616
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <div class="slider-container py-4 mt-10" style="background-color: #02021d">
      <div class="group">
        <div
          v-for="(whiteLogo, index) in whiteLogos"
          :key="index"
          class="logo-item"
        >
          <img :src="getImagePath(whiteLogo)" contain />
        </div>
      </div>
      <div class="group ml-5">
        <div
          v-for="(whiteLogo, index) in whiteLogos"
          :key="index"
          class="logo-item"
        >
          <img :src="getImagePath(whiteLogo)" contain />
        </div>
      </div>
    </div>
    <div style="height: 120px" />

    <div class="pt-16 pb-12 mobile-border">
      <div
        style="
          border: 1px solid;
          border-color: #2e4ad5;
          position: absolute;
          width: 100vw;
          left: 0;
        "
        class="mobile-border"
      />
    </div>
    <h2
      class="text-h3 text-center text-white text-uppercase mt-12 mb-6 gradient-text-center"
    >
      ХАМТЫН АЖИЛЛАГААТАЙ БАЙГУУЛЛАГУУД
    </h2>
    <p class="text-white text-h6 text-center">
      Манай хамт олон харилцагч компаниудын богино хугацаат эргэлтийн хөрөнгиӣн
      санхүүжилтийг бий болгож, тэдгээрийн бизнесийн үйл ажиллагаанд дэмжлэг
      туслалцаа, мэргэжлийн баг хамт олны зөвлөгөө, үйлчилгээг үзүүлэн хөрөнгө
      оруулагч нарынхаа итгэлийг хамгийн ихээр дээдлэн ажиллаж байна. 2024 оны
      байдлаар 1,500 орчим харилцагчдадаа 100 тэрбум орчим тегрегийн эргэлтийн
      хөрөнгийн санхүүжилтийг татан төвлөрүүлсэн байна.
    </p>
  </div>
</template>

<script setup>
const whiteLogos = [
  'investment-white.png', //novel
  'mongolian-lamb-white.png', //lamb
  'leasing-white.png', //asset
  'power-leasing-white.png', // leasing
  'mining-white.png', //minig
  'baylag-tahia-white.png', //power
  'mongolian-finance-exchange-white.png', //finance
  'baylag-feed-white.png', // feed
  'investment-white.png', //investment
  'asset-white.png' //asset
]
const getImagePath = logo => {
  return `/_nuxt/public/images/logo/${logo}`
}
</script>

<style lang="scss" scoped>
.gradient-text {
  text-align: center;
  font-weight: 500;
  text-transform: uppercase;
  background: linear-gradient(to right, #feffff, #a8d8ff, #6182a1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    height: 2px;
    background: linear-gradient(to right, #feffff, #a8d8ff, #ffffff, #6182a1);
    margin: 12px 0;
    width: 100%;
    max-width: 350px;
  }
}

.gradient-text-center {
  width: 100%;
  text-align: center;
  font-weight: 500;
  text-transform: uppercase;
  background: linear-gradient(to right, #feffff, #a8d8ff, #6182a1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    height: 2px;
    background: linear-gradient(to right, #feffff, #a8d8ff, #ffffff, #6182a1);
    margin: 12px auto;
    width: 100%;
    max-width: 500px;
  }
}

.slider-container {
  position: absolute;
  height: 100px;
  width: 100vw;
  left: 0;
  overflow: hidden;
  display: flex;
  max-width: 100vw;
  &::-webkit-scrollbar {
    display: none;
  }
  &:hover .group {
    animation-play-state: paused;
  }
  .group {
    display: flex;
    gap: 20px;
    height: 100%;
    will-change: transform;
    animation: scrolling 30s linear infinite;

    .logo-item {
      color: white;
      font-size: xx-large;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      height: 100%;
      > img {
        height: 100%;
        object-fit: contain;
        background-size: cover;
      }
    }
  }
}

@keyframes scrolling {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
