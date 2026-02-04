<template>
  <div class="flex h-full flex-col gap-6">
    <div class="flex items-center gap-2 text-sm text-slate-500">
      <span>Home</span>
      <span>›</span>
      <span class="text-slate-700">Class Routine</span>
    </div>

    <section class="grid gap-6 lg:grid-cols-[320px_1fr]">
      <div class="rounded-xl bg-white p-6 shadow-sm">
        <div class="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h2 class="text-lg font-semibold text-slate-800">Manage Class Routine</h2>
            <p class="text-xs text-slate-400">Create new routine</p>
          </div>
          <div class="flex items-center gap-2">
            <button class="h-7 w-7 rounded-full bg-amber-50 text-amber-500">↻</button>
            <button class="h-7 w-7 rounded-full bg-emerald-50 text-emerald-500">✓</button>
            <button class="h-7 w-7 rounded-full bg-rose-50 text-rose-500">✕</button>
          </div>
        </div>

        <form class="mt-4 grid gap-4 text-sm text-slate-600">
          <div class="space-y-2">
            <label class="text-xs font-semibold text-slate-500">Subject Name</label>
            <input type="text" class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2" />
          </div>
          <div class="space-y-2">
            <label class="text-xs font-semibold text-slate-500">Subject Type</label>
            <select class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
              <option value="">Select Type</option>
              <option>Theory</option>
              <option>Practical</option>
              <option>Mathematics</option>
            </select>
          </div>
          <div class="space-y-2">
            <label class="text-xs font-semibold text-slate-500">Select Class</label>
            <select class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
              <option value="">Select Class</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div class="space-y-2">
            <label class="text-xs font-semibold text-slate-500">Subject Code</label>
            <input type="text" class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2" />
          </div>
          <button class="mt-2 w-fit rounded-md bg-amber-400 px-6 py-2 text-xs font-semibold uppercase text-white">
            Submit
          </button>
        </form>
      </div>

      <div class="rounded-xl bg-white shadow-sm">
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-4">
          <div>
            <h2 class="text-lg font-semibold text-slate-800">Class Routine</h2>
            <p class="text-xs text-slate-400">Weekly schedule overview</p>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <input
              v-model="dayQuery"
              type="text"
              placeholder="Search by day ..."
              class="h-8 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
            />
            <input
              v-model="classQuery"
              type="text"
              placeholder="Search Class Here..."
              class="h-8 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
            />
            <input
              v-model="sectionQuery"
              type="text"
              placeholder="Type Section ..."
              class="h-8 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
            />
            <button class="h-8 rounded-full bg-[#1e3a8a] px-4 text-xs font-semibold uppercase text-white">Search</button>
            <button class="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500">↻</button>
          </div>
        </div>

        <div class="sms-scroll min-h-0 overflow-x-auto overflow-y-auto">
          <table class="min-w-full text-left text-xs">
            <thead class="sticky top-0 z-10 bg-slate-50 text-slate-500">
              <tr>
                <th class="px-4 py-3"><input type="checkbox" /></th>
                <th class="px-4 py-3">Day</th>
                <th class="px-4 py-3">Class</th>
                <th class="px-4 py-3">Subject</th>
                <th class="px-4 py-3">Section</th>
                <th class="px-4 py-3">Teacher</th>
                <th class="px-4 py-3">Time</th>
                <th class="px-4 py-3">Date</th>
                <th class="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-600">
              <tr v-for="item in filteredRoutines" :key="item.id" class="hover:bg-slate-50">
                <td class="px-4 py-3"><input type="checkbox" /></td>
                <td class="px-4 py-3">{{ item.day }}</td>
                <td class="px-4 py-3">{{ item.className }}</td>
                <td class="px-4 py-3">{{ item.subject }}</td>
                <td class="px-4 py-3">{{ item.section }}</td>
                <td class="px-4 py-3">{{ item.teacher }}</td>
                <td class="px-4 py-3">{{ item.time }}</td>
                <td class="px-4 py-3">{{ item.date }}</td>
                <td class="px-4 py-3">
                  <div class="flex items-center justify-center gap-2">
                    <button class="h-6 w-6 rounded-full bg-slate-100 text-slate-600">👁</button>
                    <button class="h-6 w-6 rounded-full bg-emerald-50 text-emerald-600">✎</button>
                    <button class="h-6 w-6 rounded-full bg-rose-50 text-rose-600">🗑</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const dayQuery = ref('')
const classQuery = ref('')
const sectionQuery = ref('')

const routines = [
  {
    id: 1,
    day: 'Sunday',
    className: '2',
    subject: 'Mathematics',
    section: 'A',
    teacher: 'Kazi Fahim',
    time: '10.00 am - 11.00 am',
    date: '20/06/2017',
  },
  {
    id: 2,
    day: 'Monday',
    className: '2',
    subject: 'Bangla',
    section: 'A',
    teacher: 'Richir',
    time: '11.00 am - 12.00 pm',
    date: '20/06/2017',
  },
  {
    id: 3,
    day: 'Tuesday',
    className: '2',
    subject: '-',
    section: '-',
    teacher: '-',
    time: '-',
    date: '20/06/2017',
  },
  {
    id: 4,
    day: 'Wednesday',
    className: '2',
    subject: 'Drawing',
    section: 'A',
    teacher: 'Maxwell',
    time: '12.00 pm - 1.00 pm',
    date: '20/06/2017',
  },
  {
    id: 5,
    day: 'Thursday',
    className: '2',
    subject: 'English',
    section: 'A',
    teacher: 'Kazi Fahim',
    time: '02.00 am - 03.00 pm',
    date: '20/06/2017',
  },
  {
    id: 6,
    day: 'Fridayday',
    className: '2',
    subject: '-',
    section: '-',
    teacher: '-',
    time: '-',
    date: '20/06/2017',
  },
  {
    id: 7,
    day: 'Saturday',
    className: '2',
    subject: 'Mathematics',
    section: 'A',
    teacher: 'Kazi Fahim',
    time: '10.00 am - 11.00 am',
    date: '20/06/2017',
  },
]

const filteredRoutines = computed(() => {
  const dayValue = dayQuery.value.trim().toLowerCase()
  const classValue = classQuery.value.trim().toLowerCase()
  const sectionValue = sectionQuery.value.trim().toLowerCase()

  return routines.filter((item) => {
    const matchesDay = dayValue ? item.day.toLowerCase().includes(dayValue) : true
    const matchesClass = classValue ? item.className.toLowerCase().includes(classValue) : true
    const matchesSection = sectionValue ? item.section.toLowerCase().includes(sectionValue) : true
    return matchesDay && matchesClass && matchesSection
  })
})
</script>
