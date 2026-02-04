<template>
  <footer class="w-full overflow-hidden bg-slate-900/80 text-emerald-50 backdrop-blur">
    <div class="mx-auto max-w-6xl px-4 py-12">
      <div class="grid gap-10 md:grid-cols-4">
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <div class="rounded-xl bg-white/95 p-2">
              <img src="/logo.jpg" alt="Logo SMA Negeri 1 Amurang" class="h-14 w-14 object-contain" />
            </div>
            <div>
              <p class="text-xs font-semibold tracking-[0.3em] text-emerald-200">SMA NEGERI 1</p>
              <h3 class="text-lg font-bold text-white">AMURANG</h3>
            </div>
          </div>
          <p class="text-sm text-emerald-100/80">
            Sekolah menengah atas unggulan dengan fokus pada karakter, akademik, dan prestasi siswa.
          </p>
        </div>

        <div class="space-y-3">
          <h4 class="text-sm font-semibold uppercase tracking-widest text-emerald-200">Kontak</h4>
          <p class="text-sm text-emerald-100/80">Jl. Pendidikan No. 1, Amurang, Sulawesi Utara</p>
          <p class="text-sm text-emerald-100/80">(0431) 123-456</p>
          <p class="text-sm text-emerald-100/80">info@sman1amurang.sch.id</p>
        </div>

        <div class="space-y-3">
          <h4 class="text-sm font-semibold uppercase tracking-widest text-emerald-200">Layanan</h4>
          <ul class="space-y-2 text-sm text-emerald-100/80">
            <li><a href="#" class="hover:text-white">PPDB & Informasi</a></li>
            <li><a href="#" class="hover:text-white">E-Learning</a></li>
            <li><a href="#" class="hover:text-white">Perpustakaan Digital</a></li>
            <li><a href="#" class="hover:text-white">Agenda Sekolah</a></li>
            <li><a href="#" class="hover:text-white">Alumni & Karier</a></li>
          </ul>
        </div>

        <div class="space-y-3">
          <h4 class="text-sm font-semibold uppercase tracking-widest text-emerald-200">Tautan Cepat</h4>
          <ul class="space-y-2 text-sm text-emerald-100/80">
            <li><a href="#" class="hover:text-white">Profil Sekolah</a></li>
            <li><a href="#" class="hover:text-white">Prestasi</a></li>
            <li><a href="#" class="hover:text-white">Ekstrakurikuler</a></li>
            <li><a href="#" class="hover:text-white">Galeri</a></li>
            <li><a href="#" class="hover:text-white">Kontak Kami</a></li>
          </ul>
          <div class="flex items-center gap-4 pt-2 text-emerald-100/80">
            <a href="#" class="hover:text-white" aria-label="Facebook">
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </a>
            <a href="#" class="hover:text-white" aria-label="Instagram">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
            <a href="#" class="hover:text-white" aria-label="LinkedIn">
              <font-awesome-icon :icon="['fab', 'linkedin-in']" />
            </a>
            <a href="#" class="hover:text-white" aria-label="X">
              <font-awesome-icon :icon="['fab', 'x-twitter']" />
            </a>
            <a href="#" class="hover:text-white" aria-label="YouTube">
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-emerald-900/60 bg-slate-950/80">
      <div class="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-emerald-200/80">
        © 2026 SMA Negeri 1 Amurang. Semua hak dilindungi.
      </div>
    </div>
  </footer>
</template>
