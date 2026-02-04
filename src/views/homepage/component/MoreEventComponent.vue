<template>
  <section class="w-full overflow-hidden bg-slate-50/80 py-14 backdrop-blur">
    <div class="mx-auto max-w-6xl px-4">
      <div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p class="text-sm font-semibold tracking-[0.3em] text-slate-400">MORE EVENT</p>
          <h2 class="mt-2 text-2xl font-bold text-slate-900">Event Tambahan yang Patut Diikuti</h2>
          <p class="mt-2 max-w-xl text-sm text-slate-500">
            Jelajahi agenda pilihan, talkshow, dan kegiatan inspiratif dari sekolah serta mitra kami.
          </p>
        </div>
        <a
          href="#"
          class="inline-flex items-center gap-2 rounded-full border border-slate-900 px-5 py-2 text-sm font-semibold tracking-wide text-slate-900 transition hover:bg-slate-900 hover:text-white"
        >
          Lihat Semua Event
          <span class="text-base">↗</span>
        </a>
      </div>

      <div class="mt-10 grid gap-6 md:grid-cols-2">
        <article
          v-for="event in moreEvents"
          :key="event.title"
          class="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div class="relative h-44 w-full overflow-hidden">
            <img
              :src="event.image"
              :alt="event.title"
              class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow">
              <span class="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              {{ event.badge }}
            </div>
          </div>

          <div class="flex flex-1 flex-col gap-4 p-5">
            <div class="flex items-start gap-4">
              <div class="flex min-w-23 flex-col items-center justify-center rounded-xl bg-slate-900 px-3 py-3 text-center text-white">
                <span class="text-sm font-semibold">{{ event.day }}</span>
                <span class="text-2xl font-bold">{{ event.date }}</span>
                <span class="text-xs text-slate-300">{{ event.month }}</span>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-slate-900">{{ event.title }}</h3>
                <p class="mt-2 text-sm text-slate-500">{{ event.description }}</p>
                <div class="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <span class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">⏰ {{ event.time }}</span>
                  <span class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">📍 {{ event.location }}</span>
                </div>
              </div>
            </div>

            <div class="mt-auto flex items-center justify-between">
              <div class="flex items-center gap-2 text-xs text-slate-500">
                <span class="inline-flex items-center gap-1">👥 {{ event.capacity }} peserta</span>
                <span class="h-1 w-1 rounded-full bg-slate-300"></span>
                <span>{{ event.status }}</span>
              </div>
              <a
                href="#"
                class="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
              >
                Daftar
                <span>→</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const moreEvents = [
  {
    title: 'Seminar Karier & Beasiswa 2026',
    description: 'Sesi inspiratif bersama alumni dan perwakilan kampus ternama.',
    day: 'JUM',
    date: '14',
    month: 'FEB',
    time: '09.00 - 12.00 WIB',
    location: 'Aula Utama',
    badge: 'Talkshow',
    capacity: 300,
    status: 'Terbuka untuk umum',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=60',
  },
  {
    title: 'Festival Sains & Expo Projek Siswa',
    description: 'Pameran karya ilmiah, demonstrasi eksperimen, dan booth inovasi.',
    day: 'SAB',
    date: '15',
    month: 'FEB',
    time: '08.00 - 15.00 WIB',
    location: 'Lapangan Tengah',
    badge: 'Expo',
    capacity: 500,
    status: 'Registrasi wajib',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=60',
  },
  {
    title: 'Klinik Masuk PTN & Tryout UTBK',
    description: 'Pendampingan strategi belajar, simulasi soal, dan konsultasi jurusan.',
    day: 'MIN',
    date: '16',
    month: 'FEB',
    time: '08.30 - 11.30 WIB',
    location: 'Ruang Multimedia',
    badge: 'Akademik',
    capacity: 200,
    status: 'Khusus kelas XII',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=60',
  },
  {
    title: 'Open House Ekstrakurikuler',
    description: 'Perkenalan ekskul, demo latihan, dan pendaftaran anggota baru.',
    day: 'SEL',
    date: '18',
    month: 'FEB',
    time: '15.00 - 17.00 WIB',
    location: 'Gelanggang Olahraga',
    badge: 'Ekskul',
    capacity: 450,
    status: 'Terbuka untuk siswa',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=60',
  },
]
</script>
