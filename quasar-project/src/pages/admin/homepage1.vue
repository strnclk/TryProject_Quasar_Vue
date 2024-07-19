<template>
    <div class="q-pa-md">
      <div class="text-h3 text-orange-14 text-center">Anasayfa-1 Güncelleme Ekranı</div>
      <div class="q-pa-md q-gutter-sm">
        <q-btn label="Ekle" color="orange" @click="persistent = true" />
  
        <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
          <q-card class="bg-orange-6 text-white" style="width: 300px">
            <q-card-section>
              <div class="text-h6">Element Ekle</div>
            </q-card-section>
  
            <q-card-section class="q-pt-none">
              <q-input
                filled
                v-model="number"
                label="Sayı"
                hint=""
              />
              <q-input
                filled
                v-model="circle"
                label="Çember"
                hint=""
              />
              <q-input
                filled
                v-model="title"
                label="Başlık"
                hint=""
              />
            </q-card-section>
  
            <q-card-actions align="right" class="bg-white text-orange">
              <q-btn flat label="Ekle" @click="addRow" />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
      <q-table
        class="my-card"
        style="height: 350px;"
        flat
        bordered
        :rows="rows"
        :columns="columns"
        row-key="index"
        virtual-scroll
      >
        <template v-slot:body-cell-actions="props">
          <q-btn flat icon="edit" @click="openModal(props.row)" />
          <q-dialog v-model="showModal">
        <q-card>
          <q-card-section>
            <div class="text-h6">Row Düzenle</div>
          </q-card-section>
  
          <q-card-section>
            <q-input filled v-model="selectedRow.number" label="Sayı" hint="" />
            <q-input filled v-model="selectedRow.circle" label="Çember" hint="" />
            <q-input filled v-model="selectedRow.title" label="Başlık" hint="" />
          </q-card-section>
  
          <q-card-actions align="right">
            <q-btn flat label="İptal" color="negative" @click="showModal = false" />
            <q-btn flat label="Kaydet" color="positive" @click="updateRow" />
          </q-card-actions>
        </q-card>
      </q-dialog>
          <q-btn flat icon="delete" @click="deleteRow(props.row)" />
        </template>
      </q-table>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  export default {
    
    setup() {
  
      const showModal= ref(false);
      const selectedRow = ref({
        title: '',
          icon: '',
          url: '',
      });
      const columns = ref([
        { name: 'index', label: '#', field: 'index' },
        { name: 'number', required: true, label: 'Sayı', align: 'left', field: 'number', sortable: true },
        { name: 'circle', align: 'center', label: 'Çember', field: 'circle', sortable: true },
        { name: 'title', label: 'URL', field: 'Başlık', sortable: true },
        { name: 'blank', label: 'Blank', field: 'blank' },
        { name: 'actions', label: 'İşlemler', field: 'actions' }
      ]);
  
      const rows = ref([]);
      const persistent = ref(false);
      const number = ref('');
      const circle = ref('');
      const title = ref('');
  
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5159/api/Admin/gethomePage1');
          const data = response.data;
          console.log(data);
  
          if (data.data) {
            console.log('data.data', data.data);
            rows.value = data.data;
            rows.value.forEach((row, index) => {
              row.index = index;
            });
          }
        } catch (error) {
          console.error('API request failed:', error);
        }
      };
  
      const addRow = async () => {
        try {
          const newRow = {
            number: number.value,
            circle: circle.value,
            title: title.value,
            blank: '',
            actions: ''
          };
          const token = localStorage.getItem("accessToken");
  
          const response = await axios.post(
            'http://localhost:5159/api/Admin/add-homePage1',
            newRow,
            {
              headers: { Authorization: "Bearer " + token }
            }
          );
  
          if (response.status === 200) {
            rows.value.push({
              index: rows.value.length,
              ...newRow
            });
            number.value = '';
            circle.value = '';
            title.value = '';
            persistent.value = false;
          }
        } catch (error) {
          console.error('Failed to add row:', error);
        }
      };
  
      const deleteRow = async (row) => {
        try {
          const token = localStorage.getItem("accessToken");
          const response = await axios.delete(
            `http://localhost:5159/api/Admin/remove-homePage1`,
            {
              headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"
              },
              data: { id: row.id }
            }
          );
  
          if (response.status === 200) {
            rows.value = rows.value.filter(r => r.index !== row.index);
          }
        } catch (error) {
          console.error('Failed to delete row:', error.response ? error.response.data : error.message);
        }
      };
  
      onMounted(() => {
        fetchData();
      });
  
  
  
      const openModal=(row)=> {
        console.log('row',row)
        selectedRow.value = { ...row };  
        showModal.value = true;
      };
      const updateRow= async ()=> {
        try {
          const token = localStorage.getItem("accessToken");
  
          const response = await axios.put(
            "http://localhost:5159/api/Admin/update-homePage1",
            {
              id: selectedRow.value.id,
              number: selectedRow.value.number,
              circle: selectedRow.value.circle,
              title: selectedRow.value.title,
            },
            {
              headers: { Authorization: "Bearer " + token },
            }
          );
  
          if (response.status === 200) {
            await fetchData(); 
            console.log("Response:", response.data.data);
            showModal.value = false;  // Başarılı güncelleme sonrası modalı kapatma
          }
  
        } catch (error) {
          console.error("Error:", error.response ? error.response.data : error.message);
        }
      };
    
      return {
        columns,
        rows,
        persistent,
        number,
        circle,
        title,
        fetchData,
        addRow,
        deleteRow,
        openModal,
        updateRow, showModal, selectedRow
      };
    },
    
  };
  
  </script>
  
  <style>
  .my-card {
    max-width: 700px;
    margin: 20px auto;
  }
  </style>
  