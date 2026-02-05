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
        <button
          class="h-9 cursor-pointer rounded-full bg-amber-400 px-4 text-xs font-semibold uppercase tracking-wide text-white"
          @click="isAddOpen = true"
        >
          + Add Student
        </button>
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
              <td class="px-4 py-3 font-medium text-slate-700">
                <router-link
                  :to="`/sms/student-details/${student.roll}`"
                  class="text-slate-700 hover:text-[#1e3a8a]"
                >
                  {{ student.name }}
                </router-link>
              </td>
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
                  <router-link
                    :to="`/sms/student-details/${student.roll}`"
                    class="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:text-[#1e3a8a]"
                  >
                    👁
                  </router-link>
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

    <teleport to="body">
      <div v-if="isAddOpen" class="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
        <div class="absolute inset-0 bg-slate-900/40" @click="isAddOpen = false"></div>
        <div class="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-lg">
          <div class="flex items-center justify-between border-b border-slate-100 px-6 py-4">
            <h3 class="text-sm font-semibold text-slate-800">Add Student Form</h3>
            <div class="flex items-center gap-2 text-xs">
              <button class="text-emerald-500">✓</button>
              <button class="text-rose-500" @click="isAddOpen = false">✕</button>
            </div>
          </div>

          <div class="sms-scroll flex-1 overflow-y-auto px-6 py-5 text-xs text-slate-600">
            <div class="mb-5">
              <h4 class="text-xs font-semibold text-slate-800">Student Information</h4>
              <div class="mt-2 h-0.5 w-12 bg-slate-900"></div>
            </div>

            <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <div>
                <label class="text-[11px] font-semibold text-slate-500">First Name</label>
                <input class="mt-2 h-9 w-full rounded border border-slate-200 bg-slate-50 px-3" type="text" />
              </div>
              <div>
                <label class="text-[11px] font-semibold text-slate-500">Last Name</label>
                <input class="mt-2 h-9 w-full rounded border border-slate-200 bg-slate-50 px-3" type="text" />
              </div>
              <div>
                <label class="text-[11px] font-semibold text-slate-500">Class</label>
                <select class="mt-2 h-9 w-full rounded border border-slate-200 bg-slate-50 px-3 text-slate-500">
                  <option>Please Select Class</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div>
                <label class="text-[11px] font-semibold text-slate-500">Section</label>
                <select class="mt-2 h-9 w-full rounded border border-slate-200 bg-slate-50 px-3 text-slate-500">
                  <option>Please Select Class</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
              <div>
                <label class="text-[11px] font-semibold text-slate-500">Gender</label>
                <select class="mt-2 h-9 w-full rounded border border-slate-200 bg-slate-50 px-3 text-slate-500">
                  <option>Please Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div>
                <label class="text-[11px] font-semibold text-slate-500">Date Of Birth</label>
                <input class="mt-2 h-9 w-full rounded border border-slate-200 bg-slate-50 px-3" type="date" />
              </div>
              <div>
                <label class="text-[11px] font-semibold text-slate-500">Roll</label>
                <input class="mt-2 h-9 w-full rounded border border-slate-200 bg-slate-50 px-3" type="text" />
              </div>
              <div>
                <label class="text-[11px] font-semibold text-slate-500">Admission No</label>
                <input class="mt-2 h-9 w-full rounded border border-slate-200 bg-slate-50 px-3" type="text" />
              </div>
              <div>
                <label class="text-[11px] font-semibold text-slate-500">Religion</label>
                <input class="mt-2 h-9 w-full rounded border border-slate-200 bg-slate-50 px-3" type="text" />
              </div>
              <div>
                <label class="text-[11px] font-semibold text-slate-500">E-mail</label>
                <input class="mt-2 h-9 w-full rounded border border-slate-200 bg-slate-50 px-3" type="email" />
              </div>
              <div class="xl:col-span-2">
                <label class="text-[11px] font-semibold text-slate-500">Upload Student Photo (150px x 150px)</label>
                <input class="mt-2 w-full text-[11px]" type="file" />
              </div>
            </div>

            <div class="mt-8">
              <h4 class="text-xs font-semibold text-slate-800">Parents Information</h4>
              <div class="mt-2 h-0.5 w-12 bg-slate-900"></div>
            </div>

            <div class="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <div>
                <label class="text-[11px] font-semibold text-slate-500">Father Name</label>
                <input class="mt-2 h-9 w-full rounded border border-slate-200 bg-slate-50 px-3" type="text" />
              </div>
              <div>
                <label class="text-[11px] font-semibold text-slate-500">Mother Name</label>
                <input class="mt-2 h-9 w-full rounded border border-slate-200 bg-slate-50 px-3" type="text" />
              </div>
              <div>
                <label class="text-[11px] font-semibold text-slate-500">Father Occupation</label>
                <input class="mt-2 h-9 w-full rounded border border-slate-200 bg-slate-50 px-3" type="text" />
              </div>
              <div>
                <label class="text-[11px] font-semibold text-slate-500">Mother Occupation</label>
                <input class="mt-2 h-9 w-full rounded border border-slate-200 bg-slate-50 px-3" type="text" />
              </div>
              <div>
                <label class="text-[11px] font-semibold text-slate-500">Phone Number</label>
                <input class="mt-2 h-9 w-full rounded border border-slate-200 bg-slate-50 px-3" type="text" />
              </div>
              <div>
                <label class="text-[11px] font-semibold text-slate-500">Nationality</label>
                <input class="mt-2 h-9 w-full rounded border border-slate-200 bg-slate-50 px-3" type="text" />
              </div>
              <div>
                <label class="text-[11px] font-semibold text-slate-500">Present Address</label>
                <input class="mt-2 h-9 w-full rounded border border-slate-200 bg-slate-50 px-3" type="text" />
              </div>
              <div>
                <label class="text-[11px] font-semibold text-slate-500">Permanent Address</label>
                <input class="mt-2 h-9 w-full rounded border border-slate-200 bg-slate-50 px-3" type="text" />
              </div>
              <div class="xl:col-span-2">
                <label class="text-[11px] font-semibold text-slate-500">Upload Parents Photo (150px x 150px)</label>
                <input class="mt-2 w-full text-[11px]" type="file" />
              </div>
            </div>
          </div>

          <div class="flex items-center gap-3 border-t border-slate-100 px-6 py-4">
            <button class="h-9 rounded bg-amber-400 px-6 text-xs font-semibold text-white">Save</button>
            <button class="h-9 rounded bg-[#0b2b5b] px-6 text-xs font-semibold text-white" @click="isAddOpen = false">
              Reset
            </button>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { students as studentsData } from '../data/students'

const perPageOptions = [5, 10, 20]
const perPage = ref(10)
const currentPage = ref(1)
const rollQuery = ref('')
const nameQuery = ref('')
const classQuery = ref('')
const sectionQuery = ref('')
const isAddOpen = ref(false)

const students = [...studentsData]

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
