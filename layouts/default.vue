<template>
  <v-layout align-center justify-center fill-height class="main-layout">
    <div class="refined-acoustic-background">
      <v-main style="height: 100%">
        <AppHeader />
        <div class="main-container main-width">
          <MainMenu />
          <slot />

          <!-- Footer bottom with logo and social links -->
          <div class="mobile-border mt-6">
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
          <v-row class="justify-center align-center mt-2 mb-0">
            <v-col cols="6" sm="6">
              <NuxtLink
                :to="localPath('/')"
                class="d-flex align-center text-decoration-none ml-n4"
              >
                <v-img
                  src="@/public/images/logo/novel-logo-white.png"
                  alt="Your Logo"
                  max-height="200"
                  max-width="200"
                  width="60%"
                  contain
                />
              </NuxtLink>
            </v-col>
            <v-col cols="6" sm="6" class="text-right text-white">
              @Novelgroup 2024
            </v-col>
          </v-row>
        </div>
      </v-main>
    </div>
  </v-layout>
</template>

<script setup>
const localPath = useLocalePath()

// const imgUrl = new URL('@/public/images/background.jpg', import.meta.url).href
</script>

<style>
.refined-acoustic-background {
  background: url('@/public/images/khee-lazy.png');
  background-repeat: repeat;
  width: 100%;
}

.main-container {
  margin: auto;
  z-index: 3; /* Ensures content is above the overlay */

  height: calc(100% - 115px);
}

.main-width {
  max-width: 1380px;
}

.main-layout {
  min-height: 100vh;
  height: 100%;
  background: #020216;
}

@media screen and (max-width: 600px) {
  .main-width {
    margin: 0 12px;
  }
  .main-container {
    padding-top: 70px;
  }
}

@media screen and (max-width: 1380px) {
  .main-width {
    margin: 0 24px;
  }
}
</style>
