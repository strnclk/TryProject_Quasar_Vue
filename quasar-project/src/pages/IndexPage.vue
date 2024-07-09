<template>
  <div class="q-pa-md">
    <div class="row justify-center q-gutter-sm">
      <q-intersection
        v-for="index in 9"
        :key="index"
        transition="scale"
        class="example-item"
      >
        <q-card 
          flat 
          bordered 
          class="q-ma-lg" 
        
          @click="goToProject(index)"
        >
          <img src="/icons/html.png">

          <q-card-section>
            <div class="text-h6">Proje {{ index }}</div>
            <div class="text-subtitle2">Proje Adı</div>
            <q-btn color="teal" label="İNCELE" :to="'/about'"></q-btn>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

defineOptions({
  name: 'IndexPage'
});

const router = useRouter();

const goToProject = (index) => {
  router.push({ name: 'ProjeDetay', params: { id: index } });
};
</script>

<style lang="sass" scoped>
.example-item
  height: 290px
  width: 290px
</style>
