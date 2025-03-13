<template>
  <div style="width: 100%">
    <v-footer color="transparent" style="width: 100%; border: none">
      <div style="width: 100%">
        <div style="width: 100%" class="d-flex justify-center">
          <h2
            class="text-center gradient-text text-h3 font-weight-bold text-uppercase mb-16"
          >
            Холбоо Барих
          </h2>
        </div>

        <v-row class="mb-0">
          <!-- Contact Information Section -->
          <v-col cols="12" md="8">
            <v-card color="transparent" class="pa-6 box-border">
              <v-row class="pa-4">
                <v-col
                  v-for="(contactInfo, index) in contactInfos"
                  :key="`contact-${index}`"
                  cols="12"
                  md="6"
                  class="mb-8"
                >
                  <div>
                    <p class="text-primary">
                      <Icon :name="contactInfo.icon" size="30" />
                    </p>
                    <p class="text-white text-h6 font-weight-medium mb-1">
                      {{ contactInfo.label }}:
                    </p>
                    <div
                      class="text-subtitle-1 font-weight-thin"
                      style="color: #dddede"
                      v-html="contactInfo.value"
                    />
                  </div>
                </v-col>
              </v-row>
              <!-- Map Section -->
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2630.6489042565045!2d106.91771524412967!3d47.92916187247105!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693006f9eb443%3A0x10a718d70a6f04f4!2sNovel%20Group!5e1!3m2!1smn!2smn!4v1741443485261!5m2!1smn!2smn"
                  width="100%"
                  height="200"
                  style="border: 0; background-color: transparent"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                />
              </div>
            </v-card>
          </v-col>

          <!-- Contact Form Section -->
          <v-col
            cols="12"
            md="4"
            class="d-flex flex-column align-center justify-center"
          >
            <v-card
              flat
              color="transparent"
              class="pa-2 white-text"
              style="width: 100%"
            >
              <v-form ref="form" v-model="valid" lazy-validation>
                <p class="text-white mb-1">Овог, Нэр</p>
                <v-text-field
                  v-model="name"
                  color="white"
                  class="mb-2"
                  variant="solo"
                />

                <p class="text-white mb-1">И-Мэйл</p>
                <v-text-field
                  v-model="email"
                  color="white"
                  variant="solo"
                  class="mb-2"
                />

                <p class="text-white mb-1">Санал хүсэлт</p>
                <v-textarea
                  v-model="message"
                  bg-color="white"
                  rows="4"
                  class="mb-4"
                />

                <v-btn
                  color="blue"
                  class="white-text text-capitalize text-h6 px-12 py-6 d-flex align-center"
                  elevation="0"
                  :disabled="!valid"
                  @click="submit"
                >
                  Илгээх
                </v-btn>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-footer>
  </div>
</template>

<script setup>
const contactInfos = ref([
  {
    icon: 'ph-phone',
    iconColor: 'primary',
    label: 'Утас',
    value: '7013 1616'
  },
  {
    icon: 'ph-envelope',
    iconColor: 'primary',
    label: 'И-Мэйл',
    value: 'info@novel.mn'
  },
  {
    icon: 'ph-clock',
    iconColor: 'primary',
    label: 'Ажлын цагийн хуваарь',
    value: 'Даваа-Баасан <br> 08:30am - 17:30px'
  },
  {
    icon: 'ph-envelope',
    iconColor: 'primary',
    label: 'И-Мэйл',
    value: 'info@novel.mn'
  }
])

const valid = ref(false)
const name = ref('')
const email = ref('')
const message = ref('')
const submit = () => {
  if (name.value && email.value && message.value) {
    console.log({
      name: name.value,
      email: email.value,
      message: message.value
    })
    name.value = ''
    email.value = ''
    message.value = ''
    valid.value = false
  }
}
</script>

<style scoped>
.v-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.gradient-text {
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  background: linear-gradient(to right, #c4daff, #ffffff, #c4daff);
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
  width: 95%;
}

.box-border {
  border: 3px solid;
  border-color: #2e4ad5;
}
</style>
