<template>
  <div>
    <h2
      class="text-h3 text-center text-white text-uppercase mt-12 mb-2 gradient-text mb-12"
      style="width: 100%"
    >
      Захирлын мэндчилгээ
    </h2>
    <v-row class="mb-16">
      <v-col cols="12" md="4">
        <p class="text-body-1 text-white d-flex">
          &nbsp &nbsp &nbsp Новел Групп үүсч хөгжихөд үнэтэй хувь нэмэр оруулж,
          бидэнтэй хамтдаа хөгжин дэвшсэн, хийж бүтээсэн он жилүүд хэдийнээ 10
          жилийг үдэх гэж байна. 2015 онд бидний уйл ажиллагаа "Новел Инвестмент
          УЦК" ХХК-ийн үйл ажиллагаагаар эхэлж байсан бол өнөөдер бид хөренге
          оруулалт, үнэт цаас, санхүүгийн зөвлөх үйлчилгээ, санхүүгийн түрээсийн
          үйлчилгээ, гадаад худалдаа, уул уурхайн олборлолт, уул уурхайн техник,
          машин механизмын бараа бүтээгдэхүүн, хунс уйлдвэрлэл, эрчимжсэн мал аж
          ахуй, телевизийн салбар, газар тариалан зэрэг салбаруудад хүч түрэн
          ажиллаж байна.
        </p>
      </v-col>
      <v-col cols="12" md="8" class="">
        <p class="text-body-1 text-white pl-14 row-gap">
          &nbsp &nbsp &nbsp Өнөөдрийг хүртэлх манай баг хамт олны ололт амжилтын
          ард бидний итгэлтэй, найдвартай, хариуцлагатай харилцагч, хөрөнгө
          оруулагч бүрийн хамтын ажиллагаа, дэмжлэг туслалцаа чухал байр суурь,
          унэ цэнийг эзэлж байсан нь бидэнд итгэсэн итгэлээр дуурэн бизнесийн
          харилцаа байсныг дурдахад бахархууштай.
          <br />
          &nbsp &nbsp &nbsp Бид ирэх он жилүүдэд Монгол улсынхаа стратеги
          телевлелт, чиг хандлагад нийцүүлэн группийнхээ уйл ажиллагааг нягт
          уялдуулан ажиллаж хөдөлмөрлөн улсынхаа эдийн засагт хувь нэмрээ
          оруулан ажиллах болно гэдгийг Та бүхэндээ мэдэгдэхэд таатай байна.
          <br />
          &nbsp &nbsp &nbsp Бидний үйл ажиллагааг дэмжин ажиллаж ирсэн харилцагч
          та бүхэндээ талархахын зэрэгцээ эруул энх сайн сайхныг хусч, амжилт
          бутээлээр дүүрэн байхыг ерееж хамтдаа хегжин дэвшиж энэхуу цаг үеээ
          бутээлцэхийг хусье.
        </p>
      </v-col>
    </v-row>

    <div class="slider-container py-4 bg-white">
      <div class="group">
        <div v-for="(logo, index) in logos" :key="index" class="logo-item">
          <img :src="getImagePath(logo)" contain />
        </div>
      </div>
      <div class="group ml-5">
        <div v-for="(logo, index) in logos" :key="index" class="logo-item">
          <img :src="getImagePath(logo)" contain />
        </div>
      </div>
    </div>

    <div style="height: 150px" />

    <v-row class="mt-4 mb-12">
      <v-col cols="12" md="6">
        <v-img
          src="@/public/images/shildeg-ajil.jpg"
          width="100%"
          style="
            border-radius: 20px;
            box-shadow: rgb(43 43 44) 5px 10px 10px;
            aspect-ratio: 2/1;
          "
          cover
          class="mb-4 rounded-xl"
        />
        <h3 class="text-white text-center text-subtitle-1">
          НИЙГМИЙН ДААТГАЛЫН ШИМТГЭЛ ТОЛЕГЧ - ШИЛДЭГ АЖИЛ ОЛГОГЧ
        </h3>
        <p class="text-white text-center text-body-1">
          Монгол Улсын 2023 оны нийгмийн даатгалын шимтгэл төлөлтөөр тэргүүлэгч
          байгууллагуудын нэгээр шалгарлаа.
        </p>
      </v-col>
      <v-col>
        <v-img
          src="@/public/images/top-188.jpg"
          width="100%"
          style="
            border-radius: 20px;
            box-shadow: rgb(43 43 44) 5px 10px 10px;
            aspect-ratio: 2/1;
          "
          cover
          class="mb-4 rounded-xl"
        />
        <p class="text-white text-center text-body-1">
          Новел Лизинг ХХК нь Монгол улсын 2023 оны топ 250 аж ахуйн нэгжийн ТОП
          188 дугаар байрт эрэмбэлэгдлээ.
        </p>
      </v-col>
    </v-row>

    <div>
      <div class="bg-white mt-12 mb-6">
        <v-img
          src="@/public/images/timeline.png"
          width="100%"
          class="timeline-container"
        >
          <div class="timeline-content mb-10">
            <h4 class="text-uppercase">
              <span
                class="text-white text-h4 font-weight-bold pl-4 pr-8 py-2 pb-3"
                style="background-color: #222c5f"
              >
                түүхэн замнал
              </span>
            </h4>
            <p class="mb-6 mt-8 text-h6">
              2024 онд компаниудын үйл ажиллагаа нь енгерсен 10 жилийн хугацаанд
              тогтвортой хөгжиж, цар хүрээгээ өргөжүүлэн бэхжиж 25 охин
              компанийн нэгдэлтэй ундэсний групп компани болтлоо хегжиж дэвшээд
              байна.
            </p>
            <p class="text-h6">
              Новел групп компаниуд Монгол улсынхаа стратеги телевлелттэй
              уялдуулан богино болон урт хугацааны телевлегеег гарган,
              группийнхээ ундсэн зорилгодоо хурэх зорилго зорилтуудыг
              хэрэгжүүлэн дэлхийн жишигт ойртсон бүтээгдэхүүн уйлчилгээг
              үзүүлэхэд анхаарч, үлгэр жишээ, бизнесийн ёс зүйн хэм хэмжээг
              баримталсан группийн хэмжээнд ажиллаж байна.
            </p>
          </div>
        </v-img>
        <div class="mobile-timeline">
          <v-img src="@/public/images/timeline-mobile.png" />
          <div>
            <h4
              class="text-uppercase text-white text-center text-h4 font-weight-bold py-2"
              style="background-color: #222c5f"
            >
              түүхэн замнал
            </h4>
            <p class="mb-6 mt-8 text-h6 px-4">
              &nbsp &nbsp &nbsp 2024 онд компаниудын үйл ажиллагаа нь енгерсен
              10 жилийн хугацаанд тогтвортой хөгжиж, цар хүрээгээ өргөжүүлэн
              бэхжиж 25 охин компанийн нэгдэлтэй ундэсний групп компани болтлоо
              хегжиж дэвшээд байна.
            </p>
            <p class="text-h6 px-4">
              &nbsp &nbsp &nbsp Новел групп компаниуд Монгол улсынхаа стратеги
              телевлелттэй уялдуулан богино болон урт хугацааны телевлегеег
              гарган, группийнхээ ундсэн зорилгодоо хурэх зорилго зорилтуудыг
              хэрэгжүүлэн дэлхийн жишигт ойртсон бүтээгдэхүүн уйлчилгээг
              үзүүлэхэд анхаарч, үлгэр жишээ, бизнесийн ёс зүйн хэм хэмжээг
              баримталсан группийн хэмжээнд ажиллаж байна.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="slider-container py-4 mt-n4" style="background-color: #02021d">
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
  </div>
</template>

<script setup>
const logos = [
  'novel-logo.png', //novel
  'mongolian-lamb.png', //lamb
  'leasing.png', //asset
  'power-leasing.png', // leasing
  'mining.png', //minig
  'baylag-tahia.png', //power
  'mongolian-finance-exchange.png', //finance
  'baylag-feed.png', // feed
  'investment.png', //investment
  'asset.png' //asset
]

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
  font-weight: bold;
  text-transform: uppercase;
  background: linear-gradient(to right, #8ab6ff, #ffffff, #8ab6ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
}

.gradient-text::after {
  content: '';
  display: block;
  height: 2px;
  background: linear-gradient(to right, #c4daff, #ffffff, #c4daff);
  margin: 12px auto 0;
  width: 50%;
}

.slider-container {
  position: absolute;
  height: 100px;
  width: 100vw;
  left: 0;
  overflow: hidden;
  display: flex;
  transform: rotate(3deg);
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
      transform: rotate(-3deg);
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

@media screen and (max-width: 600px) {
  .slider-container {
    transform: rotate(0deg);
    padding: 12px 0px !important;
  }
  .logo-item {
    transform: rotate(0deg) !important;
    margin: 0 12px;
  }
  .row-gap {
    padding: 0 !important;
  }
  .timeline-content {
    display: none;
  }
  .timeline-container {
    display: none;
  }
  .mobile-timeline {
    display: block !important;
  }
}
.mobile-timeline {
  display: none;
}
.timeline-content {
  position: relative;
  top: 7%;
  left: 4%;
  width: 30%;
}
</style>
