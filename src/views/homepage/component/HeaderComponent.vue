<template>
  <!-- SINGLE HEADER -->
  <header class="absolute w-full top-0 z-50 bg-gray-400 shadow-md">
    <Logo />

    <div class="max-w-7xl mx-auto px-4">
      <div class=" flex items-center justify-between">
        <!-- LEFT MENU -->
        <nav class="hidden lg:flex gap-8 text-sm font-semibold uppercase text-white">
          <!-- PROFIL SEKOLAH -->
          <div class="relative inline-block group">
            <a
              href="#"
              class="hover:text-black group-hover:text-black group-focus-within:text-black transition flex items-center gap-1"
            >
              Profil Sekolah <span class="text-xs">▼</span>
            </a>

            <!-- DROPDOWN -->
            <div
              class="absolute top-full left-1/2 -translate-x-1/2 w-56 mt-8 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition duration-200 z-50"
            >
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Kata Sambutan </a>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Sejarah </a>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Visi &amp; Misi
              </a>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Kondisi Sekolah
              </a>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Sarana Prasarana
              </a>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Struktur Organisasi
              </a>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Staf </a>
            </div>
          </div>

          <!-- BERITA -->
          <div class="relative inline-block group">
            <a
              href="#"
              class="hover:text-black group-hover:text-black group-focus-within:text-black transition flex items-center gap-1"
            >
              Berita
              <span class="text-xs">▼</span>
            </a>

            <!-- DROPDOWN BERITA -->
            <div
              class="absolute top-full left-1/2 -translate-x-1/2 w-56 mt-8 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition duration-200 z-50"
            >
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Berita Terbaru
              </a>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Info Sekolah </a>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Agenda </a>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Galeri </a>
            </div>
          </div>

          <!-- LAYANAN -->
          <div class="relative inline-block group">
            <a
              href="#"
              class="hover:text-black group-hover:text-black group-focus-within:text-black transition flex items-center gap-1"
            >
              Layanan
              <span class="text-xs">▼</span>
            </a>

            <!-- DROPDOWN LAYANAN -->
            <div
              class="absolute top-full left-1/2 -translate-x-1/2 w-56 mt-8 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition duration-200 z-50"
            >
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Ekstrakurikuler
              </a>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Laboratorium </a>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Perpustakaan </a>
            </div>
          </div>
        </nav>

        <!-- RIGHT MENU -->
        <nav class="hidden lg:flex gap-8 text-sm font-semibold uppercase text-white">
          <a href="#" class="hover:text-black">Prestasi</a>

          <!-- UNTUK ORANG TUA -->
          <div class="relative inline-block group">
            <a
              href="#"
              class="hover:text-black group-hover:text-black group-focus-within:text-black transition flex items-center gap-1"
            >
              Untuk Orang Tua
              <span class="text-xs">▼</span>
            </a>

            <!-- DROPDOWN UNTUK ORANG TUA -->
            <div
              class="absolute top-full left-1/2 -translate-x-1/2 w-80 mt-8 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition duration-200 z-50"
            >
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Buku Pedoman Siswa dan Orang Tua
              </a>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Kebijakan Sekolah
              </a>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Kalender Akademik
              </a>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Masukkan dan Saran
              </a>
            </div>
          </div>
        </nav>

        <!-- MOBILE MENU ICON -->
        <button class="lg:hidden text-2xl text-gray-800">☰</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import Logo from './LogoComponent.vue'
</script>
