<template>
<button :class="`mt-6 bg-${bglatar} text-${color}-700 px-5 py-2 rounded-md flex items-center gap-2 w-max transition-all duration-300 ease-in-out
         hover:translate-x-2 hover:text-${color}-900 hover:shadow-lg group`">
          {{ label }}
          <span :class="`text-lg text-${color}-700 hover:text-${color}-950`">››</span>
        </button>
</template>

<script setup>
// in <script setup>
defineProps({
  label: String,
  color: String,
  path: String,
  bglatar: String,
})
</script>
