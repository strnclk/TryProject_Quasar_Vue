<template>
    <div class="q-pa-md" style="font-family:Verdana, Geneva, Tahoma, sans-serif">
      <div class="text-h3" style="margin:2%;color:orange;">
        HAKKIMDA
      </div>
      <p  style="margin-left: 2%;margin-right: 2%">Özgeçmişim ve çalışmalarıma aşağıdan ulaşabilirsiniz. Daha ayrıntılı bilgi almak, projelerimi incelemek ve profesyonel geçmişim hakkında daha fazla bilgi edinmek için LinkedIn veya GitHub hesabımı ziyaret edebilirsiniz.<br><br> LinkedIn profilimde kariyer yolculuğum, katıldığım projeler ve aldığım geri bildirimler hakkında detaylı bilgiler bulabilirsiniz. GitHub hesabımda ise kod örneklerim ve üzerinde çalıştığım açık kaynak projeleri keşfedebilirsiniz. </p>
      <div class="q-pa-md">
        <q-card class="my-card">
          <div >
    <q-parallax  :speed="$q.screen.lt.sm ? 0.1 : 2 +$q.screen.gt.sm && $q.screen.lt.md ? 0.1 : 2+ $q.screen.gt.md ? 0.5 : 2" :height="$q.screen.lt.sm ? 100 : +$q.screen.gt.sm && $q.screen.lt.md ? 100 : 200+ $q.screen.gt.md ? 200 : 200">
      <template v-slot:media>
        <img src="/icons/kod3.png" :style="$q.screen.gt.md ? '' : 'width:350px;'">
      </template>
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
        <q-tab class="text-orange" name="mails" icon="mail" label="Özgeçmiş" />
        <q-tab class="text-orange" name="alarms" icon="alarm" label="Projeler" />
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
import { ref } from 'vue'

export default {
  setup () {
    return {
      tab: ref('mails'),
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
  


