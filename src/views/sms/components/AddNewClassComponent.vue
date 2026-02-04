<template>
  <transition name="fade">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-y-auto bg-slate-900/40 p-4"
    >
      <div class="absolute inset-0" @click="emitClose"></div>
      <transition name="scale">
        <div
          v-show="modelValue"
          class="relative z-10 w-full max-w-4xl rounded-2xl bg-white shadow-2xl"
          role="dialog"
          aria-modal="true"
        >
          <div class="flex items-center justify-between border-b border-slate-100 px-6 py-4">
            <div>
              <p class="text-xs uppercase tracking-wide text-slate-400">Form</p>
              <h3 class="text-lg font-semibold text-slate-800">Class Information</h3>
            </div>
            <div class="flex items-center gap-2">
              <button
                class="h-9 w-9 rounded-full bg-rose-50 text-rose-500 hover:bg-rose-100"
                aria-label="Close"
                @click="emitClose"
              >
                ✕
              </button>
            </div>
          </div>

          <form class="grid gap-4 p-6 text-sm text-slate-600">
            <div class="grid gap-4 lg:grid-cols-2">
              <div class="space-y-2">
                <label class="text-xs font-semibold text-slate-500">Teacher Name</label>
                <input type="text" class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2" />
              </div>
              <div class="space-y-2">
                <label class="text-xs font-semibold text-slate-500">ID</label>
                <input type="text" class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2" />
              </div>
            </div>

            <div class="grid gap-4 lg:grid-cols-2">
              <div class="space-y-2">
                <label class="text-xs font-semibold text-slate-500">Gender</label>
                <select class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div class="space-y-2">
                <label class="text-xs font-semibold text-slate-500">Class</label>
                <select class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                  <option value="">Select Class</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>

            <div class="grid gap-4 lg:grid-cols-2">
              <div class="space-y-2">
                <label class="text-xs font-semibold text-slate-500">Subject</label>
                <select class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                  <option value="">Select Subject</option>
                  <option>Math</option>
                  <option>English</option>
                  <option>Science</option>
                </select>
              </div>
              <div class="space-y-2">
                <label class="text-xs font-semibold text-slate-500">Section</label>
                <select class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                  <option value="">Select Section</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
            </div>

            <div class="grid gap-4 lg:grid-cols-2">
              <div class="space-y-2">
                <label class="text-xs font-semibold text-slate-500">Time</label>
                <input type="text" class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2" />
              </div>
              <div class="space-y-2">
                <label class="text-xs font-semibold text-slate-500">Date</label>
                <input type="text" placeholder="dd / mm / yyyy" class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2" />
              </div>
            </div>

            <div class="grid gap-4 lg:grid-cols-2">
              <div class="space-y-2">
                <label class="text-xs font-semibold text-slate-500">Phone</label>
                <input type="text" class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2" />
              </div>
              <div class="space-y-2">
                <label class="text-xs font-semibold text-slate-500">E-mail</label>
                <input type="email" class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2" />
              </div>
            </div>
          </form>

          <div class="flex items-center gap-3 border-t border-slate-100 px-6 py-4">
            <button class="rounded-md bg-amber-400 px-6 py-2 text-xs font-semibold uppercase text-white">Save</button>
            <button class="rounded-md bg-[#1e3a8a] px-6 py-2 text-xs font-semibold uppercase text-white">Reset</button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

const emitClose = () => {
  emit('update:modelValue', false)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.scale-enter-active,
.scale-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.scale-enter-from,
.scale-leave-to {
  transform: translateY(8px) scale(0.98);
  opacity: 0;
}
</style>
