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
          class="relative z-10 w-full max-w-3xl rounded-2xl bg-white shadow-2xl"
          role="dialog"
          aria-modal="true"
        >
          <div class="flex items-center justify-between border-b border-slate-100 px-6 py-4">
            <div>
              <p class="text-xs uppercase tracking-wide text-slate-400">About</p>
              <h3 class="text-lg font-semibold text-slate-800">
                {{ teacherName }}
              </h3>
            </div>
            <div class="flex items-center gap-2">
              <button class="h-9 w-9 rounded-lg bg-slate-50 text-slate-500 hover:bg-slate-100" aria-label="Edit">
                ✎
              </button>
              <button class="h-9 w-9 rounded-lg bg-slate-50 text-slate-500 hover:bg-slate-100" aria-label="Print">
                🖨
              </button>
              <button class="h-9 w-9 rounded-lg bg-slate-50 text-slate-500 hover:bg-slate-100" aria-label="Download">
                ⤓
              </button>
              <button
                class="ml-2 h-9 w-9 rounded-full bg-rose-50 text-rose-500 hover:bg-rose-100"
                aria-label="Close"
                @click="emitClose"
              >
                ✕
              </button>
            </div>
          </div>

          <div class="grid gap-6 p-6 md:grid-cols-[220px_1fr]">
            <div class="flex flex-col items-center gap-4">
              <div class="h-52 w-52 overflow-hidden rounded-2xl bg-slate-100">
                <img :src="teacherPhoto" :alt="teacherName" class="h-full w-full object-cover" />
              </div>
              <div class="w-full rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-center">
                <p class="text-sm font-semibold text-slate-700">{{ teacherSubject }}</p>
                <p class="text-xs text-slate-400">Subject</p>
              </div>
            </div>

            <div class="grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
              <div class="space-y-1">
                <p class="text-xs uppercase tracking-wide text-slate-400">Name</p>
                <p class="font-medium text-slate-700">{{ teacherName }}</p>
              </div>
              <div class="space-y-1">
                <p class="text-xs uppercase tracking-wide text-slate-400">Gender</p>
                <p class="font-medium text-slate-700">{{ teacherGender }}</p>
              </div>
              <div class="space-y-1">
                <p class="text-xs uppercase tracking-wide text-slate-400">Date of Birth</p>
                <p class="font-medium text-slate-700">{{ teacherDob }}</p>
              </div>
              <div class="space-y-1">
                <p class="text-xs uppercase tracking-wide text-slate-400">Religion</p>
                <p class="font-medium text-slate-700">{{ teacherReligion }}</p>
              </div>
              <div class="space-y-1">
                <p class="text-xs uppercase tracking-wide text-slate-400">E-mail</p>
                <p class="font-medium text-slate-700">{{ teacherEmail }}</p>
              </div>
              <div class="space-y-1">
                <p class="text-xs uppercase tracking-wide text-slate-400">Joining Date</p>
                <p class="font-medium text-slate-700">{{ teacherJoinDate }}</p>
              </div>
              <div class="space-y-1">
                <p class="text-xs uppercase tracking-wide text-slate-400">Subject</p>
                <p class="font-medium text-slate-700">{{ teacherSubject }}</p>
              </div>
              <div class="space-y-1">
                <p class="text-xs uppercase tracking-wide text-slate-400">Class</p>
                <p class="font-medium text-slate-700">{{ teacherClass }}</p>
              </div>
              <div class="space-y-1">
                <p class="text-xs uppercase tracking-wide text-slate-400">Section</p>
                <p class="font-medium text-slate-700">{{ teacherSection }}</p>
              </div>
              <div class="space-y-1">
                <p class="text-xs uppercase tracking-wide text-slate-400">ID</p>
                <p class="font-medium text-slate-700">{{ teacherId }}</p>
              </div>
              <div class="space-y-1 sm:col-span-2">
                <p class="text-xs uppercase tracking-wide text-slate-400">Address</p>
                <p class="font-medium text-slate-700">{{ teacherAddress }}</p>
              </div>
              <div class="space-y-1">
                <p class="text-xs uppercase tracking-wide text-slate-400">Phone</p>
                <p class="font-medium text-slate-700">{{ teacherMobile }}</p>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-end gap-2 border-t border-slate-100 px-6 py-4">
            <button
              class="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-500"
              @click="emitClose"
            >
              Close
            </button>
            <button class="rounded-full bg-[#1e3a8a] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
              View Profile
            </button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  teacher: {
    type: Object,
    default: () => ({}),
  },
})

const emit = defineEmits(['update:modelValue'])

const emitClose = () => {
  emit('update:modelValue', false)
}

const teacherName = computed(() => props.teacher?.name || 'Teacher')
const teacherGender = computed(() => props.teacher?.gender || '-')
const teacherDob = computed(() => props.teacher?.dob || '-')
const teacherReligion = computed(() => props.teacher?.religion || 'Islam')
const teacherEmail = computed(() => props.teacher?.email || '-')
const teacherJoinDate = computed(() => props.teacher?.joinDate || '05/04/2016')
const teacherSubject = computed(() => props.teacher?.subject || '-')
const teacherClass = computed(() => props.teacher?.className || '-')
const teacherSection = computed(() => props.teacher?.section || '-')
const teacherId = computed(() => props.teacher?.id || '-')
const teacherAddress = computed(() => props.teacher?.address || '-')
const teacherMobile = computed(() => props.teacher?.mobile || '-')
const teacherPhoto = computed(
  () =>
    props.teacher?.photo ||
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=60'
)
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
