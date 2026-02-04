<template>
  <section class="w-full overflow-hidden bg-gray-200/70 py-4 backdrop-blur">
    <div class="mx-auto max-w-6xl px-4">
      <div class="text-center">
        <p class="text-xl tracking-[0.3em] text-zinc-500">BERITA TERBARU</p>
        <div class="mx-auto mt-3 h-0.5 w-50 bg-zinc-400"></div>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="item in newsItems"
          :key="item.title"
          class="group overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-zinc-200 transition hover:shadow-lg"
        >
          <div class="relative h-44 w-full overflow-hidden">
            <img
              :src="item.image"
              :alt="item.title"
              class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div class="bg-slate-900 px-4 py-5 text-white">
            <a
              :href="item.link"
              class="flex items-start justify-between gap-3 text-sm font-semibold leading-snug hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              <span>{{ item.title }}</span>
              <span class="text-base">↗</span>
            </a>
            <p class="mt-2 text-xs text-slate-200">Source: {{ item.source }}</p>
          </div>
        </article>
      </div>

      <div class="mt-10 flex justify-center">
        <a
          href="#"
          class="inline-flex items-center justify-center border border-slate-900 px-6 py-2 text-md font-semibold tracking-[0.2em] text-slate-900 transition hover:bg-slate-900 hover:text-white"
        >
          LIHAT SEMUA BERITA
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const newsItems = [
  {
    title: 'Tim Olimpiade Sains SMA Raih Medali Emas Provinsi 2026',
    source: 'Humas SMA Negeri 1',
    image: '/images/image1.jpeg',
    link: '#',
  },
  {
    title: 'Pelatihan Literasi Digital untuk Siswa Kelas X dan XI',
    source: 'Humas SMA Negeri 1',
    image: '/images/image2.jpeg',
    link: '#',
  },
  {
    title: 'Penerimaan Peserta Didik Baru (PPDB) Jalur Prestasi Dibuka',
    source: 'Panitia PPDB',
    image: '/images/image3.jpeg',
    link: '#',
  },
  {
    title: 'SMA Negeri 1 Gelar Pentas Seni dan Expo Karya Siswa',
    source: 'Kesiswaan',
    image: '/images/image4.jpeg',
    link: '#',
  },
]
</script>
