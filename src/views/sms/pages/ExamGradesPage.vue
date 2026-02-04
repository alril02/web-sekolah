<template>
  <div class="flex h-full flex-col gap-6">
    <div class="flex items-center gap-2 text-sm text-slate-500">
      <span>Home</span>
      <span>›</span>
      <span class="text-slate-700">Exam Grades</span>
    </div>

    <div class="grid gap-6 xl:grid-cols-[340px_1fr]">
      <section class="rounded-xl bg-white p-6 shadow-sm">
        <div class="flex items-center justify-between">
          <h2 class="text-sm font-semibold text-slate-700">Add New Grades</h2>
          <div class="flex items-center gap-2 text-sm text-slate-400">
            <button class="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200">▾</button>
            <button class="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200">⟳</button>
            <button class="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-rose-500">✕</button>
          </div>
        </div>

        <div class="mt-4 space-y-4 text-sm text-slate-600">
          <label class="block">
            <span class="text-xs text-slate-500">Grade Name</span>
            <input
              type="text"
              placeholder="Grade name"
              class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none"
            />
          </label>
          <label class="block">
            <span class="text-xs text-slate-500">Grade Point</span>
            <select
              class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 focus:outline-none"
            >
              <option value="">Select grade point</option>
              <option>4.00</option>
              <option>3.50</option>
              <option>3.00</option>
              <option>2.50</option>
              <option>2.00</option>
            </select>
          </label>
          <label class="block">
            <span class="text-xs text-slate-500">Percentage From</span>
            <input
              type="number"
              placeholder="95"
              class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none"
            />
          </label>
          <label class="block">
            <span class="text-xs text-slate-500">Percent Upto</span>
            <input
              type="number"
              placeholder="100"
              class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none"
            />
          </label>
          <label class="block">
            <span class="text-xs text-slate-500">Comments</span>
            <textarea
              rows="4"
              placeholder="Comment"
              class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none"
            ></textarea>
          </label>
          <button class="mt-2 w-full rounded-lg bg-[#facc15] px-4 py-2 text-sm font-semibold text-slate-900">Submit</button>
        </div>
      </section>

      <section class="rounded-xl bg-white shadow-sm">
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-4">
          <div>
            <h2 class="text-sm font-semibold text-slate-700">Exam Grade Lists</h2>
          </div>
          <div class="flex flex-wrap items-center gap-2 text-xs">
            <input
              v-model="gradeQuery"
              type="text"
              placeholder="Search by Grade..."
              class="h-9 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
            />
            <input
              v-model="pointQuery"
              type="text"
              placeholder="Search by Point..."
              class="h-9 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
            />
            <button class="h-9 rounded-full bg-[#1e3a8a] px-4 text-xs font-semibold uppercase tracking-wide text-white">
              Search
            </button>
            <button class="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500">↻</button>
          </div>
        </div>

        <div class="sms-scroll min-h-0 overflow-x-auto">
          <table class="min-w-full text-left text-xs">
            <thead class="bg-slate-50 text-slate-500">
              <tr>
                <th class="px-4 py-3"><input type="checkbox" /></th>
                <th class="px-4 py-3">Grade Name</th>
                <th class="px-4 py-3">Grade Point</th>
                <th class="px-4 py-3">Percent From</th>
                <th class="px-4 py-3">Percent Upto</th>
                <th class="px-4 py-3">Comment</th>
                <th class="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-600">
              <tr v-for="grade in filteredGrades" :key="grade.id" class="hover:bg-slate-50">
                <td class="px-4 py-3"><input type="checkbox" /></td>
                <td class="px-4 py-3 font-medium text-slate-700">{{ grade.name }}</td>
                <td class="px-4 py-3">{{ grade.point }}</td>
                <td class="px-4 py-3">{{ grade.percentFrom }}</td>
                <td class="px-4 py-3">{{ grade.percentUpto }}</td>
                <td class="px-4 py-3">{{ grade.comment }}</td>
                <td class="px-4 py-3">
                  <div class="flex items-center justify-center gap-2">
                    <button class="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-500">👁</button>
                    <button class="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">✎</button>
                    <button class="flex h-7 w-7 items-center justify-center rounded-full bg-rose-50 text-rose-600">🗑</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const gradeQuery = ref('')
const pointQuery = ref('')

const grades = [
  {
    id: 1,
    name: 'A+',
    point: '4.00',
    percentFrom: '95.00',
    percentUpto: '100.00',
    comment: 'Good Result',
  },
  {
    id: 2,
    name: 'B+',
    point: '3.45',
    percentFrom: '75.00',
    percentUpto: '100.00',
    comment: 'Good Result',
  },
  {
    id: 3,
    name: 'A+',
    point: '3.00',
    percentFrom: '95.00',
    percentUpto: '100.00',
    comment: 'Good Result',
  },
  {
    id: 4,
    name: 'A+',
    point: '3.00',
    percentFrom: '95.00',
    percentUpto: '100.00',
    comment: 'Good Result',
  },
  {
    id: 5,
    name: 'A+',
    point: '3.00',
    percentFrom: '95.00',
    percentUpto: '100.00',
    comment: 'Good Result',
  },
  {
    id: 6,
    name: 'A+',
    point: '3.00',
    percentFrom: '95.00',
    percentUpto: '100.00',
    comment: 'Good Result',
  },
  {
    id: 7,
    name: 'A+',
    point: '3.00',
    percentFrom: '95.00',
    percentUpto: '100.00',
    comment: 'Good Result',
  },
  {
    id: 8,
    name: 'A+',
    point: '3.00',
    percentFrom: '95.00',
    percentUpto: '100.00',
    comment: 'Good Result',
  },
  {
    id: 9,
    name: 'A+',
    point: '3.00',
    percentFrom: '95.00',
    percentUpto: '100.00',
    comment: 'Good Result',
  },
  {
    id: 10,
    name: 'A+',
    point: '3.00',
    percentFrom: '95.00',
    percentUpto: '100.00',
    comment: 'Good Result',
  },
]

const filteredGrades = computed(() => {
  const gradeTerm = gradeQuery.value.toLowerCase()
  const pointTerm = pointQuery.value.toLowerCase()

  return grades.filter((grade) => {
    const matchesGrade = grade.name.toLowerCase().includes(gradeTerm)
    const matchesPoint = grade.point.toLowerCase().includes(pointTerm)

    return matchesGrade && matchesPoint
  })
})
</script>
