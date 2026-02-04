<template>
  <div class="flex h-full flex-col gap-6">
    <div class="flex items-center gap-2 text-sm text-slate-500">
      <span>Home</span>
      <span>›</span>
      <span class="text-slate-700">All Students</span>
    </div>

    <section class="flex min-h-0 flex-1 flex-col rounded-xl bg-white shadow-sm">
      <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-4">
        <div>
          <h2 class="text-lg font-semibold text-slate-800">All Students</h2>
          <p class="text-xs text-slate-400">Manage and review students information</p>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <input
            v-model="rollQuery"
            type="text"
            placeholder="# Roll Type Here..."
            class="h-9 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
          />
          <input
            v-model="nameQuery"
            type="text"
            placeholder="Type Name..."
            class="h-9 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
          />
          <input
            v-model="classQuery"
            type="text"
            placeholder="Type Class..."
            class="h-9 rounded-full border border-slate-200 bg-slate-50 px-4 text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none"
          />
          <input
            v-model="sectionQuery"
            type="text"
            placeholder="Type Section..."
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
              <th class="px-4 py-3">Roll</th>
              <th class="px-4 py-3">Photo</th>
              <th class="px-4 py-3">Name</th>
              <th class="px-4 py-3">Gender</th>
              <th class="px-4 py-3">Parents Name</th>
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
            <tr v-for="student in paginatedStudents" :key="student.roll" class="hover:bg-slate-50">
              <td class="px-4 py-3"><input type="checkbox" /></td>
              <td class="px-4 py-3"># {{ student.roll }}</td>
              <td class="px-4 py-3">
                <div class="h-8 w-8 overflow-hidden rounded-full bg-slate-100">
                  <img :src="student.photo" :alt="student.name" class="h-full w-full object-cover" />
                </div>
              </td>
              <td class="px-4 py-3 font-medium text-slate-700">{{ student.name }}</td>
              <td class="px-4 py-3">{{ student.gender }}</td>
              <td class="px-4 py-3">{{ student.parent }}</td>
              <td class="px-4 py-3">{{ student.className }}</td>
              <td class="px-4 py-3">{{ student.section }}</td>
              <td class="px-4 py-3">{{ student.address }}</td>
              <td class="px-4 py-3">{{ student.dob }}</td>
              <td class="px-4 py-3">{{ student.mobile }}</td>
              <td class="px-4 py-3">{{ student.email }}</td>
              <td class="px-4 py-3">
                <div class="flex items-center justify-center gap-2">
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
          <span class="font-semibold text-slate-700">{{ filteredStudents.length }}</span>
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
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const perPageOptions = [5, 10, 20]
const perPage = ref(10)
const currentPage = ref(1)
const rollQuery = ref('')
const nameQuery = ref('')
const classQuery = ref('')
const sectionQuery = ref('')

const students = [
  {
    roll: '2901',
    name: 'Ricki Rozario',
    gender: 'Female',
    parent: 'David Smith',
    className: '1',
    section: 'A',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'rrozario@gmail.com',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&q=60',
  },
  {
    roll: '2902',
    name: 'Kazi Fahim',
    gender: 'Male',
    parent: 'Mike Hussy',
    className: '2',
    section: 'B',
    address: '59, street, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'kfahim@gmail.com',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=60',
  },
  {
    roll: '2903',
    name: 'Michi Rozario',
    gender: 'Female',
    parent: 'David Smith',
    className: '1',
    section: 'C',
    address: '90 Street, Heavy, Resde',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'mrozario@gmail.com',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=60',
  },
  {
    roll: '2904',
    name: 'Nchi Rozario',
    gender: 'Female',
    parent: 'David Smith',
    className: '5',
    section: 'D',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'nrozario@gmail.com',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=60',
  },
  {
    roll: '2905',
    name: 'Dchi Rozario',
    gender: 'Female',
    parent: 'David Smith',
    className: '5',
    section: 'D',
    address: 'TA-110, North Sydney',
    dob: '10/03/2010',
    mobile: '+ 8812 00 5098',
    email: 'drozario@gmail.com',
    photo: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=120&q=60',
  },
  {
    roll: '2906',
    name: 'Nisa Putri',
    gender: 'Female',
    parent: 'Ayu Lestari',
    className: '3',
    section: 'A',
    address: 'Jl. Melati 10, North Sydney',
    dob: '12/05/2010',
    mobile: '+ 8812 00 5011',
    email: 'nputri@gmail.com',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=60',
  },
  {
    roll: '2907',
    name: 'Arif Pratama',
    gender: 'Male',
    parent: 'Budi Pratama',
    className: '3',
    section: 'B',
    address: 'TA-112, North Sydney',
    dob: '08/07/2010',
    mobile: '+ 8812 00 5012',
    email: 'apratama@gmail.com',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=60',
  },
  {
    roll: '2908',
    name: 'Salsa Maya',
    gender: 'Female',
    parent: 'Dewi Maya',
    className: '4',
    section: 'C',
    address: '59, street, North Sydney',
    dob: '20/01/2010',
    mobile: '+ 8812 00 5013',
    email: 'smaya@gmail.com',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=60',
  },
  {
    roll: '2909',
    name: 'Kevin Malik',
    gender: 'Male',
    parent: 'Rina Malik',
    className: '4',
    section: 'D',
    address: '90 Street, Heavy, Resde',
    dob: '30/09/2010',
    mobile: '+ 8812 00 5014',
    email: 'kmalik@gmail.com',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&q=60',
  },
  {
    roll: '2910',
    name: 'Alya Ramadhan',
    gender: 'Female',
    parent: 'Sari Ramadhan',
    className: '2',
    section: 'A',
    address: 'TA-118, North Sydney',
    dob: '16/11/2010',
    mobile: '+ 8812 00 5015',
    email: 'aramadhan@gmail.com',
    photo: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=120&q=60',
  },
  {
    roll: '2911',
    name: 'Dio Saputra',
    gender: 'Male',
    parent: 'Hendra Saputra',
    className: '1',
    section: 'B',
    address: 'TA-120, North Sydney',
    dob: '01/12/2010',
    mobile: '+ 8812 00 5016',
    email: 'dsaputra@gmail.com',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=60',
  },
  {
    roll: '2912',
    name: 'Melisa Hart',
    gender: 'Female',
    parent: 'Hartono',
    className: '5',
    section: 'A',
    address: 'TA-110, North Sydney',
    dob: '04/02/2010',
    mobile: '+ 8812 00 5017',
    email: 'mhart@gmail.com',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=60',
  },
  {
    roll: '2913',
    name: 'Raka Wijaya',
    gender: 'Male',
    parent: 'Rudi Wijaya',
    className: '5',
    section: 'B',
    address: '59, street, North Sydney',
    dob: '21/03/2010',
    mobile: '+ 8812 00 5018',
    email: 'rwijaya@gmail.com',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&q=60',
  },
  {
    roll: '2914',
    name: 'Nadia Zahra',
    gender: 'Female',
    parent: 'Zainal Zahra',
    className: '2',
    section: 'C',
    address: 'TA-115, North Sydney',
    dob: '17/06/2010',
    mobile: '+ 8812 00 5019',
    email: 'nzahra@gmail.com',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=60',
  },
  {
    roll: '2915',
    name: 'Yoga Prasetyo',
    gender: 'Male',
    parent: 'Sigit Prasetyo',
    className: '3',
    section: 'D',
    address: '90 Street, Heavy, Resde',
    dob: '29/08/2010',
    mobile: '+ 8812 00 5020',
    email: 'yprasetyo@gmail.com',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=60',
  },
]

const filteredStudents = computed(() => {
  const rollValue = rollQuery.value.trim().toLowerCase()
  const nameValue = nameQuery.value.trim().toLowerCase()
  const classValue = classQuery.value.trim().toLowerCase()
  const sectionValue = sectionQuery.value.trim().toLowerCase()

  return students.filter((student) => {
    const matchesRoll = rollValue
      ? student.roll.toLowerCase().includes(rollValue.replace('#', ''))
      : true
    const matchesName = nameValue ? student.name.toLowerCase().includes(nameValue) : true
    const matchesClass = classValue
      ? student.className.toLowerCase().includes(classValue)
      : true
    const matchesSection = sectionValue
      ? student.section.toLowerCase().includes(sectionValue)
      : true
    return matchesRoll && matchesName && matchesClass && matchesSection
  })
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredStudents.value.length / perPage.value)))
const paginatedStudents = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  return filteredStudents.value.slice(start, start + perPage.value)
})

const pageStart = computed(() => {
  if (filteredStudents.value.length === 0) return 0
  return (currentPage.value - 1) * perPage.value + 1
})

const pageEnd = computed(() => {
  return Math.min(currentPage.value * perPage.value, filteredStudents.value.length)
})

watch(perPage, () => {
  currentPage.value = 1
})

watch([rollQuery, nameQuery, classQuery, sectionQuery], () => {
  currentPage.value = 1
})

watch(currentPage, () => {
  if (currentPage.value > totalPages.value) {
    currentPage.value = totalPages.value
  }
})
</script>
