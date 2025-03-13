<template>
  <div class="py-12">
    <v-row>
      <v-col cols="12" md="6">
        <div class="pr-16" style="">
          <img
            src="@/public/images/takhia/image-2.jpg"
            width="100%"
            style="aspect-ratio: 1/1; border-radius: 20px; object-fit: cover"
          />
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div>
          <h3 class="gradient-text text-h3 mb-4">"МАЛЧИН ТЕЛЕВИЗ" ХХК</h3>

          <p class="text-white text-h6 mb-3">
            "Малчин" ХХК нь Монголын Сэргээгдэх эрчим хүчний салбарт тэргүүлэх
            байр эзлэх компани. Монголын малчдын төлөө, тэдний амьдрах орчин
            нөхцөлийг сайжруулах талаар их зүйл хийсэн хамт олон юм.
          </p>
          <p class="text-white text-h6 mb-3">
            Анх 1994 онд Дамбий овогтой Чинзориг гэж хун байгуулж, говийн малчин
            өрхүүдийг анх нарны эрчим хүчээр гэрэлтэй болгож, лаа гэдэг зүйлээс
            холдуулсан юм. Эдүгээ малчин түмний итгэлийг хүлээсэн, Монголдоо
            "Малчингийн шар" гэсэн брэнд үүсгээд байгаа. Мөн нар болон салхины
            эрчим хүчээр хангах олон төслийг амжилттай хэрэгжүүлсэн.
          </p>
          <p class="text-white text-h6">
            Малчин-нүүдлийн мал аж ахуйд бэлчээрийн аж ахуй эрхлэгчийг нэрлэсэн
            нэр.
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
</style>
