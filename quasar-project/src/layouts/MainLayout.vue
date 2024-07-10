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
<!-- Büyük Ekranlar İçin Menü Öğeleri -->
<div class="hidden-xs-only hidden-sm-only hidden-md-only hidden-lg-up flex space-x-4 large-page">
            <q-list class="q-pa-md menu-container" v-for="(menuItem, index) in menuList" :key="index">
              <q-item :to="menuItem.url" clickable :active="menuItem.label === 'Outbox'" v-ripple class="menu-item">
                <q-item-section avatar style="color: white;">
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section style="color: white;">
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index" v-if="menuItem.separator" />
            </q-list>
          </div>
</q-toolbar>
</q-header>

<!-- Drawer (Küçük Ekranlar İçin) -->
<q-drawer v-model="drawer" side="left" overlay class="bg-orange-13">
<q-list v-for="(menuItem, index) in menuList" :key="index" >
  <q-item :to="menuItem.url" clickable :active="menuItem.label === 'Outbox'" v-ripple class="text-white">
    <q-item-section avatar>
      <q-icon :name="menuItem.icon" style="color: white;" />
    </q-item-section>
    <q-item-section>
      {{ menuItem.label }}
    </q-item-section>
  </q-item>
  <q-separator :key="'sep' + index" v-if="menuItem.separator" />
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
        { url: '/home', label: 'Anasayfa', icon: 'home' },
        { url: '/about', label: 'Hakkımda', icon: 'info' },
        { url: '#contact', label: 'İletişim', icon: 'mail' },
        { separator: true },
      ]
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
};
</script>


<style scoped>
.hidden-md-up {
  display: none;
}

@media (max-width: 799px) {
  .hidden-md-up {
    display: inline-block !important;
  }
  .large-page{
    display:none;
  }
}
html {
  scroll-behavior: smooth;
}



.menu-container {
  display: flex;
  flex-wrap: wrap;
}

.menu-item {
  flex: 1;
  display: flex;
  align-items: center;
}
</style>