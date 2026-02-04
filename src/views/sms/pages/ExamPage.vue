<template>
  <div class="flex h-full flex-col gap-6">
    <div class="flex items-center gap-2 text-sm text-slate-500">
      <span>Home</span>
      <span>›</span>
      <span class="text-slate-700">Exam Schedule</span>
    </div>

    <div class="grid gap-6 xl:grid-cols-[340px_1fr]">
      <section class="rounded-xl bg-white p-6 shadow-sm">
        <div class="flex items-center justify-between">
          <h2 class="text-sm font-semibold text-slate-700">Add New Exam</h2>
          <div class="flex items-center gap-2 text-sm text-slate-400">
            <button class="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200">▾</button>
            <button class="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200">⟳</button>
            <button class="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-rose-500">✕</button>
          </div>
        </div>

        <div class="mt-4 space-y-4 text-sm text-slate-600">
          <label class="block">
            <span class="text-xs text-slate-500">Exam Name</span>
            <input
              type="text"
              placeholder="Exam name"
              class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none"
            />
          </label>
          <label class="block">
            <span class="text-xs text-slate-500">Subject Type</span>
            <select
              class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 focus:outline-none"
            >
              <option value="">Select subject type</option>
              <option>Mathematics</option>
              <option>English</option>
              <option>Science</option>
              <option>Islam</option>
            </select>
          </label>
          <label class="block">
            <span class="text-xs text-slate-500">Select Class</span>
            <select
              class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 focus:outline-none"
            >
              <option value="">Select class</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </label>
          <label class="block">
            <span class="text-xs text-slate-500">Select Section</span>
            <select
              class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 focus:outline-none"
            >
              <option value="">Select section</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
            </select>
          </label>
          <div class="grid grid-cols-2 gap-3">
            <label class="block">
              <span class="text-xs text-slate-500">Select Time</span>
              <input
                type="time"
                class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 focus:outline-none"
              />
            </label>
            <label class="block">
              <span class="text-xs text-slate-500">Select Date</span>
              <input
                type="date"
                class="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 focus:outline-none"
              />
            </label>
          </div>
          <button class="mt-2 w-full rounded-lg bg-[#facc15] px-4 py-2 text-sm font-semibold text-slate-900">Submit</button>
        </div>
      </section>

      <section class="rounded-xl bg-white shadow-sm">
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-4">
          <div>
            <h2 class="text-sm font-semibold text-slate-700">All Exam Schedule</h2>
          </div>
          <div class="flex flex-wrap items-center gap-2 text-xs">
            <input
              v-model="examQuery"
              type="text"
              placeholder="Search by Exam..."
              class="h-9 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
            />
            <input
              v-model="subjectQuery"
              type="text"
              placeholder="Search by Subject..."
              class="h-9 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
            />
            <input
              v-model="dateQuery"
              type="text"
              placeholder="Search by Date..."
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
                <th class="px-4 py-3">Exam Name</th>
                <th class="px-4 py-3">Subject</th>
                <th class="px-4 py-3">Class</th>
                <th class="px-4 py-3">Section</th>
                <th class="px-4 py-3">Time</th>
                <th class="px-4 py-3">Date</th>
                <th class="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-600">
              <tr v-for="exam in filteredExams" :key="exam.id" class="hover:bg-slate-50">
                <td class="px-4 py-3"><input type="checkbox" /></td>
                <td class="px-4 py-3 font-medium text-slate-700">{{ exam.name }}</td>
                <td class="px-4 py-3">{{ exam.subject }}</td>
                <td class="px-4 py-3">{{ exam.className }}</td>
                <td class="px-4 py-3">{{ exam.section }}</td>
                <td class="px-4 py-3">{{ exam.time }}</td>
                <td class="px-4 py-3">{{ exam.date }}</td>
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

const examQuery = ref('')
const subjectQuery = ref('')
const dateQuery = ref('')

const exams = [
  {
    id: 1,
    name: 'Class Test',
    subject: 'Mathematics',
    className: '3',
    section: 'A',
    time: '10.00 am - 11.00 am',
    date: '20/06/2017',
  },
  {
    id: 2,
    name: 'Class Test',
    subject: 'English',
    className: '4',
    section: 'B',
    time: '10.00 am - 11.00 am',
    date: '23/06/2017',
  },
  {
    id: 3,
    name: 'Class Test',
    subject: 'Islam',
    className: '5',
    section: 'C',
    time: '10.00 am - 11.00 am',
    date: '30/06/2017',
  },
  {
    id: 4,
    name: 'Class Test',
    subject: 'Mathematics',
    className: '3',
    section: 'A',
    time: '10.00 am - 11.00 am',
    date: '20/06/2017',
  },
  {
    id: 5,
    name: 'Class Test',
    subject: 'Mathematics',
    className: '3',
    section: 'A',
    time: '10.00 am - 11.00 am',
    date: '20/06/2017',
  },
  {
    id: 6,
    name: 'Class Test',
    subject: 'Mathematics',
    className: '3',
    section: 'A',
    time: '10.00 am - 11.00 am',
    date: '20/06/2017',
  },
  {
    id: 7,
    name: 'Class Test',
    subject: 'Mathematics',
    className: '3',
    section: 'A',
    time: '10.00 am - 11.00 am',
    date: '20/06/2017',
  },
  {
    id: 8,
    name: 'Class Test',
    subject: 'Mathematics',
    className: '3',
    section: 'A',
    time: '10.00 am - 11.00 am',
    date: '20/06/2017',
  },
  {
    id: 9,
    name: 'Class Test',
    subject: 'Mathematics',
    className: '3',
    section: 'A',
    time: '10.00 am - 11.00 am',
    date: '20/06/2017',
  },
  {
    id: 10,
    name: 'Class Test',
    subject: 'Mathematics',
    className: '3',
    section: 'A',
    time: '10.00 am - 11.00 am',
    date: '20/06/2017',
  },
]

const filteredExams = computed(() => {
  const examTerm = examQuery.value.toLowerCase()
  const subjectTerm = subjectQuery.value.toLowerCase()
  const dateTerm = dateQuery.value.toLowerCase()

  return exams.filter((exam) => {
    const matchesExam = exam.name.toLowerCase().includes(examTerm)
    const matchesSubject = exam.subject.toLowerCase().includes(subjectTerm)
    const matchesDate = exam.date.toLowerCase().includes(dateTerm)

    return matchesExam && matchesSubject && matchesDate
  })
})
</script>
