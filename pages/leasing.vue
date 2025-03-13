<template>
  <div class="py-12">
    <v-row>
      <v-col cols="12" md="6" class="ma-auto">
        <div>
          <img
            src="@/public/images/shildeg-ajil.jpg"
            width="100%"
            style="border-radius: 20px; object-fit: cover"
          />
          <p
            class="text-center text-white text-h6 mx-auto mt-4"
            style="max-width: 340px"
          >
            2023 оны Монгол улсын Шилдэг ажил олгогчоор шалгарав.
          </p>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div>
          <h3 class="gradient-text text-h3 mb-4">"НОВЕЛ ЛИЗИНГ" ХХК</h3>

          <p class="text-white text-body-1 mb-3">
            &nbsp &nbsp &nbsp "Новел Лизинг" ХХК нь 2017 онд херенге оруулалт,
            санхуугийн үйлчилгээгээр дамжуулан гадаад худалдаа, бизнесийн уйл
            ажиллагааг эрхлэх зорилготой байгуулагдсан бегеед санхуугийн
            турээсийн таатай орчныг бүрдүүлэн Монгол улсын бүх аймаг нутаг
            дэвсгэрт БНСУ болон Япон улсаас дунд оврын ачааны болон суудлын
            автомашиныг импортлон оруулж ирэн малчид, ард иргэдийнхээ хэрэгцээнд
            нийцүүлэн, толборийн уян хатан нөхцөлтэйгөөр санал болгон ажиллаж
            ирсэн юм.
          </p>
          <p class="text-white text-body-1 mb-3">
            &nbsp &nbsp &nbsp Мен бид үйл ажиллагаагаа улам ергежүүлэн далхийн
            нэр хүнд бүхий Франц улсын Michelin брэнд, БНХАУ-ын Махат брэнд, мен
            БНХАУ-ын Kunlun брэндийн том оврын дугуйг уул уурхайн салбарт
            нэвтрүүлэн өндөр стандарт бүхий чанарыг таниулж, эдэлгээг
            уртасгасан, здийн засгийн асар ендер хэмнэлт бхий давуу талыг
            шингээсэн бутээгдэхүунуудийг албан ёсны борлуулагчийн эрхтэйгээр
            Монгол улсын уул уурхайн салбарын хэрэглээнд нэвтрүүлж чадсан.
          </p>
          <p class="text-white text-body-1">
            &nbsp &nbsp &nbsp Мен түүнчлэн, БНСУ-ын SpeedMate брэндийн тос
            тосолгооны материал, сэлбэг хэрэгсал, шингэн аккумлятор зэргийг
            импортлон нэр хунд бухий томоохон харилцагчдадаа цаг алдалгуйгээр,
            чанарын ендер тувшинд нийлүүлж ирсэн байна.
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

    <h2
      class="text-h3 text-center text-white text-uppercase mt-12 mb-6 gradient-text-center"
    >
      Үйл ажиллагааны чиглэл
    </h2>
    <v-row class="mt-4">
      <v-col cols="6" md="3">
        <v-img
          src="@/public/images/leasing/zagwar3.jpg"
          height="100%"
          width="100%"
          cover
          class="d-flex justify-end align-end poster-image-container"
        >
          <p
            class="image-desc text-center text-white text-body-1 d-flex align-center justify-center"
          >
            Хүнд даацын машин механизмын худалдаа
          </p>
        </v-img>
      </v-col>
      <v-col cols="6" md="3">
        <v-img
          src="@/public/images/leasing/michelin-post-zagwar.jpg"
          height="100%"
          width="100%"
          cover
          class="d-flex justify-end align-end poster-image-container"
        >
          <p
            class="image-desc text-center text-white text-body-1 d-flex align-center justify-center"
          >
            Уул уурхайн том оврын дугуйн худалдаа
          </p>
        </v-img>
      </v-col>
      <v-col cols="6" md="3">
        <v-img
          src="@/public/images/leasing/zagwar1.jpg"
          height="100%"
          width="100%"
          cover
          class="d-flex justify-end align-end poster-image-container"
        >
          <p
            class="image-desc text-center text-white text-body-1 d-flex align-center justify-center"
          >
            Машин механизмын тос тосолгооны бүтээгдэхүүн худалдаа
          </p>
        </v-img>
      </v-col>
      <v-col cols="6" md="3">
        <v-img
          src="@/public/images/leasing/2.jpg"
          height="100%"
          width="100%"
          cover
          class="d-flex justify-end align-end poster-image-container"
        >
          <p
            class="image-desc text-center text-white text-body-1 d-flex align-center justify-center"
          >
            Хүнд даацын машины сэлбэг худалдаа
          </p>
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.poster-image-container {
  box-shadow: #1b2b64 5px 3px 3px;
}
.image-desc {
  background: rgba(5, 6, 22, 0.9);
  height: 60px;
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
.angled-line {
  width: 400px; /* Adjust width to match the length of the line */
  height: 2px; /* Thickness of the line */
  background-color: #1e90ff; /* Blue color similar to the image */
  transform: rotate(-2deg); /* Slight downward angle, adjust as needed */
  transform-origin: left bottom; /* Rotate from the bottom left */
}
.line-container {
  position: relative;
  width: 100vh;
  height: 50px; /* Adjust height */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 35%;
    height: 2px;
    background-color: #007bff;
    transform: translateY(-50%) rotate(10deg);
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 50%;
    height: 2px;
    background-color: #007bff; /* Blue color */
    transform: translateY(-50%) rotate(-15deg);
  }
}
</style>
