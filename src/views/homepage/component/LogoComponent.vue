<template>
  <div class="fixed left-1/2 top-0 z-30 -translate-x-1/2">
    <div class="relative mx-auto">
      <img :src="logoBackground" alt="Background logo" class="w-full" />
      <div class="absolute left-1/2 top-0 w-3/4 -translate-x-1/2 sm:w-2/3">
        <div class="flex items-center justify-center gap-5 text-center">
          <img :src="logoImage" alt="Logo SMA" class="size-20 object-contain" />
          <div class="leading-tight text-center">
            <p class="text-sm font-semibold tracking-[0.35em] text-emerald-700 drop-shadow">
              SMAN 1
            </p>
            <h1
              class="text-2xl font-extrabold uppercase tracking-[0.22em] text-emerald-900 drop-shadow-sm"
            >
              Amurang
            </h1>
            <div class="mx-auto mt-1 h-1 w-14 rounded-full bg-linear-to-r from-emerald-500 via-teal-400 to-amber-400"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import logoBackground from '@/assets/logo-background.svg'

const logoImage = '/logo.jpg'
</script>
