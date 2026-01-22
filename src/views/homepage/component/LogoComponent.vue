<template>
  <div class="fixed left-1/2 -translate-x-1/2 p-10 w-auto h-auto z-20 flex flex-col items-center">
    <img :src="logoBackground" alt="Logo Sekolah" class="absolute inset-0 h-full w-full object-cover z-30"/>
    <div class="relative z-40">
      <h1 class="text-xl font-serif font-bold text-black tracking-wide">
        SMA NEGERI 1 AMURANG
      </h1>
      <p class="text-[11px] text-gray-600 tracking-widest uppercase">
        Unggul dalam Prestasi dan Karakter
      </p>
    </div>
  </div>
</template>

<script setup>
  import logoBackground from '@/assets/logo-background.svg'
</script>
