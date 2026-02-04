<template>
  <div class="flex h-full flex-col gap-6">
    <div class="flex items-center gap-2 text-sm text-slate-500">
      <span>Home</span>
      <span>›</span>
      <span class="text-slate-700">Subject</span>
    </div>

    <section class="grid gap-6 lg:grid-cols-[320px_1fr]">
      <div class="rounded-xl bg-white p-6 shadow-sm">
        <div class="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h2 class="text-lg font-semibold text-slate-800">Creat A New Subject</h2>
            <p class="text-xs text-slate-400">Create and manage subjects</p>
          </div>
          <div class="flex items-center gap-2">
            <button class="h-7 w-7 rounded-full bg-amber-50 text-amber-500">↻</button>
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
              <option>4</option>
            </select>
          </div>
          <div class="space-y-2">
            <label class="text-xs font-semibold text-slate-500">Subject Code</label>
            <input type="text" class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2" />
          </div>
          <div class="flex items-center gap-3 pt-2">
            <button class="rounded-md bg-amber-400 px-6 py-2 text-xs font-semibold uppercase text-white">Submit</button>
            <button class="rounded-md bg-[#1e3a8a] px-6 py-2 text-xs font-semibold uppercase text-white">Reset</button>
          </div>
        </form>
      </div>

      <div class="rounded-xl bg-white shadow-sm">
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-4">
          <div>
            <h2 class="text-lg font-semibold text-slate-800">All Subjects</h2>
            <p class="text-xs text-slate-400">Subject list and details</p>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <input
              v-model="codeQuery"
              type="text"
              placeholder="# Code Type Here..."
              class="h-8 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
            />
            <input
              v-model="subjectQuery"
              type="text"
              placeholder="Subject ..."
              class="h-8 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
            />
            <input
              v-model="classQuery"
              type="text"
              placeholder="Type Class ..."
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
                <th class="px-4 py-3">Subject Code</th>
                <th class="px-4 py-3">Subject Name</th>
                <th class="px-4 py-3">Subject Type</th>
                <th class="px-4 py-3">Class</th>
                <th class="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-600">
              <tr v-for="subject in filteredSubjects" :key="subject.code" class="hover:bg-slate-50">
                <td class="px-4 py-3"><input type="checkbox" /></td>
                <td class="px-4 py-3"># {{ subject.code }}</td>
                <td class="px-4 py-3 font-medium text-slate-700">{{ subject.name }}</td>
                <td class="px-4 py-3">{{ subject.type }}</td>
                <td class="px-4 py-3">{{ subject.className }}</td>
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

const codeQuery = ref('')
const classQuery = ref('')
const subjectQuery = ref('')

const subjects = [
  {
    code: '2901',
    name: 'Accounting',
    type: 'Mathematics',
    className: '3',
  },
  {
    code: '2902',
    name: 'Bangla',
    type: 'Theory',
    className: '5',
  },
  {
    code: '2903',
    name: 'English',
    type: 'Theory',
    className: '6',
  },
  {
    code: '2904',
    name: 'Science',
    type: 'Practical',
    className: '9',
  },
  {
    code: '2905',
    name: 'Arts',
    type: 'Theory',
    className: '5',
  },
  {
    code: '2906',
    name: 'Language - French',
    type: 'Theory',
    className: '8',
  },
  {
    code: '2907',
    name: 'Economics',
    type: 'Mathematics',
    className: '7',
  },
  {
    code: '2908',
    name: 'Islam',
    type: 'Theory',
    className: '4',
  },
  {
    code: '2909',
    name: 'Drawing',
    type: 'Practical',
    className: '2',
  },
]

const filteredSubjects = computed(() => {
  const codeValue = codeQuery.value.trim().toLowerCase()
  const classValue = classQuery.value.trim().toLowerCase()
  const subjectValue = subjectQuery.value.trim().toLowerCase()

  return subjects.filter((subject) => {
    const matchesCode = codeValue ? subject.code.toLowerCase().includes(codeValue.replace('#', '')) : true
    const matchesClass = classValue ? subject.className.toLowerCase().includes(classValue) : true
    const matchesSubject = subjectValue ? subject.name.toLowerCase().includes(subjectValue) : true
    return matchesCode && matchesClass && matchesSubject
  })
})
</script>
