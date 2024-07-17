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
                type="email"
                v-model="email"
                label="Mail Adresiniz"
                :rules="[
                  val => !!val || 'Mail adresi zorunludur',
                  val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || 'Geçerli bir mail adresi giriniz'
                ]"
              />

              <q-input
                filled
                type="password"
                v-model="password"
                label="Şifrenizi Giriniz"
                :rules="[
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
import { useRouter } from 'vue-router';  

export default {
  setup() {
    const $q = useQuasar();
    const router = useRouter();  

    const email = ref("sitran@gmail.com");
    const password = ref("Myc.2542");

    const onSubmit = async () => {
      try {
        const response = await axios.post(
          'http://localhost:5159/api/Auth/Login',
          {
            email: email.value,
            password: password.value
          }
        );
        console.log('Response:', response.data.data);
        console.log('Response:', response.data.data.accessToken);
        // Verileri LocalStorage'a kaydet
        localStorage.setItem('accessToken', response.data.data.accessToken);

        router.push('/admin');
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
      email.value = null;
      password.value = null;
    };

    return {
      email,
      password,
      onSubmit,
      onReset
    };
  }
};
</script>

  

  