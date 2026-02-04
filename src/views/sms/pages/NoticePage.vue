<template>
  <div class="flex h-full flex-col gap-6">
    <div class="flex items-center gap-2 text-sm text-slate-500">
      <span>Home</span>
      <span>›</span>
      <span class="text-slate-700">Notice Board</span>
    </div>

    <div class="grid gap-6 xl:grid-cols-[340px_1fr]">
      <section class="rounded-xl bg-white p-6 shadow-sm">
        <div class="flex items-center justify-between">
          <h2 class="text-sm font-semibold text-slate-700">Creat A Notice</h2>
          <div class="flex items-center gap-2 text-sm text-slate-400">
            <button class="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200">▾</button>
            <button class="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200">⟳</button>
            <button class="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-rose-500">✕</button>
          </div>
        </div>

        <div class="mt-4 space-y-4 text-sm text-slate-600">
          <label class="block">
            <span class="text-xs text-slate-500">Title</span>
            <input
              type="text"
              placeholder="Title"
              class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none"
            />
          </label>
          <label class="block">
            <span class="text-xs text-slate-500">Details</span>
            <input
              type="text"
              placeholder="Details"
              class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none"
            />
          </label>
          <label class="block">
            <span class="text-xs text-slate-500">Posted By</span>
            <div class="relative">
              <input
                type="text"
                placeholder="Posted by"
                class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none"
              />
              <span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">👤</span>
            </div>
          </label>
          <label class="block">
            <span class="text-xs text-slate-500">Date</span>
            <div class="relative">
              <input
                type="date"
                class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 focus:outline-none"
              />
              <span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">📅</span>
            </div>
          </label>
          <button class="mt-2 w-full rounded-lg bg-[#facc15] px-4 py-2 text-sm font-semibold text-slate-900">Submit</button>
        </div>
      </section>

      <section class="rounded-xl bg-white shadow-sm">
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-4">
          <div>
            <h2 class="text-sm font-semibold text-slate-700">Notice Board</h2>
          </div>
          <div class="flex flex-wrap items-center gap-2 text-xs">
            <input
              v-model="dateQuery"
              type="text"
              placeholder="Search by Date ..."
              class="h-9 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
            />
            <button class="h-9 rounded-full bg-[#1e3a8a] px-4 text-xs font-semibold uppercase tracking-wide text-white">
              Search
            </button>
            <button class="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500">↻</button>
          </div>
        </div>

        <div class="sms-scroll max-h-[560px] overflow-y-auto px-6 py-4 text-sm text-slate-600">
          <div v-for="notice in filteredNotices" :key="notice.id" class="border-b border-slate-100 pb-5 pt-2">
            <p class="text-xs font-semibold text-slate-500">{{ notice.date }}</p>
            <div class="mt-2 flex items-center gap-2">
              <span class="font-semibold" :class="notice.color">{{ notice.author }}</span>
              <span class="text-xs text-slate-400">{{ notice.timeAgo }}</span>
            </div>
            <p class="mt-2 text-xs text-slate-500">
              {{ notice.content }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const dateQuery = ref('')

const notices = [
  {
    id: 1,
    date: '16 May, 2017',
    author: 'Jennyfar Lopez',
    timeAgo: '5 min ago',
    color: 'text-indigo-600',
    content:
      'Great School management simply dummy simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the text of the printing.',
  },
  {
    id: 2,
    date: '14 May, 2017',
    author: 'Kazi Fahim93',
    timeAgo: '5 min ago',
    color: 'text-orange-500',
    content:
      'Great School management simply dummy simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the text of the printing.',
  },
  {
    id: 3,
    date: '12 May, 2017',
    author: 'Mamun Smith',
    timeAgo: '5 min ago',
    color: 'text-rose-500',
    content:
      'Great School management simply dummy simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the text of the printing.',
  },
  {
    id: 4,
    date: '10 May, 2017',
    author: 'Jennyfar Lopez',
    timeAgo: '5 min ago',
    color: 'text-emerald-500',
    content:
      'Great School management simply dummy simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the text of the printing.',
  },
]

const filteredNotices = computed(() => {
  const term = dateQuery.value.toLowerCase()
  return notices.filter((notice) => notice.date.toLowerCase().includes(term))
})
</script>
