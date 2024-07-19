<template>
    <q-form @submit.prevent="update" class="q-gutter-md q-my-lg">
  <q-page padding>
    <q-card-section>
        <div class="text-h3 text-orange-14 text-center">Güncelleme Ekranı</div>
      </q-card-section>
    <q-card class="my-card">
      <q-card-section>
        <q-input
        filled
        v-model="description1"
        label="Açıklama1"
        hint=""
      />

      <q-input
        filled
        v-model="description2"
        label="Açıklama2"
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
    const description1 = ref("");
    const description2 = ref("");
    const token = localStorage.getItem("accessToken");

    const onSubmit = async () => {
      console.log("token :>> ", token);
      try {
        const response = await axios.get(
          "http://localhost:5159/api/Admin/get-description",
       
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        console.log("Response:", response.data.data);
        description1.value = response.data.data.description1;
        id.value = response.data.data.id;

        description2.value = response.data.data.description2;
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
          "http://localhost:5159/api/Admin/update-description",
          {
            id:id.value,
            description1: description1.value,
            description2: description2.value,
          },
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        await onSubmit();
        console.log("Response:", response.data.data);
        description1.value = response.data.data.description1;
        description2.value = response.data.data.description2;
      } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
      }
    };

    onMounted(async () => {
      await onSubmit();
    });

    return {
      id,
      description1,
      description2,
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




<!-- <template>
    <q-form @submit.prevent="update" class="q-gutter-md q-my-lg">
  <q-page padding>
    <q-card-section>
        <div class="text-h3 text-orange-14 text-center"> Açıklama Güncelleme Ekranı</div>
      </q-card-section>
    <q-card class="my-card">
      <q-card-section>
        <q-input
        filled
        v-model="description1"
        label="Açıklama1"
        hint=""
      />

      <q-input
        filled
        v-model="description2"
        label="Açıklama2"
      />
      </q-card-section>
      <q-card-actions align="center">
        <q-btn label="Güncelle" type="submit" color="orange" />
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
    const description1 = ref("");
    const description2 = ref("");
    const token = localStorage.getItem("accessToken");

    const onSubmit = async () => {
      console.log("token :>> ", token);
      try {
        const response = await axios.get(
          "http://localhost:5159/api/Admin/get-description",
       
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        console.log("Response:", response.data.data);
        description1.value = response.data.data.description1;
        id.value = response.data.data.id;

        description2.value = response.data.data.description2;
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
          "http://localhost:5159/api/Admin/update-description",
          {
            id:id.value,
            description1: description1.value,
            description2: description2.value,
          },
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        await onSubmit();
        console.log("Response:", response.data.data);
        description1.value = response.data.data.description1;
        description2.value = response.data.data.description2;
      } catch (error) {
        // console.error("Error:", error.response ? error.response : error.message);
      }
    };

    onMounted(async () => {
      await onSubmit();
    });

    return {
      id,
      description1,
      description2,
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
 -->
