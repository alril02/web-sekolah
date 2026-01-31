<template>
  <header class="fixed w-full top-0 z-50">
    <Logo />
    <!-- Top Utility Bar -->
    <div class="bg-white text-gray-700">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex items-center justify-between py-2 text-[11px] font-semibold uppercase tracking-widest">
          <nav class="hidden lg:flex items-center gap-6">
            <a href="#" class="hover:text-gray-900 transition">News</a>
            <a href="#" class="hover:text-gray-900 transition">Events</a>
            <a href="#" class="hover:text-gray-900 transition">Careers</a>
            <a href="#" class="hover:text-gray-900 transition flex items-center gap-1">
              Info For <span class="text-xs">▼</span>
            </a>
          </nav>

          <nav class="hidden lg:flex items-center gap-6">
            <a href="#" class="hover:text-gray-900 transition">Visit</a>
            <a href="#" class="hover:text-gray-900 transition">Contact Us</a>
            <a href="#" class="hover:text-gray-900 transition">Directory</a>
            <button class="text-base hover:text-gray-900 transition" aria-label="Search">🔍</button>
          </nav>
        </div>
      </div>
    </div>

    <!-- Main Bar -->
    <div class="bg-gray-600 text-white shadow-md">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex items-center justify-between gap-6 py-4">
          <!-- LEFT MENU -->
          <nav class="hidden lg:flex items-center justify-end gap-8 text-xs font-semibold uppercase tracking-widest flex-1 mr-40">
            <div class="relative inline-block group">
              <a
                href="#"
                class="hover:text-[#f6c453] transition flex items-center gap-1"
              >
                Profil Sekolah <span class="text-xs">▼</span>
              </a>

              <div
                class="absolute left-1/2 top-full -translate-x-1/2 mt-0 w-screen max-w-4xl px-3 bg-white text-[#8c1515] shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50"
              >
                <div class="px-3 pt-2 pb-3">
                  <div class="text-xs font-semibold uppercase tracking-widest text-[#8c1515] pb-2 border-b border-[#8c1515] w-fit">
                    Who We Are
                  </div>

                  <div class="mt-4 grid grid-cols-3 gap-6 text-sm font-medium normal-case">
                    <div class="space-y-3">
                      <a href="#" class="flex items-center gap-2 hover:underline">
                        Scholarship at UChicago <span class="text-[#8c1515]">›</span>
                      </a>
                      <a href="#" class="flex items-center gap-2 hover:underline">
                        What We Value <span class="text-[#8c1515]">›</span>
                      </a>
                      <a href="#" class="flex items-center gap-2 hover:underline">
                        Global Impact <span class="text-[#8c1515]">›</span>
                      </a>
                    </div>

                    <div class="space-y-3">
                      <a href="#" class="flex items-center gap-2 hover:underline">
                        Community Impact <span class="text-[#8c1515]">›</span>
                      </a>
                      <a href="#" class="flex items-center gap-2 hover:underline">
                        History &amp; Traditions <span class="text-[#8c1515]">›</span>
                      </a>
                      <a href="#" class="flex items-center gap-2 hover:underline">
                        Facts &amp; Figures <span class="text-[#8c1515]">›</span>
                      </a>
                    </div>

                    <div class="space-y-3">
                      <a href="#" class="flex items-center gap-2 hover:underline">
                        UChicago Leadership <span class="text-[#8c1515]">›</span>
                      </a>
                      <a href="#" class="flex items-center gap-2 hover:underline">
                        University Administration <span class="text-[#8c1515]">›</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" class="hover:text-[#f6c453] transition">Berita</a>
            <a href="#" class="hover:text-[#f6c453] transition">Layanan</a>
          </nav>


          <!-- RIGHT MENU -->
          <div class="hidden lg:flex items-center justify-start gap-8 text-xs font-semibold uppercase tracking-widest flex-1 ml-40">
            <a href="#" class="hover:text-[#f6c453] transition">Prestasi</a>
            <a href="#" class="hover:text-[#f6c453] transition">Profil Alumni</a>
            <a href="#" class="hover:text-[#f6c453] transition">Kontak</a>
          </div>

          <!-- MOBILE MENU ICON -->
          <button class="lg:hidden text-2xl text-white">☰</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import Logo from './LogoComponent.vue'
</script>
