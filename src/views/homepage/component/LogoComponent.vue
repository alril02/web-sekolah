<template>
  <div class="fixed top-0 left-1/2 transform -translate-x-1/2 p-10 w-auto h-auto z-20 flex">
    <img :src="logoImage" alt="Logo SMA" class="absolute inset-0 h-full w-full object-cover z-30" />
    <div class="text-black z-40 mt-[-20px]">
      <h1 class="text-black font-bold text-xl z-40">SMA Negeri 1 Amurang</h1>
      <span class="text-black text-gray-800 text-md z-40">Unggul dalam Prestasi dan Karakter</span>
    </div>
  </div>
</template>
<script setup>
import logoImage from '@/assets/logo-background.svg'
</script>
