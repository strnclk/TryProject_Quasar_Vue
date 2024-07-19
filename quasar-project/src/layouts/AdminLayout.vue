<template>
    <div style="background-color:#f3ecce">
      <q-layout view="hHh Lpr lff" >
        <q-header elevated :class="$q.dark.isActive ? 'bg-orange-13' : 'bg-orange-13'">
          <q-toolbar>
            <q-toolbar-title>
              <q-img
        src="/icons/vesika.jpg"
        :ratio="16/15"
        class="circle-image"
      /> Sitran ÇELİK</q-toolbar-title>
             <!-- Hamburger Menü İkonu (Küçük Ekranlar İçin) -->
             <q-btn flat @click="toggleDrawer" round dense icon="menu" class="hidden-md-up" />
             <!-- v-if="$q.screen.gt.md" -->
  </q-toolbar>
  </q-header>
  
  <!-- Drawer (Küçük Ekranlar İçin) -->
  <q-drawer v-model="drawer" side="left" overlay class="bg-orange-13">
  <q-list>
    <div  v-for="(menuItem, index) in menuList" :key="index" >
      <q-item :to="menuItem.url" clickable :active="menuItem.label === 'Outbox'" v-ripple class="text-white">
      <q-item-section avatar>
        <q-icon :name="menuItem.icon" style="color: white;" />
      </q-item-section>
      <q-item-section>
        {{ menuItem.label }}
      </q-item-section>
    </q-item>
    <!-- <q-separator :key="'sep' + index" v-if="menuItem.separator" /> -->
    </div> 
  </q-list>
  </q-drawer>
        <q-page-container>
          <router-view />
        </q-page-container>
      </q-layout>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        drawer: false,
        menuList: [
          { url: '/admin', label: 'Özgeçmiş', icon: 'home' },
          { url: '/header', label: 'Header', icon: 'roundabout_right' },
          { url: '/homepage1', label: 'Anasayfa-1', icon: 'home' },
          { url: '/description', label: 'ANasayfa-Yorum', icon: 'home' },

        ]
      };
    },
    methods: {
      toggleDrawer() {
        this.drawer = !this.drawer;
      },
      scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };
  </script>
  
  
  