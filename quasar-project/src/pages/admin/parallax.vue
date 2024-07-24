<template>
    <q-form @submit.prevent="update" class="q-gutter-md q-my-lg">
  <q-page padding>
    <q-card-section>
        <div class="text-h3 text-orange-14 text-center"> Parallax Güncelleme Ekranı</div>
      </q-card-section>
    <q-card class="my-card">
      <q-card-section>
      <q-input
        filled
        v-model="ParallaxImg"
        label="Parallax"
      />
      </q-card-section>
      <q-card-actions align="center">
        <q-btn label="Güncelle" @click="update" color="orange" />
      </q-card-actions>
    </q-card>
  </q-page>
</q-form>

</template>

<script>
import axios from "axios";
import { useQuasar } from "quasar";
import { ref, onMounted } from "vue";



export default {
  setup() {
    const $q = useQuasar();
    const id = ref(1);
    const ParallaxImg = ref();
    const token = localStorage.getItem("accessToken");

    const onSubmit = async () => {
      console.log("token :>> ", token);
      try {
        const response = await axios.get(
          "http://localhost:5159/api/Admin/getabout1",
       
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        console.log("Response:", response.data.data);
        id.value = response.data.data.id;
        ParallaxImg.value = response.data.data.ParallaxImg;
      } catch (error) {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
      }
    };

    const update = async () => {
      try {
          const response = await axios.put(
          "http://localhost:5159/api/Admin/update-about1",
          {
            id:id.value,
            ParallaxImg: ParallaxImg.value,
          },
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        await onSubmit();
        console.log("Response:", response.data.data);
        ParallaxImg.value = response.data.data.ParallaxImg;
      } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
      }
    };

    onMounted(async () => {
      await onSubmit();
    });

    return {
      id,
      ParallaxImg,
      onSubmit,
      update,
    };
  },
};



</script>

<style>
.my-card {
  max-width: 700px;
  margin: 0 auto;
}
</style>

