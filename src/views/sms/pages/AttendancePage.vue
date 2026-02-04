<template>
  <div class="flex h-full flex-col gap-6">
    <div class="flex items-center gap-2 text-sm text-slate-500">
      <span>Home</span>
      <span>›</span>
      <span class="text-slate-700">Attendance</span>
    </div>

    <section class="flex flex-col gap-6">
      <div class="rounded-xl bg-white p-6 shadow-sm">
        <div class="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h2 class="text-lg font-semibold text-slate-800">Checkout Student Attendance</h2>
            <p class="text-xs text-slate-400">Filter attendance sheet</p>
          </div>
          <div class="flex items-center gap-2">
            <button class="h-7 w-7 rounded-full bg-amber-50 text-amber-500">↻</button>
            <button class="h-7 w-7 rounded-full bg-emerald-50 text-emerald-500">✓</button>
            <button class="h-7 w-7 rounded-full bg-rose-50 text-rose-500">✕</button>
          </div>
        </div>

        <form class="mt-4 grid gap-4 text-sm text-slate-600 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]">
          <div class="space-y-2">
            <label class="text-xs font-semibold text-slate-500">Select Class</label>
            <select class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
          </div>
          <div class="space-y-2">
            <label class="text-xs font-semibold text-slate-500">Select Section</label>
            <select class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
          <div class="space-y-2">
            <label class="text-xs font-semibold text-slate-500">Select Month</label>
            <select class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
              <option>April</option>
              <option>May</option>
              <option>June</option>
            </select>
          </div>
          <div class="space-y-2">
            <label class="text-xs font-semibold text-slate-500">Session Year</label>
            <select class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
              <option>2017</option>
              <option>2018</option>
              <option>2019</option>
            </select>
          </div>
          <div class="flex items-end">
            <button class="h-10 rounded-md bg-amber-400 px-8 text-xs font-semibold uppercase text-white">Search</button>
          </div>
        </form>
      </div>

      <div class="rounded-xl bg-white shadow-sm">
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-4">
          <div>
            <h2 class="text-lg font-semibold text-slate-800">Attendance Sheet Of Class One : Section A, April 2017</h2>
            <p class="text-xs text-slate-400">Monthly overview</p>
          </div>
          <div class="flex items-center gap-2">
            <button class="h-8 rounded-full bg-[#1e3a8a] px-4 text-xs font-semibold uppercase text-white">Print Attendance Sheet</button>
            <button class="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500">↻</button>
          </div>
        </div>

        <div class="sms-scroll min-h-0 overflow-x-auto overflow-y-auto">
          <table class="min-w-full text-left text-xs">
            <thead class="sticky top-0 z-10 bg-slate-50 text-slate-500">
              <tr>
                <th class="px-4 py-3">Students</th>
                <th class="px-4 py-3">Date</th>
                <th v-for="day in days" :key="day" class="px-2 py-3 text-center">{{ day }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-600">
              <tr v-for="student in attendance" :key="student.name" class="hover:bg-slate-50">
                <td class="px-4 py-3 font-medium text-slate-700">{{ student.name }}</td>
                <td class="px-4 py-3">{{ student.date }}</td>
                <td v-for="(mark, idx) in student.marks" :key="idx" class="px-2 py-3 text-center">
                  <span :class="mark === 'P' ? 'text-emerald-500' : 'text-rose-500'">{{ mark === 'P' ? '✓' : '✕' }}</span>
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
const days = Array.from({ length: 31 }, (_, i) => i + 1)

const attendance = [
  {
    name: 'Fahimur Rahman',
    date: '',
    marks: ['P', 'P', 'P', 'A', 'A', 'P', 'P', 'P', 'P', 'P', 'A', 'P', 'P', 'P', 'P', 'P', 'A', 'A', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'A', 'P'],
  },
  {
    name: 'Richi Akon',
    date: '',
    marks: ['P', 'A', 'P', 'A', 'A', 'P', 'P', 'P', 'P', 'P', 'A', 'P', 'P', 'P', 'P', 'P', 'A', 'A', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'A', 'P'],
  },
]
</script>
