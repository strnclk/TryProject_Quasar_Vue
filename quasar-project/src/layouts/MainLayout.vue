<template>
  <div >
    <q-layout view="hHh Lpr lff">
      <q-header elevated :class="$q.dark.isActive ? 'bg-orange-13' : 'bg-orange-13'">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Sitran ÇELİK</q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="500" bordered
        :class="$q.dark.isActive ? 'bg-orange-11' : 'bg-orange-11'">
        <q-scroll-area class="fit">
          <q-list>

            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item :to="menuItem.url" clickable :active="menuItem.label === 'Outbox'" v-ripple>
                <q-item-section avatar style="color: darkorange;">
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section style="color: white;">
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index" v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>

      <q-footer class="bg-grey-8 text-white">
        <q-toolbar>
          <q-toolbar-title>Sitran ÇELİK</q-toolbar-title>
        </q-toolbar>
      </q-footer>

      <!-- <q-page-container>
        <q-page padding>
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>
          <div class="q-pa-md example-row-all-breakpoints text-center">
            <div class="row">
              <div class="col">.col</div>
              <div class="col">.col</div>
              <div class="col">.col</div>
              <div class="col">.col</div>
            </div>
          </div>
        </q-page>
      </q-page-container> -->
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue'

const menuList = [
  {
    icon: 'inbox',
    label: 'Anasayfa',
    url: '/home',
    separator: true,
  },
  {
    icon: 'arrow_forward',
    label: 'Projelerim',
    url: '/',
    separator: false
  },
  {
    icon: 'delete',
    label: 'Hakkımda',
    url: '/about',
    separator: false
  },
]

export default {
  setup() {
    return {
      drawer: ref(false),
      menuList
    }
  }
}
</script>
