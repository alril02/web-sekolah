<template>
  <div class="relative min-h-screen overflow-hidden bg-[#0f172a] text-white">
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1800&q=80')"
    ></div>
    <div class="absolute inset-0 bg-linear-to-br from-[#0f172a]/95 via-[#0f172a]/70 to-[#1f4a8a]/70"></div>
    <div class="absolute inset-0">
      <div class="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#facc15]/15 blur-3xl"></div>
      <div class="absolute right-0 top-24 h-96 w-96 rounded-full bg-[#38bdf8]/15 blur-3xl"></div>
      <div class="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#f97316]/15 blur-3xl"></div>
    </div>

    <div class="relative">
      <Header />

      <main class="mx-auto max-w-7xl space-y-10 px-4 pb-16 pt-40">
        <section class="rounded-[28px] border border-white/15 bg-white/10 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.7)] backdrop-blur overflow-hidden">
          <Video />
        </section>

        <!-- <Fitur class="mt-[-10rem]" /> -->

        <section class="rounded-[28px] border border-white/15 bg-white/10 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.7)] backdrop-blur overflow-hidden">
          <LatestNews />
        </section>

        <section class="rounded-[28px] border border-white/15 bg-white/10 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.7)] backdrop-blur overflow-hidden">
          <AgendaKegiatan />
        </section>

        <section class="rounded-[28px] border border-white/15 bg-white/10 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.7)] backdrop-blur overflow-hidden">
          <MoreEvent />
        </section>

      </main>

      <section class="w-full bg-white/5 backdrop-blur">
        <Footer />
      </section>
    </div>
  </div>
</template>

<script setup>
import Header from './component/HeaderComponent2.vue'
import Video from './component/VideoComponent.vue'
// import Fitur from './component/FiturUtamaComponent.vue'
import LatestNews from './component/LatestNewsComponent.vue'
import AgendaKegiatan from './component/AgendaKegiatanComponent.vue'
import MoreEvent from './component/MoreEventComponent.vue'
import Footer from './component/FooterComponent.vue'
</script>
