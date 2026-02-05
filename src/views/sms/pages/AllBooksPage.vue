<template>
  <div class="flex h-full flex-col gap-6">
    <div class="flex items-center gap-2 text-sm text-slate-500">
      <span>Home</span>
      <span>›</span>
      <span class="text-slate-700">All Book List</span>
    </div>

    <section class="flex min-h-0 flex-1 flex-col rounded-xl bg-white shadow-sm">
      <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-4">
        <div>
          <h2 class="text-lg font-semibold text-slate-800">All Book List</h2>
          <p class="text-xs text-slate-400">Library book records</p>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <input
            v-model="idQuery"
            type="text"
            placeholder="# ID Type Here..."
            class="h-8 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
          />
          <input
            v-model="writerQuery"
            type="text"
            placeholder="Writer Name..."
            class="h-8 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
          />
          <button class="h-8 rounded-full bg-[#1e3a8a] px-4 text-xs font-semibold uppercase text-white">Search</button>
          <button class="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500">↻</button>
        </div>
      </div>

      <div class="sms-scroll min-h-0 flex-1 overflow-x-auto overflow-y-auto">
        <table class="min-w-full text-left text-xs">
          <thead class="sticky top-0 z-10 bg-slate-50 text-slate-500">
            <tr>
              <th class="px-4 py-3"><input type="checkbox" /></th>
              <th class="px-4 py-3">ID</th>
              <th class="px-4 py-3">Book Name</th>
              <th class="px-4 py-3">Writer</th>
              <th class="px-4 py-3">Subject</th>
              <th class="px-4 py-3">Class</th>
              <th class="px-4 py-3">Year</th>
              <th class="px-4 py-3">Creating Date</th>
              <th class="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-600">
            <tr v-for="book in filteredBooks" :key="book.id" class="hover:bg-slate-50">
              <td class="px-4 py-3"><input type="checkbox" /></td>
              <td class="px-4 py-3"># {{ book.id }}</td>
              <td class="px-4 py-3">{{ book.title }}</td>
              <td class="px-4 py-3">{{ book.writer }}</td>
              <td class="px-4 py-3">{{ book.subject }}</td>
              <td class="px-4 py-3">{{ book.className }}</td>
              <td class="px-4 py-3">{{ book.year }}</td>
              <td class="px-4 py-3">{{ book.date }}</td>
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
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const idQuery = ref('')
const writerQuery = ref('')

const books = [
  {
    id: '2901',
    title: 'English Grammer',
    writer: 'John Smith',
    subject: 'English',
    className: '4',
    year: '2017',
    date: '24/08/2017',
  },
  {
    id: '2902',
    title: 'English Grammer',
    writer: 'David Krone',
    subject: 'Mathmatic',
    className: '1',
    year: '2017',
    date: '24/08/2017',
  },
  {
    id: '2903',
    title: 'English Grammer',
    writer: 'John Smith',
    subject: 'English',
    className: '2',
    year: '2017',
    date: '24/08/2017',
  },
  {
    id: '2904',
    title: 'English Grammer',
    writer: 'John Smith',
    subject: 'English',
    className: '3',
    year: '2017',
    date: '24/08/2017',
  },
  {
    id: '2905',
    title: 'English Grammer',
    writer: 'John Smith',
    subject: 'English',
    className: '1',
    year: '2017',
    date: '24/08/2017',
  },
  {
    id: '2906',
    title: 'English Grammer',
    writer: 'John Smith',
    subject: 'English',
    className: '2',
    year: '2017',
    date: '24/08/2017',
  },
  {
    id: '2907',
    title: 'English Grammer',
    writer: 'John Smith',
    subject: 'English',
    className: '1',
    year: '2017',
    date: '24/08/2017',
  },
  {
    id: '2908',
    title: 'English Grammer',
    writer: 'John Smith',
    subject: 'English',
    className: '2',
    year: '2017',
    date: '24/08/2017',
  },
  {
    id: '2909',
    title: 'English Grammer',
    writer: 'John Smith',
    subject: 'English',
    className: '4',
    year: '2017',
    date: '24/08/2017',
  },
  {
    id: '2910',
    title: 'English Grammer',
    writer: 'John Smith',
    subject: 'English',
    className: '5',
    year: '2017',
    date: '24/08/2017',
  },
  {
    id: '2911',
    title: 'English Grammer',
    writer: 'John Smith',
    subject: 'English',
    className: '6',
    year: '2017',
    date: '24/08/2017',
  },
  {
    id: '2912',
    title: 'English Grammer',
    writer: 'John Smith',
    subject: 'English',
    className: '8',
    year: '2017',
    date: '24/08/2017',
  },
  {
    id: '2913',
    title: 'English Grammer',
    writer: 'John Smith',
    subject: 'English',
    className: '6',
    year: '2017',
    date: '24/08/2017',
  },
  {
    id: '2914',
    title: 'English Grammer',
    writer: 'John Smith',
    subject: 'English',
    className: '8',
    year: '2017',
    date: '24/08/2017',
  },
  {
    id: '2915',
    title: 'English Grammer',
    writer: 'John Smith',
    subject: 'English',
    className: '6',
    year: '2017',
    date: '24/08/2017',
  },
  {
    id: '2916',
    title: 'English Grammer',
    writer: 'John Smith',
    subject: 'English',
    className: '8',
    year: '2017',
    date: '24/08/2017',
  },
]

const filteredBooks = computed(() => {
  const idValue = idQuery.value.trim().toLowerCase()
  const writerValue = writerQuery.value.trim().toLowerCase()

  return books.filter((book) => {
    const matchesId = idValue ? book.id.toLowerCase().includes(idValue.replace('#', '')) : true
    const matchesWriter = writerValue ? book.writer.toLowerCase().includes(writerValue) : true
    return matchesId && matchesWriter
  })
})
</script>
