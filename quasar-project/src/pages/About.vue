<template>
    <div class="q-pa-md" style="font-family:Verdana, Geneva, Tahoma, sans-serif">
      <div class="text-h3" style="margin:2%;color:orange;">
        {{ title }}
      </div>
      <p  style="margin-left: 2%;margin-right: 2%">
        {{ description }}   
          </p>
      <div class="q-pa-md">
        <q-card class="my-card">
          <div >
    <q-parallax  :speed="$q.screen.lt.sm ? 0.1 : 2 +$q.screen.gt.sm && $q.screen.lt.md ? 0.1 : 2+ $q.screen.gt.md ? 0.5 : 2" :height="$q.screen.lt.sm ? 100 : +$q.screen.gt.sm && $q.screen.lt.md ? 100 : 200+ $q.screen.gt.md ? 200 : 200">
     {{ParallaxImg}}
    </q-parallax>
  </div>
        </q-card>
            <div style="margin-top:5%">
              <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 400px">
      <q-tabs
        v-model="tab"
        narrow-indicator
        dense
        align="justify"
      >
        {{ icon }}
        {{title}}
      </q-tabs>
    </div>
  </div>
    <q-splitter
      v-model="splitterModel"
      style="height: 450px;"
    >

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
          style="background-color:#f3ecce; "
        >
          <q-tab-panel name="mails">
            <div class="q-px-lg q-py-md">
    <q-timeline color="orange-13">

      <q-timeline-entry
        title="MEDYA VE ILETISIM"
        subtitle="Tavlim Ziraat , Sakarya"
      >
        <div>
           Gerekli Google reklam prosedürlerinin,e-ticaret ve marketing sektöründeki güncel bilgilerin araştırılıp ekibe sunulması,sosyal medya yönetimi ve gönderi tasrımından sorumluydum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="SATIŞ DANIŞMANI"
        subtitle="MOOD Sevenhill, İstanbu"
      >
        <div>
          Ürün satış, müşteri yönlendirme, müşterilerle iyi iletişim ve tüm satışların muhasebe girdi ve çıktı kayıtlarının 
          tutulması, yöneticiye raporlanmasından sorumluydum.        </div>
      </q-timeline-entry>

  

      <q-timeline-entry
        title="WEB DEVELOPER"
        subtitle="Videokariyer, İstanbul"
      >
        <div>
          Gönüllü olarak yer aldığım start-up projesinin web geliştirme kısmında, HTML,CSS,Bootstrap ve PHP dillerini 
Bu öz geçmiş Jobseeker.com ile hazırlanmıştır.
kullanarak web tasarımı ve geliştirme becerilerini geliştirdim. İhtiyaç halinde projenin MySQL veritabanı ile de 
çalışma imkanım oldu 
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Stajyer -FRONTEND DEVELOPER"
        subtitle="EYTSOFT A.Ş, İstanbul"
      >
        <div>
          Uzun dönem stajım süresince, canlı projelerin front-end tarafını güçlendirme ve kullanıcı arayüzü (UI) 
tasarımı konularında önemli deneyimler kazandım. Canlı projelerde, kullanıcı deneyimini kusursuz ve sezgisel 
hale getirmek için ön yüzü güçlendirme çalışmalarına katkıda bulundum. Figma tasarımlarını temiz, 
okunabilir ve sürdürülebilir koda dönüştürerek detaylara verdiğim önemi ve kaliteye olan bağlılığımı 
gösterdim.
Ayrıca, Django projesinde yer alarak Django öğrenme ve projeye etkili bir şekilde uygulama fırsatım oldu. Bu 
deneyim, arka uç geliştirme ve bu teknolojilerin ön uç ile entegrasyonu konusunda güçlü bir anlayış 
geliştirmemi sağladı
        </div>
      </q-timeline-entry>
      <q-timeline-entry heading>
    KURSLAR
      </q-timeline-entry>
      <q-timeline-entry
        title="MUSTAFA AKGÜL YAZILIM KIŞ KAMPI"
        color="orange"
      >
        <div>
          Eskişehir Osmangazi Üniversitesi'nin ev sahipliği yaptığı kış kampı bünyesinde bulunan "PHP İLE WEB 
          PROGRAMLAMAYA GİRİŞ" eğitimine katıldım.
                </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="KOMPLE UYGULAMALI WEB GELİŞTİRME EĞİTİMİ"
      >
      </q-timeline-entry>

      <q-timeline-entry
        title="İNGİLİZCE"
      >
        <div>
          "Hayırlı SABANCI Desteğiyle İngilizce Fırsatım" programıdır. Bir sene süren bir eğitim kampıdır
                </div>
      </q-timeline-entry>
      <q-timeline-entry
        title="KODLUYORUZ-HI-KOD FRONT-END WEB GELİŞTİRME"
      >
      </q-timeline-entry>
      <q-timeline-entry
        title="JAVA İLE NESNE YÖNELİMLİ PROGRAMLAMA"
      >
      </q-timeline-entry>
    </q-timeline>
  </div>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h4 q-mb-md" style="color:orange;">Projelerim</div>
            <div class="row ">
      <div class="col-12 col-md-5 q-pa-md">
        <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-h5 q-mt-sm q-mb-xs">VUE İLE PORTFOLİO</div>
          <div class="text-caption text-grey-7">
            Vue öğrenebilmek ve pekiştirebilmek adına quasar framework kullanarak hazırladığım portfolio sitesidir.
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="/icons/vue.webp"
            style="width:100px"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat >
          İNCELE
        </q-btn>
      </q-card-actions>
        </q-card>
        </div>
      <div class="col-12 col-md-5 q-pa-md">
        <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-h5 q-mt-sm q-mb-xs">ATM UYGULAMASI</div>
          <div class="text-caption text-grey-7">
            Javascript switch-case yapısı ve koşul kullanılan basit ve anlaşılır bir atm uygulamasıdır.
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="/icons/js.jpeg"
            style="width:82px"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat >
          İNCELE
        </q-btn>
      </q-card-actions>
        </q-card>
      </div>
  
    </div>
          </q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter>
  </div>

            </div>
        </div>
  </template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const tab = ref('mails');
    const title = ref('');
    const description = ref('');
    const ParallaxImg = ref('');
    const icon = ref('');

    const getSkillsData = async () => {
      try {
        const response = await axios.get('http://localhost:5159/api/Admin/getabout');
        console.log('veriler', response.data);
        title.value = response.data.data.title;
        description.value = response.data.data.description;
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
    const getParallaxData = async () => {
      try {
        const response = await axios.get('http://localhost:5159/api/Admin/getabout1');
        console.log('veriler', response.data);
        ParallaxImg.value = response.data.data.ParallaxImg;
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
    const geticonData = async () => {
      try {
        const response = await axios.get('http://localhost:5159/api/Admin/getabout2');
        console.log('veriler', response.data);
        icon.value = response.data.data.icon;
        title.value = response.data.data.title;
        
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };


    onMounted(async () => {
      await getSkillsData();
      await getParallaxData();
      await geticonData();

    });

    return {
      tab,
      title,
      description,
      ParallaxImg,
    };
  },
};

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
  


