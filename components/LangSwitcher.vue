<script setup lang="ts">
const { availableLocales, locale } = useI18n()

const language = computed({
  get: () => locale.value,
  set: (value: string) => {
    locale.value = value
  }
})
</script>
<template>
  <div>
    <v-select
      v-model="language"
      :items="availableLocales"
      variant="solo"
      hide-details
      flat
      color="primary"
      item-color="primary"
      bg-color="primary"
      density="comfortable"
    />

    <!-- <select v-model="language">
      <option v-for="item in availableLocales" :key="item" :value="item">
        {{ item }}
      </option>
    </select> -->
  </div>
</template>
