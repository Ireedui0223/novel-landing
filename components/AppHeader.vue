<template>
  <header class="d-flex justify-space-around align-center">
    <div
      style="
        z-index: 2 !important;
        background-color: rgba(5, 10, 30, 0.9);
        width: 100%;
      "
    >
      <div
        class="d-none d-md-flex justify-space-between align-center main-width mx-auto"
      >
        <NuxtLink
          :to="localPath('/')"
          class="d-flex align-center text-decoration-none ml-n4"
        >
          <v-img
            src="@/public/images/logo/novel-logo-white.png"
            alt="Your Logo"
            max-height="250"
            max-width="250"
            width="250"
            contain
          />
        </NuxtLink>
        <div class="d-flex justify-space-between align-center">
          <v-btn
            v-for="item in menu_items"
            :key="item.title"
            :to="localPath(item.route)"
            class="font-weight-bold text-capitalize text-h5 pa-6 d-flex"
            variant="text"
            color="primary"
          >
            {{ $t(item.title) }}
          </v-btn>
          <div
            class="text-primary rounded-xl d-flex flex-align-center flex-justify-center ml-10"
            style="border: 1px dashed"
          >
            <v-btn
              href="tel:+97670131616"
              class="font-weight-bold text-primary rounded-xl px-10 py-6 font-weight-medium text-capitalize text-primary text-h5 d-flex"
              variant="text"
              color="primary"
            >
              70131616
            </v-btn>
          </div>
          <LangSwitcher class="ml-6" />
        </div>
      </div>
      <div
        style="
          position: fixed;
          width: 100vw;
          z-index: 2 !important;
          background-color: rgba(5, 10, 30, 0.9);
        "
      >
        <div
          class="d-flex d-md-none justify-space-between align-center main-width mx-6"
        >
          <NuxtLink
            :to="localPath('/')"
            class="d-flex align-center text-decoration-none ml-n4"
          >
            <v-img
              src="@/public/images/logo/novel-logo-white.png"
              alt="Your Logo"
              max-height="170"
              max-width="170"
              width="170"
              contain
            />
          </NuxtLink>
          <v-btn variant="text" color="primary" @click="drawer = !drawer">
            <Icon name="ph-list" class="text-primary" size="30" />
          </v-btn>
        </div>
      </div>
    </div>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="left"
      :style="
        'border: none;' +
        (drawer ? 'box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.3)' : '')
      "
    >
      <div
        class="py-6 d-flex flex-column justify-space-between align-center"
        style="
          z-index: 2 !important;
          background-color: rgba(5, 10, 30);
          width: 100%;
          height: 100%;
        "
      >
        <div>
          <NuxtLink
            :to="localPath('/')"
            class="d-flex align-center text-decoration-none"
          >
            <v-img
              src="@/public/images/logo/novel-logo-white.png"
              alt="Your Logo"
              contain
            />
          </NuxtLink>
          <v-btn
            v-for="item in menu_items"
            :key="item.title"
            :to="localPath(item.route)"
            :class="[
              'font-weight-bold text-capitalize text-h5  pa-6 d-flex mb-6'
            ]"
            variant="text"
            color="primary"
          >
            {{ $t(item.title) }}
          </v-btn>
          <div
            class="text-primary rounded-xl d-flex flex-align-center flex-justify-center ml-10"
            style="border: 1px dashed"
          >
            <v-btn
              href="tel:+97670131616"
              class="font-weight-bold text-primary rounded-xl px-10 py-6 font-weight-medium text-capitalize text-primary text-h5 d-flex"
              variant="text"
              color="primary"
            >
              70131616
            </v-btn>
          </div>
        </div>

        <LangSwitcher class="ml-6" />
      </div>
    </v-navigation-drawer>
  </header>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()

console.log(mobile.value, 'mobile')

const drawer = ref(false)
const localPath = useLocalePath()

const menu_items = ref([
  {
    title: 'aboutLink',
    route: '/about'
  },
  {
    title: 'serviceLink',
    route: '/#services'
  },
  {
    title: 'contactLink',
    route: '/#contact'
  }
])
</script>

<style lang="scss" scoped>
.main-width {
  max-width: 1380px;
}
@media screen and (max-width: 600px) {
  .main-width {
    margin: 0 12px;
  }
}

@media screen and (max-width: 1380px) {
  .main-width {
    margin: 0 24px;
  }
}
.side-image {
  position: absolute;
  right: -120px;
  z-index: 0;
}
</style>
