<template>
  <q-form @submit.prevent="bas" class="q-gutter-md q-my-lg">
    <div>
      <q-input v-model="name" :dense="dense" />
      <q-input v-model="description" :dense="dense" />
      <div>
        <q-btn label="Güncelle" @click="bas" color="orange" />
        <q-btn label="Ekle" @click="ekle" color="green" />
        <q-btn label="Sil" @click="sil" color="red" />
      </div>
    </div>
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

    const onSubmit = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5159/api/Admin/getfeature",
          {}
        );

        console.log("Response:", response.data.data);
        id.value = response.data.data.id;
        name.value = response.data.data.name;
        description.value = response.data.data.description;
      } catch (error) {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
      }
    };

    const bas = async () => {
      try {
        const response = await axios.put(
          "http://localhost:5159/api/Admin/update-feature",
          {
            id: id.value,
            name: name.value,
            description: description.value,
          }
        );
        await onSubmit();
        console.log("Response:", response.data.data);
        name.value = response.data.data.name;
        description.value = response.data.data.description;
      } catch (error) {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
      }
    };
    const token = localStorage.getItem("accessToken");
    const ekle = async () => {
      console.log("token :>> ", token);
      try {
        const response = await axios.post(
          "http://localhost:5159/api/Admin/add-feature",
          {
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
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
      }
    };

    const sil = async () => {
      console.log("id", id.value);
      console.log("tokennn", token);
      try {
        const response = await axios.delete(
          "http://localhost:5159/api/Admin/remove-feature",
          {
            headers: { Authorization: "Bearer " + token },
            data: {
              id: id.value,
            },
          }
        );
        await onSubmit();
        console.log("Response:", response.data.data);
        name.value = response.data.data.name;
        description.value = response.data.data.description;
      } catch (error) {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
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
      bas,
      ekle,
      sil,
    };
  },
};
</script>