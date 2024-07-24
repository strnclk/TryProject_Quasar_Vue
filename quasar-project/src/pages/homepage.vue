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
          <div class="column" v-for="(value, index) in homepage1" :key="index">
            
            <q-knob
              :step="9"
              :value="value.circle"
              show-value
              size="90px"
              :thickness="0.22"
              color="lime"
              track-color="lime-3"
              class="text-lime q-ma-md"
            />
            <div class="text-center">{{ value.title }}</div>
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
                  {{ bannerdescriptionobje.description1}}
                </p>
              </q-card-section>

              <q-separator vertical />

              <q-card-section style="color: rgb(255, 128, 0)">
                <p>
                  {{bannerdescriptionobje.description2}}
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
      <div class="icon-container" v-for="(item, index) in footer" :key="index">
        <div>{{ item.title }}</div>
        <div>{{ item.icon }}</div>
        <div>{{ item.url }}</div>
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
const homepage1=ref([]);
const bannerdescriptionobje=ref({});
const footer=ref([]);


    


export default {
  setup() {
     onMounted(async()=>{
      await getSkillsData();
      await getHomePageData();
      await getDescriptionData();
      await getFooterData();


     })
    const getSkillsData = async () => {
      try {
        const response = await axios.get('http://localhost:5159/api/Admin/getfeature');
        console.log('veriler',response.data);
        name.value=response.data.data.name;
        description.value=response.data.data.description;

      } catch (err) {
      }
    };
    const getHomePageData = async () => {
      try {
        const response = await axios.get('http://localhost:5159/api/Admin/gethomepage1');
        console.log('veriler',response.data);
        homepage1.value=response.data.data;


      } catch (err) {
      }
    };
    const getDescriptionData = async () => {
      try {
        const response = await axios.get('http://localhost:5159/api/Admin/getdescription');
        console.log('veriler',response.data);
        bannerdescriptionobje.value=response.data.data;


      } catch (err) {
      }
    };
    const getFooterData = async () => {
      try {
        const response = await axios.get('http://localhost:5159/api/Admin/getfooter');
        console.log('veriler',response.data);
        footer.value=response.data.data;


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
      getHomePageData, 
      homepage1,
      bannerdescriptionobje,
      getDescriptionData,getFooterData,footer,

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