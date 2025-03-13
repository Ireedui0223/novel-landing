<template>
  <div>
    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <div class="mt-4">
          <img
            src="@/public/images/feed/IMG_8469.jpg"
            width="100%"
            style="border-radius: 20px; object-fit: cover"
          />
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div>
          <h3 class="gradient-text text-h3 mb-4">"БАЯЛАГ ТАХИА" ХХК</h3>

          <p class="text-white text-h6 mb-3">
            &nbsp &nbsp &nbsp "Баялаг Фийд" ХХК нь 2018 оноос эхлэн эрчимжүүлсэн
            мал аж ахуйд уураг, амин дэм, витаминаар баялаг өдөртөө 240тн,
            сардаа 5000тн тэжээл үйлдвэрлэх хучин чадал бүхий найрлагат
            тэжээлийг үйлдвэрлэж байна.
          </p>
          <p class="text-white text-h6 mb-3">
            &nbsp &nbsp &nbsp Манай компани нь Адууны тэжээл, Хурганы тэжээл,
            Тахианы тэжээл, Гахайн тэжээл, Саалийн үнээний тэжээлүүдийг дотоодын
            фермерүүдэд амжилттай нийлүүлэн үйл ажиллагаа явуулж байна.
          </p>
          <p class="text-white text-h6">
            &nbsp &nbsp &nbsp Монгол улсын хэмжээнд өндөглөгч шувууны 50 гаруй
            аж ахуй, 300 гаруй хувь иргэдэд сар бүр 300-600тн өндөглөгч шувууны
            тэжээл үйлдвэрлэн нийлүүлж байна.
          </p>
          <v-btn
            href="tel:97670131616"
            color="primary"
            rounded
            class="mt-8 text-h5 px-8 text-center"
            height="44px"
          >
            7013 1616
          </v-btn>
        </div>
      </v-col>
    </v-row>

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

    <v-row>
      <v-col cols="12" md="5" class="my-auto">
        <p class="text-white text-h6 pl-4">
          Манай компанийн үндсэн зорилго нь Монгол улсад эрчимжүүлсэн мал аж
          ахуйг хөгжүүлэх, малын төрөл бүрийн тэжээлиӣг эх орондоо үйлдвэрлэх,
          нутагшуулах, бүтээгдэхүүний чанарыг дэлхийн жишигт нийцүүлэх ажиллах
          явдал юм.
        </p>
      </v-col>
      <v-col cols="12" md="7">
        <div class="image-container">
          <div></div>
          <v-img
            height="100%"
            width="100%"
            cover
            src="@/public/images/feed/feeding.jpg"
          ></v-img>
          <v-img
            height="100%"
            width="100%"
            cover
            src="@/public/images/feed/introduc.jpg"
          ></v-img>
          <v-img
            height="100%"
            width="100%"
            cover
            src="@/public/images/feed/package.jpg"
          ></v-img>
          <v-img
            height="100%"
            width="100%"
            cover
            src="@/public/images/feed/industy.jpg"
          ></v-img>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup></script>

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

@media screen and (max-width: 600px) {
  .image-container {
    display: flex !important;
    flex-direction: column;
  }
}

.image-container {
  display: grid;
  grid-template-areas:
    'a b c'
    'a b c';
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 2fr 1fr;
  row-gap: 20px;
  column-gap: 30px;
  :nth-child(2) {
    grid-row: span 2;
  }
}
</style>
