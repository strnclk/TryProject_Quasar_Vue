<template>
    <div class="q-pa-md example-row-variable-width">
      <div class="row justify-center">
        <div class="col-12 col-md-5">
          <div class="q-pa-md form-container">
            <div class="text-h4 text-center title q-my-xl" style="color:orange">
              Giriş Yap
              <q-form 
                @submit="onSubmit"
                @reset="onReset"
                class="q-gutter-md q-my-lg"
              >
                <q-input
                  filled
                  v-model="name"
                  label="Adınız ve Soyadınız"
                  lazy-rules="[val => val && val.length > 0 || '']"
                />
        
                <q-input
                  filled
                  type="email"
                  v-model="email"
                  label="Mail Adresiniz"
                  lazy-rules="[
                    val => !!val || 'Mail adresi zorunludur',
                    val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || 'Geçerli bir mail adresi giriniz'
                  ]"
                />
  
                <q-input
                  filled
                  type="password"
                  v-model="password"
                  label="Şifrenizi Giriniz"
                  lazy-rules="[
                    val => !!val || 'Şifre zorunludur',
                    val => val.length >= 6 || 'Şifre en az 6 karakter olmalıdır'
                  ]"
                />
  
                <div>
                  <q-btn label="Giriş Yap" type="submit" color="orange"/>
                </div>
              </q-form>
            </div>
          </div>  
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { useQuasar } from 'quasar';
  import { ref } from 'vue';
  
  export default {
    setup() {
      const $q = useQuasar();
  
      const name = ref(null);
      const email = ref(null);
      const password = ref(null);
  
      const onSubmit = async () => {
        try {
          const token = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImRjNTkwODJlLTg1NTgtNGY0ZC1hNzMwLWI2NmMzYzcyMzZlOCIsImVtYWlsIjoic2l0cmFuLmNlbGlrQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJzaXRyYW4uY2VsaWtAZ21haWwuY29tIiwianRpIjoiMWIwMmE5MmQtNDdjMS00ZDdmLWI1ODItYzNkZGFmODZjNzY3IiwiYXVkIjpbInd3dy5zaXRyYW5jZWxpay5jb20iLCJhcGkuc2l0cmFuY2VsaWsuY29tIl0sIm5iZiI6MTcyMDc4NjU4OSwiZXhwIjoxNzIwNzg2ODg5LCJpc3MiOiJsb2NhbGhvc3Q6NzAwMCJ9.emywOY9kXYLlRU1_sQVCPQSzoD5-sGbYHUSPLgWxpho';
          const response = await axios.post(
            'http://localhost:5159/api/Auth/Login', 
            {
              name: name.value,
              email: email.value,
              password: password.value
            },
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          );
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Başarıyla gönderildi'
          });
          console.log('Response:', response.data);

        } catch (error) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: error.response ? error.response.data : error.message
          });
          console.error('Error:', error.response ? error.response.data : error.message);
        }
      };
  
      const onReset = () => {
        name.value = null;
        email.value = null;
        password.value = null;
      };
  
      return {
        name,
        email,
        password,
        onSubmit,
        onReset
      };
    }
  };
  </script>
  

  