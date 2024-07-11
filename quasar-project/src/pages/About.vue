<template>
    <div class="q-pa-md" style="font-family:Verdana, Geneva, Tahoma, sans-serif">
      <p  style="margin-left: 2%;margin-right: 2%">Özgeçmişim ve çalışmalarıma aşağıdan ulaşabilirsiniz. Daha ayrıntılı bilgi almak, projelerimi incelemek ve profesyonel geçmişim hakkında daha fazla bilgi edinmek için LinkedIn veya GitHub hesabımı ziyaret edebilirsiniz.<br> LinkedIn profilimde kariyer yolculuğum, katıldığım projeler ve aldığım geri bildirimler hakkında detaylı bilgiler bulabilirsiniz. GitHub hesabımda ise kod örneklerim ve üzerinde çalıştığım açık kaynak projeleri keşfedebilirsiniz. </p>
      <div class="q-pa-md">
        <q-card class="my-card">
          <q-parallax
            src="/icons/frontend.jpg"
            :height="250"
          />
        </q-card>
        <!-- <div class=" knob-container">
            <q-knob
                v-for="(knob, index) in knobs"
                :key="index"
                :step="25"
                v-model="knob.value"
                show-value
                size="60px"
                :thickness="0.22"
                color="orange"
                track-color="orange-3"
                class="text-orange q-ma-md"
                />

            </div> -->
            <div style="margin-top:5%">
    <q-splitter
      v-model="splitterModel"
      style="height: 450px;"
    >

      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-orange-13"
        >
          <q-tab name="mails" icon="mail" label="Özgeçmişim" />
          <q-tab name="alarms" icon="alarm" label="Projelerim" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
          style="background-color:#f3ecce;"
        >
          <q-tab-panel name="mails">
            <div class="q-px-lg q-py-md">
    <q-timeline color="orange-13">

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 21, 1986"
        icon="delete"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry heading>
        November, 2017
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        avatar="https://cdn.quasar.dev/img/avatar2.jpg"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        color="orange"
        icon="done_all"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h4 q-mb-md">Projelerim</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter>
  </div>

            </div>
        </div>
  </template>
  
  <script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      tab: ref('mails'),
      splitterModel: ref(20)
    }
  }
}
</script>
  
  
  <style scoped>
  p {
    font-size: 16px;
    color: #333;
  }
  .knob-container {
  flex-direction: column;
  display: flex;
  margin-top: 3%;
}
  </style>
  


