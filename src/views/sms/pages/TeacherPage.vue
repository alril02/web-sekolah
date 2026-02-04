<template>
  <div class="flex h-full flex-col gap-6">
    <div class="flex items-center gap-2 text-sm text-slate-500">
      <span>Home</span>
      <span>›</span>
      <span class="text-slate-700">All Teachers</span>
    </div>

    <section class="flex min-h-0 flex-1 flex-col rounded-xl bg-white shadow-sm">
      <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-4">
        <div>
          <h2 class="text-lg font-semibold text-slate-800">All Teachers</h2>
          <p class="text-xs text-slate-400">Manage and review teacher information</p>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <button
            class="h-9 cursor-pointer rounded-full bg-amber-400 px-4 text-xs font-semibold uppercase tracking-wide text-white"
            @click="isAddOpen = true"
          >
            Add Teacher
          </button>
          <input
            v-model="idQuery"
            type="text"
            placeholder="# ID Type Here..."
            class="h-9 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
          />
          <input
            v-model="classQuery"
            type="text"
            placeholder="Type Class..."
            class="h-9 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
          />
          <input
            v-model="subjectQuery"
            type="text"
            placeholder="Subject..."
            class="h-9 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
          />
          <button class="h-9 cursor-pointer rounded-full bg-[#1e3a8a] px-4 text-xs font-semibold uppercase tracking-wide text-white">
            Search
          </button>
          <button class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-200 text-slate-500">
            ↻
          </button>
          <div class="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-500">
            <span>Show</span>
            <select
              v-model.number="perPage"
              class="cursor-pointer bg-transparent text-xs text-slate-600 focus:outline-none"
            >
              <option v-for="option in perPageOptions" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
            <span>entries</span>
          </div>
        </div>
      </div>

      <div class="sms-scroll min-h-0 flex-1 overflow-x-auto overflow-y-auto">
        <table class="min-w-full text-left text-xs">
          <thead class="sticky top-0 z-10 bg-slate-50 text-slate-500">
            <tr>
              <th class="px-4 py-3"><input type="checkbox" /></th>
              <th class="px-4 py-3">ID</th>
              <th class="px-4 py-3">Photo</th>
              <th class="px-4 py-3">Name</th>
              <th class="px-4 py-3">Gender</th>
              <th class="px-4 py-3">Subject</th>
              <th class="px-4 py-3">Class</th>
              <th class="px-4 py-3">Section</th>
              <th class="px-4 py-3">Address</th>
              <th class="px-4 py-3">Date Of Birth</th>
              <th class="px-4 py-3">Mobile No</th>
              <th class="px-4 py-3">E-mail</th>
              <th class="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-600">
            <tr v-for="teacher in paginatedTeachers" :key="teacher.id" class="hover:bg-slate-50">
              <td class="px-4 py-3"><input type="checkbox" /></td>
              <td class="px-4 py-3"># {{ teacher.id }}</td>
              <td class="px-4 py-3">
                <div class="h-8 w-8 overflow-hidden rounded-full bg-slate-100">
                  <img :src="teacher.photo" :alt="teacher.name" class="h-full w-full object-cover" />
                </div>
              </td>
              <td class="px-4 py-3 font-medium text-slate-700">
                <button
                  class="text-left text-slate-700 hover:text-[#1e3a8a]"
                  @click="openDetail(teacher)"
                >
                  {{ teacher.name }}
                </button>
              </td>
              <td class="px-4 py-3">{{ teacher.gender }}</td>
              <td class="px-4 py-3">{{ teacher.subject }}</td>
              <td class="px-4 py-3">{{ teacher.className }}</td>
              <td class="px-4 py-3">{{ teacher.section }}</td>
              <td class="px-4 py-3">{{ teacher.address }}</td>
              <td class="px-4 py-3">{{ teacher.dob }}</td>
              <td class="px-4 py-3">{{ teacher.mobile }}</td>
              <td class="px-4 py-3">{{ teacher.email }}</td>
              <td class="px-4 py-3">
                <div class="flex items-center justify-center gap-2">
                  <button
                    class="h-7 w-7 cursor-pointer rounded-full bg-slate-100 text-slate-600"
                    @click="openDetail(teacher)"
                  >
                    👁
                  </button>
                  <button class="h-7 w-7 cursor-pointer rounded-full bg-emerald-50 text-emerald-600">✎</button>
                  <button class="h-7 w-7 cursor-pointer rounded-full bg-rose-50 text-rose-600">🗑</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 px-6 py-4 text-xs text-slate-500">
        <p>
          Showing
          <span class="font-semibold text-slate-700">{{ pageStart }}</span>
          to
          <span class="font-semibold text-slate-700">{{ pageEnd }}</span>
          of
          <span class="font-semibold text-slate-700">{{ filteredTeachers.length }}</span>
          entries
        </p>
        <div class="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
          <span>Show</span>
          <select
            v-model.number="perPage"
            class="cursor-pointer bg-transparent text-xs text-slate-600 focus:outline-none"
          >
            <option v-for="option in perPageOptions" :key="option" :value="option">
              {{ option }}
            </option>
          </select>
          <span>entries</span>
        </div>
        <div class="flex items-center gap-2">
          <button
            class="cursor-pointer rounded-full border border-slate-200 px-3 py-1"
            :disabled="currentPage === 1"
            @click="currentPage--"
          >
            Prev
          </button>
          <span class="rounded-full bg-slate-900 px-3 py-1 text-white">{{ currentPage }}</span>
          <button
            class="cursor-pointer rounded-full border border-slate-200 px-3 py-1"
            :disabled="currentPage === totalPages"
            @click="currentPage++"
          >
            Next
          </button>
        </div>
      </div>
    </section>

    <TeacherDetailComponent v-model="isDetailOpen" :teacher="selectedTeacher" />
    <AddNewTeacherComponent v-model="isAddOpen" />
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import TeacherDetailComponent from '../components/TeacherDetailComponent.vue'
import AddNewTeacherComponent from '../components/AddNewTeacherComponent.vue'

const perPageOptions = [5, 10, 20]
const perPage = ref(10)
const currentPage = ref(1)
const idQuery = ref('')
const classQuery = ref('')
const subjectQuery = ref('')
const isDetailOpen = ref(false)
const selectedTeacher = ref(null)
const isAddOpen = ref(false)

const openDetail = (teacher) => {
  selectedTeacher.value = teacher
  isDetailOpen.value = true
}

const teachers = [
  {
    id: '2901',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'Math',
    className: '1',
    section: 'A',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2902',
    name: 'Kazi Fahim',
    gender: 'Male',
    subject: 'English',
    className: '2',
    section: 'B',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2903',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'Finance',
    className: '1',
    section: 'C',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2904',
    name: 'Ricki Rozario',
    gender: 'Male',
    subject: 'Religion',
    className: '3',
    section: 'B',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2905',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'Science',
    className: '4',
    section: 'A',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2906',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'Social Science',
    className: '8',
    section: 'A',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2907',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'Bangla',
    className: '1',
    section: 'B',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2908',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'Math',
    className: '2',
    section: 'C',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2909',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'English',
    className: '5',
    section: 'D',
    address: '110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2910',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'Science',
    className: '1',
    section: 'A',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2911',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'Finance',
    className: '6',
    section: 'B',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2912',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'Math',
    className: '1',
    section: 'C',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2913',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'English',
    className: '3',
    section: 'A',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2914',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'Bangla',
    className: '1',
    section: 'D',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2915',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'Science',
    className: '4',
    section: 'E',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2916',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'Social',
    className: '3',
    section: 'D',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=60',
  },
  {
    id: '2917',
    name: 'Ricki Rozario',
    gender: 'Female',
    subject: 'English',
    className: '1',
    section: 'A',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'ndisons@gmail.com',
    photo: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=120&q=60',
  },
]

const filteredTeachers = computed(() => {
  const idValue = idQuery.value.trim().toLowerCase()
  const classValue = classQuery.value.trim().toLowerCase()
  const subjectValue = subjectQuery.value.trim().toLowerCase()

  return teachers.filter((teacher) => {
    const matchesId = idValue ? teacher.id.toLowerCase().includes(idValue.replace('#', '')) : true
    const matchesClass = classValue ? teacher.className.toLowerCase().includes(classValue) : true
    const matchesSubject = subjectValue ? teacher.subject.toLowerCase().includes(subjectValue) : true
    return matchesId && matchesClass && matchesSubject
  })
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredTeachers.value.length / perPage.value)))
const paginatedTeachers = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  return filteredTeachers.value.slice(start, start + perPage.value)
})

const pageStart = computed(() => {
  if (filteredTeachers.value.length === 0) return 0
  return (currentPage.value - 1) * perPage.value + 1
})

const pageEnd = computed(() => {
  return Math.min(currentPage.value * perPage.value, filteredTeachers.value.length)
})

watch(perPage, () => {
  currentPage.value = 1
})
</script>
