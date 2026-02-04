<template>
  <div class="flex h-full flex-col gap-6">
    <div class="flex items-center gap-2 text-sm text-slate-500">
      <span>Home</span>
      <span>›</span>
      <span class="text-slate-700">All Classes</span>
    </div>

    <section class="flex min-h-0 flex-1 flex-col rounded-xl bg-white shadow-sm">
      <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-4">
        <div>
          <h2 class="text-lg font-semibold text-slate-800">All Class Schedule</h2>
          <p class="text-xs text-slate-400">Manage and review class schedules</p>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <button
            class="h-8 rounded-full bg-amber-400 px-4 text-xs font-semibold uppercase text-white"
            @click="isAddOpen = true"
          >
            Add New Class
          </button>
          <input
            v-model="idQuery"
            type="text"
            placeholder="# ID Type Here..."
            class="h-8 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
          />
          <input
            v-model="classQuery"
            type="text"
            placeholder="Type Class ..."
            class="h-8 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
          />
          <input
            v-model="subjectQuery"
            type="text"
            placeholder="Subject ..."
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
              <th class="px-4 py-3">Photo</th>
              <th class="px-4 py-3">Teacher Name</th>
              <th class="px-4 py-3">Gender</th>
              <th class="px-4 py-3">Subject</th>
              <th class="px-4 py-3">Class</th>
              <th class="px-4 py-3">Section</th>
              <th class="px-4 py-3">Date</th>
              <th class="px-4 py-3">Time</th>
              <th class="px-4 py-3">Mobile No</th>
              <th class="px-4 py-3">E-mail</th>
              <th class="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-600">
            <tr v-for="item in filteredSchedules" :key="item.id" class="hover:bg-slate-50">
              <td class="px-4 py-3"><input type="checkbox" /></td>
              <td class="px-4 py-3"># {{ item.id }}</td>
              <td class="px-4 py-3">
                <div class="h-7 w-7 overflow-hidden rounded-full bg-slate-100">
                  <img :src="item.photo" :alt="item.teacher" class="h-full w-full object-cover" />
                </div>
              </td>
              <td class="px-4 py-3 font-medium text-slate-700">{{ item.teacher }}</td>
              <td class="px-4 py-3">{{ item.gender }}</td>
              <td class="px-4 py-3">{{ item.subject }}</td>
              <td class="px-4 py-3">{{ item.className }}</td>
              <td class="px-4 py-3">{{ item.section }}</td>
              <td class="px-4 py-3">{{ item.date }}</td>
              <td class="px-4 py-3">{{ item.time }}</td>
              <td class="px-4 py-3">{{ item.mobile }}</td>
              <td class="px-4 py-3">{{ item.email }}</td>
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

    <AddNewClassComponent v-model="isAddOpen" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import AddNewClassComponent from '../components/AddNewClassComponent.vue'

const idQuery = ref('')
const classQuery = ref('')
const subjectQuery = ref('')
const isAddOpen = ref(false)

const schedules = [
  {
    id: '2901',
    teacher: 'Richi Rozario',
    gender: 'Female',
    subject: 'Math',
    className: '1',
    section: 'A',
    date: '10/03/2010',
    time: '10.00 am - 11.00 am',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2902',
    teacher: 'Kazi Fahim',
    gender: 'Male',
    subject: 'English',
    className: '3',
    section: 'B',
    date: '10/03/2010',
    time: '11.00 am - 12.00 pm',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2903',
    teacher: 'Richi Rozario',
    gender: 'Female',
    subject: 'Math',
    className: '1',
    section: 'A',
    date: '10/03/2010',
    time: '10.00 am - 11.00 am',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2904',
    teacher: 'Kazi Fahim',
    gender: 'Male',
    subject: 'Bangla',
    className: '3',
    section: 'B',
    date: '10/03/2010',
    time: '11.00 am - 12.00 pm',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=60',
  },
]

const filteredSchedules = computed(() => {
  const idValue = idQuery.value.trim().toLowerCase()
  const classValue = classQuery.value.trim().toLowerCase()
  const subjectValue = subjectQuery.value.trim().toLowerCase()

  return schedules.filter((item) => {
    const matchesId = idValue ? item.id.toLowerCase().includes(idValue.replace('#', '')) : true
    const matchesClass = classValue ? item.className.toLowerCase().includes(classValue) : true
    const matchesSubject = subjectValue ? item.subject.toLowerCase().includes(subjectValue) : true
    return matchesId && matchesClass && matchesSubject
  })
})
</script>
