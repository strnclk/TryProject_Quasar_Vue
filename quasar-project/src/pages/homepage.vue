<template>
    <div class="background" style="font-family:Verdana, Geneva, Tahoma, sans-serif">
        <div class="content">
      <span class="text-h2 text-weight-regular" style="color: orange;">Merhaba, ben Sitran Çelik</span>
      <p class="q-pa-md" style="font-size: medium;">
       Yaratıcı projeler ve kullanıcı dostu çözümler sunan bir yazılım geliştiricisiyim. Uzmanlık alanlarım arasında front-end ve back-end geliştirme, kullanıcı arayüzü tasarımı ve modern web teknolojilerinin kullanımı yer alıyor. Projelerimde, estetik ve işlevselliği bir araya getirerek her zaman en iyi kullanıcı deneyimini sunmayı hedefliyorum.</p>
  </div>
<div class="diagonal-box bg-one">
    <div class="content">
    <div class="row justify-center">
      <div class="column" v-for="(value, index) in values" :key="index">
        <q-knob
          :step="9"
          :value="value"
          show-value
          size="90px"
          :thickness="0.22"
          color="lime"
          track-color="lime-3"
          class="text-lime q-ma-md"
        />
        <div class="text-center">{{ labels[index] }}</div>
      </div>
    </div>
  </div>
  </div>

<div class="diagonal-box bg-two">
  <div class="content">
    <div class="row items-start q-gutter-md">
    <q-card class="my2-card " flat bordered>
      <q-card-section horizontal style="font-family:Verdana, Geneva, Tahoma, sans-serif;font-size: larger;">
        <q-card-section>
          <p>
            Yazılım geliştirme alanında çeşitli projelerde yer aldım ve her biri bana farklı deneyimler kazandırdı. E-ticaret siteleri, kurumsal web uygulamaları ve interaktif kullanıcı arayüzleri üzerinde çalıştım. Tailwind CSS kullanarak modern ve responsive tasarımlar oluşturdum, Vue.js ile dinamik web uygulamaları geliştirdim ve Django ile güçlü ve güvenli backend çözümleri sundum.</p>
        </q-card-section>

        <q-separator vertical />

        <q-card-section style="color:rgb(255, 128, 0)">
         <p>
          Her projede, kullanıcı ihtiyaçlarını ve beklentilerini en iyi şekilde karşılayacak çözümler üretmeye odaklandım.      
        </p>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
  </div>
</div>
<div class="clip-path">
  <div class="content">
    <div class="social-icons">
      <div class="icon-container">
        <i class="fa-brands fa-linkedin"></i>
        <div class="icon-label">LinkedIn</div>
      </div>
      <div class="icon-container">
        <i class="fa-brands fa-github"></i>
        <div class="icon-label">GitHub</div>
      </div>
      <div class="icon-container">
        <i class="fa-solid fa-envelope"></i>
        <div class="icon-label">Email</div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1),
      values: [30, 80, 80, 50, 50, 30, 70, 80, 40],
      labels: [
        'C#',
        'HTML',
        'CSS',
        'PYTHON',
        'JAVASCRIPT',
        'PHP',
        'FIGMA',
        'BOOTSTRAP',
        'JAVA',
      ] 

    }
  }
}

</script>


<style scoped>
.column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>