<template>
  <div
    class="background"
    style="font-family: Verdana, Geneva, Tahoma, sans-serif"
  >
    <div class="content">
      <span class="text-h2 text-weight-regular" style="color: orange"
        >{{name}}</span
      >
      <p class="q-pa-md" style="font-size: medium">
        {{ description }}
      </p>
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
          <q-card class="my2-card" flat bordered>
            <q-card-section
              horizontal
              style="
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                font-size: larger;
              "
            >
              <q-card-section>
                <p>
                  Yazılım geliştirme alanında çeşitli projelerde yer aldım ve
                  her biri bana farklı deneyimler kazandırdı. E-ticaret
                  siteleri, kurumsal web uygulamaları ve interaktif kullanıcı
                  arayüzleri üzerinde çalıştım. Tailwind CSS kullanarak modern
                  ve responsive tasarımlar oluşturdum, Vue.js ile dinamik web
                  uygulamaları geliştirdim ve Django ile güçlü ve güvenli
                  backend çözümleri sundum.
                </p>
              </q-card-section>

              <q-separator vertical />

              <q-card-section style="color: rgb(255, 128, 0)">
                <p>
                  Her projede, kullanıcı ihtiyaçlarını ve beklentilerini en iyi
                  şekilde karşılayacak çözümler üretmeye odaklandım.
                </p>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div class="clip-path" id="contact">
      <div class="content">
        <div class="social-icons">
          <div class="icon-container">
            <!-- <i class="fa-brands fa-linkedin"></i>
        <div class="icon-label">LinkedIn</div> -->
            <q-btn flat icon="fa-brands fa-linkedin" href="https://www.linkedin.com/in/sitran-%C3%A7elik-4810b3203/" size="30px"
            />
            <div class="icon-label">LinkedIn</div>
          </div>
          <div class="icon-container">
            <q-btn flat icon="fa-brands fa-github" href="https://github.com/strnclk" size="30px"
            />
            <div class="icon-label">Github</div>
          </div>
          <div class="icon-container">
            <q-btn flat icon="fa-solid fa-envelope" href="mailto:sitran.celik@gmail.com" size="30px"
            />
            <div class="icon-label">Mail</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';


const name=ref('');
const description=ref('');

// Verileri LocalStorage'a kaydet
    


export default {
  setup() {
     onMounted(async()=>{
      await getSkillsData();
     })
    const getSkillsData = async () => {
      try {
        const response = await axios.get('http://localhost:5159/api/Admin/getfeature');
        // Verilerin API'den nasıl geldiğine bağlı olarak bu kısmı düzenleyin
        console.log('veriler',response.data);
        name.value=response.data.data.name;
        description.value=response.data.data.description;

      } catch (err) {
      }
    };
    return {
      slide: ref(1),
      values: [30, 80, 80, 50, 50, 30, 70, 80, 40],
      labels: [
        "C#",
        "HTML",
        "CSS",
        "PYTHON",
        "JAVASCRIPT",
        "PHP",
        "FIGMA",
        "BOOTSTRAP",
        "JAVA",
      ],
      getSkillsData,
      name,
      description,
    };
  },
};
</script>


<style scoped>
.column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>