<template>
  <section class="w-full overflow-hidden bg-zinc-950/70 py-12 backdrop-blur">
    <div class="mx-auto max-w-6xl px-4">
      <div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p class="text-sm font-semibold tracking-[0.3em] text-zinc-400">AGENDA KEGIATAN</p>
          <h2 class="mt-2 text-2xl font-bold text-white">Kegiatan SMA Sepanjang Semester</h2>
        </div>
        <div class="flex items-center gap-3 rounded-full bg-zinc-900 px-4 py-2 text-zinc-200 ring-1 ring-zinc-800">
          <span class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 text-lg">IG</span>
          <div class="text-sm">
            <p class="font-semibold">@sma_negeri1</p>
            <p class="text-zinc-400">Ikuti aktivitas kami</p>
          </div>
        </div>
      </div>

      <div class="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <article
          v-for="item in agendaItems"
          :key="item.title"
          class="group relative aspect-square overflow-hidden rounded-md bg-zinc-900 ring-1 ring-zinc-800 transition hover:shadow-lg"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent"></div>
          <div class="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-900">
            {{ item.tag }}
          </div>
          <div class="absolute bottom-3 left-3 right-3 text-white">
            <p class="text-sm font-semibold leading-snug">
              {{ item.title }}
            </p>
            <p class="mt-1 text-xs text-zinc-200">{{ item.date }}</p>
          </div>
          <div class="absolute bottom-3 right-3 flex items-center gap-3 text-xs text-white">
            <span class="flex items-center gap-1">
              <span>❤</span>
              <span>{{ item.likes }}</span>
            </span>
            <span class="flex items-center gap-1">
              <span>💬</span>
              <span>{{ item.comments }}</span>
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const agendaItems = [
  {
    title: 'Upacara Bendera & Apel Pagi Bersama',
    date: 'Senin, 3 Feb 2026',
    tag: 'Kesiswaan',
    likes: 1268,
    comments: 8,
    image:
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=600&h=600&q=60',
  },
  {
    title: 'Simulasi UTBK & Tryout Nasional',
    date: 'Rabu, 5 Feb 2026',
    tag: 'Akademik',
    likes: 519,
    comments: 4,
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&h=600&q=60',
  },
  {
    title: 'Workshop Karya Ilmiah Remaja',
    date: 'Kamis, 6 Feb 2026',
    tag: 'OSN',
    likes: 1401,
    comments: 9,
    image:
      'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&h=600&q=60',
  },
  {
    title: 'Latihan Gabungan Ekskul Basket',
    date: 'Jumat, 7 Feb 2026',
    tag: 'Olahraga',
    likes: 802,
    comments: 18,
    image:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&h=600&q=60',
  },
  {
    title: 'Pentas Seni & Gelar Karya Siswa',
    date: 'Sabtu, 8 Feb 2026',
    tag: 'Seni',
    likes: 598,
    comments: 4,
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=600&h=600&q=60',
  },
  {
    title: 'Bakti Sosial & Donor Darah',
    date: 'Sabtu, 8 Feb 2026',
    tag: 'OSIS',
    likes: 277,
    comments: 1,
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&h=600&q=60',
  },
  {
    title: 'Pelatihan PMR: Pertolongan Pertama',
    date: 'Minggu, 9 Feb 2026',
    tag: 'PMR',
    likes: 471,
    comments: 5,
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&h=600&q=60',
  },
  {
    title: 'Kunjungan Industri Kelas XII',
    date: 'Selasa, 11 Feb 2026',
    tag: 'BK',
    likes: 705,
    comments: 4,
    image:
      'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=600&h=600&q=60',
  },
  {
    title: 'Kelas Inspirasi Alumni',
    date: 'Rabu, 12 Feb 2026',
    tag: 'Alumni',
    likes: 437,
    comments: 2,
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&h=600&q=60',
  },
  {
    title: 'Lomba Debat Bahasa Inggris',
    date: 'Kamis, 13 Feb 2026',
    tag: 'Bahasa',
    likes: 615,
    comments: 5,
    image:
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=600&h=600&q=60',
  },
]
</script>
