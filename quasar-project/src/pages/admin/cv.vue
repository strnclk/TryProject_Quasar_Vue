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
        v-model="name"
        label="Başlık"
        hint=""
      />

      <q-input
        filled
        v-model="description"
        label="Açıklama"
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
    const name = ref("");
    const description = ref("");
    const token = localStorage.getItem("accessToken");

    const onSubmit = async () => {
      console.log("token :>> ", token);
      try {
        const response = await axios.get(
          "http://localhost:5159/api/Admin/get-feature",
       
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        console.log("Response:", response.data.data);
        name.value = response.data.data.name;
        id.value = response.data.data.id;

        description.value = response.data.data.description;
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
          "http://localhost:5159/api/Admin/update-feature",
          {
            id:id.value,
            name: name.value,
            description: description.value,
          },
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        await onSubmit();
        console.log("Response:", response.data.data);
        name.value = response.data.data.name;
        description.value = response.data.data.description;
      } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
      }
    };

    onMounted(async () => {
      await onSubmit();
    });

    return {
      id,
      name,
      description,
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

