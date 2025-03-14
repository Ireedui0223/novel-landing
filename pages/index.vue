// Updated Vue template with i18n
<template>
  <div>
    <img
      class="side-image d-none d-md-flex"
      style="filter: brightness(0.7)"
      src="@/public/images/mining.png"
      alt="Side image"
    />
    <div class="d-none d-md-flex" style="height: 25vh" />
    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <h3
          class="text-primary text-h3 font-weight-bold text-uppercase mb-4 pb-2 lower-line text-center text-md-left"
        >
          {{ $t('title.companyName') }}
        </h3>
        <p class="text-white text-body-1 mb-3 text-center text-md-left">
          {{ $t('description.company') }}
        </p>
      </v-col>
    </v-row>
    <div class="d-none d-md-flex" style="height: 10vh" />

    <v-row>
      <v-col
        v-for="(stat, index) in stats"
        :key="index"
        cols="12"
        sm="6"
        md="3"
      >
        <v-card
          color="transparent"
          class="d-flex align-center justify-center"
          style="width: 100%; aspect-ratio: 1; height: 100%"
        >
          <div
            class="pa-7 text-center box-border text-primary d-flex flex-column justify-space-between"
            style="width: 100%; height: 100%"
          >
            <p class="text-white text-h5 font-weight-medium text-right">
              {{ $t(stat.header) }}
            </p>
            <h3 class="text-white text-h1 font-weight-bold text-left no-break">
              {{ stat.value }}
            </h3>
            <p class="text-white text-h6 font-weight-medium text-left">
              {{ $t(stat.description) }}
            </p>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <div class="d-none d-md-flex text-primary" style="height: 10vh" />

    <div id="services" style="width='100vw'; margin-left:-300px" />
    <section>
      <div class="d-flex justify-center mb-12">
        <h2
          class="text-h3 text-center text-white text-uppercase mt-12 mb-2 gradient-text"
        >
          {{ $t('title.groupCompanies') }}
        </h2>
      </div>
      <v-row>
        <v-col
          v-for="company in companies"
          :key="company.name"
          cols="12"
          sm="6"
          md="3"
        >
          <v-card color="transparent" style="width: 100%; height: 100%">
            <div
              class="pa-7 text-center box-border text-primary d-flex flex-column justify-space-between align-center"
              style="width: 100%; height: 100%"
            >
              <div>
                <Icon :name="company.icon" size="60" class="mb-4" />
                <div
                  style="height: 60px"
                  class="d-flex flex-column align-center justify-space-between mb-4"
                >
                  <h3
                    class="d-flex align-center justify-center flex-column text-white"
                  >
                    <span>
                      {{ $t(company.name) }}
                    </span>
                  </h3>
                  <div
                    class="lower-line text-primary mt-2"
                    style="width: 50%; margin: 0 auto"
                  />
                </div>
                <p class="text-white text-subtitle-1">
                  {{ $t(company.description) }}
                </p>
              </div>
              <v-btn
                color="primary"
                variant="outlined"
                rounded
                class="mt-5"
                :to="localPath(company.path)"
              >
                <span class="text-capitalize font-weight-bold text-h6">
                  {{ $t('button.details') }}
                </span>
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <div class="d-none d-md-flex text-primary" style="height: 10vh" />
    <div id="contact" style="width='100vw'; margin-left:-300px" />
    <AppFooter class="mt-12" />
  </div>
</template>

<script setup>
const localPath = useLocalePath()
const companies = [
  {
    name: 'company.investment',
    path: '/investment',
    icon: 'ph-handshake',
    description: 'desc.investment'
  },
  {
    name: 'company.leasing',
    path: '/leasing',
    icon: 'ph-globe',
    description: 'desc.leasing'
  },
  {
    name: 'company.exchange',
    path: '/exchange',
    icon: 'ph-chart-line-up',
    description: 'desc.exchange'
  },
  {
    name: 'company.bayalagFeed',
    path: '/bayalag-feed',
    icon: 'ph-buildings',
    description: 'desc.bayalagFeed'
  },
  {
    name: 'company.mining',
    path: '/mining',
    icon: 'ph-truck',
    description: 'desc.mining'
  },
  {
    name: 'company.bayalagTahia',
    path: '/bayalag-tahia',
    icon: 'ph-factory',
    description: 'desc.bayalagTahia'
  },
  {
    name: 'company.uyugUndug',
    path: '/uyug-undug',
    icon: 'ph-warehouse',
    description: 'desc.uyugUndug'
  },
  {
    name: 'company.malchin',
    path: '/malchin',
    icon: 'ph-television-simple',
    description: 'desc.malchin'
  }
]

const stats = [
  { header: 'stats.year', value: '2015', description: 'stats.started' },
  {
    header: 'stats.clients',
    value: '500k+',
    description: 'stats.satisfiedClients'
  },
  {
    header: 'stats.partners',
    value: '20+',
    description: 'stats.partnerCompanies'
  },
  { header: 'stats.trust', value: '100%', description: 'stats.trustQuality' }
]
</script>

<style scoped>
.lower-line {
  border-bottom: 3px solid;
}
.text-center {
  text-align: center;
}
.box-border {
  border: 3px solid;
}

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

.side-image {
  position: absolute;
  right: -120px;
  z-index: 0;
}
</style>
