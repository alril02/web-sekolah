<template>
  <div class="flex h-full flex-col gap-6">
    <div class="flex items-center gap-2 text-sm text-slate-500">
      <span>Home</span>
      <span>›</span>
      <span class="text-slate-700">Student Details</span>
    </div>

    <section class="flex min-h-0 flex-1 flex-col rounded-xl bg-white shadow-sm">
      <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-4">
        <div>
          <h2 class="text-base font-semibold text-slate-800">
            About {{ student?.name || 'Student Details' }}
          </h2>
          <p class="text-xs text-slate-400">Student profile information</p>
        </div>
        <div class="flex items-center gap-2 text-xs text-slate-500">
          <button class="flex h-8 w-8 items-center justify-center rounded bg-slate-100 text-slate-600" title="Refresh">
            ↻
          </button>
          <button class="flex h-8 w-8 items-center justify-center rounded bg-slate-100 text-slate-600" title="Edit">
            ✎
          </button>
          <button class="flex h-8 w-8 items-center justify-center rounded bg-slate-100 text-slate-600" title="Print">
            🖨
          </button>
          <button class="flex h-8 w-8 items-center justify-center rounded bg-slate-100 text-slate-600" title="Download">
            ⬇
          </button>
          <button
            class="flex h-8 w-8 items-center justify-center rounded bg-rose-50 text-rose-500"
            title="Close"
            @click="goBack"
          >
            ✕
          </button>
        </div>
      </div>

      <div class="flex min-h-0 flex-1 flex-col gap-8 overflow-y-auto px-6 py-6 lg:flex-row">
        <div class="flex w-full max-w-xs items-center justify-center rounded-md bg-sky-500/20 p-6">
          <div class="h-48 w-48 overflow-hidden rounded-md bg-white">
            <img
              :src="student?.photo || fallbackAvatar"
              :alt="student?.name || 'Student'"
              class="h-full w-full object-cover"
            />
          </div>
        </div>

        <div class="min-w-0 flex-1">
          <div class="grid gap-y-3 text-sm text-slate-500">
            <div class="grid grid-cols-[140px,1fr]">
              <span>Name :</span>
              <span class="break-words text-slate-700">{{ student?.name || '-' }}</span>
            </div>
            <div class="grid grid-cols-[140px,1fr]">
              <span>Gender :</span>
              <span class="break-words text-slate-700">{{ student?.gender || '-' }}</span>
            </div>
            <div class="grid grid-cols-[140px,1fr]">
              <span>Father Name :</span>
              <span class="break-words text-slate-700">{{ student?.parent || '-' }}</span>
            </div>
            <div class="grid grid-cols-[140px,1fr]">
              <span>Date Of Birth :</span>
              <span class="break-words text-slate-700">{{ student?.dob || '-' }}</span>
            </div>
            <div class="grid grid-cols-[140px,1fr]">
              <span>E-mail :</span>
              <span class="break-words text-slate-700">{{ student?.email || '-' }}</span>
            </div>
            <div class="grid grid-cols-[140px,1fr]">
              <span>Class :</span>
              <span class="break-words text-slate-700">{{ student?.className || '-' }}</span>
            </div>
            <div class="grid grid-cols-[140px,1fr]">
              <span>Section :</span>
              <span class="break-words text-slate-700">{{ student?.section || '-' }}</span>
            </div>
            <div class="grid grid-cols-[140px,1fr]">
              <span>Roll :</span>
              <span class="break-words text-slate-700">{{ student?.roll || '-' }}</span>
            </div>
            <div class="grid grid-cols-[140px,1fr]">
              <span>Address :</span>
              <span class="break-words text-slate-700">{{ student?.address || '-' }}</span>
            </div>
            <div class="grid grid-cols-[140px,1fr]">
              <span>Phone :</span>
              <span class="break-words text-slate-700">{{ student?.mobile || '-' }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { students } from '../data/students'

const route = useRoute()
const router = useRouter()
const fallbackAvatar = 'https://api.dicebear.com/7.x/avataaars/png?seed=student'

const student = computed(() => students.find((item) => item.roll === route.params.roll))

const goBack = () => {
  router.push('/sms/students')
}
</script>
