<template>
  <header class="fixed top-0 z-50 w-full">
    <Logo />
    <!-- Top Utility Bar -->
    <div class="border-b border-white/30 bg-white/70 text-gray-800 backdrop-blur">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex items-center justify-between py-2 text-[11px] font-semibold uppercase tracking-widest">
          <nav class="hidden lg:flex items-center gap-6">
            <a href="#" class="transition hover:text-gray-900">News</a>
            <a href="#" class="transition hover:text-gray-900">Events</a>
            <a href="#" class="transition hover:text-gray-900">Careers</a>
            <a href="#" class="flex items-center gap-1 transition hover:text-gray-900">
              Info For <span class="text-xs">▼</span>
            </a>
          </nav>

          <nav class="hidden lg:flex items-center gap-6">
            <a href="#" class="transition hover:text-gray-900">Visit</a>
            <a href="#" class="transition hover:text-gray-900">Contact Us</a>
            <a href="#" class="transition hover:text-gray-900">Directory</a>
            <button class="text-base transition hover:text-gray-900" aria-label="Search">🔍</button>
            <router-link
              to="/login"
              class="ml-2 inline-flex items-center rounded-full border border-gray-300/60 bg-white/80 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-800 transition hover:border-gray-400 hover:bg-white"
            >
              <span class="mr-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/20">
                <font-awesome-icon :icon="['fas', 'user']" class="h-3 w-3" />
              </span>
              Login
            </router-link>
          </nav>
        </div>
      </div>
    </div>

    <!-- Main Bar -->
    <div class="border-b border-gray-500/40 bg-gray-600/80 text-white shadow-md backdrop-blur">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex items-center justify-between gap-6 py-4">
          <!-- LEFT MENU -->
          <nav class="hidden lg:flex items-center justify-end gap-8 text-xs font-semibold uppercase tracking-widest flex-1 mr-50">
            <div class="relative inline-block group">
              <a href="#" class="flex items-center gap-1 transition hover:text-[#f6c453]">
                Profil Sekolah <span class="text-xs">▼</span>
              </a>

              <div
                class="absolute left-1/2 top-full z-50 mt-0 w-screen max-w-4xl -translate-x-1/2 border border-gray-200/80 bg-white/90 px-3 text-gray-800 shadow-xl opacity-0 invisible transition duration-200 group-hover:visible group-hover:opacity-100 backdrop-blur"
              >
                <div class="px-3 pt-2 pb-3">
                  <div class="w-fit border-b border-gray-300 pb-2 text-xs font-semibold uppercase tracking-widest text-gray-700">
                    Who We Are
                  </div>

                  <div class="mt-4 grid grid-cols-3 gap-6 text-sm font-medium normal-case">
                    <div class="space-y-3">
                      <a href="#" class="flex items-center gap-2 hover:text-[#8c1515]">
                        Scholarship at UChicago <span class="text-[#8c1515]">›</span>
                      </a>
                      <a href="#" class="flex items-center gap-2 hover:text-[#8c1515]">
                        What We Value <span class="text-[#8c1515]">›</span>
                      </a>
                      <a href="#" class="flex items-center gap-2 hover:text-[#8c1515]">
                        Global Impact <span class="text-[#8c1515]">›</span>
                      </a>
                    </div>

                    <div class="space-y-3">
                      <a href="#" class="flex items-center gap-2 hover:text-[#8c1515]">
                        Community Impact <span class="text-[#8c1515]">›</span>
                      </a>
                      <a href="#" class="flex items-center gap-2 hover:text-[#8c1515]">
                        History &amp; Traditions <span class="text-[#8c1515]">›</span>
                      </a>
                      <a href="#" class="flex items-center gap-2 hover:text-[#8c1515]">
                        Facts &amp; Figures <span class="text-[#8c1515]">›</span>
                      </a>
                    </div>

                    <div class="space-y-3">
                      <a href="#" class="flex items-center gap-2 hover:text-[#8c1515]">
                        UChicago Leadership <span class="text-[#8c1515]">›</span>
                      </a>
                      <a href="#" class="flex items-center gap-2 hover:text-[#8c1515]">
                        University Administration <span class="text-[#8c1515]">›</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" class="transition hover:text-[#f6c453]">Berita</a>
            <a href="#" class="transition hover:text-[#f6c453]">Layanan</a>
          </nav>


          <!-- RIGHT MENU -->
          <div class="hidden lg:flex items-center justify-start gap-8 text-xs font-semibold uppercase tracking-widest flex-1 ml-50">
            <a href="#" class="transition hover:text-[#f6c453]">Prestasi</a>
            <a href="#" class="transition hover:text-[#f6c453]">Profil Alumni</a>
            <a href="#" class="transition hover:text-[#f6c453]">Kontak</a>
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
