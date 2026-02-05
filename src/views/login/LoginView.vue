<template>
  <div class="relative min-h-screen overflow-hidden bg-[#0f172a] text-white">
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80')"
    ></div>
    <div class="absolute inset-0 bg-linear-to-br from-[#0f172a]/95 via-[#0f172a]/70 to-[#1f4a8a]/70"></div>
    <div class="absolute inset-0">
      <div class="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#facc15]/20 blur-3xl"></div>
      <div class="absolute right-0 top-24 h-96 w-96 rounded-full bg-[#38bdf8]/15 blur-3xl"></div>
      <div class="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#f97316]/15 blur-3xl"></div>
    </div>

    <div class="relative mx-auto flex min-h-screen max-w-6xl items-center px-4 py-16">
      <div class="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <section class="text-white">
          <div class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#facc15]">
            Portal Siswa SMA
          </div>
          <h1 class="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
            Selamat Datang di
            <span class="text-[#facc15]">Sistem Informasi SMAN 1 Amurang</span>
          </h1>
          <p class="mt-4 max-w-xl text-base text-white/80 md:text-lg">
            Satu akses untuk jadwal, nilai, kegiatan OSIS, dan pengumuman sekolah. Masuk untuk
            melanjutkan agenda belajar kamu hari ini.
          </p>

          <div class="mt-8 grid max-w-xl gap-4 sm:grid-cols-2">
            <div class="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-sm backdrop-blur">
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#38bdf8]">
                Jadwal &amp; Agenda
              </p>
              <p class="mt-2 text-sm text-white/80">
                Lihat kelas, ekskul, kegiatan OSIS, dan event sekolah.
              </p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-sm backdrop-blur">
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#38bdf8]">
                Nilai &amp; Kehadiran
              </p>
              <p class="mt-2 text-sm text-white/80">
                Pantau progres akademik dan kehadiran setiap semester.
              </p>
            </div>
          </div>

          <div class="mt-10 flex flex-wrap gap-6 text-sm text-white/80">
            <div class="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
              <p class="text-xs uppercase tracking-[0.2em] text-white/60">Prestasi</p>
              <p class="mt-1 text-lg font-semibold text-white">Top 5 Kota</p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
              <p class="text-xs uppercase tracking-[0.2em] text-white/60">Kegiatan</p>
              <p class="mt-1 text-lg font-semibold text-white">32 Ekskul</p>
            </div>
          </div>
        </section>

        <section class="relative">
          <div class="absolute -top-6 left-6 hidden h-16 w-16 rounded-2xl border border-white/20 bg-white/10 shadow-sm lg:block"></div>
          <div class="absolute -bottom-6 right-6 hidden h-20 w-20 rounded-full border border-white/20 bg-white/10 shadow-sm lg:block"></div>

          <div class="rounded-[28px] border border-white/15 bg-white/10 p-8 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.8)] backdrop-blur">
            <div class="flex items-center gap-3">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#facc15]/20 text-[#facc15]">
                <span class="text-2xl font-semibold">S</span>
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.25em] text-[#38bdf8]">
                  Login Siswa
                </p>
                <h2 class="text-2xl font-semibold text-white">Masuk Akun</h2>
              </div>
            </div>

            <form class="mt-8 space-y-5" @submit.prevent="handleLogin">
              <label class="block text-sm font-medium text-white/80">
                Email
                <input
                  type="email"
                  name="email"
                  autocomplete="email"
                  placeholder="nama@email.com"
                  v-model="email"
                  class="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-[#38bdf8] focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/40"
                />
              </label>

              <label class="block text-sm font-medium text-white/80">
                Password
                <input
                  type="password"
                  name="password"
                  autocomplete="current-password"
                  placeholder="••••••••"
                  v-model="password"
                  class="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-[#38bdf8] focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/40"
                />
              </label>

              <p v-if="errorMessage" class="rounded-xl border border-rose-400/40 bg-rose-500/10 px-4 py-3 text-xs text-rose-100">
                {{ errorMessage }}
              </p>

              <div class="flex items-center justify-between text-xs text-white/70">
                <label class="flex items-center gap-2">
                  <input type="checkbox" class="h-4 w-4 rounded border-white/40 bg-white/10" />
                  Ingat saya
                </label>
                <button type="button" class="font-semibold text-[#facc15] hover:text-[#fde047]">
                  Lupa password?
                </button>
              </div>

              <button
                type="submit"
                class="w-full rounded-xl bg-[#facc15] px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0f172a] transition hover:bg-[#fde047]"
                :disabled="isLoading"
              >
                {{ isLoading ? 'Memproses...' : 'Masuk' }}
              </button>
            </form>

            <div class="my-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-white/50">
              <span class="h-px flex-1 bg-white/15"></span>
              Atau login dengan
              <span class="h-px flex-1 bg-white/15"></span>
            </div>

            <div class="grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                class="flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/15"
              >
                <font-awesome-icon :icon="['fab', 'google']" class="text-lg" />
                Google
              </button>
              <button
                type="button"
                class="flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/15"
              >
                <font-awesome-icon :icon="['fab', 'facebook-f']" class="text-lg" />
                Facebook
              </button>
            </div>

            <div class="mt-6 flex justify-center">
              <router-link
                to="/"
                class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 transition hover:border-white/40 hover:bg-white/15"
              >
                Kembali ke Beranda
              </router-link>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const isLoading = ref(false)
const errorMessage = ref('')

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

const redirectByRole = (role) => {
  const normalizedRole = (role || '').toString().toLowerCase()
  if (normalizedRole === 'administrator') return '/sms'
  if (normalizedRole === 'guru') return '/guru'
  if (normalizedRole === 'siswa') return '/siswa'
  if (normalizedRole === 'orang_tua' || normalizedRole === 'orang tua murid' || normalizedRole === 'ortu') {
    return '/ortu'
  }
  if (normalizedRole === 'pengelola') return '/guru'
  return '/sms'
}

const handleLogin = async () => {
  errorMessage.value = ''
  isLoading.value = true

  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData?.message || 'Login gagal. Cek email dan password.')
    }

    const data = await response.json()
    if (data?.accessToken) {
      localStorage.setItem('accessToken', data.accessToken)
    }
    if (data?.user) {
      localStorage.setItem('user', JSON.stringify(data.user))
    }

    const nextPath = redirectByRole(data?.user?.role)
    await router.push(nextPath)
  } catch (error) {
    errorMessage.value = error?.message || 'Login gagal. Coba lagi.'
  } finally {
    isLoading.value = false
  }
}
</script>
